import { AnimatedSection } from "./AnimatedSection";
import { useState } from "react";
import { MessageCircle, X, Heart } from "lucide-react";

interface Homenagem {
  nome: string;
  vinculo: string;
  mensagem: string;
  data: string;
}

interface TributesSectionProps {
  homenagens: Homenagem[];
}

export const TributesSection = ({ homenagens }: TributesSectionProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ nome: "", vinculo: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado pela sua homenagem. Ela será revisada e publicada em breve.");
    setFormData({ nome: "", vinculo: "", mensagem: "" });
    setModalOpen(false);
  };




  return (
    <section className="memorial-section bg-card">
      <div className="memorial-container">
        <AnimatedSection>
          <div className="flex justify-center mb-3">
            <Heart className="w-7 h-7 text-primary/60" />
          </div>
          <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-2 font-body">
            Palavras de amor
          </p>
          <h2 className="section-title">Mensagens e Homenagens</h2>
          <div className="section-divider" />
        </AnimatedSection>

        <div className="mt-12 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {homenagens.map((h, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="p-6 bg-background rounded-lg border border-border/50 flex flex-col h-full shadow-md shadow-foreground/5">
                <p className="text-foreground/80 font-body italic leading-relaxed flex-1">
                  "{h.mensagem}"
                </p>
                {/* Separator line */}
                <div className="w-full h-px bg-border/60 my-4" />
                <div>
                  <p className="font-display text-foreground text-sm font-semibold">{h.nome}</p>
                  <p className="text-muted-foreground text-xs font-body">{h.vinculo}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Box inspired by reference */}
        <AnimatedSection delay={0.3}>
          <div className="max-w-md mx-auto mt-12 p-8 bg-background rounded-xl border-2 border-primary/20 text-center shadow-lg shadow-foreground/5">
            <div className="flex justify-center mb-4">
              <MessageCircle className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-1">Deixe sua Homenagem</h3>
            <p className="text-muted-foreground font-body text-sm mb-6">
              Compartilhe suas memórias e mensagens de carinho
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-md font-body text-sm hover:bg-primary/90 transition-colors shadow-md"
            >
              Escrever Mensagem
            </button>
          </div>
        </AnimatedSection>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/60 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl p-8 max-w-md w-full relative shadow-2xl">
            <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-display text-2xl text-foreground mb-2">Deixe sua homenagem</h3>
            <p className="text-muted-foreground font-body text-sm mb-6">
              Compartilhe uma mensagem em memória de Maria Helena.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-body text-foreground mb-1 block">Nome *</label>
                <input
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="text-sm font-body text-foreground mb-1 block">Vínculo *</label>
                <input
                  required
                  value={formData.vinculo}
                  onChange={(e) => setFormData({ ...formData, vinculo: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Ex: Amigo, Sobrinha, Vizinho"
                />
              </div>
              <div>
                <label className="text-sm font-body text-foreground mb-1 block">Mensagem *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  placeholder="Escreva sua mensagem de homenagem..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-body text-sm hover:bg-primary/90 transition-colors"
              >
                Enviar homenagem
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
