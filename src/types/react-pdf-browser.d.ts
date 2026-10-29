// The package has no "exports" map (plain CJS with a `browser` field), so
// this deep import of the browser bundle is valid at runtime. Turbopack
// normally resolves the `browser` field for client builds automatically,
// but its synthesized namespace can come through without the PDF view
// components — this declaration makes the deterministic fallback typecheck.
declare module "@react-pdf/renderer/lib/react-pdf.browser.js" {
  import type * as Renderer from "@react-pdf/renderer";

  export const PDFViewer: typeof Renderer.PDFViewer;
  export const PDFDownloadLink: typeof Renderer.PDFDownloadLink;
  const pdfLib: typeof Renderer;
  export default pdfLib;
}
