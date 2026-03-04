import { useParams, Navigate } from "react-router-dom";
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

const MemorialPage = () => {
    const { slug } = useParams();

    // Se não passar slug ou o memorial não existir, redireciona para o 404
    if (!slug || !memoriais[slug]) {
        return <Navigate to="/404" replace />;
    }

    const data = memoriais[slug];

    return (
        <div className="min-h-screen bg-background">
            <MemorialNav />

            {/* Hero + divider at end */}
            <div>
                <HeroSection
                    heroImage={data.heroImage}
                    profilePhoto={data.profilePhoto}
                    nome={data.nome_completo}
                    nascimento={data.data_nascimento}
                    falecimento={data.data_falecimento}
                    frase={data.frase_homenagem}
                />
                <SectionDivider />
            </div>

            {/* bg-card (light) - Biografia + divider */}
            <div className="bg-card">
                <BiographySection
                    texto={data.texto_biografico}
                    titulo={data.biografia_titulo}
                    subtitulo={data.biografia_subtitulo}
                />
                <SectionDivider />
            </div>

            {/* bg-background (default) - Hábitos + divider */}
            {data.habitos.length > 0 && (
                <div className="bg-background">
                    <HabitsSection habitos={data.habitos} />
                    <SectionDivider />
                </div>
            )}

            {/* bg-card (light) - Galeria (divider inside component) */}
            {data.galeria.length > 0 && (
                <div id="galeria" className="bg-card">
                    <PhotoGallery
                        photos={data.galeria.map((g) => ({ src: g.url, caption: g.legenda }))}
                        visibleCount={7}
                        title={`Galeria de Memórias`}
                        subtitle="Momentos eternos"
                    />
                </div>
            )}

            {/* bg-background (default) - Músicas + divider */}
            {data.musicas.length > 0 && (
                <div className="bg-background">
                    <MusicSection musicas={data.musicas} />
                    <SectionDivider />
                </div>
            )}

            {/* bg-card (light) - Árvore + divider */}
            {data.arvore_genealogica.length > 0 && (
                <div className="bg-card">
                    <FamilyTreeSection membros={data.arvore_genealogica} />
                    <SectionDivider />
                </div>
            )}

            {/* bg-background (default) - Timeline + divider */}
            {data.linha_tempo.length > 0 && (
                <div className="bg-background">
                    <TimelineSection eventos={data.linha_tempo} />
                    <SectionDivider />
                </div>
            )}

            {/* bg-card (light) - Homenagens + divider */}
            {data.homenagens.length > 0 && (
                <div id="homenagens" className="bg-card">
                    <TributesSection homenagens={data.homenagens} />
                    <SectionDivider />
                </div>
            )}

            {/* bg-background (default) - Localização */}
            {data.localizacao_tumulo && data.localizacao_tumulo.endereco && (
                <div className="bg-background">
                    <LocationSection localizacao={data.localizacao_tumulo} />
                </div>
            )}

            {/* Family Dedication */}
            <AnimatedSection>
                <div className="py-16 text-center bg-background">
                    <Cross className="w-5 h-5 text-primary/40 mx-auto mb-4" />
                    <p className="font-display text-xl md:text-2xl text-foreground/70 italic">
                        {data.dedicatoria || "Com amor eterno, a família"}
                    </p>
                </div>
            </AnimatedSection>

            <FooterSection />
        </div>
    );
};

export default MemorialPage;
