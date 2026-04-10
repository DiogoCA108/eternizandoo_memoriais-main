import { AnimatedSection } from "./AnimatedSection";
import { useState, useEffect } from "react";
import { MessageCircle, X, MessageCircleHeart } from "lucide-react";

interface Homenagem {
  nome: string;
  vinculo: string;
  mensagem: string;
  data: string;
}

interface TributesSectionProps {
  homenagens: Homenagem[];
  slug: string;
}

export const TributesSection = ({ homenagens, slug }: TributesSectionProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ nome: "", vinculo: "", mensagem: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [homenagensExternas, setHomenagensExternas] = useState<Homenagem[]>([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoading, setIsLoading] = useState(true);

  // Busca homenagens aprovadas ao carregar
  useEffect(() => {
    const fetchHomenagens = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://script.google.com/macros/s/AKfycby9MgQ866FyD0cUGyGKM9MwiktTbSQdbMNgCdUIczjygRmM-93OAM4JOUFAn_4IBAyK/exec?slug=${slug}`);
        const data = await response.json();
        if (data.status === "success") {
          setHomenagensExternas(data.data);
        }
      } catch (error) {
        console.error("Erro ao carregar homenagens externas:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHomenagens();
  }, [slug]);

  // Junta as mensagens fixas com as mensagens da planilha
  const todasHomenagens = [...homenagens, ...homenagensExternas];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycby9MgQ866FyD0cUGyGKM9MwiktTbSQdbMNgCdUIczjygRmM-93OAM4JOUFAn_4IBAyK/exec", {
        method: "POST",
        mode: "no-cors", // Necessário para Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          slug: slug,
        }),
      });

      // Como o Google Apps Script redireciona (302) e o fetch no-cors não permite ler o corpo,
      // assumimos sucesso se não houver erro de rede no modo no-cors.
      setIsSuccess(true);
      setFormData({ nome: "", vinculo: "", mensagem: "" });

    } catch (error) {
      console.error("Erro ao enviar homenagem:", error);
      alert("Ocorreu um erro ao enviar sua homenagem. Por favor, tente novamente mais tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };




  return (
    <section className="memorial-section bg-card">
      <div className="memorial-container">
        <AnimatedSection>
          <div className="flex justify-center mb-3">
            <MessageCircleHeart className="w-7 h-7 text-primary/60" />
          </div>
          <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-2 font-body">
            Palavras de carinho
          </p>
          <h2 className="section-title">Mensagens e Homenagens</h2>
          <div className="section-divider" />
        </AnimatedSection>

        <div className="mt-12 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {todasHomenagens.slice(0, visibleCount).map((h, i) => (
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

        {isLoading ? (
          <div className="flex justify-center mt-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
              <span className="text-xs font-body text-primary/60">Buscando mensagens...</span>
            </div>
          </div>
        ) : visibleCount < todasHomenagens.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="px-6 py-2 bg-primary/10 border-2 border-primary/30 text-primary rounded-full text-sm font-body font-medium hover:bg-primary/20 transition-all shadow-sm"
            >
              Ver mais mensagens...
            </button>
          </div>
        )}

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

      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/60 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl p-8 max-w-md w-full relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setModalOpen(false);
                setTimeout(() => setIsSuccess(false), 300);
              }}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageCircleHeart className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2 font-bold">Homenagem enviada!</h3>
                <p className="text-muted-foreground font-body text-sm mb-8">
                  Obrigado por compartilhar suas memórias. Sua mensagem passará por uma análise de carinho e <span className="text-foreground font-semibold">aparecerá no memorial assim que for aprovada</span>.
                </p>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    setTimeout(() => setIsSuccess(false), 300);
                  }}
                  className="w-full py-3 bg-primary/10 border-2 border-primary/30 text-primary rounded-lg font-body text-sm font-medium hover:bg-primary/20 transition-all shadow-sm"
                >
                  Entendi, fechar
                </button>
              </div>
            ) : (
              <div>
                <h3 className="font-display text-2xl text-foreground mb-2">Deixe sua homenagem</h3>
                <p className="text-muted-foreground font-body text-sm mb-6">
                  Compartilhe uma mensagem em memória de Maria Helena.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-body text-foreground mb-1 block">Nome *</label>
                    <input
                      required
                      disabled={isSubmitting}
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-50"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-body text-foreground mb-1 block">Vínculo *</label>
                    <input
                      required
                      disabled={isSubmitting}
                      value={formData.vinculo}
                      onChange={(e) => setFormData({ ...formData, vinculo: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-50"
                      placeholder="Ex: Amigo, Sobrinha, Vizinho"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-body text-foreground mb-1 block">Mensagem *</label>
                    <textarea
                      required
                      disabled={isSubmitting}
                      rows={4}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none disabled:opacity-50"
                      placeholder="Escreva sua mensagem de homenagem..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-body text-sm hover:bg-primary/90 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Enviar homenagem"
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
