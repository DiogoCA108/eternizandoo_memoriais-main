import type { MemorialData } from "./types";

// 1. Copie este arquivo e renomeie para o ID_MEMORIAL (ex: 000001_josefo_7r26gz.ts)
// 2. Crie a pasta public/fotos/ID_MEMORIAL/ e coloque as fotos lá
// 3. Substitua 'URL_FINAL' e 'ID_MEMORIAL' no objeto abaixo pelos valores reais
// 4. Adicione o import no arquivo src/data/memoriais/index.ts
// 5. Use caminhos diretos apontando para public/fotos/ID_MEMORIAL/ na seção de imagens

// IMPORTANTE: Em TypeScript, o nome de uma variável não pode começar com número!
// Se o seu ID começar com número (ex: 000001), você PRECISA colocar um underline (_)
// na frente do nome da constante abaixo e também na hora de importá-la no index.ts.

export const _ID_MEMORIAL: MemorialData = {
    // --- ROTA DO SITE ---
    // Substitua URL_FINAL pela rota desejada no navegador (ex: josefo-martinez-13-03-2002)
    slug: "URL_FINAL",

    // Configuração de exibição das seções (opcional - por padrão todas que tiverem dados são exibidas)
    secoes_ativas: {
        biografia: true,
        habitos: true,
        galeria: true,
        musicas: false,
        arvore_genealogica: true,
        linha_tempo: true,
        homenagens: true,
        localizacao: true,
    },

    // --- IMAGENS PRINCIPAIS ---
    // Substitua ID_MEMORIAL pelo nome da pasta (ex: 000001_josefo_7r26gz)
    // Observe a extensão do arquivo (jpg, png, webp)
    heroImage: "/fotos/ID_MEMORIAL/hero.jpg",
    profilePhoto: "/fotos/ID_MEMORIAL/profile.jpg",

    // --- DADOS BÁSICS ---
    nome_completo: "Nome Completo",
    genero: "F", // "M" para Homem, "F" para Mulher
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

    // Observe a extensão do arquivo (jpg, png, webp)
    galeria: [
        // { tipo: "foto", url: "/fotos/ID_MEMORIAL/gallery/foto1.jpg", legenda: "Legenda da foto 1" },
    ],

    musicas: [
        { titulo: "Título da Música - Artista", url_player: "#" },
    ],

    arvore_genealogica: [
        { nome: "Nome", relacao: "pai" },
        { nome: "Nome", relacao: "mae" },
        { nome: "Nome", relacao: "conjuge" },
        { nome: "Nome Filho Misto", relacao: "filho", parentesco: "ambos" }, // Geração de ambos (padrão)
        { nome: "Nome Filho 1", relacao: "filho", parentesco: "memorial" }, // Geração direta do Memorial
        { nome: "Nome Filho 2", relacao: "filho", parentesco: "conjuge" }, // Geração do cônjuge apenas
    ],

    linha_tempo: [
        { titulo_evento: "Nascimento", data_evento: "1900-01-01", descricao: "Nasceu em...", ordem: 1 },
    ],

    homenagens: [
        { nome: "Nome Autor", vinculo: "Relação", mensagem: "Mensagem de carinho...", data: "2024-01-01" },
    ],

    // Observe a extensão do arquivo (jpg, png, webp)
    localizacao_tumulo: {
        endereco: "Endereço completo",
        horario_visita: "Segunda a Domingo, das 7h às 18h",
        link_maps: "URL do Google Maps",
        query_mapa: "", // Termo de busca exato ou coordenadas lat,long para o mapa (opcional)
        foto_url: "", // Opcional (/fotos/ID_MEMORIAL/tumulo.jpg)
    },
};
