export interface MemorialData {
    slug: string;

    // Configuração opcional de quais seções exibir (se omitido, o padrão é exibir o que tem dados)
    secoes_ativas?: {
        biografia?: boolean;
        habitos?: boolean;
        galeria?: boolean;
        musicas?: boolean;
        arvore_genealogica?: boolean;
        linha_tempo?: boolean;
        homenagens?: boolean;
        localizacao?: boolean;
    };

    // Imagens principais
    heroImage: string;
    profilePhoto: string;

    // Dados básicos
    nome_completo: string;
    genero?: "M" | "F";
    data_nascimento: string;
    data_falecimento: string;
    frase_homenagem: string;

    // Textos configuráveis das seções (opcionais, com fallback no componente)
    biografia_titulo?: string;
    biografia_subtitulo?: string;
    dedicatoria?: string;

    // Conteúdo
    texto_biografico: string;
    habitos?: Array<{ tipo: string; descricao: string }>;
    galeria?: Array<{ tipo: "foto" | "video"; url: string; legenda: string }>;
    musicas?: Array<{ titulo: string; url_player: string }>;
    arvore_genealogica?: Array<{ nome: string; relacao: string; parentesco?: "memorial" | "conjuge" | "ambos" }>;
    linha_tempo?: Array<{ titulo_evento: string; data_evento: string; descricao: string; ordem: number }>;
    homenagens?: Array<{ nome: string; vinculo: string; mensagem: string; data: string }>;
    localizacao_tumulo?: {
        endereco: string;
        horario_visita: string;
        link_maps: string;
        foto_url: string;
        query_mapa?: string;
    };
}
