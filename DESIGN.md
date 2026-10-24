---
name: Priyanshu Portfolio
description: A developer portfolio styled as a late-night engineering workspace — dark gradient canvas, glass panels, and a glowing teal signal color.
colors:
  deep-lab-teal: "#166466"
  deep-lab-teal-hover: "#1a8385"
  deep-lab-teal-glow: "rgba(22, 100, 102, 0.4)"
  warm-amber-signal: "oklch(65.5% 0.15027 50.57)"
  warm-amber-signal-foreground: "oklch(0.9619 0.058 95.6174)"
  primary-ink: "#0f172a"
  cyan-highlight: "#22d3ee"
  canvas-black: "#0a0a0a"
  surface-glass: "rgba(15, 23, 42, 0.6)"
  cube-chassis-matte: "#2b2d31"
  cube-chassis-glossy: "#3a3d42"
  cube-chassis-grille: "#232427"
  cube-icon-tint: "#e8e8e6"
  cube-texture-passthrough: "#ffffff"
typography:
  body:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontWeight: 400
  display:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "clamp(48px, 6vw, 80px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
rounded:
  sm: "calc(var(--radius) - 4px)"
  md: "calc(var(--radius) - 2px)"
  lg: "var(--radius)"
  pill: "9999px"
  card: "16px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.primary-ink}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  button-ghost:
    backgroundColor: "transparent"
    rounded: "{rounded.pill}"
  card:
    backgroundColor: "{colors.surface-glass}"
    rounded: "{rounded.card}"
---

# Design System: Priyanshu Portfolio

## Overview

**Creative North Star: "The Night Lab"**

The site reads as a late-night engineering workspace: a near-black gradient canvas with soft radial light pools, drifting blurred orbs, and glassy floating panels that feel like instrument surfaces in a dim room. JetBrains Mono carries every piece of text — headlines, body, labels — so the whole site speaks in the voice of a code editor rather than a marketing page. Signal teal (`#166466`) is the one color that means something is alive or active: it glows under hover, traces the active nav indicator, and threads through gradients and text-shimmer effects. Everything else stays desaturated near-black and white so the teal reads as a true signal, not just another accent.

This is a Persuade-leaning Experience surface for a technical audience (recruiters, engineers): the craft of the UI itself is part of the pitch, so motion and glow are deliberate, not decorative filler. Light, flat, corporate SaaS treatments are an explicit rejection — the dark, atmospheric register is the identity, not a theme option.

**Key Characteristics:**
- Dark gradient canvas with drifting blurred orbs for ambient depth
- Glassmorphism panels (backdrop-blur + translucent dark fill) as the primary surface material
- One signal color (deep lab teal) reserved for interactive/active state, not general decoration
- JetBrains Mono as the universal typeface across all hierarchy levels
- Glow and lift on hover as the primary feedback language, not flat color swaps

## Colors

The palette is near-monochrome (black, white, muted slate) with exactly one glowing signal color and one warm counter-accent; color is a signal, not a palette to fill space with.

### Primary
- **Deep Lab Teal** (`#166466`, hover `#1a8385`, glow `rgba(22, 100, 102, 0.4)`): the system's one true signal color. Used for active nav state, hover glows, gradient text, section dividers, focus rings, and the shimmer animation. Appears in gradients up to **Cyan Highlight** (`#22d3ee`) for emphasis moments (gradient-text, border-glow).

### Secondary
- **Warm Amber Signal** (`oklch(65.5% 0.15027 50.57)`, foreground `oklch(0.9619 0.058 95.6174)`): the warm counterpoint to the cool teal base. Used for secondary text emphasis and the `--secondary` role.

### Neutral
- **Primary Ink** (`#0f172a`, slate-950-adjacent): base surface fill for primary buttons and glass panel tint.
- **Canvas Black** (`#0a0a0a` → `#141416` layered gradient): the body background, built from stacked radial gradients plus a diagonal linear gradient for subtle directional light.
- **Surface Glass** (`rgba(15, 23, 42, 0.5–0.7)` with `blur(12–16px)`): the glass panel fill, darkening and sharpening its border on hover.
- White (`#fff`) is the default text color throughout; there is no light-mode neutral in this system.

### Named Rules
**The One Signal Rule.** Deep Lab Teal (and its cyan extension) is the only color that means "active" or "interactive." It never appears as passive decoration — only on hover states, the current nav item, focus rings, and emphasis text.

**The Section-Heading Secondary Exception.** Every `Heading` component rendered with `type="section"` (`src/components/Heading.tsx`) — the "WORK EXPERIENCE", "Expertise", "Projects", and "Services" headings across Resume, Work, Service, and Experience — renders its icon and `<h2>` in Warm Amber Signal (`text-secondary`/`fill-secondary`), not Deep Lab Teal. This is a sitewide structural convention, not a per-page slip: it marks "section-level heading" the same way everywhere, using the system's documented secondary color for that one fixed role. It is not an interactive/active-state signal and does not expand under the One Signal Rule — Deep Lab Teal still means "active" everywhere else.

**The Content-Identity Accent Exception.** The Experience page's card showcase (`src/components/ExperienceSection.tsx`'s `EXP_COLORS`) is the one documented exception to the One Signal Rule. Each experience entry carries its own identity color (sky blue, violet, sage green, amber) used consistently across its card border, badges, and tech pills while that entry is active — this is content categorization, not an interactive-state signal, and is scoped to this single showcase. It does not license per-section color schemes elsewhere; new surfaces still default to Deep Lab Teal as the only active/interactive signal.

The showcase's 3D cube (`TechShowcasePanel.tsx`) participates in this exception too: its chassis stays a constant dark graphite (matte `#2b2d31`, glossy `#3a3d42`, grille `#232427`) regardless of which card is active, but a single accent-colored point light rakes across it from the right (the side nearer the active card), cross-fading to that card's `EXP_COLORS` entry — the chassis itself never changes color, only the sheen it catches. Tech-stack icons on the cube's feature cubies render in a fixed light tint (`#e8e8e6`) for contrast against the dark chassis; `#ffffff` appears on the grille/feature materials themselves only as a texture-color pass-through (Three.js multiplies a material's `color` with its `map`, so white is a no-op multiplier that lets the canvas texture's own tones render unmodified), not as a visible surface color.

## Typography

**Display Font:** JetBrains Mono (with `ui-monospace, monospace` fallback)
**Body Font:** JetBrains Mono (same family — no secondary typeface)

**Character:** Monospace everywhere gives the whole site a code-editor voice: headlines read like terminal output, body copy keeps the same technical cadence. There is no serif/sans contrast pairing — the typeface itself is the brand statement.

### Hierarchy
- **H1** (700, 48px → 80px at ≥1280px, line-height 1.1, letter-spacing -0.02em): page-level hero headings.
- **H2** (700, 36px → 48px at ≥1280px, line-height 1.1, letter-spacing -0.01em): section headings.
- **H3** (600, 20px → 24px at ≥1280px, line-height 1.1): subsection/card headings.
- **Nav label** (600, text-sm, tracking-wider, uppercase): nav links and chips.
- **Body**: JetBrains Mono at base size, white on dark, no max-width constraint currently enforced.

### Named Rules
**The Monospace-Only Rule.** No second typeface is introduced for body copy or UI text; monospace is the system's voice at every level, not just a code-sample affordance.

## Layout

Breakpoints are custom, not Tailwind defaults: `sm: 640px`, `md: 768px`, `lg: 960px`, `xl: 1200px`. The `lg` breakpoint (960px) is the desktop/mobile nav split point — below it, navigation collapses to a hamburger + glass overlay menu. Container utility centers content with `margin-inline: auto` and `1rem` inline padding. Density is generous: cards and sections use `p-6` (24px) internal padding as the default rhythm; nav items use `px-4 py-2`.

## Elevation & Depth

Depth is conveyed through glass layering plus glow, not conventional drop shadows — the **glow is structural**: it specifically signals interactive or active state (hover lift, current nav item, focus), not generic atmosphere. Resting surfaces are flat-glass (translucent fill + blur, no shadow); state changes add glow and a small upward translate.

### Shadow Vocabulary
- **Glass card hover** (`box-shadow: 0 8px 32px rgba(22,100,102,0.15), 0 0 0 1px rgba(22,100,102,0.1)` + `translateY(-4px)`): the primary "this is now active/focused" signal for cards.
- **Pulse glow** (`0 0 20px rgba(22,100,102,0.2)` → `0 0 40px rgba(22,100,102,0.5)`, animated): used for elements that need sustained attention (e.g. CTAs).
- **Accent glow ring** (`0 0 20px rgba(22,100,102,0.3), 0 0 60px rgba(22,100,102,0.1)`): `.glow-accent` utility for emphasis blocks.

### Named Rules
**The Glow-Means-Active Rule.** Shadows and glow never appear on inert, non-interactive surfaces at rest. They appear only in response to hover, focus, or "this is the current page/section."

## Shapes

Radius is generous and varies by role: pill buttons (`rounded-full`) for primary CTAs and nav toggles, medium radius (`rounded-md`, token-driven `var(--radius)`) for standard buttons and inputs, and a larger 16px radius for glass cards and the mobile menu overlay (`rounded-2xl`). Borders are thin and low-opacity white (`border-white/10`) rather than solid, reinforcing the glass material; they shift to teal on focus/hover.

## Components

### Buttons
- **Shape:** pill (`rounded-full`) for the default size; `rounded-md` for sm/md/lg sized variants; square icon buttons at `h-10 w-10`.
- **Primary:** `bg-primary` (Primary Ink) with `text-primary-foreground`, `h-10 px-4 py-2`, 90%-opacity darken on hover.
- **Secondary / Outline / Ghost:** outline uses a thin `border-input` with accent-tinted hover fill; ghost is transparent until hover, then fills with the accent/accent-foreground pair.
- **Hover / Focus:** color-only transition (no glow) on the base button primitive; custom instances (like the mobile menu toggle) layer in a border-color shift to Warm Amber Signal and glow on `:focus-visible`.

### Cards
- **Corner Style:** 16px (`.glass-card`'s `border-radius: 16px`).
- **Background:** `rgba(15, 23, 42, 0.5)` with `blur(12px)`.
- **Shadow Strategy:** flat at rest; see Elevation & Depth's Glow-Means-Active Rule for the hover state.
- **Border:** `1px solid rgba(255,255,255,0.06)`, shifting to `rgba(22,100,102,0.4)` on hover.
- **Internal Padding:** 24px (`p-6`) header/content/footer blocks.

### Inputs / Fields
- **Style:** `h-[48px]`, `rounded-md`, `border-white/10`, `bg-primary` fill, light-weight text, white placeholder.
- **Focus:** border shifts to Deep Lab Teal plus a `0 0 0 3px rgba(22,100,102,0.2)` ring — the same signal-color language as everything else interactive.

### Navigation
- **Style:** sticky top nav, transitions from `bg-black/10 backdrop-blur-sm` to full `.glass` treatment plus shadow once scrolled past 20px. Links are uppercase, semibold, wide letter-spacing, `px-4 py-2` with `rounded-lg` hit areas.
- **Active state:** teal-tinted background (`bg-secondary/10`), teal text, and an animated underline dot (`layoutId="activeNavIndicator"`) that slides between items via Framer Motion spring transition.
- **Mobile:** collapses below `lg` (960px) to a hamburger button that opens a `.glass` dropdown panel (`rounded-2xl`), animated in with Framer Motion.

### Background Orbs (signature component)
Three fixed, large (300–400px) radial-gradient circles (`#166466`, `#22d3ee`, `#0f766e`), heavily blurred (`blur(80px)`) and low-opacity (0.15), drifting via slow (18–25s) `translate`/`scale` keyframe loops behind all content. This is the system's signature ambient device — it's what makes the dark canvas feel alive rather than merely dark.

## Do's and Don'ts

### Do:
- **Do** keep JetBrains Mono as the only typeface across every hierarchy level — don't introduce a serif or humanist sans for contrast.
- **Do** reserve Deep Lab Teal glow/lift exclusively for interactive or active states (hover, focus, current nav item) per the Glow-Means-Active Rule.
- **Do** use glass (translucent fill + blur + thin low-opacity border) as the default surface material for any new panel, card, or overlay.
- **Do** keep background orbs and gradient canvas as the ambient layer behind new pages — it's the signature device, not a homepage-only flourish.

### Don't:
- **Don't** introduce a light or flat corporate-SaaS visual mode — the dark, atmospheric register is the identity, confirmed as an explicit rejection, not a theme toggle.
- **Don't** apply the teal glow/shadow treatment to resting, non-interactive surfaces — glow always means "active now."
- **Don't** add hard, opaque drop shadows in the Material sense; depth comes from glass layering and glow, not conventional elevation shadows.
