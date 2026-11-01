import { AnimatedSection } from "./AnimatedSection";
import { QrCode } from "lucide-react";
import { useLabels } from "@/lib/memorialLabels";
import { trackWhatsAppContact } from "@/lib/metaPixel";

export const FooterSection = () => {
  const L = useLabels();
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
            {L.rodape.texto}
          </p>

          <div className="flex items-center justify-center gap-3 mb-8">
            <QrCode className="w-5 h-5 text-gold-light/50" />
            <span className="text-primary-foreground/50 font-body text-xs">
              {L.rodape.qrcode}
            </span>
          </div>

          <a
            href={`https://wa.me/55079999258800?text=${encodeURIComponent(L.rodape.mensagemWhatsapp)}`}
            target="_blank"
            rel="noopener noreferrer"
            onMouseDown={trackWhatsAppContact}
            onTouchStart={trackWhatsAppContact}
            onClick={trackWhatsAppContact}
            className="inline-block px-8 py-3 border-2 border-gold-light/30 bg-gold-light/10 text-gold-light rounded-full font-body text-sm hover:bg-gold-light/20 hover:border-gold-light/50 transition-all font-medium shadow-sm"
          >
            {L.rodape.botao}
          </a>
        </AnimatedSection>

        <div className="mt-16 pt-6 border-t border-primary-foreground/10 space-y-2">
          <p className="text-primary-foreground/45 font-body text-[11px] sm:text-xs leading-relaxed max-w-2xl mx-auto">
            Todo o conteúdo (textos, imagens e áudios) é fornecido e publicado sob exclusiva responsabilidade e autorização declarada pelo contratante, isentando a Eternizandoo de qualquer responsabilidade civil, autoral ou pela veracidade das informações veiculadas. Todos os direitos reservados aos respectivos titulares.
          </p>
          <p className="text-primary-foreground/30 font-body text-xs">
            Memoriais Eternos © {new Date().getFullYear()} — Preservando memórias para a eternidade — Desenvolvido por Eternizandoo.
          </p>
        </div>
      </div>
    </footer>
  );
};
