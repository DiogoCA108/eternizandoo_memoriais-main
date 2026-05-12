import type { MemorialData } from "./types";

// 1. Copie este arquivo e renomeie para o ID_MEMORIAL (ex: 000001_josefo_7r26gz.ts)
// 2. Crie a pasta public/fotos/ID_MEMORIAL/ e coloque as fotos lá
// 3. Substitua 'URL_FINAL' e 'ID_MEMORIAL' no objeto abaixo pelos valores reais
// 4. Adicione o import no arquivo src/data/memoriais/index.ts
// 5. Use caminhos diretos apontando para public/fotos/ID_MEMORIAL/ na seção de imagens

// IMPORTANTE: Em TypeScript, o nome de uma variável não pode começar com número!
// Se o seu ID começar com número (ex: 000001), você PRECISA colocar um underline (_)
// na frente do nome da constante abaixo e também na hora de importá-la no index.ts.

export const _000002_manoel_fv4ffc: MemorialData = {
    // --- ROTA DO SITE ---
    // Substitua URL_FINAL pela rota desejada no navegador (ex: josefo-martinez-13-03-2002)
    slug: "manoel-raimundo-januario-08-03-2026",

    // Configuração de exibição das seções (opcional - por padrão todas que tiverem dados são exibidas)
    secoes_ativas: {
        biografia: true,
        habitos: true,
        galeria: true,
        musicas: true,
        arvore_genealogica: true,
        linha_tempo: true,
        homenagens: false,
        localizacao: true,
    },

    // --- IMAGENS PRINCIPAIS ---
    // Substitua ID_MEMORIAL pelo nome da pasta (ex: 000001_josefo_7r26gz)
    // Observe a extensão do arquivo (jpg, png, webp)
    heroImage: "/fotos/000002_manoel_fv4ffc/hero.jpg",
    profilePhoto: "/fotos/000002_manoel_fv4ffc/profile.jpeg",

    // --- DADOS BÁSICOS ---
    nome_completo: "Manoel Raimundo Januário",
    genero: "M", // "M" para Homem, "F" para Mulher
    data_nascimento: "1942-12-25",
    data_falecimento: "2026-03-08",
    frase_homenagem: "Seu amor foi construído com sabedoria, trabalho e dedicação. Sua história e seus ensinamentos viverão para sempre em nossos corações.",

    // --- TEXTOS DA PÁGINA (OPCIONAIS) ---
    // Remova ou deixe em branco para usar o padrão
    biografia_titulo: "História de Vida",
    biografia_subtitulo: "Um legado de trabalho e amor à família",
    dedicatoria: "Com eterno amor, sua neta Deborah Emmanuele",

    // --- CONTEÚDO ---
    texto_biografico: `Manoel Raimundo Januário, conhecido Manoel Lins na cidade Natal e região de Salgueiro-PE. Nasceu na data de 25/12/42, na cidade de Parnamirim-PE. Filho de Raimundo Pedro Januário e Raimunda Barros Nunes, teve uma infância marcada com brincadeiras na roça e montando cavalos. 

Ao longo da vida, construiu sua história com muito trabalho e dedicação atuando como motorista oficial da antiga DNER e ainda fazia extra como radialista. Em abril de 1963 aos 21 anos se casou com Adelina Leite, com quem formou uma linda família, sendo pai de 4 filhos, avô de 10 netos e bisavô de 11 bisnetos. 

Conhecido pelo seu jeito firme, alegre, amigo de todos e companheiro. Gostava de cozinhar, de tomar uma cervejinha e assistir filmes faroestes e a vila do chaves e sempre fez questão de estar perto da família. 

Deixa como legado o exemplo de honestidade e compaixão, sendo lembrado com muito amor por todos que tiveram o privilégio de conhecê-lo. Sua memória permanecerá viva em nossos corações.`,

    habitos: [
        { tipo: "bebida", descricao: "Cerveja" },
        { tipo: "bebida", descricao: "Whisky" },
        { tipo: "bebida", descricao: "Água de coco" },
        { tipo: "comida", descricao: "Carne do sol" },
        { tipo: "comida", descricao: "Feijão tropeiro" },
        { tipo: "comida", descricao: "Feijoada" },
        { tipo: "frase", descricao: '"Nhé e ai"' },
    ],

    // Observe a extensão do arquivo (jpg, png, webp)
    galeria: [
        { tipo: "foto", url: "/fotos/000002_manoel_fv4ffc/gallery/foto_01.jpeg", legenda: "Filhos" },
        { tipo: "foto", url: "/fotos/000002_manoel_fv4ffc/gallery/foto_02.jpeg", legenda: "Netos" },
        { tipo: "foto", url: "/fotos/000002_manoel_fv4ffc/gallery/foto_03.jpeg", legenda: "Visita a casa de Luiz Gonzaga" },
        { tipo: "foto", url: "/fotos/000002_manoel_fv4ffc/gallery/foto_04.jpeg", legenda: "Comemoração dos 25 anos de casamento" },
        { tipo: "foto", url: "/fotos/000002_manoel_fv4ffc/gallery/foto_05.jpeg", legenda: "Com seu pai, Raimundo Pedro" },
        { tipo: "foto", url: "/fotos/000002_manoel_fv4ffc/gallery/foto_06.jpeg", legenda: "Sua esposa e os 4 filhos" },
        { tipo: "foto", url: "/fotos/000002_manoel_fv4ffc/gallery/foto_07.jpeg", legenda: "Com a esposa em 1967" },
        { tipo: "foto", url: "/fotos/000002_manoel_fv4ffc/gallery/foto_08.jpeg", legenda: "Com seu irmão Mariano" },
        { tipo: "foto", url: "/fotos/000002_manoel_fv4ffc/gallery/foto_09.jpeg", legenda: "" },
        { tipo: "foto", url: "/fotos/000002_manoel_fv4ffc/gallery/foto_10.jpeg", legenda: "" },
        { tipo: "foto", url: "/fotos/000002_manoel_fv4ffc/gallery/foto_11.jpeg", legenda: "" },
    ],
    
    trilha_sonora: {
        titulo: "Amazing Grace",
        descricao: "Uma melodia que acompanha este memorial como símbolo de paz e lembrança.",
        url_audio: "/trilhas_sonoras/000002_manoel_fv4ffc.mp3"
    },

    musicas: [
        { titulo: "A casa da saudade", artista: "Flávio José" },
        { titulo: "Espumas ao vento", artista: "Flávio José" },
        { titulo: "Asa Branca", artista: "Luiz Gonzaga" },
        { titulo: "Retrovisor", artista: "Canindé" },
        { titulo: "Velho meu querido velho", artista: "Altemar Dutra" },
        { titulo: "Trovoada", artista: "Vavá Machado e Marcolino" },
    ],

    arvore_genealogica: [
        { nome: "Raimundo Pedro Januário", relacao: "pai" },
        { nome: "Raimunda Barros Nunes", relacao: "mae" },
        { nome: "Adelina Leite Januário", relacao: "conjuge" },
        { nome: "Zilda Barros Nunes Santos", relacao: "filho" },
        { nome: "Zironaldo Nunes Barros", relacao: "filho" },
        { nome: "Zivaldo Nunes Barros", relacao: "filho" },
        { nome: "Zilmar Barros Nunes Santana", relacao: "filho" },
        { nome: "Diego Emmanuel", relacao: "neto" },
        { nome: "Daniel Douglas", relacao: "neto" },
        { nome: "Danilo Emmerson", relacao: "neto" },
        { nome: "Deborah Emmanuele", relacao: "neto" },
        { nome: "Vitor Callil", relacao: "neto" },
        { nome: "Virna Barros", relacao: "neto" },
        { nome: "Iana Monize", relacao: "neto" },
        { nome: "Ianca Barros", relacao: "neto" },
        { nome: "Yasmin", relacao: "neto" },
        { nome: "Iana", relacao: "neto" },
    ],

    linha_tempo: [
        { titulo_evento: "Nascimento", data_evento: "1942-12-25", descricao: "Nascimento no interior de Parnamirim-PE.", ordem: 1 },
        { titulo_evento: "Contratação", data_evento: "1960-01-01", descricao: "Foi contratado para trabalhar no DNER.", ordem: 2 },
        { titulo_evento: "Casamento", data_evento: "1963-04-01", descricao: "Casou-se com Adelina Leite.", ordem: 3 },
        { titulo_evento: "Primeira Filha", data_evento: "1964-01-01", descricao: "Nascimento de sua primeira filha.", ordem: 4 },
        { titulo_evento: "Primeiro Neto", data_evento: "1989-01-01", descricao: "Nascimento do seu primeiro neto.", ordem: 5 },
        { titulo_evento: "Mudança e Aposentadoria", data_evento: "1995-01-01", descricao: "Foi transferido para Aracaju-SE e logo aposentado.", ordem: 6 },
        { titulo_evento: "Primeiro Bisneto", data_evento: "2010-01-01", descricao: "Nascimento do seu primeiro bisneto.", ordem: 7 },
        { titulo_evento: "Diagnóstico", data_evento: "2015-01-01", descricao: "Foi diagnosticado com Alzheimer.", ordem: 8 },
        { titulo_evento: "Falecimento", data_evento: "2026-03-08", descricao: "Faleceu, deixando um lindo legado.", ordem: 9 },
    ],

    // Observe a extensão do arquivo (jpg, png, webp)
    localizacao_tumulo: {
        endereco: "Colina da saudade, R. Hortência Carvalho Sobral, 33 - Jabotiana, Aracaju - SE, 49095-660",
        horario_visita: "Segunda a Domingo, das 8h às 17h",
        link_maps: "https://maps.google.com/?q=Colina+da+Saudade+Aracaju",
        query_mapa: "Colina da Saudade, Aracaju",
        foto_url: "/fotos/000002_manoel_fv4ffc/tumulo.jpeg",
    },
};
