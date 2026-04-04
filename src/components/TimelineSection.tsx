import { AnimatedSection } from "./AnimatedSection";
import { Hourglass } from "lucide-react";

interface TimelineEvent {
  titulo_evento: string;
  data_evento?: string;
  descricao: string;
  ordem: number;
}

interface TimelineSectionProps {
  eventos: TimelineEvent[];
}

const formatYear = (dateStr?: string) => {
  if (!dateStr) return "";
  return new Date(dateStr + "T12:00:00").getFullYear().toString();
};

export const TimelineSection = ({ eventos }: TimelineSectionProps) => {
  const sorted = [...eventos].sort((a, b) => a.ordem - b.ordem);

  return (
    <section className="memorial-section pb-0">
      <div className="memorial-container">
        <AnimatedSection>
          <div className="flex justify-center mb-3">
            <Hourglass className="w-7 h-7 text-primary/60" />
          </div>
          <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-2 font-body">
            Uma jornada de vida
          </p>
          <h2 className="section-title">Linha do Tempo</h2>
          <div className="section-divider" />
        </AnimatedSection>

        <div className="mt-12 max-w-2xl mx-auto relative">
          {/* Central line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {sorted.map((event, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10 shadow-sm" />

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  {event.data_evento && (
                    <span className="text-primary text-xl md:text-2xl font-display font-bold">
                      {formatYear(event.data_evento)}
                    </span>
                  )}
                  <h3 className="font-display text-lg text-foreground mt-1">{event.titulo_evento}</h3>
                  <p className="text-muted-foreground text-sm font-body mt-2 leading-relaxed">{event.descricao}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
