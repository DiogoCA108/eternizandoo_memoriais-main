import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { MapPin, Clock, ExternalLink, X, ZoomIn } from "lucide-react";

interface LocationData {
  endereco: string;
  horario_visita?: string;
  link_maps: string;
  foto_url?: string;
  query_mapa?: string;
  detalhe?: string;
}

interface LocationSectionProps {
  localizacao: LocationData;
}

export const LocationSection = ({ localizacao }: LocationSectionProps) => {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

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
          <div className={`mt-12 mx-auto bg-card rounded-xl border border-border/50 overflow-hidden flex flex-col ${localizacao.foto_url ? 'md:flex-row max-w-5xl shadow-sm' : 'max-w-xl'}`}>

            {/* Imagem do local (Se houver) */}
            {localizacao.foto_url && (
              <div
                className="w-full md:w-5/12 h-64 md:h-auto shrink-0 relative bg-muted/30 cursor-pointer overflow-hidden group"
                onClick={() => setIsPhotoOpen(true)}
              >
                <img
                  src={localizacao.foto_url}
                  alt="Foto do local"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay hover para indicar clique */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-4 h-4" />
                    <span className="text-sm font-medium font-body">Ampliar</span>
                  </div>
                </div>
              </div>
            )}

            {/* Divisor vertical no Desktop (opcional para dar respiro) / Linha horizontal no mobile */}
            {localizacao.foto_url && (
              <div className="w-full h-[1px] md:w-[1px] md:h-auto bg-border/40 shrink-0" />
            )}

            {/* Coluna do Mapa e Informações */}
            <div className={`flex flex-col ${localizacao.foto_url ? 'w-full md:w-7/12 bg-white/40' : 'w-full'}`}>

              {/* O Google Maps Embed com um pouquinho de borda arredondada se tiver foto para separar visualmente */}
              <div className={`w-full overflow-hidden ${localizacao.foto_url ? 'p-4 pb-0' : ''}`}>
                <iframe
                  title="Mapa de localização"
                  width="100%"
                  className={`h-64 sm:h-72 border-0 ${localizacao.foto_url ? 'rounded-lg border border-border/30 shadow-sm' : ''}`}
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(localizacao.query_mapa || localizacao.endereco)}&output=embed`}
                />
              </div>

              <div className={`space-y-4 flex-1 ${localizacao.foto_url ? 'p-6 pt-5' : 'p-6'}`}>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground font-body text-sm leading-relaxed">{localizacao.endereco}</p>
                </div>

                {localizacao.horario_visita && (
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground font-body text-sm leading-relaxed">{localizacao.horario_visita}</p>
                  </div>
                )}

                {localizacao.detalhe && (
                  <div className="flex items-start gap-3 bg-primary/5 p-3 rounded-lg border border-primary/10">
                    <p className="text-foreground/80 font-body text-xs leading-relaxed">
                      <strong>Observação:</strong> {localizacao.detalhe}
                    </p>
                  </div>
                )}

                <div className="pt-2">
                  <a
                    href={localizacao.link_maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-body text-sm hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver no Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Lightbox / Imagem em Tela Cheia */}
      {isPhotoOpen && localizacao.foto_url && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
          style={{ backgroundColor: "hsla(var(--foreground) / 0.95)" }}
          onClick={() => setIsPhotoOpen(false)}
        >
          {/* Botão de Fechar */}
          <button
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsPhotoOpen(false);
            }}
            aria-label="Fechar"
          >
            <X className="w-7 h-7 text-primary-foreground" />
          </button>

          {/* Imagem Principal */}
          <div
            className="max-w-4xl w-full mx-4 text-center animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={localizacao.foto_url}
              alt="Foto do local ampliada"
              className="max-h-[75vh] w-auto mx-auto rounded-lg shadow-2xl object-contain"
            />
            <p className="text-primary-foreground/80 mt-4 font-body italic text-sm md:text-base">
              Foto do Túmulo
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
