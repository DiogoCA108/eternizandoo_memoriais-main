import { AnimatedSection } from "./AnimatedSection";
import { QrCode, Cross } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="py-16 px-4 bg-foreground text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <Cross className="w-6 h-6 text-gold-light/60 mx-auto mb-6" />

          <h3 className="font-display text-2xl text-primary-foreground/90 mb-4">Memorial Eterno</h3>
          <p className="text-primary-foreground/60 font-body text-sm leading-relaxed max-w-lg mx-auto mb-8">
            Eternize a memória de quem você ama. Com o Memorial Além do Tempo,
            a história de vida do seu ente querido estará sempre acessível — de qualquer lugar, a qualquer momento —
            através de um simples QR Code.
          </p>

          <div className="flex items-center justify-center gap-3 mb-8">
            <QrCode className="w-5 h-5 text-gold-light/50" />
            <span className="text-primary-foreground/50 font-body text-xs">
              Acesse via QR Code no local de homenagem
            </span>
          </div>

          <button className="px-8 py-3 border border-gold-light/30 text-gold-light rounded-full font-body text-sm hover:bg-gold-light/10 transition-colors">
            Solicitar Memorial Eterno
          </button>
        </AnimatedSection>

        <div className="mt-16 pt-6 border-t border-primary-foreground/10">
          <p className="text-primary-foreground/30 font-body text-xs">
            Memorial Além do Tempo © {new Date().getFullYear()} — Preservando memórias para a eternidade
          </p>
        </div>
      </div>
    </footer>
  );
};
