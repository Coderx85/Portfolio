import { motion } from "framer-motion";
import { HiArrowDownTray, HiArrowPath } from "react-icons/hi2";
import { PdfComponentsType } from "@/types";
import { printPanelId, printTabId } from "./webmodeToggle";

// Shared transition with WebView so the AnimatePresence "wait" swap reads as a
// fast crossfade instead of a choreographed delay.
const tabSwap = { duration: 0.15, ease: "easeInOut" } as const;

export const PrintView = ({
  isClient,
  PdfComponents,
  pdfStatus,
  onRetryPdf,
}: {
  isClient: boolean;
  PdfComponents: PdfComponentsType;
  pdfStatus: "loading" | "ready" | "error";
  onRetryPdf: () => void;
}) => (
  // Labeled region so assistive tech can jump straight to the PDF destination.
  <motion.div
    key="print"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={tabSwap}
    // Pane of the mode toggle's WAI-APG tabs pattern (see webmodeToggle);
    // tabpanels are more accurate than a region here since selecting the
    // "PDF View" tab is exactly what makes this pane visible.
    role="tabpanel"
    id={printPanelId}
    aria-labelledby={printTabId}
    className="flex flex-col items-center gap-8 w-full"
  >
    {/* Download button */}
    <div className="flex items-center justify-center">
      {/* role="status" is an implicit polite live region that holds only the
          CTA's loading/ready/error state — never the 80vh viewer canvas. The
          shared loader error is surfaced here (not just in the viewer) so the
          download area can't sit on a dim "Loading…" forever. */}
      <div role="status" className="flex flex-col items-center gap-3">
        {pdfStatus === "error" ? (
          <div className="flex flex-col items-center gap-3 px-6 text-center">
            <p className="text-white/80 text-sm">
              Couldn&apos;t prepare the PDF.
            </p>
            <button
              onClick={onRetryPdf}
              className="inline-flex items-center gap-2 px-5 py-3 min-h-11 rounded-xl text-sm font-semibold text-white bg-white/10 border border-white/15 hover:bg-white/15 hover:border-accent/50 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(22,100,102,0.55)] focus-visible:border-accent"
            >
              <HiArrowPath className="w-4 h-4" />
              Retry
            </button>
            <p className="text-white/60 text-xs">
              Or press Cmd/Ctrl+P to print this page directly.
            </p>
          </div>
        ) : isClient && PdfComponents ? (
          <PdfComponents.PDFDownloadLink
            document={<PdfComponents.ResumePDF />}
            fileName="Priyanshu_Resume.pdf"
          >
            {({ loading }) => (
              <span className="inline-flex items-center gap-2 px-7 py-3 min-h-11 rounded-xl text-sm font-semibold text-white bg-white/10 border border-white/15 hover:bg-white/15 hover:border-accent/50 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(22,100,102,0.55)] focus-visible:border-accent">
                <HiArrowDownTray className="w-4 h-4" />
                {loading ? "Preparing…" : "Download PDF"}
              </span>
            )}
          </PdfComponents.PDFDownloadLink>
        ) : (
          <span className="inline-flex items-center gap-2 px-7 py-3 min-h-11 rounded-xl text-sm font-semibold bg-white/5 text-white/50 border border-white/10 cursor-wait">
            <HiArrowDownTray className="w-4 h-4" />
            Loading…
          </span>
        )}
      </div>
    </div>

    {/* PDF Viewer */}
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ...tabSwap, delay: 0 }}
      className="w-full max-w-4xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40"
      style={{ height: "80vh" }}
    >
      {/* Screen-reader status only: announces the loading → ready/error
          transition of the viewer area. Kept as a small sr-only region so
          the 80vh canvas itself is never inside a live region (huge live
          regions cause duplicated/verbose announcements). */}
      <p role="status" className="sr-only">
        {isClient && PdfComponents && pdfStatus === "ready"
          ? "PDF viewer ready."
          : pdfStatus === "error"
            ? "Couldn't prepare the PDF."
            : "Building PDF…"}
      </p>
      <div className="w-full h-full">
        {isClient && PdfComponents && pdfStatus !== "error" ? (
          <PdfComponents.PDFViewer
            width="100%"
            height="100%"
            showToolbar={true}
            style={{ border: "none" }}
          >
            <PdfComponents.ResumePDF />
          </PdfComponents.PDFViewer>
        ) : pdfStatus === "error" ? (
          <div className="flex items-center justify-center h-full bg-white/5">
            <div className="flex flex-col items-center gap-3 px-6 text-center">
              <p className="text-white/80 text-sm">
                Couldn&apos;t prepare the PDF.
              </p>
              <button
                onClick={onRetryPdf}
                className="inline-flex items-center gap-2 px-5 py-3 min-h-11 rounded-xl text-sm font-semibold text-white bg-white/10 border border-white/15 hover:bg-white/15 hover:border-accent/50 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(22,100,102,0.55)] focus-visible:border-accent"
              >
                <HiArrowPath className="w-4 h-4" />
                Retry
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full bg-white/5">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
              <p className="text-white/70 text-sm">Building PDF…</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  </motion.div>
);
