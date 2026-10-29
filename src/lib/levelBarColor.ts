// Skill-level → bar fill, shared by the resume (webView.tsx) and home
// (HomeClient.tsx) expertise tiles. The Night Lab's tier semantics in two
// fills: Deep Lab Teal for Advanced, muted white for everything below —
// brand colors stay out of the containers (they live only on the icons).
export const levelBarColor = (level: string): string =>
  level === "Advanced" ? "#166466" : "rgba(255, 255, 255, 0.35)";
