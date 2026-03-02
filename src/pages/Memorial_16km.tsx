import { memorialData_16km } from "@/data/memoriais/memorialData_16km";
import { MemorialNav } from "@/components/MemorialNav";
import { HeroSection_16km } from "@/components/HeroSection_16km";
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

const Memorial_16km = () => {
    return (
        <div className="min-h-screen bg-background">
            <MemorialNav />

            {/* Hero + divider at end */}
            <div>
                <HeroSection_16km
                    nome={memorialData_16km.nome_completo}
                    nascimento={memorialData_16km.data_nascimento}
                    falecimento={memorialData_16km.data_falecimento}
                    frase={memorialData_16km.frase_homenagem}
                />
                <SectionDivider />
            </div>

            {/* bg-card (light) - Biografia + divider */}
            <div className="bg-card">
                <BiographySection texto={memorialData_16km.texto_biografico} />
                <SectionDivider />
            </div>

            {/* bg-background (default) - Hábitos + divider */}
            <div className="bg-background">
                <HabitsSection habitos={memorialData_16km.habitos} />
                <SectionDivider />
            </div>

            {/* bg-card (light) - Galeria (divider inside component) */}
            <div id="galeria" className="bg-card">
                <PhotoGallery
                    photos={memorialData_16km.galeria.map((g) => ({ src: g.url, caption: g.legenda }))}
                    visibleCount={7}
                    title="Galeria de Memórias"
                    subtitle="Momentos eternos"
                />
            </div>

            {/* bg-background (default) - Músicas + divider */}
            <div className="bg-background">
                <MusicSection musicas={memorialData_16km.musicas} />
                <SectionDivider />
            </div>

            {/* bg-card (light) - Árvore + divider */}
            <div className="bg-card">
                <FamilyTreeSection membros={memorialData_16km.arvore_genealogica} />
                <SectionDivider />
            </div>

            {/* bg-background (default) - Timeline + divider */}
            <div className="bg-background">
                <TimelineSection eventos={memorialData_16km.linha_tempo} />
                <SectionDivider />
            </div>

            {/* bg-card (light) - Homenagens + divider */}
            <div id="homenagens" className="bg-card">
                <TributesSection homenagens={memorialData_16km.homenagens} />
                <SectionDivider />
            </div>

            {/* bg-background (default) - Localização */}
            <div className="bg-background">
                <LocationSection localizacao={memorialData_16km.localizacao_tumulo} />
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

export default Memorial_16km;