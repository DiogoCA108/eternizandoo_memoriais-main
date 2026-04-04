import { Sparkles } from "lucide-react";

interface SectionDividerProps {
  overlap?: boolean;
  className?: string;
}

export const SectionDivider = ({ overlap = true, className = "" }: SectionDividerProps) => {
  return (
    <div className={`flex items-center justify-center py-0 ${overlap ? "-my-px" : "my-0"} relative z-10 ${className}`}>
      <div className="flex-1 max-w-[180px] h-[3px] bg-gradient-to-r from-transparent to-primary/50" />
      <div className="mx-5">
        <Sparkles className="w-7 h-7 text-primary/50" />
      </div>
      <div className="flex-1 max-w-[180px] h-[3px] bg-gradient-to-l from-transparent to-primary/50" />
    </div>
  );
};
