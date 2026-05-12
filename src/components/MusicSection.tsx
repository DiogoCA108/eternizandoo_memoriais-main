import { AnimatedSection } from "./AnimatedSection";
import { Music, Headphones, Play, Pause } from "lucide-react";

interface TrilhaSonora {
  titulo: string;
  descricao?: string;
  url_audio: string;
}

interface Musica {
  titulo: string;
  artista: string;
  contexto?: string;
}

interface MusicSectionProps {
  trilhaSonora?: TrilhaSonora;
  musicas?: Musica[];
  isPlaying?: boolean;
  onToggleSoundtrack?: () => void;
}

export const MusicSection = ({ trilhaSonora, musicas, isPlaying, onToggleSoundtrack }: MusicSectionProps) => {
  const hasTrilhaSonora = trilhaSonora && trilhaSonora.titulo;
  const hasMusicas = musicas && musicas.length > 0;

  if (!hasTrilhaSonora && !hasMusicas) return null;

  return (
    <section className="memorial-section">
      <div className="memorial-container">
        <AnimatedSection>
          <div className="flex justify-center mb-3">
            <Music className="w-7 h-7 text-primary/60" />
          </div>
          <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-2 font-body">
            Melodias da alma
          </p>
          <h2 className="section-title">Trilha Sonora e Canções</h2>
          <div className="section-divider" />
        </AnimatedSection>

        <div className="mt-8 max-w-xl mx-auto space-y-6">
          {/* TRILHA SONORA */}
          {hasTrilhaSonora && (
            <AnimatedSection delay={0.1}>
              <div className="bg-card border border-border shadow-sm rounded-xl p-5 sm:p-6 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="flex items-center gap-2.5 mb-3">
                  <Headphones className="w-4 h-4 text-primary/80" />
                  <h3 className="font-display text-lg sm:text-xl text-foreground font-medium">
                    Trilha sonora deste memorial
                  </h3>
                </div>
                
                <div className="mb-4">
                  <p className="font-display text-[15px] sm:text-base text-foreground font-semibold mb-0.5">
                    {trilhaSonora.titulo}
                  </p>
                  {trilhaSonora.descricao && (
                    <p className="text-muted-foreground/90 font-body text-xs sm:text-[13px] leading-snug">
                      {trilhaSonora.descricao}
                    </p>
                  )}
                </div>

                {onToggleSoundtrack && (
                  <div className="flex justify-center mt-4">
                    <button 
                      onClick={onToggleSoundtrack}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all shadow-sm ${
                        isPlaying 
                          ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                          : "bg-primary/10 hover:bg-primary/20 text-primary"
                      }`}
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-4 h-4" />
                          Pausar trilha sonora
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" />
                          Ouvir trilha sonora
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </AnimatedSection>
          )}

          {hasTrilhaSonora && hasMusicas && (
            <div className="flex justify-center py-2">
              <div className="w-full max-w-[200px] h-[1px] bg-border/60" />
            </div>
          )}

          {/* LISTA DE MÚSICAS */}
          {hasMusicas && (
            <div className="space-y-4">
              <AnimatedSection delay={0.2}>
                <div className="flex items-center justify-center gap-3 mb-5 px-2 text-center">
                  <Music className="w-5 h-5 text-primary/80" />
                  <h3 className="font-display text-xl sm:text-2xl text-foreground font-medium">
                    Músicas que marcaram sua história
                  </h3>
                </div>
              </AnimatedSection>

              <div className="space-y-2.5">
                {musicas.map((m, i) => (
                  <AnimatedSection key={i} delay={0.3 + i * 0.1}>
                    <div className="flex items-center gap-3.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-card border border-border shadow-sm hover:border-primary/30 hover:shadow-md transition-all group">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-primary/10 text-primary/70 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                        <Music className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2">
                          <p className="text-foreground font-display text-[15px] sm:text-[17px] font-medium truncate">
                            {m.titulo}
                          </p>
                          <p className="text-muted-foreground font-body text-xs sm:text-sm truncate">
                            — {m.artista}
                          </p>
                        </div>
                        {m.contexto && (
                          <p className="text-muted-foreground/80 font-body text-[11px] sm:text-xs italic mt-0.5 leading-snug">
                            {m.contexto}
                          </p>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
