import heroImage from "@/assets/hero-memorial.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";
import { AnimatedSection } from "./AnimatedSection";
import ScrollIndicator from "./ScrollIndicator";
import { Cross, Star } from "lucide-react";

interface HeroSectionProps {
  nome: string;
  nascimento: string;
  falecimento: string;
  frase: string;
}

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const HeroSection = ({
  nome,
  nascimento,
  falecimento,
  frase,
}: HeroSectionProps) => {
  const scrollDown = () => {
    document.getElementById("biografia")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Memorial" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
      </div>

      {/* Top Spacer */}
      <div className="relative z-10 w-full h-20 md:h-24 shrink-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto w-full flex-1 flex flex-col items-center justify-center py-8">
        <AnimatedSection delay={0.1}>
          <div className="flex justify-center mb-6">
            <Cross className="w-8 h-8 text-gold-light opacity-80" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-gold-light text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-body">
            In Memoriam
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <div className="flex justify-center mb-6">
            <div className="relative w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-80">
              {/* Outer sacred frame */}
              <div className="absolute inset-0 rounded-[50%] border-2 border-gold-light/70 shadow-[0_0_30px_rgba(180,150,80,0.35),0_8px_24px_rgba(0,0,0,0.4)]" />
              {/* Inner frame line */}
              <div className="absolute inset-[5px] rounded-[50%] border border-gold/50" />
              {/* Photo */}
              <div className="absolute inset-[10px] rounded-[50%] overflow-hidden">
                <img src={profilePhoto} alt="Foto de perfil" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground drop-shadow-lg mb-6 leading-tight">
            {nome}
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex items-center justify-center gap-2 sm:gap-4 text-gold-light text-sm sm:text-base lg:text-lg font-body mb-8">
            <span className="flex items-center gap-2">
              <Star className="w-3 h-3 sm:w-4 sm:h-4" />
              {formatDate(nascimento)}
            </span>
            <span className="w-6 sm:w-8 h-px bg-gold-light/50" />
            <span className="flex items-center gap-2">
              <Cross className="w-3 h-3 sm:w-4 sm:h-4" />
              {formatDate(falecimento)}
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="w-16 h-0.5 bg-gold-light/40 mx-auto mb-6" />
          <p className="text-primary-foreground text-lg sm:text-xl lg:text-2xl font-body italic leading-relaxed max-w-2xl mx-auto">
            "{frase}"
          </p>
        </AnimatedSection>
      </div>

      {/* Bottom area - Scroll Indicators */}
      <div className="relative z-10 w-full pb-8 pt-4 shrink-0">
        {/* Mobile: 1 centralizado */}
        <div className="flex justify-center md:hidden">
          <button onClick={scrollDown} aria-label="Rolar para baixo">
            <ScrollIndicator />
          </button>
        </div>

        {/* Desktop: 2 nos cantos */}
        <div className="hidden md:flex justify-between px-12">
          <button onClick={scrollDown} aria-label="Rolar para baixo">
            <ScrollIndicator />
          </button>
          <button onClick={scrollDown} aria-label="Rolar para baixo">
            <ScrollIndicator />
          </button>
        </div>
      </div>
    </section>
  );
};
