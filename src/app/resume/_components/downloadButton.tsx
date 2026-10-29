"use client";

import { HiArrowDownTray, HiArrowPath } from "react-icons/hi2";
import { PdfComponentsType } from "@/types/resume";

// Persistent "Download PDF" affordance for the Web View (rendered adjacent
// to the mode toggle by ResumeClient, hidden entirely when mode === "print"
// since printView renders its own CTA). It consumes the SAME tri-state pdf
// pipeline as printView — status, components, and retry come in as props
// straight from ResumeClient; no second loader lives here.
//
// Accessibility: DOM order is tablist → download → active panel content, so
// Tab flows naturally from the toggle row into the view. This panel mounts
// NO role="status"/live region — printView's own status regions already
// announce the pipeline transitions, and a second one would double-announce
// when the user is on the PDF View tab. Error copy is plain static text;
// the Retry control is a normal focusable button in tab order.

// Same visual recipe as printView's download span (px-5/7 py-3 min-h-11,
// glass fill, teal signal only on hover/focus) so the two CTAs read as one
// system. On mobile this row is centered under the toggle (placement is
// secondary there); on sm+ ResumeClient absolutely-positions it right.
const DOWNLOAD_SPAN =
  "inline-flex items-center gap-2 px-5 sm:px-7 py-3 min-h-11 rounded-xl text-sm font-semibold text-white bg-white/10 border border-white/15 hover:bg-white/15 hover:border-accent/50 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(22,100,102,0.55)] focus-visible:border-accent";

const RETRY_BUTTON =
  "inline-flex items-center gap-2 px-5 py-3 min-h-11 rounded-xl text-sm font-semibold text-white bg-white/10 border border-white/15 hover:bg-white/15 hover:border-accent/50 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(22,100,102,0.55)] focus-visible:border-accent";

export const DownloadPanel = ({
  pdfStatus,
  PdfComponents,
  onRetryPdf,
  isClient,
  className = "",
}: {
  pdfStatus: "loading" | "ready" | "error";
  PdfComponents: PdfComponentsType;
  onRetryPdf: () => void;
  isClient: boolean;
  className?: string;
}) => {
  // Pipeline failed: one quiet line + a retry affordance, not printView's
  // full error wall (the detail lives over in the PDF View pane).
  if (pdfStatus === "error") {
    return (
      <div
        className={`inline-flex items-center justify-center gap-3 ${className}`}
      >
        <p className="text-white/60 text-xs">PDF unavailable</p>
        <button onClick={onRetryPdf} className={RETRY_BUTTON}>
          <HiArrowPath className="w-4 h-4" />
          Retry
        </button>
      </div>
    );
  }

  // Pipeline ready: same PDFDownloadLink render-prop as printView, so the
  // "Preparing…" label while React-PDF regenerates the document is shared
  // behavior, not re-implemented logic.
  if (isClient && PdfComponents) {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <PdfComponents.PDFDownloadLink
          document={<PdfComponents.ResumePDF />}
          fileName="Priyanshu_Resume.pdf"
          aria-label="Download resume PDF"
        >
          {({ loading }) => (
            <span className={DOWNLOAD_SPAN}>
              <HiArrowDownTray className="w-4 h-4" />
              {loading ? "Preparing…" : "Download PDF"}
            </span>
          )}
        </PdfComponents.PDFDownloadLink>
      </div>
    );
  }

  // Pipeline still warming up (first paint or a retry in flight): a
  // non-interactive placeholder with no spinner theatrics — the label
  // carries the state.
  return (
    <span
      className={`inline-flex items-center gap-2 px-5 sm:px-7 py-3 min-h-11 rounded-xl text-sm font-semibold bg-white/5 text-white/50 border border-white/10 cursor-wait ${className}`}
    >
      <HiArrowDownTray className="w-4 h-4" />
      Preparing…
    </span>
  );
};
