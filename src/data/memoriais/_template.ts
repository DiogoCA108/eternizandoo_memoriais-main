import type { MemorialData } from "./types";

// 1. Copie este arquivo e renomeie para o slug do memorial (ex: maria.ts)
// 2. Crie a pasta src/assets/memoriais/SLUG/ e coloque as fotos
// 3. Substitua 'SLUG' abaixo pelo nome real da pasta
// 4. Adicione o import no arquivo src/data/memoriais/index.ts

// IMPORTANTE: Descomente os imports de imagem abaixo e atualize os caminhos!
// import heroImage from "@/assets/memoriais/SLUG/hero.jpg";
// import profilePhoto from "@/assets/memoriais/SLUG/profile.jpg";
// import foto1 from "@/assets/memoriais/SLUG/gallery/foto1.jpg";

export const memorialData: MemorialData = {
    slug: "SLUG",

    // --- IMAGENS PRINCIPAIS ---
    // Troque as strings abaixo pelas variáveis importadas acima
    heroImage: "",
    profilePhoto: "",

    // --- DADOS BÁSICOS ---
    nome_completo: "Nome Completo",
    data_nascimento: "1900-01-01",
    data_falecimento: "2000-12-31",
    frase_homenagem: "Frase marcante ou dedicatória curta.",

    // --- TEXTOS DA PÁGINA (OPCIONAIS) ---
    // Remova ou deixe em branco para usar o padrão
    biografia_titulo: "História de Vida",
    biografia_subtitulo: "Uma vida de amor e dedicação",
    dedicatoria: "Com amor eterno, a família",

    // --- CONTEÚDO ---
    texto_biografico: `Escreva a biografia aqui.
  
Pode ter múltiplos parágrafos separados por quebra de linha dupla.`,

    habitos: [
        { tipo: "bebida", descricao: "Bebida favorita" },
        { tipo: "comida", descricao: "Prato favorito" },
        { tipo: "habito", descricao: "Costume diário" },
        { tipo: "frase", descricao: '"Frase famosa da pessoa"' },
    ],

    galeria: [
        // { tipo: "foto", url: foto1, legenda: "Legenda da foto 1" },
    ],

    musicas: [
        { titulo: "Título da Música - Artista", url_player: "#" },
    ],

    arvore_genealogica: [
        { nome: "Nome", relacao: "pai" },
        { nome: "Nome", relacao: "mae" },
        { nome: "Nome", relacao: "conjuge" },
        { nome: "Nome", relacao: "filho" },
    ],

    linha_tempo: [
        { titulo_evento: "Nascimento", data_evento: "1900-01-01", descricao: "Nasceu em...", ordem: 1 },
    ],

    homenagens: [
        { nome: "Nome Autor", vinculo: "Relação", mensagem: "Mensagem de carinho...", data: "2024-01-01" },
    ],

    localizacao_tumulo: {
        endereco: "Endereço completo",
        horario_visita: "Segunda a Domingo, das 7h às 18h",
        link_maps: "URL do Google Maps",
        foto_url: "", // Opcional
    },
};
