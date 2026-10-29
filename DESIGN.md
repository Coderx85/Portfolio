---
name: Priyanshu Portfolio
description: A developer portfolio styled as a late-night engineering workspace — dark gradient canvas, glass panels, and a vivid signal-amber accent, now with a real light/dark mode toggle.
colors:
  signal-amber-dark: "#ff7a1a"
  signal-amber-dark-hover: "#ff9142"
  signal-amber-light: "#b03a05"
  signal-amber-light-hover: "#c94708"
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

The site reads as a late-night engineering workspace: a near-black gradient canvas with soft radial light pools, drifting blurred orbs, and glassy floating panels that feel like instrument surfaces in a dim room. JetBrains Mono carries every piece of text — headlines, body, labels — so the whole site speaks in the voice of a code editor rather than a marketing page. The signal is one vivid amber hue, used at varying opacities for every structural and glow role (borders, dividers, icon/text color, gradient stops, hover shadows, focus rings, the pulse/border-glow animations) rather than split across a two-color pair — simpler to read as "this is interactive" wherever it appears. The site also ships a real light mode: toggling it swaps the near-black "Night Lab" canvas for a soft warm-ivory "Day Lab" canvas built with the same radial-light-pool construction technique, just inverted, and the amber hue itself shifts to a deeper ember shade so it keeps clearing contrast against the lighter background.

This is a Persuade-leaning Experience surface for a technical audience (recruiters, engineers): the craft of the UI itself is part of the pitch, so motion and glow are deliberate, not decorative filler. Light, flat, corporate SaaS treatments are an explicit rejection — the atmospheric, glass-and-glow register is the identity in both themes, not a theme option that gets simplified away in light mode.

**Key Characteristics:**

- Dark gradient canvas (with a soft-ivory light-mode counterpart) and drifting blurred orbs for ambient depth
- Glassmorphism panels (backdrop-blur + translucent fill, tuned per theme) as the primary surface material
- One signal hue — Signal Amber — reserved for interactive/active state, not general decoration
- JetBrains Mono as the universal typeface across all hierarchy levels
- Glow and lift on hover as the primary feedback language, not flat color swaps
- A toggle (`ThemeToggle`, wired via `next-themes`) switches the whole system between the dark "Night Lab" and light "Day Lab" registers; every route (Home, Resume, Experience, Work, Service, Contact) and all shared chrome is theme-aware

## Colors

The palette is near-monochrome (black/near-black or white/ivory, muted slate) with exactly one glowing signal hue and one warm counter-accent; color is a signal, not a palette to fill space with.

### Primary — Signal Amber

A single accent hue carried through every interactive/structural role — borders, dividers, icon/text color, gradient stops, hover glows, focus rings, the `pulse-glow`/`border-glow` animations, scrollbar, and `::selection` — all at varying opacities of the same color rather than split across a two-color pair. The hue itself is theme-dependent, routed through a CSS custom property (`--accent-signal`, consumed as `--color-accent`/`text-accent`/`bg-accent`/`border-accent` etc.) so every usage repaints automatically on toggle:

- **Dark mode:** `#ff7a1a` (hover `#ff9142`) — measures ≈7.6:1 against the `#0a0a0a` canvas, comfortably clearing WCAG AAA as direct text fill.
- **Light mode:** `#b03a05` (hover `#c94708`), a deeper "ember" shade of the same hue — the vivid dark-mode amber only reaches ≈2.3:1 against the light canvas, so light mode darkens it to ≈5.2:1 against the warm-ivory background to keep passing AA as text fill.

### Secondary

- **Warm Amber Signal** (`oklch(65.5% 0.15027 50.57)`, foreground theme-split via `--secondary-fg`: light-mode dark ink / dark-mode near-white): the warm counterpoint used for secondary text emphasis and the `--secondary` role.

### Neutral

- **Primary Ink** (`#0f172a`, slate-950-adjacent): base surface fill for primary buttons and glass panel tint; also used as the fixed dark-ink text color on solid amber-filled buttons in both themes (white text on amber fails contrast in both directions, so filled CTAs always use ink text).
- **Canvas Black** (`#0a0a0a` → `#141416` layered gradient, dark mode) / **Canvas Ivory** (soft warm-white layered gradient, light mode): the body background, built from stacked radial gradients plus a diagonal linear gradient for subtle directional light, inverted per theme via a `.dark body` override.
- **Surface Glass** (`rgba(15, 23, 42, 0.5–0.7)` dark / `rgba(255, 255, 255, 0.55–0.75)` light, both with `blur(12–16px)`): the glass panel fill, darkening/lightening and sharpening its border on hover, theme-split via `:where(.dark) &` CSS nesting.
- `--color-foreground`/`--color-muted-foreground` are the default theme-aware text tokens (`text-foreground`/`text-muted-foreground`), replacing hardcoded `text-white`/`text-white/NN` wherever a page needs to just follow the theme.

### Named Rules

**The One Signal Rule.** Signal Amber (at whatever opacity the role calls for) is the only color that means "active" or "interactive." It never appears as passive decoration — only on hover states, the current nav item, focus rings, and emphasis text.

**Direct Text Fill Is Allowed.** Unlike the retired Quantum Indigo (which measured ≈2.7–3.0:1 and failed WCAG AA as text), Signal Amber clears AA/AAA as direct text fill in both themes by design — the per-theme hue split above exists specifically so headings, labels, and icons can use `text-accent`/`fill-accent` directly instead of needing a white-text-plus-glow workaround.

**The Section-Heading Secondary Exception.** Every `Heading` component rendered with `type="section"` (`src/components/Heading.tsx`) — the "WORK EXPERIENCE", "Expertise", "Projects", and "Services" headings across Resume, Work, Service, and Experience — renders its icon and `<h2>` in Warm Amber Signal (`text-secondary`/`fill-secondary`), not Signal Amber. This is a sitewide structural convention, not a per-page slip: it marks "section-level heading" the same way everywhere, using the system's documented secondary color for that one fixed role. It is not an interactive/active-state signal and does not expand under the One Signal Rule — Signal Amber still means "active" everywhere else.

**The Content-Identity Accent Exception.** The Experience page's card showcase (`src/components/ExperienceSection.tsx`'s `EXP_COLORS`) is the one documented exception to the One Signal Rule. Each experience entry carries its own identity color (sky blue, violet, sage green, amber) used consistently across its card border, badges, and tech pills while that entry is active — this is content categorization, not an interactive-state signal, and is scoped to this single showcase. It does not license per-section color schemes elsewhere; new surfaces still default to Signal Amber as the only active/interactive signal.

**Theme-Invariant Surfaces.** A handful of surfaces stay visually fixed regardless of theme, by deliberate convention rather than oversight: the Primary Ink button fill (`bg-primary`, `#0f172a`) and the Contact form's `bg-primary` inputs stay dark-ink in both themes, consistent with `bg-primary`'s documented "stays the same dark ink fill in both themes" rule; the Work page's project-card thumbnails use a fixed dark gradient scrim over the preview image/placeholder (the image-card convention — thumbnails read dark regardless of surrounding theme, the same way video/photo cards do elsewhere); the page-transition `Stairs` wipe and the Experience timeline's scroll-fade/inactive-dot both key off a shared `--canvas-scrim-rgb` token so they blend with the canvas in either theme. None of these are the dark-only gap the scope boundary used to describe — that gap is closed; every page's own content is now theme-aware.

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

- **Glass card hover** (`box-shadow: 0 8px 32px rgba(var(--accent-signal-rgb),0.15), 0 0 0 1px rgba(var(--accent-signal-rgb),0.1)` + `translateY(-4px)`): the primary "this is now active/focused" signal for cards.
- **Pulse glow** (`0 0 20px rgba(var(--accent-signal-rgb),0.2)` → `0 0 40px rgba(var(--accent-signal-rgb),0.5)`, animated): used for elements that need sustained attention (e.g. CTAs).
- **Accent glow ring** (`0 0 20px rgba(var(--accent-signal-rgb),0.3), 0 0 60px rgba(var(--accent-signal-rgb),0.1)`): `.glow-accent` utility for emphasis blocks.

### Named Rules

**The Glow-Means-Active Rule.** Shadows and glow never appear on inert, non-interactive surfaces at rest. They appear only in response to hover, focus, or "this is the current page/section."

## Shapes

Radius is generous and varies by role: pill buttons (`rounded-full`) for primary CTAs and nav toggles, medium radius (`rounded-md`, token-driven `var(--radius)`) for standard buttons and inputs, and a larger 16px radius for glass cards and the mobile menu overlay (`rounded-2xl`). Borders are thin and low-opacity (`border-white/10` dark, `border-black/10` light) rather than solid, reinforcing the glass material; they shift to Signal Amber on focus/hover.

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
- **Border:** `1px solid rgba(255,255,255,0.06)` dark / `rgba(10,10,10,0.07)` light, shifting to `rgba(var(--accent-signal-rgb),0.4)` (Signal Amber) on hover.
- **Internal Padding:** 24px (`p-6`) header/content/footer blocks.

### Inputs / Fields

- **Style:** `h-[48px]`, `rounded-md`, `border-white/10`, `bg-primary` fill, light-weight text, white placeholder.
- **Focus:** border shifts to Signal Amber plus a `0 0 0 3px rgba(var(--accent-signal-rgb),0.45)` ring in the same hue — the same signal-color language as everything else interactive.

### Navigation

- **Style:** sticky top nav, transitions from `bg-black/10 backdrop-blur-sm` to full `.glass` treatment plus shadow once scrolled past 20px. Links are uppercase, semibold, wide letter-spacing, `px-4 py-2` with `rounded-lg` hit areas.
- **Active state:** amber-tinted background (`bg-accent/10`), amber text, and an animated underline dot (`layoutId="activeNavIndicator"`, amber glow) that slides between items via Framer Motion spring transition.
- **Mobile:** collapses below `lg` (960px) to a hamburger button that opens a `.glass` dropdown panel (`rounded-2xl`), animated in with Framer Motion.

### Background Orbs (signature component)

Three fixed, large (300–400px) radial-gradient circles (Signal Amber, `#22d3ee` cyan highlight — purely decorative, no longer part of the signal language — and a warm gold `#ffc84d`), heavily blurred (`blur(80px)`), drifting via slow (18–25s) `translate`/`scale` keyframe loops behind all content — a true nebula drift. Opacity is theme-split: `0.15` in dark mode (today's intensity, preserved exactly), `0.08` in light mode so the orbs read as a soft daylight haze instead of overwhelming the paler canvas. This is the system's signature ambient device — it's what makes the canvas feel alive rather than merely a flat background, in either theme.

## Do's and Don'ts

### Do:

- **Do** keep JetBrains Mono as the only typeface across every hierarchy level — don't introduce a serif or humanist sans for contrast.
- **Do** reserve the Signal Amber glow/lift exclusively for interactive or active states (hover, focus, current nav item) per the Glow-Means-Active Rule.
- **Do** use glass (translucent fill + blur + thin low-opacity border) as the default surface material for any new panel, card, or overlay, themed via `:where(.dark) &` CSS nesting rather than a separate light-mode component.
- **Do** keep background orbs and gradient canvas as the ambient layer behind new pages — it's the signature device, not a homepage-only flourish — in both themes.
- **Do** route any new accent usage through the `--color-accent`/`text-accent`/`bg-accent` tokens (never a hardcoded hex) so it repaints correctly on theme toggle.

### Don't:

- **Don't** introduce a flat, corporate-SaaS visual mode — the atmospheric, glass-and-glow register (orbs, blur, glow-on-hover) is the identity in both the dark "Night Lab" and light "Day Lab" registers; light mode is a palette inversion of the same system, not a simplified fallback.
- **Don't** apply the amber glow/shadow treatment to resting, non-interactive surfaces — glow always means "active now."
- **Don't** add hard, opaque drop shadows in the Material sense; depth comes from glass layering and glow, not conventional elevation shadows.
