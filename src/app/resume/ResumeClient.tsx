"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { ModeToggle } from "./_components/webmodeToggle";
import { DownloadPanel } from "./_components/downloadButton";
import WebView from "./_components/webView";
import { PrintView } from "./_components/printView";
import { PdfComponentsType } from "@/types/resume";

// PDF renderer chunks are heavy and loaded async — a tri-state machine keeps
// the loading choreography honest and surfaces failures instead of a stuck
// "Loading…" spinner when the dynamic imports reject.
type TPdfStatus = "loading" | "ready" | "error";

// Duck-typed candidate the interop walker tests each hop for: the PDF view
// components are the only exports this page needs, so the resolver checks
// for exactly those two as renderable components before considering the
// shape valid.
type PdfLibCandidate = {
  PDFViewer: unknown;
  PDFDownloadLink: unknown;
  default?: unknown;
};

// Component-kind check, honest to React's runtime: a function component is
// typeof "function", but forwardRef/memo components (PDFDownloadLink is
// forwardRef) resolve as plain objects carrying a `render` function — so a
// bare typeof check rejects a healthy forwardRef export.
const isRenderableComponent = (value: unknown): boolean =>
  typeof value === "function" ||
  (typeof value === "object" &&
    value !== null &&
    typeof (value as { render?: unknown }).render === "function" &&
    // Mimics React.forwardRef's marker ($$typeof) so we don't bless any
    // object that merely happens to hold a render-ish function.
    (value as { $$typeof?: symbol }).$$typeof ===
      Symbol.for("react.forward_ref"));

const ResumePage = () => {
  const [mode, setMode] = useState<"web" | "print">("web");
  const [isClient, setIsClient] = useState(false);
  const [pdfStatus, setPdfStatus] = useState<TPdfStatus>("loading");
  const [PdfComponents, setPdfComponents] = useState<PdfComponentsType>(null);

  // Interop, bundler-proof: a bundler can settle the CJS module's exports in
  // several shapes — named exports on the namespace, or the whole export
  // object nested under `default` (possibly behind further interop layers).
  // Walk the `default` chain instead of assuming one level.
  const pickPdfLib = (root: unknown): PdfLibCandidate | null => {
    let current: unknown = root;
    for (let hop = 0; hop < 4 && current && current !== null; hop++) {
      const candidate = current as PdfLibCandidate;
      if (
        isRenderableComponent(candidate.PDFViewer) &&
        isRenderableComponent(candidate.PDFDownloadLink)
      ) {
        return candidate;
      }
      current = (candidate as { default?: unknown }).default;
    }
    return null;
  };

  // Turbopack's synthesized namespace for the package can come through
  // without the PDF view components even though the browser bundle that the
  // package's own `browser` field points at defines them. The deep import is
  // the deterministic fallback ("no exports map" in the package.json means
  // the subpath is fair game).
  const loadPdfLib = async () => {
    const pdfRendererModule = await import("@react-pdf/renderer");
    const resolved = pickPdfLib(pdfRendererModule);
    if (resolved) return resolved;

    console.warn(
      "[ResumePDF] namespace without PDF components; falling back to the browser bundle.",
      "PDF keys on namespace:",
      Object.keys(pdfRendererModule ?? {})
        .filter((key) => /pdf/i.test(key))
        .map(
          (key) =>
            `${key}: ${typeof (pdfRendererModule as unknown as Record<string, unknown>)[key]}`,
        ),
    );

    const browserBundle =
      await import("@react-pdf/renderer/lib/react-pdf.browser.js");
    const alt = pickPdfLib(browserBundle);
    if (alt) return alt;

    // Conclusive per-hop diagnostics so any future failure is one glance:
    console.error(
      "[ResumePDF] no PDFViewer/PDFDownloadLink in primary namespace OR browser bundle.",
      {
        nsPdfKeys: Object.keys(pdfRendererModule ?? {}).filter((key) =>
          /pdf/i.test(key),
        ),
        nsDefaultType: typeof pdfRendererModule?.default,
        browserPdfKeys: Object.keys(browserBundle ?? {}).filter((key) =>
          /pdf/i.test(key),
        ),
      },
    );
    throw new Error(
      "@react-pdf/renderer resolved without a usable PDFViewer/PDFDownloadLink export object",
    );
  };

  useEffect(() => {
    setIsClient(true);

    loadPdfComponents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadPdfComponents = async () => {
    setPdfStatus("loading");
    try {
      const pdfRenderer = await loadPdfLib();
      const resumePdfModule = await import("@/components/resume/ResumePDF");

      setPdfComponents({
        PDFViewer:
          pdfRenderer.PDFViewer as NonNullable<PdfComponentsType>["PDFViewer"],
        PDFDownloadLink:
          pdfRenderer.PDFDownloadLink as NonNullable<PdfComponentsType>["PDFDownloadLink"],
        ResumePDF: resumePdfModule.default,
      });
      setPdfStatus("ready");
    } catch (error) {
      console.error("Failed to load the PDF renderer:", error);
      setPdfStatus("error");
    }
  };

  return (
    // Honors the user's Reduce Motion OS preference for every framer-motion
    // entrance on this page (cell-level animations included).
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // Authored moment: one 0.2s-offset fade-in so the page is visible
        // almost immediately instead of holding a black canvas for seconds.
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className="flex flex-col min-h-[80vh] justify-center mx-4 md:mx-16 lg:mx-30 py-12 xl:py-0 gap-6 my-10"
      >
        {/* ── Mode toggle + persistent download row ── */}
        {/* DOM/tab order: tablist → DownloadPanel → active panel content, so
            Tab flows from the toggle row straight into the view. Mobile:
            download stacks below the centered toggle as a secondary row;
            sm+: absolute right edge of the toggle row so the toggle stays
            optically page-centered. When mode === "print" the panel drops
            out entirely (printView renders its own CTA right below this
            row — two identical CTAs stacked would read as a double-tap
            trap); the centered toggle row collapses gracefully rather than
            holding a reserved slot on that one mode. */}
        <div className="mb-8 flex flex-col items-center gap-4 print:hidden sm:block">
          <ModeToggle mode={mode} setMode={setMode} />
          {mode !== "print" && (
            <DownloadPanel
              isClient={isClient}
              PdfComponents={PdfComponents}
              pdfStatus={pdfStatus}
              onRetryPdf={loadPdfComponents}
              className="sm:absolute sm:top-1/2 sm:right-0 sm:-translate-y-1/2"
            />
          )}
        </div>

        {/* ── Active view ── */}
        {/* mode="wait" prevents overlapping layouts, but both exits stay at
            0.15s so switching tabs reads as an instant crossfade, not a
            choreographed delay on an Operate surface. */}
        <AnimatePresence mode="wait">
          {mode === "web" ? (
            <WebView />
          ) : (
            <PrintView
              isClient={isClient}
              PdfComponents={PdfComponents}
              pdfStatus={pdfStatus}
              onRetryPdf={loadPdfComponents}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  );
};

export default ResumePage;
