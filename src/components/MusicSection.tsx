import { AnimatedSection } from "./AnimatedSection";
import { Music, Play, Pause } from "lucide-react";
import { useState } from "react";

interface Musica {
  titulo: string;
  url_player: string;
}

interface MusicSectionProps {
  musicas: Musica[];
}

const extractAuthor = (titulo: string) => {
  const parts = titulo.split("—").map((s) => s.trim());
  if (parts.length === 2) return { name: parts[0], author: parts[1] };
  const parts2 = titulo.split("-").map((s) => s.trim());
  if (parts2.length === 2) return { name: parts2[0], author: parts2[1] };
  return { name: titulo, author: "" };
};

export const MusicSection = ({ musicas }: MusicSectionProps) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const togglePlay = (index: number) => {
    setPlayingIndex((prev) => (prev === index ? null : index));
  };

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
          <h2 className="section-title">Canções que Marcaram sua História</h2>
          <div className="section-divider" />
        </AnimatedSection>

        <div className="mt-12 max-w-xl mx-auto space-y-3">
          {musicas.map((m, i) => {
            const { name, author } = extractAuthor(m.titulo);
            const isPlaying = playingIndex === i;

            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className={`flex items-center gap-4 p-5 rounded-xl border transition-all duration-300 cursor-pointer group ${
                    isPlaying
                      ? "bg-primary/5 border-primary/40 shadow-[0_0_15px_rgba(180,150,80,0.15)]"
                      : "bg-card border-border/50 hover:border-primary/30"
                  }`}
                  onClick={() => togglePlay(i)}
                >
                  {/* Icon circle */}
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isPlaying ? "bg-primary/20" : "bg-primary/10 group-hover:bg-primary/15"
                    }`}
                  >
                    <Music className="w-5 h-5 text-primary" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground font-display text-base truncate">{name}</p>
                    {author && (
                      <p className="text-muted-foreground font-body text-xs mt-0.5 truncate">{author}</p>
                    )}
                  </div>

                  {/* Play/Pause button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay(i);
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isPlaying
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                    aria-label={isPlaying ? "Pausar" : "Tocar"}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4 ml-0.5" />
                    )}
                  </button>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
