import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Quote } from "lucide-react";

export const LandingObjections = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-card border-t border-[#B07A2C]/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Testimonials */}
        <AnimatedSection>
          <div>
            <h2 className="text-[#B07A2C] text-sm tracking-[0.2em] uppercase mb-3 font-body">
              Provas Sociais
            </h2>
            <h3 className="font-display text-3xl md:text-4xl text-foreground mb-10">
              O impacto de eternizar uma vida
            </h3>
            
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-[#B07A2C]/30 pb-4">
                <Quote className="absolute -left-3 top-0 w-6 h-6 text-[#B07A2C] bg-card" fill="currentColor" />
                <p className="text-foreground/80 font-body italic mb-4 text-lg">
                  "Saber que a história do meu pai está acessível a qualquer momento, e poder colocar o QR Code no túmulo, nos trouxe um conforto enorme. É um espaço de amor e saudade."
                </p>
                <p className="font-semibold text-foreground/90">— Família Oliveira</p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-[#B07A2C]/30 pb-4">
                <Quote className="absolute -left-3 top-0 w-6 h-6 text-[#B07A2C] bg-card" fill="currentColor" />
                <p className="text-foreground/80 font-body italic mb-4 text-lg">
                  "A árvore genealógica interativa e a galeria de fotos fizeram com que os netos pudessem conhecer a avó de uma forma linda. O site é muito respeitoso e elegante."
                </p>
                <p className="font-semibold text-foreground/90">— Mariana Santos</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* FAQ */}
        <AnimatedSection delay={0.2}>
          <div>
            <h2 className="text-[#B07A2C] text-sm tracking-[0.2em] uppercase mb-3 font-body">
              Dúvidas Frequentes
            </h2>
            <h3 className="font-display text-3xl md:text-4xl text-foreground mb-10">
              Perguntas e Respostas
            </h3>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-[#B07A2C]/20">
                <AccordionTrigger className="text-lg font-medium text-foreground hover:text-[#B07A2C]">
                  Como a placa com QR Code é fixada?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 font-body text-base">
                  Nossa placa é confeccionada em material de altíssima durabilidade, resistente a sol e chuva. Ela já acompanha uma fita dupla-face 3M de grau industrial no verso, projetada especificamente para pedras, mármores e granitos, tornando a fixação rápida, limpa e permanente.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-[#B07A2C]/20">
                <AccordionTrigger className="text-lg font-medium text-foreground hover:text-[#B07A2C]">
                  O memorial dura para sempre?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 font-body text-base">
                  Sim. O ETERNIZANDOO se compromete a manter a infraestrutura de servidores e hospedagem vitalícia para garantir que a história do seu ente querido permaneça acessível às futuras gerações.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-[#B07A2C]/20">
                <AccordionTrigger className="text-lg font-medium text-foreground hover:text-[#B07A2C]">
                  Quem pode ver ou editar o memorial?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 font-body text-base">
                  A visualização do memorial é pública para celebrar a vida e o legado (ideal para quem escaneia o QR Code). No entanto, toda a edição, adição de fotos e aprovação de novas homenagens é restrita ao administrador da família, através de acesso seguro.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-[#B07A2C]/20">
                <AccordionTrigger className="text-lg font-medium text-foreground hover:text-[#B07A2C]">
                  Quais tipos de arquivo posso colocar no memorial?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 font-body text-base">
                  Você pode adicionar textos biográficos, fotos de diferentes épocas para a linha do tempo e galeria, além de incluir o link para vídeos e configurar as músicas que marcaram a vida da pessoa para a trilha sonora.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </AnimatedSection>
        
      </div>
    </section>
  );
};
