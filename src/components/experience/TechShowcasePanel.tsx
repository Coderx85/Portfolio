"use client";

import { createElement, useEffect, useMemo, useRef } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { IconType } from "react-icons/lib";

// Each card change turns the cube a full, deliberate 180° — a real face
// turn, not a small state-indication nudge — alternating between two axes
// (down, left) so consecutive turns read as distinct moves. 180° (not an
// arbitrary angle like 150°) is deliberate: it's the only non-trivial
// multiple of 90° that keeps the cube square to the camera at rest — any
// non-multiple of 90° lands the cube at an odd diagonal, which reads as
// miscalculated rather than deliberate. Turns are cumulative: a turn never
// undoes the last one, so the cube behaves like an object actually being
// rotated rather than a toggle that resets to front.
const AXIS_X = new THREE.Vector3(1, 0, 0);
const AXIS_Y = new THREE.Vector3(0, 1, 0);
const TURN_ANGLE = THREE.MathUtils.degToRad(180);
const TURN_DURATION = 2.2; // seconds — slow, confident, "premium" pace for a turn this large

// Couples the cube to the scroll gesture itself (not just the turn that
// fires on a card change): a small pitch + parallax offset tracks how far
// the user has scrolled past the active card's snap point, damped toward
// that target rather than following raw scrollTop 1:1, so it doesn't jitter.
// Direct input coupling, not a timed animation — no duration/easing budget
// applies, same as a drag-follow.
const SCROLL_TILT_ANGLE = THREE.MathUtils.degToRad(3);
const SCROLL_PARALLAX = 0.015;
const SCROLL_DAMP_LAMBDA = 7; // slower follow of raw scroll — reads as fluid/lazy rather than tracking 1:1

// down: pitch around X; left: yaw around Y. Alternating by parity gives the
// two named directions from the brief, in sequence.
function turnAxisAndSign(index: number) {
  return index % 2 === 0 ? { axis: AXIS_X, sign: 1 } : { axis: AXIS_Y, sign: 1 };
}

// Slow start, confident finish, no overshoot — reads as deliberate and
// premium rather than mechanical (linear) or springy (bounce).
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Alternating 180° turns about two perpendicular world axes (X then Y) are
// physically real, but composing them is not a no-op: two such turns equal
// a 180° rotation about world Z (the Klein four-group: Rx·Ry = Rz) — a roll
// about the camera's view axis that leaves the "returning" face pointing at
// the camera but rotated 180° in the view plane (upside-down). Swing-twist
// decomposition strips exactly that view-axis roll from a target quaternion
// in place, so every turn always lands with its forward face upright,
// regardless of which axis sequence produced it.
function stripViewAxisRoll(q: THREE.Quaternion): void {
  const twist = new THREE.Quaternion(0, 0, q.z, q.w);
  if (twist.lengthSq() < 1e-8) return;
  twist.normalize();
  q.multiply(twist.invert());
}

export type PanelItem = {
  company: string;
  title: string;
  techStack?: readonly { title: string; icon: IconType }[];
};

// Multi-word company names get letter-per-word initials (e.g. "Winter of
// Code Social 2025" → "WOCS") so two different companies rarely collide on
// a single shared first letter the way a bare first-char monogram would.
function initialsFor(company: string): string {
  const words = company
    .replace(/[^a-zA-Z\s]/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (words.length > 1) return words.map((w) => w[0]).join("").toUpperCase().slice(0, 4);
  return company.charAt(0).toUpperCase();
}

/** Subtle perforated-grille texture, like a dark speaker mesh. */
function createGrilleTexture(): THREE.CanvasTexture {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  ctx.fillStyle = "#232427";
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = "#35373c";
  const step = 13;
  for (let y = step / 2; y < size; y += step) {
    for (let x = step / 2; x < size; x += step) {
      ctx.beginPath();
      ctx.arc(x, y, 2.6, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Monochrome texture for a "feature" cubie — one of the card's tech-stack
 * icons on a dark tile, falling back to disambiguated initials only for the
 * primary slot when a card has no tech stack at all. An empty slot (fewer
 * tech entries than feature cubies) renders as a plain dark tile so it
 * blends with the surrounding matte chassis instead of repeating an icon.
 */
// `mirror` draws the tile horizontally flipped: BoxGeometry's -Z face UVs
// run opposite to the +Z face's, so a back-face tile needs its own
// pre-flipped texture rather than reusing the front tile's — otherwise the
// icon reads backwards once a turn brings that cubie forward.
function createFeatureTexture(
  icon: IconType | undefined,
  fallbackText: string | undefined,
  mirror = false,
): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  if (!ctx) return texture;

  if (mirror) {
    ctx.translate(size, 0);
    ctx.scale(-1, 1);
  }

  ctx.fillStyle = "#2b2d31";
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 260; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const r = Math.random() * 1.4 + 0.3;
    ctx.fillStyle = "rgba(255,255,255,0.04)";
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  if (icon) {
    const iconSize = 128;
    const svgMarkup = renderToStaticMarkup(
      createElement(icon, { size: iconSize, color: "#e8e8e6" }),
    );
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, (size - iconSize) / 2, (size - iconSize) / 2, iconSize, iconSize);
      texture.needsUpdate = true;
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgMarkup)}`;
  } else if (fallbackText) {
    ctx.fillStyle = "#e8e8e6";
    ctx.font = "700 92px 'JetBrains Mono', monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(fallbackText, size / 2, size / 2 + 6);
  }

  return texture;
}

// 3x3x3 Rubik's-style grid: small cubies with thin gaps between them.
const CUBIE_SIZE = 0.64;
const CUBIE_GAP = 0.035;
const CUBIE_STEP = CUBIE_SIZE + CUBIE_GAP;
const GRID = [-1, 0, 1] as const;

type CubieKind = "matte" | "glossy" | "grille" | "feature";
type FeatureSide = "front" | "back";

// Explicit coordinates, not a parity/modulo rule — a parity-based split once
// made half the cube a bright checkerboard instead of scattered sparkle.
const GLOSSY_POSITIONS = [
  [1, -1, 1],
  [1, 0, -1],
  [-1, -1, -1],
  [0, 1, -1],
  [1, 1, 0],
] as const;

// Four feature slots, spread non-adjacently across the front face so each
// tech-stack icon reads as its own tile rather than a solid icon block.
const FEATURE_POSITIONS = [
  [0, 1, 1],
  [1, 0, 1],
  [-1, -1, 1],
  [0, -1, 1],
] as const;
// Every turn is a 180° rotation about an axis orthogonal to Z (pitch-X or
// yaw-Y), and 180° turns about orthogonal axes commute into a Klein
// four-group — so whichever face was forward always swaps to exactly the
// opposite (front<->back) face each turn, never a side face. Mirroring the
// same icon set onto the back (z=-1) guarantees an icon-bearing face is
// always camera-forward at rest, regardless of how many cumulative turns
// have played.
//
// The back tiles need their own, separately-flipped materials, not the
// front ones reused: BoxGeometry's -Z face UVs are the mirror image of the
// +Z face's (same reason text on a sheet of glass reads backwards from
// behind it) — reusing one material on both sides made every icon that
// landed on the back read mirrored once that turn brought it forward.
const BACK_FEATURE_POSITIONS = [
  [0, 1, -1],
  [1, 0, -1],
  [-1, -1, -1],
  [0, -1, -1],
] as const;
const FEATURE_SLOTS = FEATURE_POSITIONS.length;

function cubieKind(
  x: number,
  y: number,
  z: number,
): { kind: CubieKind; featureSlot?: number; featureSide?: FeatureSide } {
  const frontSlot = FEATURE_POSITIONS.findIndex(([fx, fy, fz]) => fx === x && fy === y && fz === z);
  if (frontSlot !== -1) return { kind: "feature", featureSlot: frontSlot, featureSide: "front" };
  const backSlot = BACK_FEATURE_POSITIONS.findIndex(([fx, fy, fz]) => fx === x && fy === y && fz === z);
  if (backSlot !== -1) return { kind: "feature", featureSlot: backSlot, featureSide: "back" };
  if (x === -1 && y >= 0) return { kind: "grille" };
  if (GLOSSY_POSITIONS.some(([gx, gy, gz]) => gx === x && gy === y && gz === z)) return { kind: "glossy" };
  return { kind: "matte" };
}

const CUBIES = GRID.flatMap((x) =>
  GRID.flatMap((y) =>
    GRID.map((z) => {
      const { kind, featureSlot, featureSide } = cubieKind(x, y, z);
      return {
        position: [x * CUBIE_STEP, y * CUBIE_STEP, z * CUBIE_STEP] as const,
        kind,
        featureSlot,
        featureSide,
      };
    }),
  ),
);

function PanelRig({
  activeIndex,
  activeItem,
  colors,
  scrollProgressRef,
}: {
  activeIndex: number;
  activeItem: PanelItem;
  colors: readonly string[];
  scrollProgressRef: { current: number };
}) {
  const group = useRef<THREE.Group>(null);
  const shineLight = useRef<THREE.PointLight>(null);
  const sparkleLight = useRef<THREE.PointLight>(null);
  const accentLight = useRef<THREE.PointLight>(null);
  // The cube's base orientation (before the small scroll tilt on top) —
  // slerped from turnFrom to turnTo while a turn is mid-flight, and held at
  // turnTo once it settles. Persists across renders, unlike turnFrom/turnTo
  // which are only meaningful during an active turn.
  const liveQuat = useRef(new THREE.Quaternion());
  const turnFrom = useRef(new THREE.Quaternion());
  const turnTo = useRef(new THREE.Quaternion());
  const turnElapsed = useRef(0);
  const turnActive = useRef(false);
  const deltaScratch = useRef(new THREE.Quaternion());
  const scrollQuat = useMemo(() => new THREE.Quaternion(), []);
  // Damped-toward-target intra-card scroll progress (see the constants
  // above) — smooths raw scrollTop so the coupling doesn't jitter per frame.
  const scrollTilt = useRef(0);
  const accentColorTarget = useMemo(
    () => new THREE.Color(colors[0] ?? "#9ca3af"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const reducedMotion = useRef(false);
  const hasMounted = useRef(false);

  const matteMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#2b2d31", roughness: 0.7, metalness: 0.15 }),
    [],
  );
  const glossyMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#3a3d42", roughness: 0.12, metalness: 0.35 }),
    [],
  );
  const grilleMaterial = useMemo(
    () =>
      // `color` multiplies with `map`, so it stays white here — the grille
      // texture's own tones carry the chassis color, not a tint on top.
      new THREE.MeshStandardMaterial({
        color: "#ffffff",
        roughness: 0.65,
        metalness: 0.18,
        map: createGrilleTexture(),
      }),
    [],
  );
  const featureMaterials = useMemo(
    () =>
      Array.from(
        { length: FEATURE_SLOTS },
        // Same white-stays-white-multiplier reasoning as the grille material.
        () => new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.35, metalness: 0.12 }),
      ),
    [],
  );
  // Back-face tiles get their own materials (not shared with the front
  // ones) because their textures are drawn pre-flipped — see createFeatureTexture.
  const featureMaterialsBack = useMemo(
    () =>
      Array.from(
        { length: FEATURE_SLOTS },
        () => new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.35, metalness: 0.12 }),
      ),
    [],
  );

  const materialByKind: Record<Exclude<CubieKind, "feature">, THREE.MeshStandardMaterial> = {
    matte: matteMaterial,
    glossy: glossyMaterial,
    grille: grilleMaterial,
  };

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const icons = activeItem.techStack?.slice(0, FEATURE_SLOTS) ?? [];
    featureMaterials.forEach((material, slot) => {
      const icon = icons[slot]?.icon;
      const fallbackText = slot === 0 && icons.length === 0 ? initialsFor(activeItem.company) : undefined;
      const nextTexture = createFeatureTexture(icon, fallbackText);
      const prevTexture = material.map;
      material.map = nextTexture;
      material.needsUpdate = true;
      prevTexture?.dispose();

      const backMaterial = featureMaterialsBack[slot];
      const nextBackTexture = createFeatureTexture(icon, fallbackText, true);
      const prevBackTexture = backMaterial.map;
      backMaterial.map = nextBackTexture;
      backMaterial.needsUpdate = true;
      prevBackTexture?.dispose();
    });
  }, [activeItem, featureMaterials, featureMaterialsBack]);

  useEffect(() => {
    if (colors.length === 0) return;
    accentColorTarget.set(colors[activeIndex % colors.length]);
  }, [activeIndex, colors, accentColorTarget]);

  // On each card change, turn the cube another 150° — a real, cumulative
  // face turn, not a return-to-front nudge. Retriggering mid-turn (rapid
  // dot-nav clicks) starts the new turn from wherever the cube visually is
  // right now (liveQuat), so it blends rather than snapping.
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    if (reducedMotion.current) return;

    const { axis, sign } = turnAxisAndSign(activeIndex);
    deltaScratch.current.setFromAxisAngle(axis, sign * TURN_ANGLE);
    turnFrom.current.copy(liveQuat.current);
    turnTo.current.copy(liveQuat.current).premultiply(deltaScratch.current);
    stripViewAxisRoll(turnTo.current);
    turnElapsed.current = 0;
    turnActive.current = true;
  }, [activeIndex]);

  useFrame((state, delta) => {
    if (!group.current) return;

    // Two independently-orbiting highlight lights, different radius/speed/
    // phase, sweep separate moving glints across the glossy faces — multiple
    // catching points over time read as sparkle. The accent light carries
    // the per-card identity color instead, raking in from the right side
    // (toward the 2D card) and cross-fading smoothly between cards.
    if (shineLight.current) {
      const t = state.clock.elapsedTime * 0.6;
      shineLight.current.position.set(Math.sin(t) * 2.6, 1.4 + Math.cos(t * 0.7) * 0.8, Math.cos(t) * 2.6);
    }
    if (sparkleLight.current) {
      const t2 = state.clock.elapsedTime * 1.3 + 2.1;
      sparkleLight.current.position.set(Math.cos(t2) * 1.7, -0.8 + Math.sin(t2 * 1.4) * 1.3, Math.sin(t2) * 1.7);
    }
    if (accentLight.current) {
      const t3 = state.clock.elapsedTime * 0.5 + 1;
      // Front-biased (+Z, between the cube and the camera) with only a
      // modest +X lean toward the card side — a light this close and this
      // far forward rakes the front face the icons live on, not the
      // back/right edge, and dominates over the neutral key/shine lights
      // enough to actually read as colored rather than washed-out white.
      accentLight.current.position.set(0.9 + Math.sin(t3) * 0.2, 0.5 + Math.cos(t3 * 0.8) * 0.25, 2.1 + Math.sin(t3 * 1.1) * 0.2);
      accentLight.current.color.lerp(accentColorTarget, 1 - Math.pow(0.0001, delta));
    }

    // Advance the turn tween: slerp from where it started to the 150°
    // target, eased for a slow-start/confident-finish feel. Once it reaches
    // the target, liveQuat just holds still there until the next trigger.
    if (turnActive.current) {
      turnElapsed.current += delta;
      const t = THREE.MathUtils.clamp(turnElapsed.current / TURN_DURATION, 0, 1);
      liveQuat.current.copy(turnFrom.current).slerp(turnTo.current, easeInOutCubic(t));
      if (t >= 1) turnActive.current = false;
    }

    // Damp the raw intra-card scroll progress toward its target, then layer
    // a small pitch + parallax offset on top of the base orientation — this
    // is what keeps the cube visibly coupled to the scroll gesture itself,
    // not just to the discrete turn that fires on a card change.
    const targetProgress = reducedMotion.current
      ? 0
      : THREE.MathUtils.clamp(scrollProgressRef.current, -1, 1);
    scrollTilt.current = THREE.MathUtils.damp(scrollTilt.current, targetProgress, SCROLL_DAMP_LAMBDA, delta);

    scrollQuat.setFromAxisAngle(AXIS_X, -scrollTilt.current * SCROLL_TILT_ANGLE);
    group.current.quaternion.copy(liveQuat.current).premultiply(scrollQuat);
    group.current.position.y = scrollTilt.current * SCROLL_PARALLAX;
  });

  return (
    <>
      <pointLight ref={shineLight} intensity={3.2} distance={6} decay={2} color="#fff7ec" />
      <pointLight ref={sparkleLight} intensity={2.4} distance={5} decay={2} color="#eaf4ff" />
      <pointLight ref={accentLight} intensity={8} distance={6} decay={2} color="#9ca3af" />
      <group rotation={[0.07, -0.12, 0]}>
        <group ref={group}>
          {CUBIES.map((cubie, i) => (
            <mesh
              key={i}
              position={cubie.position}
              material={
                cubie.kind === "feature"
                  ? (cubie.featureSide === "back" ? featureMaterialsBack : featureMaterials)[cubie.featureSlot!]
                  : materialByKind[cubie.kind]
              }
            >
              <boxGeometry args={[CUBIE_SIZE, CUBIE_SIZE, CUBIE_SIZE]} />
            </mesh>
          ))}
        </group>
      </group>
    </>
  );
}

const TechShowcasePanel = ({
  activeIndex,
  activeItem,
  colors = [],
  scrollProgressRef,
  className = "h-full w-full",
}: {
  activeIndex: number;
  activeItem: PanelItem;
  colors?: readonly string[];
  // Intra-card scroll progress (roughly -1..1), updated by the caller on
  // every scroll tick without triggering a React re-render — PanelRig reads
  // it directly in useFrame. Falls back to a stationary ref when omitted.
  scrollProgressRef?: { current: number };
  className?: string;
}) => {
  const fallbackScrollProgressRef = useRef(0);
  return (
    <div className={`${className} pointer-events-none`} aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [1.5, 0.65, 8.5], fov: 27 }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[-5, 6, 4]} intensity={3.4} color="#ffffff" />
        <directionalLight position={[2, -2, -3]} intensity={0.4} color="#dfe4ea" />
        <PanelRig
          activeIndex={activeIndex}
          activeItem={activeItem}
          colors={colors}
          scrollProgressRef={scrollProgressRef ?? fallbackScrollProgressRef}
        />
      </Canvas>
    </div>
  );
};

export default TechShowcasePanel;
