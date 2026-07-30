import { memoriais } from "@/data/memoriais";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const LandingPersonas = () => {
  // 4 representative personas ordered: Manoel, Marizete, Marlos, Júcia
  const personas = [
    { data: memoriais["000002_manoel_fv4ffc"] },
    { data: memoriais["000008_marizete_g85guy"] },
    { data: memoriais["000006_marlos_c8tagv"] },
    { data: memoriais["000005_jucia_48qk95"] },
  ];

  return (
    <section id="personas" className="pt-4 pb-6 md:py-10 bg-card border-y border-[#B07A2C]/15 relative">
      <div className="max-w-4xl mx-auto px-3">
        {/* Titulo e Subtitulo Renderizados Instantaneamente (Sem efeito de surgimento) */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-2 sm:mb-3">
            Conheça alguns memoriais
          </h2>
          <p className="text-foreground/85 font-body italic text-sm sm:text-base md:text-xl max-w-xl mx-auto leading-relaxed">
            Navegue pelos exemplos abaixo e veja como a memória de quem você ama poderá ser eternizada de forma personalizada.
          </p>
        </div>

        {/* Grade 2x2 de Personas - Exibição Instantânea sem Animação de Scroll */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto">
          {personas.map((persona, index) => {
            if (!persona.data) return null;
            return (
              <div key={index}>
                <Link
                  to={`/memorial/${persona.data.slug}`}
                  className="group relative flex flex-col items-center p-4 sm:p-6 rounded-2xl bg-background border border-[#B07A2C]/20 hover:border-[#B07A2C]/60 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  {/* Foto de Perfil Oval Aumentada Proporcionalmente */}
                  <div className="relative w-28 h-36 sm:w-36 sm:h-48 mb-3.5">
                    <div className="absolute inset-0 rounded-[50%] border-2 border-[#B07A2C]/40 group-hover:border-[#B07A2C]/80 shadow-[0_0_12px_rgba(176,122,44,0.15)] group-hover:shadow-[0_0_22px_rgba(176,122,44,0.35)] transition-all duration-300" />
                    <div className="absolute inset-[3px] rounded-[50%] border border-[#B07A2C]/25" />
                    <div className="absolute inset-[5px] rounded-[50%] overflow-hidden">
                      <img
                        src={persona.data.profilePhoto}
                        alt={persona.data.nome_completo}
                        className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  </div>

                  {/* Nome da Pessoa */}
                  <h3 className="font-display text-sm sm:text-base md:text-lg font-semibold text-foreground/90 group-hover:text-[#B07A2C] transition-colors text-center mb-3 leading-snug">
                    {persona.data.nome_completo}
                  </h3>

                  {/* Botão Ver Memorial */}
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-body font-medium text-[#B07A2C] group-hover:text-foreground transition-colors pt-2 border-t border-[#B07A2C]/15 w-full justify-center">
                    <span>Ver Memorial</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
