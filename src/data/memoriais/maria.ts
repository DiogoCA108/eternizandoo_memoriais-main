import type { MemorialData } from "./types";

// 1. Copie este arquivo e renomeie para o slug do memorial (ex: maria.ts)
// 2. Crie a pasta src/assets/fotos/SLUG/ e coloque as fotos
// 3. Substitua 'SLUG' abaixo pelo nome real da pasta
// 4. Adicione o import no arquivo src/data/fotos/index.ts

// IMPORTANTE: Descomente os imports de imagem abaixo e atualize os caminhos!
// import heroImage from "@/assets/fotos/maria/hero.png";
// import profilePhoto from "@/assets/fotos/maria/profile.png";
// import foto1 from "@/assets/fotos/maria/gallery/foto1.png";

export const mariaData: MemorialData = {
    slug: "maria",

    // --- IMAGENS PRINCIPAIS ---
    // Troque as strings abaixo pelas variáveis importadas acima
    heroImage: "/fotos/maria/hero.png",
    profilePhoto: "/fotos/maria/profile.png",

    // --- DADOS BÁSICOS ---
    nome_completo: "Maria MENDONÇA",
    data_nascimento: "1995-06-22",
    data_falecimento: "2021-11-05",
    frase_homenagem: "Frase marcante ou dedicatória curta.",

    // --- TEXTOS DA PÁGINA (OPCIONAIS) ---
    // Remova ou deixe em branco para usar o padrão
    biografia_titulo: "História de Vida",
    biografia_subtitulo: "Uma vida de amor e dedicação",
    dedicatoria: "Com amor eterno, a família Mendonça",

    // --- CONTEÚDO ---
    texto_biografico: `Maria Mendonça da Silva nasceu em 15 de março de 1942, em uma pequena cidade do interior de Minas Gerais, filha de José Antônio e Dona Conceição. Cresceu cercada pelo aroma do café fresco e pelo som das cigarras nas tardes quentes.

Desde jovem, Maria Helena demonstrou uma generosidade extraordinária. Aos 18 anos, mudou-se para São Paulo, onde conheceu o amor de sua vida, Antônio Carlos. Casaram-se em 1963, na pequena igreja de São José, numa cerimônia simples, mas repleta de emoção.

Dedicou sua vida à família, criando seus três filhos — Paulo, Ana e Roberto — com amor incondicional, sabedoria e firmeza. Era conhecida por suas receitas inigualáveis, especialmente o bolo de fubá que perfumava toda a vizinhança aos domingos.

Professora por vocação, lecionou durante 30 anos na Escola Estadual Dom Pedro II, onde tocou a vida de centenas de alunos. Muitos ainda a lembram como "Dona Helena", a professora que acreditava no potencial de cada criança.

Nos últimos anos, dedicou-se aos netos, à igreja e ao jardim que cultivava com carinho. Partiu serenamente, cercada pelo amor de sua família, deixando um legado de bondade, fé e esperança.`,

    habitos: [
        { tipo: "bebida", descricao: "Pitú" },
        { tipo: "comida", descricao: "Cuscuz com ovos" },
        { tipo: "habito", descricao: "Sorrir" },
        { tipo: "frase", descricao: '"Vamos chamegar"' },
    ],

    galeria: [
        { tipo: "foto", url: "/fotos/maria/gallery/foto1.png", legenda: "Legenda da foto 1" },
        { tipo: "foto", url: "/fotos/maria/gallery/foto2.png", legenda: "Legenda da foto 2" },
        { tipo: "foto", url: "/fotos/maria/gallery/foto3.png", legenda: "Legenda da foto 3" },
        { tipo: "foto", url: "/fotos/maria/gallery/foto4.png", legenda: "Legenda da foto 4" },
        { tipo: "foto", url: "/fotos/maria/gallery/foto5.png", legenda: "Legenda da foto 5" },
        { tipo: "foto", url: "/fotos/maria/gallery/foto6.png", legenda: "Legenda da foto 6" },
        { tipo: "foto", url: "/fotos/maria/gallery/foto7.png", legenda: "Legenda da foto 7" },
        { tipo: "foto", url: "/fotos/maria/gallery/foto8.png", legenda: "Legenda da foto 8" },
        { tipo: "foto", url: "/fotos/maria/gallery/foto9.png", legenda: "Legenda da foto 9" },
        { tipo: "foto", url: "/fotos/maria/gallery/foto10.png", legenda: "Legenda da foto 10" },
        { tipo: "foto", url: "/fotos/maria/gallery/foto11.png", legenda: "Legenda da foto 11" },
        { tipo: "foto", url: "/fotos/maria/gallery/foto12.png", legenda: "Legenda da foto 12" },
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

    localizacao_tumulo: {
        endereco: "Cemitério da Consolação, Rua da Consolação, 1660 - São Paulo, SP",
        horario_visita: "Segunda a Domingo, das 7h às 18h",
        link_maps: "https://maps.google.com/?q=Cemitério+da+Consolação+São+Paulo",
        foto_url: "",
    },
};
