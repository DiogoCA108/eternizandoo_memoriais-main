import { AnimatedSection } from "./AnimatedSection";
import { MapPin, Clock, ExternalLink } from "lucide-react";

interface LocationData {
  endereco: string;
  horario_visita?: string;
  link_maps: string;
  foto_url?: string;
}

interface LocationSectionProps {
  localizacao: LocationData;
}

export const LocationSection = ({ localizacao }: LocationSectionProps) => {
  return (
    <section className="memorial-section">
      <div className="memorial-container">
        <AnimatedSection>
          <div className="flex justify-center mb-3">
            <MapPin className="w-7 h-7 text-primary/60" />
          </div>
          <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-2 font-body">
            Um lugar para visitar
          </p>
          <h2 className="section-title">Localização do Túmulo</h2>
          <div className="section-divider" />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-12 max-w-xl mx-auto bg-card rounded-xl border border-border/50 overflow-hidden">
            {/* Map placeholder */}
            <div className="h-48 bg-gradient-to-br from-sage/20 to-primary/10 flex items-center justify-center">
              <MapPin className="w-12 h-12 text-primary/40" />
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground font-body text-sm">{localizacao.endereco}</p>
              </div>

              {localizacao.horario_visita && (
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground font-body text-sm">{localizacao.horario_visita}</p>
                </div>
              )}

              <a
                href={localizacao.link_maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-body text-sm hover:bg-primary/90 transition-colors mt-2"
              >
                <ExternalLink className="w-4 h-4" />
                Ver no Google Maps
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
