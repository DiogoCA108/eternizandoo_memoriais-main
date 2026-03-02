import { memorialData_Joao } from "@/data/memoriais/memorialData_Joao";
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
                    nome={memorialData_Joao.nome_completo}
                    nascimento={memorialData_Joao.data_nascimento}
                    falecimento={memorialData_Joao.data_falecimento}
                    frase={memorialData_Joao.frase_homenagem}
                />
                <SectionDivider />
            </div>

            {/* bg-card (light) - Biografia + divider */}
            <div className="bg-card">
                <BiographySection texto={memorialData_Joao.texto_biografico} />
                <SectionDivider />
            </div>

            {/* bg-background (default) - Hábitos + divider */}
            <div className="bg-background">
                <HabitsSection habitos={memorialData_Joao.habitos} />
                <SectionDivider />
            </div>

            {/* bg-card (light) - Galeria (divider inside component) */}
            <div id="galeria" className="bg-card">
                <PhotoGallery
                    photos={memorialData_Joao.galeria.map((g) => ({ src: g.url, caption: g.legenda }))}
                    visibleCount={7}
                    title="Galeria de Memórias de João"
                    subtitle="Momentos eternos"
                />
            </div>

            {/* bg-background (default) - Músicas + divider */}
            <div className="bg-background">
                <MusicSection musicas={memorialData_Joao.musicas} />
                <SectionDivider />
            </div>

            {/* bg-card (light) - Árvore + divider */}
            <div className="bg-card">
                <FamilyTreeSection membros={memorialData_Joao.arvore_genealogica} />
                <SectionDivider />
            </div>

            {/* bg-background (default) - Timeline + divider */}
            <div className="bg-background">
                <TimelineSection eventos={memorialData_Joao.linha_tempo} />
                <SectionDivider />
            </div>

            {/* bg-card (light) - Homenagens + divider */}
            <div id="homenagens" className="bg-card">
                <TributesSection homenagens={memorialData_Joao.homenagens} />
                <SectionDivider />
            </div>

            {/* bg-background (default) - Localização */}
            <div className="bg-background">
                <LocationSection localizacao={memorialData_Joao.localizacao_tumulo} />
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
