import { memoriais } from "@/data/memoriais";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";

export const LandingMarquee = () => {
  // Filter and map real memorials
  const memorialList = Object.values(memoriais).filter(
    (m) => m && m.profilePhoto && m.nome_completo && m.slug !== "16km"
  );

  // Quadruplicate the list for seamless infinite smooth scrolling
  const quadruplicatedList = [
    ...memorialList,
    ...memorialList,
    ...memorialList,
    ...memorialList,
  ];

  return (
    <section id="marquee" className="py-14 md:py-20 bg-background border-t border-[#B07A2C]/15 overflow-hidden">
      <AnimatedSection>
        <div className="text-center mb-8 md:mb-10 px-4">
          <h2 className="text-[#B07A2C] text-xs md:text-sm tracking-[0.2em] uppercase mb-2 font-body font-semibold">
            Galeria de Memoriais
          </h2>
          <p className="font-display text-2xl md:text-3xl font-semibold text-foreground">
            Preservando Histórias para a Eternidade
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Fading edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] transition-all duration-300">
            {quadruplicatedList.map((m, index) => (
              <Link
                key={`${m.slug}-${index}`}
                to={`/memorial/${m.slug}`}
                className="group flex flex-col items-center mx-4 md:mx-6 transition-transform duration-300 hover:scale-105"
              >
                {/* Oval Avatar with proportional golden ratio frame */}
                <div className="relative w-28 h-36 md:w-36 md:h-48 mb-3">
                  <div className="absolute inset-0 rounded-[50%] border-2 border-[#B07A2C]/35 group-hover:border-[#B07A2C]/75 shadow-[0_0_12px_rgba(176,122,44,0.12)] group-hover:shadow-[0_0_22px_rgba(176,122,44,0.32)] transition-all duration-300" />
                  <div className="absolute inset-[3px] rounded-[50%] border border-[#B07A2C]/25 group-hover:border-[#B07A2C]/50 transition-colors duration-300" />
                  <div className="absolute inset-[6px] rounded-[50%] overflow-hidden">
                    <img
                      src={m.profilePhoto}
                      alt={m.nome_completo}
                      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                
                <h3 className="font-display text-sm md:text-base text-foreground/90 group-hover:text-[#B07A2C] transition-colors text-center max-w-[140px] md:max-w-[160px] leading-tight font-medium">
                  {m.nome_completo}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};
