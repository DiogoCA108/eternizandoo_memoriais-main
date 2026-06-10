import { AnimatedSection } from "@/components/AnimatedSection";
import { Play } from "lucide-react";

export const LandingVideo = () => {
  return (
    <section className="relative px-4 pb-16 md:pb-24 max-w-5xl mx-auto">
      <AnimatedSection delay={0.5}>
        <div className="relative w-full aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(180,150,80,0.15),0_15px_60px_rgba(0,0,0,0.5)] border border-[#B07A2C]/20 group cursor-pointer bg-black">
          {/* Placeholder for video thumbnail */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]" />
          
          {/* Glassmorphism play button wrapper */}
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-2" fill="currentColor" />
            </div>
          </div>
          
          <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
            <p className="text-white/80 text-sm md:text-base font-body tracking-wider uppercase drop-shadow-md">
              Veja como funciona
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};
