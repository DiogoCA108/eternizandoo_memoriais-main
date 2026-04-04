import { AnimatedSection } from "./AnimatedSection";
import { BookOpen } from "lucide-react";

interface BiographySectionProps {
  texto: string;
  titulo?: string;
  subtitulo?: string;
}

export const BiographySection = ({
  texto,
  titulo = "História de Vida",
  subtitulo = "Uma vida de amor"
}: BiographySectionProps) => {
  const paragraphs = texto.split("\n\n");

  return (
    <section id="biografia" className="memorial-section bg-card">
      <div className="memorial-container">
        <AnimatedSection>
          <div className="flex justify-center mb-3">
            <BookOpen className="w-7 h-7 text-primary/60" />
          </div>
          <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-2 font-body">
            {subtitulo}
          </p>
          <h2 className="section-title">{titulo}</h2>
          <div className="section-divider" />
        </AnimatedSection>

        <div className="mt-12 space-y-6">
          {paragraphs.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <p className="text-foreground text-base md:text-lg leading-relaxed font-body text-center">
                {p}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
