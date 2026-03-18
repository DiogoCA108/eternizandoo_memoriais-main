import { AnimatedSection } from "./AnimatedSection";
import { User, Heart, Users, Network, Cross } from "lucide-react";

interface FamilyMember {
  nome: string;
  relacao: string;
}

interface FamilyTreeSectionProps {
  membros: FamilyMember[];
}

const groupConfig = [
  { key: "pais", label: "Pais", icon: User, filter: (m: FamilyMember) => m.relacao === "pai" || m.relacao === "mae" },
  { key: "filhos", label: "Filhos", icon: Users, filter: (m: FamilyMember) => m.relacao === "filho" },
];

export const FamilyTreeSection = ({ membros }: FamilyTreeSectionProps) => {
  const conjuge = membros.find((m) => m.relacao === "conjuge");

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
          {/* Parents group */}
          {renderGroup(membros, groupConfig[0], 0)}

          {/* Connector */}
          <div className="flex justify-center">
            <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-primary/20 via-primary/60 to-transparent" />
          </div>

          {/* Memorial person + Spouse */}
          <AnimatedSection delay={0.15}>
            <div className="flex flex-row justify-center items-center gap-1 sm:gap-6 my-2 w-full max-w-full">
              {/* Profile Card */}
              <div className="flex-1 w-full max-w-[220px] text-center p-3 sm:p-5 bg-background rounded-xl border-2 border-primary/30 shadow-lg shadow-primary/5 relative z-10 transition-transform duration-500 hover:scale-[1.02]">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-[0_0_15px_rgba(180,150,80,0.3)]">
                  <span className="text-primary-foreground font-display text-base sm:text-lg">MH</span>
                </div>
                <p className="font-display text-foreground font-semibold text-xs sm:text-base leading-tight">Maria Helena</p>
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
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-3 border border-primary/30 shadow-inner">
                      <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-primary/80" />
                    </div>
                    <p className="font-display text-foreground text-xs sm:text-base leading-tight relative z-10">{conjuge.nome}</p>
                    <p className="text-muted-foreground text-[9px] sm:text-xs font-body mt-1 relative z-10">Cônjuge</p>
                  </div>
                </>
              )}
            </div>
          </AnimatedSection>

          {/* Connector */}
          <div className="flex justify-center">
            <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-transparent via-primary/60 to-primary/20" />
          </div>

          {/* Children group */}
          {renderGroup(membros, groupConfig[1], 0.2)}
        </div>
      </div>
    </section>
  );
};

function renderGroup(
  membros: FamilyMember[],
  config: typeof groupConfig[number],
  baseDelay: number
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
        {items.map((m, i) => (
          <div key={m.nome} className="text-center p-2 sm:p-4 min-w-[80px] sm:min-w-[100px] relative group transition-transform duration-300 hover:-translate-y-1 cursor-default">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(180,150,80,0.25)] transition-all duration-300">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-primary/80 group-hover:text-primary transition-colors" />
            </div>
            <p className="font-display text-foreground text-xs sm:text-sm font-medium">{m.nome}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
