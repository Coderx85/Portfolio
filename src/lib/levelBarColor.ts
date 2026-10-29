// Skill-level → bar fill, shared by the resume (webView.tsx) and home
// (HomeClient.tsx) expertise tiles. Tier semantics in two fills: Signal
// Amber for Advanced, a theme-aware muted neutral for everything below —
// brand colors stay out of the containers (they live only on the icons).
export const levelBarColor = (level: string): string =>
  level === "Advanced" ? "var(--color-accent)" : "hsl(var(--muted-foreground))";
