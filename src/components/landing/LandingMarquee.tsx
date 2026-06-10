import { memoriais } from "@/data/memoriais";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";

export const LandingMarquee = () => {
  // Filter and map real memorials
  const memorialList = Object.values(memoriais).filter(
    (m) => m && m.profilePhoto && m.nome_completo && m.slug !== "16km"
  );

  // Duplicate the list for seamless infinite scrolling
  const duplicatedList = [...memorialList, ...memorialList, ...memorialList];

  return (
    <section className="py-16 md:py-24 bg-card border-y border-[#B07A2C]/10 overflow-hidden">
      <AnimatedSection>
        <div className="text-center mb-10 px-4">
          <h2 className="text-[#B07A2C] text-sm tracking-[0.2em] uppercase mb-2 font-body">
            Exemplos de Memoriais
          </h2>
          <p className="font-display text-2xl md:text-3xl text-foreground">
            Conheça histórias de quem já eternizou sua trajetória
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Fading edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] transition-all duration-300">
            {duplicatedList.map((m, index) => (
              <Link
                key={`${m.slug}-${index}`}
                to={`/memorial/${m.slug}`}
                className="group flex flex-col items-center mx-4 md:mx-8 transition-transform duration-300 hover:scale-105"
              >
                {/* Oval Avatar shaped like the HeroSection profile */}
                <div className="relative w-32 h-40 md:w-40 md:h-52 mb-4">
                  {/* Outer frame */}
                  <div className="absolute inset-0 rounded-[50%] border-2 border-gold-light/40 group-hover:border-gold-light/70 shadow-[0_0_15px_rgba(180,150,80,0.1)] group-hover:shadow-[0_0_20px_rgba(180,150,80,0.3)] transition-all duration-300" />
                  {/* Inner frame line */}
                  <div className="absolute inset-[4px] rounded-[50%] border border-gold/30 group-hover:border-gold/60 transition-colors duration-300" />
                  {/* Photo */}
                  <div className="absolute inset-[8px] rounded-[50%] overflow-hidden">
                    <img
                      src={m.profilePhoto}
                      alt={m.nome_completo}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                
                <h3 className="font-display text-lg text-foreground/90 group-hover:text-gold-light transition-colors text-center max-w-[150px] leading-tight">
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
