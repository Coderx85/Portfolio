"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "./_components/webmodeToggle";
import WebView from "./_components/webView";
import { PrintView } from "./_components/printView";
import { PdfComponentsType } from "@/types/resume";

const ResumePage = () => {
  const [mode, setMode] = useState<"web" | "print">("web");
  const [isClient, setIsClient] = useState(false);
  const [PdfComponents, setPdfComponents] = useState<PdfComponentsType>(null);

  useEffect(() => {
    document.title = "Resume | Portfolio";
    setIsClient(true);

    Promise.all([
      import("@react-pdf/renderer"),
      import("@/components/resume/ResumePDF"),
    ]).then(([pdfRenderer, resumePdf]) => {
      setPdfComponents({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        PDFViewer: pdfRenderer.PDFViewer as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        PDFDownloadLink: pdfRenderer.PDFDownloadLink as any,
        ResumePDF: resumePdf.default,
      });
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.5, ease: "easeIn" }}
      className="flex flex-col min-h-[80vh] justify-center mx-30 py-12 xl:py-0 gap-10 mt-10 pb-16"
    >
      {/* ── Mode toggle ── */}
      <ModeToggle mode={mode} setMode={setMode} />

      {/* ── Active view ── */}
      <AnimatePresence mode="wait">
        {mode === "web" ? (
          <WebView />
        ) : (
          <PrintView isClient={isClient} PdfComponents={PdfComponents} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ResumePage;
