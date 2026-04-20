import { AnimatedSection } from "./AnimatedSection";
import { QrCode } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="py-16 px-4 bg-foreground text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <img
            src="/logomx.png"
            alt="Logomarca Memorial"
            className="h-[132px] mx-auto mb-3"
          />
          <p className="text-primary-foreground/60 font-body text-sm leading-relaxed max-w-lg mx-auto mb-8">
            Eternize a memória de quem você ama.
            Um memorial que vai além do tempo, mantendo viva a história do
            seu ente querido — sempre acessível, de qualquer lugar, a qualquer momento.
          </p>

          <div className="flex items-center justify-center gap-3 mb-8">
            <QrCode className="w-5 h-5 text-gold-light/50" />
            <span className="text-primary-foreground/50 font-body text-xs">
              Acesse também via QR Code no local da homenagem.
            </span>
          </div>

          <a
            href="https://wa.me/55079999258800?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20Memorial%20Eterno."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-gold-light/30 bg-gold-light/10 text-gold-light rounded-full font-body text-sm hover:bg-gold-light/20 hover:border-gold-light/50 transition-all font-medium shadow-sm"
          >
            Solicitar Memorial Eterno
          </a>
        </AnimatedSection>

        <div className="mt-16 pt-6 border-t border-primary-foreground/10">
          <p className="text-primary-foreground/30 font-body text-xs">
            Memoriais Eternos © {new Date().getFullYear()} — Preservando memórias para a eternidade — Desenvolvido por Eternizandoo.
          </p>
        </div>
      </div>
    </footer>
  );
};
