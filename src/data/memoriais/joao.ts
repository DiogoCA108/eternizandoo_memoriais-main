import type { MemorialData } from "./types";

export const joaoData: MemorialData = {
    slug: "joao",
    heroImage: "/fotos/joao/hero.jpg",
    profilePhoto: "/fotos/joao/profile.jpg",

    nome_completo: "Maria Helena da Silva",
    data_nascimento: "1942-03-15",
    data_falecimento: "2024-08-22",
    frase_homenagem: "Seu amor iluminou cada vida que tocou, e sua luz permanecerá eternamente em nossos corações.",

    biografia_titulo: "História de Vida",
    biografia_subtitulo: "Uma vida de amor e dedicação",
    dedicatoria: "Com amor eterno, a família Silva",

    texto_biografico: `Maria Helena da Silva nasceu em 15 de março de 1942, em uma pequena cidade do interior de Minas Gerais, filha de José Antônio e Dona Conceição. Cresceu cercada pelo aroma do café fresco e pelo som das cigarras nas tardes quentes.

Desde jovem, Maria Helena demonstrou uma generosidade extraordinária. Aos 18 anos, mudou-se para São Paulo, onde conheceu o amor de sua vida, Antônio Carlos. Casaram-se em 1963, na pequena igreja de São José, numa cerimônia simples, mas repleta de emoção.

Dedicou sua vida à família, criando seus três filhos — Paulo, Ana e Roberto — com amor incondicional, sabedoria e firmeza. Era conhecida por suas receitas inigualáveis, especialmente o bolo de fubá que perfumava toda a vizinhança aos domingos.

Professora por vocação, lecionou durante 30 anos na Escola Estadual Dom Pedro II, onde tocou a vida de centenas de alunos. Muitos ainda a lembram como "Dona Helena", a professora que acreditava no potencial de cada criança.

Nos últimos anos, dedicou-se aos netos, à igreja e ao jardim que cultivava com carinho. Partiu serenamente, cercada pelo amor de sua família, deixando um legado de bondade, fé e esperança.`,

    habitos: [
        { tipo: "bebida", descricao: "Café coado no filtro de pano, bem forte e sem açúcar" },
        { tipo: "bebida", descricao: "Chá de camomila antes de dormir" },
        { tipo: "comida", descricao: "Bolo de fubá com erva-doce" },
        { tipo: "comida", descricao: "Pão de queijo feito em casa" },
        { tipo: "comida", descricao: "Arroz com pequi nos almoços de domingo" },
        { tipo: "habito", descricao: "Acordar às 5h da manhã para regar o jardim" },
        { tipo: "habito", descricao: "Rezar o terço todas as noites" },
        { tipo: "habito", descricao: "Cantar enquanto cozinhava" },
        { tipo: "frase", descricao: '"A vida é como um jardim — precisa de paciência e amor para florescer."' },
        { tipo: "frase", descricao: '"Filho, Deus nunca nos dá um fardo maior do que podemos carregar."' },
        { tipo: "frase", descricao: '"Quem planta bondade, colhe gratidão."' },
    ],

    galeria: [
        { tipo: "foto", url: "/fotos/joao/gallery/foto-casamento-1963.jpg", legenda: "Casamento, 1963" },
        { tipo: "foto", url: "/fotos/joao/gallery/foto-filhos-1975.jpg", legenda: "Com os filhos, 1975" },
        { tipo: "foto", url: "/fotos/joao/gallery/foto-formatura.jpg", legenda: "Formatura como professora" },
        { tipo: "foto", url: "/fotos/joao/gallery/foto-natal-1990.jpg", legenda: "Natal em família, 1990" },
        { tipo: "foto", url: "/fotos/joao/gallery/foto-jardim.jpg", legenda: "No jardim que tanto amava" },
        { tipo: "foto", url: "/fotos/joao/gallery/foto-netos-2010.jpg", legenda: "Com os netos, 2010" },
        { tipo: "foto", url: "/fotos/joao/gallery/foto-aniversario-80.jpg", legenda: "Aniversário de 80 anos" },
        { tipo: "foto", url: "/fotos/joao/gallery/foto-natal-2023.jpg", legenda: "Último Natal juntos, 2023" },
        { tipo: "foto", url: "/fotos/joao/gallery/foto-professora.jpg", legenda: "Dona Helena na sala de aula" },
        { tipo: "foto", url: "/fotos/joao/gallery/foto-cozinhando.jpg", legenda: "Preparando o bolo de fubá" },
        { tipo: "foto", url: "/fotos/joao/gallery/foto-casal-parque.jpg", legenda: "Com Antônio Carlos no parque" },
        { tipo: "foto", url: "/fotos/joao/gallery/foto-igreja.jpg", legenda: "Família após a missa de domingo" },
    ],

    musicas: [
        { titulo: "Ave Maria — Gounod", url_player: "#" },
        { titulo: "Trem Bala — Ana Vilela", url_player: "#" },
        { titulo: "Como É Grande o Meu Amor Por Você — Roberto Carlos", url_player: "#" },
        { titulo: "Amazing Grace", url_player: "#" },
    ],

    arvore_genealogica: [
        { nome: "Joaquim da Silva", relacao: "avô paterno" },
        { nome: "Benedita da Silva", relacao: "avó paterna" },
        { nome: "José Antônio da Silva", relacao: "pai", parentesco: "memorial" },
        { nome: "Maria da Conceição", relacao: "mãe", parentesco: "memorial" },

        { nome: "Antônio Carlos da Silva", relacao: "cônjuge" },
        { nome: "Paulo Henrique da Silva", relacao: "filho", parentesco: "ambos" },
        { nome: "Ana Carolina da Silva", relacao: "filha", parentesco: "ambos" },
        { nome: "Roberto Carlos da Silva", relacao: "filho", parentesco: "ambos" },
        { nome: "Mariana Silva", relacao: "neta" },
        { nome: "Lucas Silva", relacao: "neto" },
        { nome: "Beatriz Silva", relacao: "neta" }
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
