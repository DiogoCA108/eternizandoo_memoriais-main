
import { AnimatedSection } from "./AnimatedSection";
import ScrollIndicator from "./ScrollIndicator";
import { Cross } from "lucide-react";

interface HeroSectionProps {
  nome: string;
  nascimento: string;
  falecimento: string;
  frase: string;
  heroImage: string;
  profilePhoto: string;
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
  heroImage,
  profilePhoto,
}: HeroSectionProps) => {
  const scrollDown = () => {
    document.getElementById("biografia")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-x-hidden py-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Memorial"
          className="w-full h-full object-cover saturate-80 brightness-95 contrast-105"
        />
        {/* Camada dourada geral */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#d6b98c]/35 via-[#d6b98c]/15 to-[#d6b98c]/15" />
        {/* Camada escura apenas no topo ok */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/5 to-transparent" />
      </div>
      {/* Content perfeitamente centralizado como no Projeto B de Design */}
      <div className="relative z-10 text-center px-4 max-w-3xl my-auto">
        <AnimatedSection delay={0.1}>
          <div className="flex justify-center mb-3">
            <Cross className="w-8 h-8 text-gold-light opacity-80" />
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="text-gold-light/100 text-sm tracking-[0.3em] uppercase mb-10 font-body">
            In Memoriam
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.25}>
          <div className="flex justify-center mb-10">
            <div className="relative w-56 h-72 md:w-64 md:h-80 scale-[1.15]">
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
        {/* O título aqui agora usa os exatos mesmos tamanhos elegantes do Projeto de Design */}
        <AnimatedSection delay={0.3}>
          <h1 className="font-display text-3xl md:text-5xl font-semibold text-foreground drop-shadow-lg mb-3 leading-tight my-0 lg:text-5xl">
            {nome}
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <div className="flex items-center justify-center gap-4 text-[#1C3A5C] text-base md:text-lg font-body mb-4 drop-shadow-lg">
            <span className="flex items-center gap-2">
              <span className="text-base md:text-xl font-light">☆</span>
              {formatDate(nascimento)}
            </span>
            <span className="w-8 h-0.5 bg-[#1C3A5C]/70" />
            <span className="flex items-center gap-2">
              <span className="text-base md:text-xl text-[#1C3A5C] font-light">†</span>
              {formatDate(falecimento)}
            </span>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.5}>
          <div className="w-16 h-0 bg-white/40 mx-auto mb-6" />
          <p className="text-white/95 text-xl md:text-2xl font-body italic leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
            "{frase}"
          </p>
        </AnimatedSection>
      </div>
      {/* Scroll Indicator - Mobile: 1 centralizado */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex md:hidden justify-center">
        <button onClick={scrollDown} aria-label="Rolar para baixo">
          <ScrollIndicator />
        </button>
      </div>
      {/* Scroll Indicator - Desktop: Nos cantos como no Design Aprovado */}
      <div className="absolute bottom-3 left-0 right-0 z-10 hidden md:flex justify-center">
        <button onClick={scrollDown} aria-label="Rolar para baixo" className="text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)] opacity-100 hover:opacity-100 transition-opacity duration-300">
          <ScrollIndicator />
        </button>
      </div>
    </section>
  );
};
