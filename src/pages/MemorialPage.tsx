import { useParams, Navigate } from "react-router-dom";
import { memoriais } from "@/data/memoriais";
import { MemorialData } from "@/data/memoriais/types";
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

const MemorialPage = () => {
    const { slug } = useParams();

    // Procura na lista de memoriais qual deles tem a propriedade 'slug' igual à URL atual
    const data = Object.values(memoriais).find(m => m?.slug === slug);

    // Se não passar slug ou o memorial não for encontrado, redireciona para o 404
    if (!slug || !data) {
        return <Navigate to="/404" replace />;
    }

    // Helper para verificar se a seção deve ser exibida (True por padrão se não configurado)
    const isAtivo = (secao: keyof NonNullable<MemorialData['secoes_ativas']>) => {
        if (data.secoes_ativas && data.secoes_ativas[secao] === false) {
            return false;
        }
        return true;
    };

    return (
        <div className="min-h-screen bg-background">
            <MemorialNav />

            {/* Hero */}
            <div>
                <HeroSection
                    heroImage={data.heroImage}
                    profilePhoto={data.profilePhoto}
                    nome={data.nome_completo}
                    nascimento={data.data_nascimento}
                    falecimento={data.data_falecimento}
                    frase={data.frase_homenagem}
                />
            </div>

            {/* bg-card (light) - Biografia + divider */}
            {isAtivo('biografia') && (
                <div className="bg-card">
                    <BiographySection
                        texto={data.texto_biografico}
                        titulo={data.biografia_titulo}
                        subtitulo={data.biografia_subtitulo}
                    />
                    <SectionDivider />
                </div>
            )}

            {/* bg-background (default) - Hábitos + divider */}
            {isAtivo('habitos') && data.habitos.length > 0 && (
                <div className="bg-background">
                    <HabitsSection habitos={data.habitos} />
                    <SectionDivider />
                </div>
            )}

            {/* bg-card (light) - Galeria (divider inside component) */}
            {isAtivo('galeria') && data.galeria.length > 0 && (
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
            {isAtivo('musicas') && data.musicas.length > 0 && (
                <div className="bg-background">
                    <MusicSection musicas={data.musicas} />
                    <SectionDivider />
                </div>
            )}

            {/* bg-card (light) - Árvore + divider */}
            {isAtivo('arvore_genealogica') && data.arvore_genealogica.length > 0 && (
                <div className="bg-card">
                    <FamilyTreeSection membros={data.arvore_genealogica} />
                    <SectionDivider />
                </div>
            )}

            {/* bg-background (default) - Timeline + divider */}
            {isAtivo('linha_tempo') && data.linha_tempo.length > 0 && (
                <div className="bg-background">
                    <TimelineSection eventos={data.linha_tempo} />
                    <SectionDivider />
                </div>
            )}

            {/* bg-card (light) - Homenagens + divider */}
            {isAtivo('homenagens') && data.homenagens.length > 0 && (
                <div id="homenagens" className="bg-card">
                    <TributesSection homenagens={data.homenagens} />
                    <SectionDivider />
                </div>
            )}

            {/* bg-background (default) - Localização */}
            {isAtivo('localizacao') && data.localizacao_tumulo && data.localizacao_tumulo.endereco && (
                <div className="bg-background">
                    <LocationSection localizacao={data.localizacao_tumulo} />
                </div>
            )}

            {/* Family Dedication */}
            <AnimatedSection>
                <div className="py-12 text-center bg-background">
                    <div className="flex justify-center gap-3 text-[#B07A2C]/90 text-[19px] mb-2">
                        <span>✦</span>
                        <span>✦</span>
                        <span>✦</span>
                    </div>
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
