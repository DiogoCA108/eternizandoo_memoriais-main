import { AnimatedSection } from "./AnimatedSection";
import { BookOpen } from "lucide-react";

interface BiographySectionProps {
  texto: string;
}

export const BiographySection = ({ texto }: BiographySectionProps) => {
  const paragraphs = texto.split("\n\n");

  return (
    <section id="biografia" className="memorial-section bg-card">
      <div className="memorial-container">
        <AnimatedSection>
          <div className="flex justify-center mb-3">
            <BookOpen className="w-7 h-7 text-primary/60" />
          </div>
          <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-2 font-body">
            Uma vida de amor
          </p>
          <h2 className="section-title">História de Vida bbbg kkkkkkkk</h2>
          <div className="section-divider" />
        </AnimatedSection>

        <div className="mt-12 space-y-6">
          {paragraphs.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <p className="text-foreground/80 text-base md:text-lg leading-relaxed font-body">
                {p}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
