import type { MemorialData } from "./types";

// 1. Copie este arquivo e renomeie para o ID_MEMORIAL (ex: 000001_josefo_7r26gz.ts)
// 2. Crie a pasta public/fotos/ID_MEMORIAL/ e coloque as fotos lá
// 3. Substitua 'URL_FINAL' e 'ID_MEMORIAL' no objeto abaixo pelos valores reais
// 4. Adicione o import no arquivo src/data/memoriais/index.ts
// 5. Use caminhos diretos apontando para public/fotos/ID_MEMORIAL/ na seção de imagens

// IMPORTANTE: Em TypeScript, o nome de uma variável não pode começar com número!
// Se o seu ID começar com número (ex: 000001), você PRECISA colocar um underline (_)
// na frente do nome da constante abaixo e também na hora de importá-la no index.ts.

export const _000001_josefo_7r26gz: MemorialData = {
    // --- ROTA DO SITE ---
    // Substitua URL_FINAL pela rota desejada no navegador (ex: josefo-martinez-13-03-2002)
    slug: "josefo-martinez-13-03-2002",

    // Configuração de exibição das seções (opcional - por padrão todas que tiverem dados são exibidas)
    secoes_ativas: {
        biografia: true,
        habitos: true,
        galeria: true,
        musicas: true,
        arvore_genealogica: true,
        linha_tempo: true,
        homenagens: true,
        localizacao: true,
    },

    // --- IMAGENS PRINCIPAIS ---
    // Substitua ID_MEMORIAL pelo nome da pasta (ex: 000001_josefo_7r26gz)
    // Observe a extensão do arquivo (jpg, png, webp)
    heroImage: "/fotos/000001_josefo_7r26gz/hero.png",
    profilePhoto: "/fotos/000001_josefo_7r26gz/profile.png",

    // --- DADOS BÁSICOS ---
    nome_completo: "Josefo Matinez ",
    data_nascimento: "01-01-1930",
    data_falecimento: "13-03-2002",
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
        { tipo: "foto", url: "/fotos/000001_josefo_7r26gz/gallery/foto1.png", legenda: "Legenda da foto 1" },
        { tipo: "foto", url: "/fotos/000001_josefo_7r26gz/gallery/foto2.png", legenda: "Legenda da foto 2" },
        { tipo: "foto", url: "/fotos/000001_josefo_7r26gz/gallery/foto3.png", legenda: "Legenda da foto 3" },
        { tipo: "foto", url: "/fotos/000001_josefo_7r26gz/gallery/foto4.png", legenda: "Legenda da foto 4" },
        { tipo: "foto", url: "/fotos/000001_josefo_7r26gz/gallery/foto5.png", legenda: "Legenda da foto 5" },
        { tipo: "foto", url: "/fotos/000001_josefo_7r26gz/gallery/foto6.png", legenda: "Legenda da foto 6" },
        { tipo: "foto", url: "/fotos/000001_josefo_7r26gz/gallery/foto7.png", legenda: "Legenda da foto 7" },
        { tipo: "foto", url: "/fotos/000001_josefo_7r26gz/gallery/foto8.png", legenda: "Legenda da foto 8" },
        { tipo: "foto", url: "/fotos/000001_josefo_7r26gz/gallery/foto9.png", legenda: "Legenda da foto 9" },
        { tipo: "foto", url: "/fotos/000001_josefo_7r26gz/gallery/foto10.png", legenda: "Legenda da foto 10" },
    ],

    musicas: [
        { titulo: "Ave Maria — Gounod", url_player: "#" },
        { titulo: "Trem Bala — Ana Vilela", url_player: "#" },
        { titulo: "Como É Grande o Meu Amor Por Você — Roberto Carlos", url_player: "#" },
        { titulo: "Amazing Grace", url_player: "#" },
    ],

    arvore_genealogica: [
        { nome: "José Antônio da Silva", relacao: "pai" },
        { nome: "Maria da Conceição", relacao: "mae" },
        { nome: "Antônio Carlos da Silva", relacao: "conjuge" },
        { nome: "Paulo Henrique da Silva", relacao: "filho" },
        { nome: "Ana Carolina da Silva", relacao: "filho" },
        { nome: "Roberto Carlos da Silva", relacao: "filho" },
    ],

    linha_tempo: [
        { titulo_evento: "Nascimento", data_evento: "1942-03-15", descricao: "Nasceu em Ouro Preto, Minas Gerais, trazendo alegria à família Silva.", ordem: 1 },
        { titulo_evento: "Mudança para São Paulo", data_evento: "1960-02-01", descricao: "Aos 18 anos, partiu para São Paulo em busca de novos horizontes.", ordem: 2 },
        { titulo_evento: "Casamento", data_evento: "1963-06-22", descricao: "Casou-se com Antônio Carlos na Igreja de São José, início de uma linda história de amor.", ordem: 3 },
        { titulo_evento: "Nascimento dos Filhos", data_evento: "1965-01-01", descricao: "Paulo (1965), Ana (1968) e Roberto (1972) completaram a família.", ordem: 4 },
        { titulo_evento: "Carreira como Professora", data_evento: "1970-03-01", descricao: "Iniciou sua carreira na Escola Estadual Dom Pedro II, onde lecionou por 30 anos.", ordem: 5 },
        { titulo_evento: "Aposentadoria", data_evento: "2000-12-15", descricao: "Após 30 anos dedicados à educação, aposentou-se cercada de homenagens e gratidão.", ordem: 6 },
        { titulo_evento: "Netos", data_evento: "2005-01-01", descricao: "A chegada dos netos trouxe uma nova primavera ao seu coração.", ordem: 7 },
        { titulo_evento: "Partida", data_evento: "2024-08-22", descricao: "Partiu serenamente, cercada pelo amor eterno de sua família.", ordem: 8 },
    ],

    homenagens: [
        { nome: "Paulo Henrique", vinculo: "Filho", mensagem: "Mãe, seu amor foi o alicerce da nossa família. Cada ensinamento seu vive em nós. Saudades eternas.", data: "2024-08-25" },
        { nome: "Mariana Silva", vinculo: "Neta", mensagem: "Vovó, obrigada por cada história, cada abraço, cada bolo de fubá. O céu ganhou um anjo.", data: "2024-08-26" },
        { nome: "Professora Lúcia", vinculo: "Colega de trabalho", mensagem: "Dona Helena foi a professora que todos queriam ser. Uma inspiração que nunca será esquecida.", data: "2024-09-01" },
        { nome: "Ana Carolina", vinculo: "Filha", mensagem: "Mãe, sua força e sua fé me guiaram por toda a vida. Obrigada por ser o meu porto seguro. Te amo para sempre.", data: "2024-08-27" },
    ],

    // Observe a extensão do arquivo (jpg, png, webp)
    localizacao_tumulo: {
        endereco: "Cemitério da Consolação, Rua da Consolação, 1660 - São Paulo, SP",
        horario_visita: "Segunda a Domingo, das 7h às 18h",
        link_maps: "https://maps.google.com/?q=Cemitério+da+Consolação+São+Paulo",
        query_mapa: "", // Termo de busca exato ou coordenadas lat,long para o mapa (opcional)
        foto_url: "/fotos/000001_josefo_7r26gz/tumulo.png", // Opcional (/fotos/ID_MEMORIAL/tumulo.jpg)
    },
};
