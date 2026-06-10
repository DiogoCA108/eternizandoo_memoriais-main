import { AnimatedSection } from "@/components/AnimatedSection";
import { MessageCircle } from "lucide-react";

export const LandingCTA = () => {
  const whatsappNumber = "5579999258800";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre como criar um memorial do ETERNIZANDOO");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-20 md:py-32 px-4 bg-background relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-[#B07A2C]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <AnimatedSection>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Eternize as memórias da sua família
          </h2>
          <p className="text-foreground/70 text-lg md:text-xl font-body italic mb-10 max-w-2xl mx-auto">
            Fale conosco diretamente pelo WhatsApp para saber mais detalhes, conhecer os planos e criar o seu memorial.
          </p>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-medium text-lg md:text-xl transition-all duration-300 shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_25px_rgba(37,211,102,0.4)] hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
};
