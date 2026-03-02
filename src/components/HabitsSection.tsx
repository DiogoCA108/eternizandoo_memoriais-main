import { AnimatedSection } from "./AnimatedSection";
import { useState } from "react";
import { Coffee, UtensilsCrossed, Heart, Quote, Fingerprint } from "lucide-react";

interface Habito {
  tipo: string;
  descricao: string;
}

interface HabitsSectionProps {
  habitos: Habito[];
}

const categories = [
  { key: "bebida", label: "Bebidas", icon: Coffee },
  { key: "comida", label: "Comidas", icon: UtensilsCrossed },
  { key: "habito", label: "Hábitos", icon: Heart },
  { key: "frase", label: "Frases", icon: Quote },
];

export const HabitsSection = ({ habitos }: HabitsSectionProps) => {
  const [active, setActive] = useState("bebida");
  const filtered = habitos.filter((h) => h.tipo === active);

  return (
    <section className="memorial-section">
      <div className="memorial-container">
        <AnimatedSection>
          <div className="flex justify-center mb-3">
            <Fingerprint className="w-7 h-7 text-primary/60" />
          </div>
          <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-2 font-body">
            Pequenos detalhes
          </p>
          <h2 className="section-title">Hábitos, Manias e Frases</h2>
          <div className="section-divider" />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mt-10 mb-10">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-body transition-all duration-300 ${
                    active === cat.key
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        <div className="space-y-4 max-w-2xl mx-auto">
          {filtered.map((h, i) => (
            <AnimatedSection key={`${active}-${i}`} delay={i * 0.1}>
              <div className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border/50">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <p className={`text-foreground/80 font-body ${h.tipo === "frase" ? "italic text-lg" : "text-base"}`}>
                  {h.descricao}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
