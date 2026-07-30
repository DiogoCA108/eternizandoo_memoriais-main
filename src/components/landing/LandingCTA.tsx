import { AnimatedSection } from "@/components/AnimatedSection";
import { MessageCircle } from "lucide-react";

export const LandingCTA = () => {
  const whatsappNumber = "5579999258800";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre como criar um memorial do ETERNIZANDOO");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-8 md:py-12 px-4 bg-background relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-48 bg-[#B07A2C]/5 rounded-full blur-[80px] pointer-events-none" />
      
      <AnimatedSection>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-foreground/85 text-sm sm:text-base md:text-xl font-body italic mb-6 max-w-xl mx-auto leading-relaxed">
            Fale conosco diretamente pelo WhatsApp para saber mais detalhes.
          </p>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-7 py-3.5 md:px-9 md:py-4 rounded-full font-medium text-base md:text-lg transition-all duration-300 shadow-[0_6px_18px_rgba(37,211,102,0.3)] hover:shadow-[0_10px_22px_rgba(37,211,102,0.4)] hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
};
