import { AnimatedSection } from "./AnimatedSection";
import { User, Heart, Users, Network, Cross } from "lucide-react";

interface FamilyMember {
  nome: string;
  relacao: string;
  parentesco?: "memorial" | "conjuge" | "ambos";
}

interface FamilyTreeSectionProps {
  membros: FamilyMember[];
  nomeMemorial?: string;
  generoMemorial?: "M" | "F";
}

const groupConfigs = {
  avos: { key: "avos", label: "Avós", icon: User, filter: (m: FamilyMember) => m.relacao.toLowerCase().includes("avô") || m.relacao.toLowerCase().includes("avó") || m.relacao.toLowerCase().includes("avo") },
  pais: { key: "pais", label: "Pais", icon: User, filter: (m: FamilyMember) => m.relacao === "pai" || m.relacao === "mae" || m.relacao === "mãe" },
  irmaos: { key: "irmaos", label: "Irmãos", icon: Users, filter: (m: FamilyMember) => m.relacao === "irmão" || m.relacao === "irmã" || m.relacao === "irmao" || m.relacao === "irma" },
  filhos: { key: "filhos", label: "Filhos", icon: Users, filter: (m: FamilyMember) => m.relacao === "filho" || m.relacao === "filha" },
  netos: { key: "netos", label: "Netos", icon: Users, filter: (m: FamilyMember) => m.relacao === "neto" || m.relacao === "neta" },
  bisnetos: { key: "bisnetos", label: "Bisnetos", icon: Users, filter: (m: FamilyMember) => m.relacao === "bisneto" || m.relacao === "bisneta" },
};

const getInitials = (name: string) => {
  if (!name) return "M";
  const parts = name.split(" ").filter(w => w.length > 2);
  if (parts.length === 0) return name.substring(0, 1).toUpperCase();
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const getFirstName = (name: string) => {
  if (!name) return "Memorial";
  return name.split(" ")[0];
};

export const FamilyTreeSection = ({ membros, nomeMemorial = "Maria Helena", generoMemorial = "F" }: FamilyTreeSectionProps) => {
  const conjuge = membros.find((m) => m.relacao.toLowerCase() === "conjuge" || m.relacao.toLowerCase() === "cônjuge");

  // Se o memorial for de um homem, a cor da linhagem dele é Azul e o da esposa é Dourado
  const isMemorialMan = generoMemorial === "M";

  const memorialBadgeColorClass = isMemorialMan ? "bg-navy" : "bg-[#C4A476]";
  const conjugeBadgeColorClass = isMemorialMan ? "bg-[#C4A476]" : "bg-slate-400 dark:bg-slate-500";

  const memorialCardColorClass = isMemorialMan ? "from-navy to-[#253954] shadow-navy/30" : "gold-gradient shadow-[0_0_15px_rgba(180,150,80,0.3)]";

  const getHeritageVisuals = (m: FamilyMember) => {
    if (!m.parentesco) {
      return { bg: "bg-primary/10 border-primary/30 group-hover:bg-primary/20", icon: "text-primary/80 group-hover:text-primary", badge: null };
    }

    switch (m.parentesco) {
      case "memorial":
        return {
          bg: "bg-primary/20 border-primary/50 group-hover:bg-primary/30 group-hover:shadow-[0_0_15px_rgba(180,150,80,0.4)]",
          icon: "text-primary font-bold",
          badge: <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${memorialBadgeColorClass} border-[1.5px] border-background shadow-sm`} title="Geração direta do Memorial" />
        };
      case "conjuge":
        return {
          bg: "bg-slate-200 border-slate-300 group-hover:bg-slate-300 dark:bg-slate-800 dark:border-slate-600",
          icon: "text-slate-500 dark:text-slate-400",
          badge: <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${conjugeBadgeColorClass} border-[1.5px] border-background shadow-sm`} title="Geração do Cônjuge" />
        };
      case "ambos":
      default:
        return {
          bg: "bg-primary/10 border-primary/30 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(180,150,80,0.25)]",
          icon: "text-primary/80 group-hover:text-primary",
          badge: (
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex -space-x-1.5 shadow-sm" title="Geração de ambos">
              <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${memorialBadgeColorClass} border-[1.5px] border-background z-10`} />
              <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${conjugeBadgeColorClass} border-[1.5px] border-background`} />
            </div>
          )
        };
    }
  };

  return (
    <section className="memorial-section bg-card overflow-hidden">
      <div className="memorial-container">
        <AnimatedSection>
          <div className="flex justify-center mb-3">
            <Network className="w-7 h-7 text-primary/60" />
          </div>
          <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-2 font-body">
            Raízes de amor
          </p>
          <h2 className="section-title">Árvore Genealógica</h2>
          <div className="section-divider" />
        </AnimatedSection>

        <div className="mt-8 md:mt-12 max-w-2xl mx-auto px-2">
          {/* Pre-memorial groups */}
          {[groupConfigs.avos, groupConfigs.pais, groupConfigs.irmaos].map((config) => {
            if (!membros.some(config.filter)) return null;
            return (
              <div key={config.key}>
                {renderGroup(membros, config, 0, getHeritageVisuals)}
                <div className="flex justify-center">
                  <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-primary/20 via-primary/60 to-transparent" />
                </div>
              </div>
            );
          })}

          {/* Memorial person + Spouse */}
          <AnimatedSection delay={0.15}>
            <div className="flex flex-row justify-center items-center gap-1 sm:gap-6 my-2 w-full max-w-full">
              {/* Profile Card */}
              <div className="flex-1 w-full max-w-[220px] text-center p-3 sm:p-5 bg-background rounded-xl border-2 border-primary/30 shadow-lg shadow-primary/5 relative z-10 transition-transform duration-500 hover:scale-[1.02]">
                <div className={`w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 relative ${memorialCardColorClass}`}>
                  <span className="text-white font-display text-base sm:text-lg">{getInitials(nomeMemorial)}</span>
                  <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${memorialBadgeColorClass} border-[1.5px] border-background shadow-sm`} title="Legenda de Linhagem (Principal)" />
                </div>
                <p className="font-display text-foreground font-semibold text-xs sm:text-base leading-tight">{getFirstName(nomeMemorial)}</p>
                <div className="flex items-center justify-center gap-1 sm:gap-1.5 mt-1">
                  <Cross className="w-3 h-3 text-primary/50" />
                  <p className="text-muted-foreground text-[9px] sm:text-xs font-body">In Memoriam</p>
                </div>
              </div>

              {conjuge && (
                <>
                  {/* Expressive Connector */}
                  <div className="flex items-center gap-1 sm:gap-2 px-1 sm:px-0">
                    <div className="w-3 sm:w-8 h-[1.5px] bg-gradient-to-r from-transparent to-primary/70" />
                    <Heart className="w-3 h-3 sm:w-5 sm:h-5 text-primary fill-primary/40 animate-pulse drop-shadow-md" />
                    <div className="w-3 sm:w-8 h-[1.5px] bg-gradient-to-l from-transparent to-primary/70" />
                  </div>

                  {/* Spouse Card */}
                  <div className="flex-1 w-full max-w-[200px] text-center p-3 sm:p-4 bg-background rounded-xl border-2 border-primary/20 shadow-md shadow-primary/5 relative overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-3 border border-primary/30 shadow-inner relative z-10">
                      <Heart className="w-4 h-4 sm:w-7 sm:h-7 text-primary/80" />
                      <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${conjugeBadgeColorClass} border-[1.5px] border-background shadow-sm`} title="Legenda de Linhagem (Cônjuge)" />
                    </div>
                    <p className="font-display text-foreground text-xs sm:text-base leading-tight relative z-10">{conjuge.nome}</p>
                    <p className="text-muted-foreground text-[9px] sm:text-xs font-body mt-1 relative z-10">Cônjuge</p>
                  </div>
                </>
              )}
            </div>
          </AnimatedSection>

          {/* Post-memorial groups */}
          {[groupConfigs.filhos, groupConfigs.netos, groupConfigs.bisnetos].map((config, idx) => {
            if (!membros.some(config.filter)) return null;
            return (
              <div key={config.key}>
                <div className="flex justify-center">
                  <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-transparent via-primary/60 to-primary/20" />
                </div>
                {renderGroup(membros, config, 0.2 + idx * 0.1, getHeritageVisuals)}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

function renderGroup(
  membros: FamilyMember[],
  config: { key: string; label: string; icon: any; filter: (m: FamilyMember) => boolean },
  baseDelay: number,
  getHeritageVisuals: (m: FamilyMember) => any
) {
  const items = membros.filter(config.filter);
  if (items.length === 0) return null;
  const Icon = config.icon;

  return (
    <AnimatedSection delay={baseDelay}>
      <div className="text-center mb-4 sm:mb-6">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-transparent via-primary/20 to-transparent border-y border-primary/20 shadow-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          <Icon className="w-4 h-4 text-primary relative z-10" />
          <span className="text-primary text-xs font-body font-bold tracking-widest uppercase relative z-10">
            {config.label}
          </span>
        </div>
      </div>
      <div className="flex justify-center gap-3 sm:gap-6 flex-wrap mb-2">
        {items.map((m) => {
          const visuals = getHeritageVisuals(m);
          return (
            <div key={m.nome} className="text-center p-2 sm:p-4 min-w-[80px] sm:min-w-[100px] relative group transition-transform duration-300 hover:-translate-y-1 cursor-default">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center mx-auto mb-2 transition-all duration-300 relative ${visuals.bg}`}>
                <User className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${visuals.icon}`} />
                {visuals.badge}
              </div>
              <p className="font-display text-foreground text-xs sm:text-sm font-medium">{m.nome}</p>
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
