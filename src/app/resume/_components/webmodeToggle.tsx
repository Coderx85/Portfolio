import { Button } from "@/components/ui/button";
import { HiOutlineComputerDesktop, HiOutlinePrinter } from "react-icons/hi2";

type TMode = "web" | "print";

export const ModeToggle = ({
  mode,
  setMode,
}: {
  mode: TMode;
  setMode: (m: TMode) => void;
}) => (
  <div className="flex items-center justify-center mb-12">
    <div className="inline-flex p-1 bg-white/5 border border-white/10 rounded-2xl">
      <Button
        onClick={() => setMode("web")}
        className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
          mode === "web"
            ? "bg-white/10 text-white shadow-xl"
            : "bg-transparent text-white/40 hover:text-white/70 hover:bg-white/5"
        }`}
      >
        <HiOutlineComputerDesktop className="text-lg" />
        Web View
      </Button>
      <Button
        onClick={() => setMode("print")}
        className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
          mode === "print"
            ? "bg-white/10 text-white shadow-xl"
            : "bg-transparent text-white/40 hover:text-white/70 hover:bg-white/5"
        }`}
      >
        <HiOutlinePrinter className="text-lg" />
        Print View
      </Button>
    </div>
  </div>
);
