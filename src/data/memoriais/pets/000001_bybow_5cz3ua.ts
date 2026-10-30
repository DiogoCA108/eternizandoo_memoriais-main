import type { MemorialData } from "../types";


export const _000001_bybow_5cz3ua: MemorialData = {
    // --- DADOS DO PET ---
    especie: "Cachorro",
    raca: "Poodle",

    // --- ROTA DO SITE ---
    // Link final: /memorial/pet/bybow-07-12-2019
    slug: "bybow-07-12-2019",

    secoes_ativas: {
        biografia: true,
        habitos: true,
        galeria: true,
        musicas: true,
        arvore_genealogica: true,
        linha_tempo: true,
        homenagens: true,
        localizacao: false, // ativar se houver local para visitar
    },

    // --- IMAGENS PRINCIPAIS ---
    heroImage: "/fotos/pets/000001_bybow_5cz3ua/hero.jpg",
    profilePhoto: "/fotos/pets/000001_bybow_5cz3ua/profile.jpg",

    // --- DADOS BÁSICOS ---
    nome_completo: "Bybow",
    genero: "M",
    // Faleceu com 11 anos (2019) -> nascimento aproximado em 2008 (data exata não informada)
    data_nascimento: "2008-01-01",
    data_falecimento: "2019-12-07",
    frase_homenagem: "Cheguei na família pra alegrar a vida de todo mundo.",

    // --- TEXTOS DA PÁGINA ---
    dedicatoria: "Com eterno amor, sua irmã Bárbara (Dadinha) 🐾",

    // --- CONTEÚDO ---
    texto_biografico: `Meu nome era "Bybow" e quem vai contar um pouco da minha história é minha irmã "Dadinha".

Eu era um menino muito traquino e brincalhão. Cheguei na família pra alegrar a vida de todo mundo.

Eu amava minha mãe, minha irmã e amava muito o meu papai, que me levava pra passear todos os dias pela manhã.

Eu amava brincar de bolinha e ficava pra lá e pra cá brincando com minha irmã.

A minha passagem foi de muito amor aqui na terra.`,

    habitos: [
        { tipo: "comida", descricao: "Amava frango" },
        { tipo: "habito", descricao: "Passear todos os dias pela manhã com o papai" },
        { tipo: "habito", descricao: "Brincar de bolinha" },
        { tipo: "habito", descricao: "Ficar pra lá e pra cá brincando com a irmã" },
    ],

    galeria: [
        { tipo: "foto", url: "/fotos/pets/000001_bybow_5cz3ua/gallery/foto_01.jpeg", legenda: "" },
        { tipo: "foto", url: "/fotos/pets/000001_bybow_5cz3ua/gallery/foto_03.jpeg", legenda: "" },
        { tipo: "foto", url: "/fotos/pets/000001_bybow_5cz3ua/gallery/foto_04.jpeg", legenda: "" },
        { tipo: "foto", url: "/fotos/pets/000001_bybow_5cz3ua/gallery/foto_05.jpeg", legenda: "" },
        { tipo: "foto", url: "/fotos/pets/000001_bybow_5cz3ua/gallery/foto_06.jpeg", legenda: "" },
        { tipo: "foto", url: "/fotos/pets/000001_bybow_5cz3ua/gallery/foto_07.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/pets/000001_bybow_5cz3ua/gallery/foto_08.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/pets/000001_bybow_5cz3ua/gallery/foto_09.jpg", legenda: "" },
    ],

    trilha_sonora: {
        titulo: "Somewhere Over the Rainbow",
        descricao: "Israel Kamakawiwo'ole",
        url_audio: "/trilhas_sonoras/pets/000001_bybow_5cz3ua.mp3"
    },

    musicas: [
        { titulo: "Somewhere Over the Rainbow", artista: "Israel Kamakawiwo'ole", contexto: "Uma canção para o nosso Bybow, que agora brinca do outro lado do arco-íris." },
    ],

    arvore_genealogica: [
        { nome: "Mário Sérgio", relacao: "tutor" },
        { nome: "Cinthia", relacao: "tutora" },
        { nome: "Bárbara (Dadinha)", relacao: "familia" },
    ],

    linha_tempo: [
        { titulo_evento: "Nascimento", data_evento: "2008-01-01", descricao: "Nasceu um poodle muito traquino e brincalhão, que logo chegou para alegrar a vida de toda a família.", ordem: 1 },
        { titulo_evento: "Partida", data_evento: "2019-12-07", descricao: "Partiu aos 11 anos, depois de uma vida cheia de amor, passeios e brincadeiras.", ordem: 2 },
    ],

    homenagens: [],

    localizacao_tumulo: {
        endereco: "",
        horario_visita: "",
        link_maps: "",
        query_mapa: "",
        foto_url: "",
    },
};


