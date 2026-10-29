"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  HiOutlineComputerDesktop,
  HiOutlineDocumentText,
} from "react-icons/hi2";

type TMode = "web" | "print";

const TABLIST_ID = "resume-mode-toggle";

// Panes are rendered by ResumeClient (webView.tsx / printView.tsx); those
// files import these ids so tab → panel linkage stays in one place.
export const webPanelId = `${TABLIST_ID}-panel-web`;
export const printPanelId = `${TABLIST_ID}-panel-print`;
export const webTabId = `${TABLIST_ID}-tab-web`;
export const printTabId = `${TABLIST_ID}-tab-print`;

// Tab-style toggle between the interactive resume and the PDF destination.
// Active state uses the amber signal (amber-tinted bg + amber icon); the
// label follows the theme foreground color, matching the site nav's active
// treatment structure.
export const ModeToggle = ({
  mode,
  setMode,
}: {
  mode: TMode;
  setMode: (m: TMode) => void;
}) => {
  // Roving focus: arrow keys move focus AND activate, per the WAI-APG tabs
  // pattern. Activation follows focus because this tablist switches view
  // modes (automatic activation).
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const tabs: {
    id: TMode;
    label: string;
    icon: React.ElementType;
  }[] = [
    { id: "web", label: "Web View", icon: HiOutlineComputerDesktop },
    { id: "print", label: "PDF View", icon: HiOutlineDocumentText },
  ];

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const currentIndex = tabs.findIndex((tab) => tab.id === mode);
    let nextIndex: number | undefined;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = (currentIndex + 1) % tabs.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setMode(tabs[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    // `relative` + no bottom margin: ResumeClient places this row inside an
    // mb-8 wrapper and (sm+) absolutely positions the persistent download
    // against THIS row's right edge, so the toggle stays perfectly centered
    // in any viewport.
    <div className="relative flex items-center justify-center print:hidden">
      {/* The two panes are conditionally rendered by ResumeClient, so the
          inactive tab is exposed as a toggle with aria-selected; the pane
          ids are still linked via aria-controls so screen readers can jump
          between tab and panel. */}
      <div
        id={TABLIST_ID}
        role="tablist"
        aria-label="Resume view mode"
        onKeyDown={handleKeyDown}
        className="inline-flex p-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl"
      >
        {tabs.map((tab, index) => {
          const active = mode === tab.id;
          const Icon = tab.icon;
          return (
            <Button
              key={tab.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              id={`${TABLIST_ID}-tab-${tab.id}`}
              role="tab"
              aria-selected={active}
              aria-controls={tab.id === "web" ? webPanelId : printPanelId}
              tabIndex={active ? 0 : -1}
              onClick={() => setMode(tab.id)}
              className={`flex items-center gap-2 px-6 min-h-11 rounded-xl text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(255,122,26,0.55)] focus-visible:border-accent ${
                active
                  ? "bg-accent/15 border border-accent/40 text-foreground [&_svg]:text-accent"
                  : "bg-transparent border border-transparent text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
              }`}
            >
              <Icon className="text-lg" />
              {tab.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
