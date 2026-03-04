import { memoriais } from "@/data/memoriais";
import { MemorialNav } from "@/components/MemorialNav";
import { HeroSection } from "@/components/HeroSection";
import { BiographySection } from "@/components/BiographySection";
import { HabitsSection } from "@/components/HabitsSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { MusicSection } from "@/components/MusicSection";
import { FamilyTreeSection } from "@/components/FamilyTreeSection";
import { TimelineSection } from "@/components/TimelineSection";
import { TributesSection } from "@/components/TributesSection";
import { LocationSection } from "@/components/LocationSection";
import { FooterSection } from "@/components/FooterSection";
import { SectionDivider } from "@/components/SectionDivider";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Cross } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MemorialNav />

      {/* Hero + divider at end */}
      <div>
        <HeroSection
          heroImage={memoriais["joao"].heroImage}
          profilePhoto={memoriais["joao"].profilePhoto}
          nome={memoriais["joao"].nome_completo}
          nascimento={memoriais["joao"].data_nascimento}
          falecimento={memoriais["joao"].data_falecimento}
          frase={memoriais["joao"].frase_homenagem}
        />
        <SectionDivider />
      </div>

      {/* bg-card (light) - Biografia + divider */}
      <div className="bg-card">
        <BiographySection texto={memoriais["joao"].texto_biografico} />
        <SectionDivider />
      </div>

      {/* bg-background (default) - Hábitos + divider */}
      <div className="bg-background">
        <HabitsSection habitos={memoriais["joao"].habitos} />
        <SectionDivider />
      </div>

      {/* bg-card (light) - Galeria (divider inside component) */}
      <div id="galeria" className="bg-card">
        <PhotoGallery
          photos={memoriais["joao"].galeria.map((g) => ({ src: g.url, caption: g.legenda }))}
          visibleCount={7}
          title="Galeria de Memórias"
          subtitle="Momentos eternos"
        />
      </div>

      {/* bg-background (default) - Músicas + divider */}
      <div className="bg-background">
        <MusicSection musicas={memoriais["joao"].musicas} />
        <SectionDivider />
      </div>

      {/* bg-card (light) - Árvore + divider */}
      <div className="bg-card">
        <FamilyTreeSection membros={memoriais["joao"].arvore_genealogica} />
        <SectionDivider />
      </div>

      {/* bg-background (default) - Timeline + divider */}
      <div className="bg-background">
        <TimelineSection eventos={memoriais["joao"].linha_tempo} />
        <SectionDivider />
      </div>

      {/* bg-card (light) - Homenagens + divider */}
      <div id="homenagens" className="bg-card">
        <TributesSection homenagens={memoriais["joao"].homenagens} />
        <SectionDivider />
      </div>

      {/* bg-background (default) - Localização */}
      <div className="bg-background">
        <LocationSection localizacao={memoriais["joao"].localizacao_tumulo} />
      </div>

      {/* Family Dedication */}
      <AnimatedSection>
        <div className="py-16 text-center bg-background">
          <Cross className="w-5 h-5 text-primary/40 mx-auto mb-4" />
          <p className="font-display text-xl md:text-2xl text-foreground/70 italic">
            Com amor eterno, a família Silva
          </p>
        </div>
      </AnimatedSection>

      <FooterSection />
    </div>
  );
};

export default Index;
