import { AnimatedSection } from "@/components/AnimatedSection";
import { LandingVideo } from "./LandingVideo";
import { ChevronDown } from "lucide-react";

export const LandingHero = () => {
  const scrollToNext = () => {
    const personasSection = document.getElementById("personas");
    if (personasSection) {
      personasSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col items-center text-center pb-2 sm:pb-4 overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-background z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#B07A2C]/10 via-transparent to-transparent z-0 pointer-events-none" />

      {/* Top Banner / Faixa Azul (Mesma cor do rodapé `bg-foreground` para alto contraste) */}
      <div className="w-full bg-foreground py-1.5 sm:py-2 px-4 border-b border-[#B07A2C]/30 shadow-lg flex justify-center items-center z-20 shrink-0">
        <img
          src="/logomx.png"
          alt="Logo Eternizandoo - Memoriais Eternos"
          className="h-10 sm:h-14 md:h-16 w-auto object-contain drop-shadow-md"
        />
      </div>

      {/* Center Container for First Fold Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center w-full px-4 pt-1.5 sm:pt-3">
        {/* Headline */}
        <AnimatedSection delay={0.1}>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-2 sm:mb-3 leading-tight max-w-3xl px-1">
            Mantenha vivas as memórias de quem você mais ama
          </h1>
        </AnimatedSection>

        {/* Subheadline */}
        <AnimatedSection delay={0.2}>
          <p className="text-foreground/85 text-sm sm:text-base md:text-xl font-body italic leading-relaxed max-w-xl mx-auto px-2 mb-2.5 sm:mb-4">
            Crie um memorial digital eterno e acessível através de um elegante QR Code físico no local do túmulo.
          </p>
        </AnimatedSection>

        {/* Video Player within First Fold */}
        <AnimatedSection delay={0.3} className="w-full flex justify-center">
          <LandingVideo />
        </AnimatedSection>
      </div>

      {/* Scroll indicator effect at the bottom of hero */}
      <div
        onClick={scrollToNext}
        className="relative z-10 flex flex-col items-center cursor-pointer group mt-2 sm:mt-3 pt-0.5 hover:opacity-100 transition-opacity"
      >
        <span className="text-[10px] sm:text-xs font-body tracking-wider uppercase text-foreground/60 group-hover:text-[#B07A2C] transition-colors mb-0.5">
          Deslize para ver mais
        </span>
        <ChevronDown className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#B07A2C] animate-bounce" />
      </div>
    </section>
  );
};
