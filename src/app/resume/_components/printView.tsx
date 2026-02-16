import { motion } from "framer-motion";
import { HiArrowDownTray } from "react-icons/hi2";
import { PdfComponentsType } from "@/types";

export const PrintView = ({
  isClient,
  PdfComponents,
}: {
  isClient: boolean;
  PdfComponents: PdfComponentsType;
}) => (
  <motion.div
    key="print"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="flex flex-col items-center gap-8 w-full"
  >
    {/* Download button */}
    <div className="flex items-center justify-center">
      {isClient && PdfComponents ? (
        <PdfComponents.PDFDownloadLink
          document={<PdfComponents.ResumePDF />}
          fileName="Priyanshu_Resume.pdf"
        >
          {({ loading }) => (
            <span className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold bg-[#C44536] text-white hover:bg-[#a83a2e] transition-all duration-300 cursor-pointer shadow-lg shadow-[#C44536]/20">
              <HiArrowDownTray className="w-4 h-4" />
              {loading ? "Preparing…" : "Download PDF"}
            </span>
          )}
        </PdfComponents.PDFDownloadLink>
      ) : (
        <span className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold bg-[#C44536]/50 text-white/50 cursor-wait shadow-lg">
          <HiArrowDownTray className="w-4 h-4" />
          Loading…
        </span>
      )}
    </div>

    {/* PDF Viewer */}
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.15 }}
      className="w-full max-w-4xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40"
      style={{ height: "80vh" }}
    >
      {isClient && PdfComponents ? (
        <PdfComponents.PDFViewer
          width="100%"
          height="100%"
          showToolbar={true}
          style={{ border: "none" }}
        >
          <PdfComponents.ResumePDF />
        </PdfComponents.PDFViewer>
      ) : (
        <div className="flex items-center justify-center h-full bg-white/5">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
            <p className="text-white/40 text-sm">Building PDF…</p>
          </div>
        </div>
      )}
    </motion.div>
  </motion.div>
);
