import { AnimatedSection } from "@/components/AnimatedSection";
import { Cross } from "lucide-react";

export const LandingHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-background z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#B07A2C]/10 via-transparent to-transparent z-0" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <AnimatedSection delay={0.1}>
          <div className="flex justify-center mb-6">
            <Cross className="w-8 h-8 text-[#B07A2C] opacity-80" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-[#B07A2C] text-sm tracking-[0.25em] md:tracking-[0.3em] uppercase mb-4 font-body">
            ETERNIZANDOO
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6 leading-tight">
            Mantenha vivas as memórias de quem você mais ama
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="text-foreground/80 text-lg md:text-xl font-body italic leading-relaxed max-w-2xl mx-auto px-2 mb-10">
            Crie um memorial digital eterno, interativo e acessível através de um elegante QR Code físico no local de sepultamento.
          </p>
        </AnimatedSection>

      </div>
    </section>
  );
};
