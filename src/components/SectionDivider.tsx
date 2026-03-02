import { Sparkles } from "lucide-react";

export const SectionDivider = () => {
  return (
    <div className="flex items-center justify-center py-0 -my-px relative z-10">
      <div className="flex-1 max-w-[180px] h-[3px] bg-gradient-to-r from-transparent to-primary/50" />
      <div className="mx-5">
        <Sparkles className="w-7 h-7 text-primary/50" />
      </div>
      <div className="flex-1 max-w-[180px] h-[3px] bg-gradient-to-l from-transparent to-primary/50" />
    </div>
  );
};
