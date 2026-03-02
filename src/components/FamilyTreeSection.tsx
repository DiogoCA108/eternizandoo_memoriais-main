import { AnimatedSection } from "./AnimatedSection";
import { User, Heart, Users, GitBranch, Cross } from "lucide-react";

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
    <section className="memorial-section bg-card">
      <div className="memorial-container">
        <AnimatedSection>
          <div className="flex justify-center mb-3">
            <GitBranch className="w-7 h-7 text-primary/60" />
          </div>
          <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-2 font-body">
            Raízes de amor
          </p>
          <h2 className="section-title">Árvore Genealógica</h2>
          <div className="section-divider" />
        </AnimatedSection>

        <div className="mt-12 max-w-2xl mx-auto">
          {/* Parents group */}
          {renderGroup(membros, groupConfig[0], 0)}

          {/* Connector */}
          <div className="flex justify-center">
            <div className="w-px h-8 bg-border" />
          </div>

          {/* Memorial person + Spouse */}
          <AnimatedSection delay={0.15}>
            <div className="flex justify-center items-center gap-6 my-2">
              <div className="text-center p-5 bg-background rounded-xl border-2 border-primary/20 shadow-lg shadow-foreground/5">
                <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-display text-lg">MH</span>
                </div>
                <p className="font-display text-foreground font-semibold">Maria Helena</p>
                <div className="flex items-center justify-center gap-1.5 mt-1">
                  <Cross className="w-3 h-3 text-primary/50" />
                  <p className="text-muted-foreground text-xs font-body">In Memoriam</p>
                </div>
              </div>
              {conjuge && (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-px bg-primary/30" />
                    <Heart className="w-4 h-4 text-primary/50" />
                    <div className="w-8 h-px bg-primary/30" />
                  </div>
                  <div className="text-center p-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-7 h-7 text-primary" />
                    </div>
                    <p className="font-display text-foreground text-sm md:text-base">{conjuge.nome}</p>
                    <p className="text-muted-foreground text-xs font-body mt-1">Cônjuge</p>
                  </div>
                </>
              )}
            </div>
          </AnimatedSection>

          {/* Connector */}
          <div className="flex justify-center">
            <div className="w-px h-8 bg-border" />
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
      <div className="text-center mb-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full">
          <Icon className="w-4 h-4 text-primary" />
          <span className="text-primary text-xs font-body font-semibold tracking-wide uppercase">
            {config.label}
          </span>
        </div>
      </div>
      <div className="flex justify-center gap-6 flex-wrap mb-2">
        {items.map((m, i) => (
          <div key={m.nome} className="text-center p-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <User className="w-6 h-6 text-primary" />
            </div>
            <p className="font-display text-foreground text-sm">{m.nome}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
