import type { MemorialData } from "./types";

// 1. Copie este arquivo e renomeie para o ID_MEMORIAL (ex: 000001_josefo_7r26gz.ts)
// 2. Crie a pasta public/fotos/ID_MEMORIAL/ e coloque as fotos lá
// 3. Substitua 'URL_FINAL' e 'ID_MEMORIAL' no objeto abaixo pelos valores reais
// 4. Adicione o import no arquivo src/data/memoriais/index.ts
// 5. Use caminhos diretos apontando para public/fotos/ID_MEMORIAL/ na seção de imagens

// IMPORTANTE: Em TypeScript, o nome de uma variável não pode começar com número!
// Se o seu ID começar com número (ex: 000001), você PRECISA colocar um underline (_)
// na frente do nome da constante abaixo e também na hora de importá-la no index.ts.

export const _000000_maria_7r26gz: MemorialData = {
    // --- ROTA DO SITE ---
    // Substitua URL_FINAL pela rota desejada no navegador (ex: josefo-martinez-13-03-2002)
    slug: "maria-jose-dos-santos-17-12-2023",

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
    heroImage: "/fotos/000000_maria_7r26gz/hero.jpg",
    profilePhoto: "/fotos/000000_maria_7r26gz/profile.jpg",

    // --- DADOS BÁSICS ---
    nome_completo: "Maria José dos Santos",
    genero: "F", // "M" para Homem, "F" para Mulher
    data_nascimento: "1972-04-12",
    data_falecimento: "2023-12-17",
    frase_homenagem: "Seu amor foi construído com luta, trabalho e dedicação. Sua força e seu legado viverão para sempre em nossos corações.",

    // --- TEXTOS DA PÁGINA (OPCIONAIS) ---
    // Remova ou deixe em branco para usar o padrão
    biografia_titulo: "História de Vida",
    biografia_subtitulo: "Uma vida de amor e dedicação",
    dedicatoria: "Com amor eterno, seu filho Wellisson",

    // --- CONTEÚDO ---
    texto_biografico: `Maria José dos Santos nasceu em 12 de abril de 1972, na cidade de Moita Bonita, interior de Sergipe. Filha de Manoel e Maria, cresceu em meio à simplicidade, junto com seus irmãos e sobrinhos no sítio Lagoa do Capunga, onde atualmente se encontra o antigo Boi na Brasa.

Desde muito jovem, demonstrou uma força admirável e uma generosidade marcante. Sua vida foi guiada pelo trabalho duro, pela coragem e pela determinação de construir um futuro melhor para sua família. Trabalhou em diversas áreas e exerceu diferentes atividades ao longo da vida. Sua casa era como um verdadeiro coração de mãe: sempre cabia mais um, e ela acolhia e ajudava a todos.

Dedicou sua vida aos filhos, sendo exemplo de amor, luta e perseverança. Com esforço incansável, enfrentou desafios sem nunca desistir, sempre colocando o bem-estar dos filhos acima de tudo. Foi uma mãe presente, firme e amorosa, que ensinou, por meio de suas atitudes, o valor da honestidade, do respeito e da dignidade. Como fruto de todo esse empenho, teve a alegria de ver seus filhos, Wellisson e Wadson, concluírem seus cursos universitários, e, com orgulho, presenciou Wellisson tornar-se o primeiro doutor da família.

Maria era conhecida por diferentes nomes na comunidade: Maria de Cutia — referência ao apelido de seu pai; Maria do Boi na Brasa — por ter fundado uma churrascaria com esse nome por volta do ano 2000; Maria do Churros — atividade que exerceu por bastante tempo; e Maria da Delegacia — local onde trabalhou durante muitos anos em Moita Bonita.

Na juventude, não teve a oportunidade de estudar. Ainda assim, movida por sua determinação, decidiu retomar os estudos na fase adulta, com o sonho de concluir sua formação. Mesmo após longos dias de trabalho, persistia e comparecia à escola todas as noites, demonstrando, mais uma vez, sua força e vontade de vencer.

Partiu em 17 de dezembro de 2023, deixando um legado de força, amor e superação que permanecerá vivo em cada um de seus filhos e em todos que tiveram o privilégio de conhecê-la.`,

    habitos: [
        { tipo: "bebida", descricao: "Suco de manga" },
        { tipo: "bebida", descricao: "Coca-Cola" },
        { tipo: "comida", descricao: "Panqueca" },
        { tipo: "comida", descricao: "Carne cozida" },
        { tipo: "comida", descricao: "Salada de couve refogada" },
        { tipo: "habito", descricao: "Ir ao forró da 'véia'" },
        // { tipo: "frase", descricao: '"Frase famosa da pessoa"' },
    ],

    // Observe a extensão do arquivo (jpg, png, webp)
    galeria: [
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_01.jpg", legenda: "Wellisson e Maria no casamento de Wadson" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_02.jpg", legenda: "Mesversário de Joaquim seu neto" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_03.jpg", legenda: "Maria e seus 4 filhos" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_04.jpg", legenda: "Buscando seu primeiro neto Elon na maternidade" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_05.jpg", legenda: "Voltando da matertenidade" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_06.jpg", legenda: "Chá de revelação do seu segundo neto 'Joaquim'" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_07.jpg", legenda: "Comemorando seu anversário" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_08.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_09.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_10.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_11.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_12.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_13.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_14.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_15.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_16.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_17.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_18.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_19.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_20.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_21.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_22.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_23.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_24.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_25.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_26.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_27.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_28.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_29.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_30.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_31.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_32.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_33.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_34.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_35.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_36.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_37.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_38.jpg", legenda: "" },
        { tipo: "foto", url: "/fotos/000000_maria_7r26gz/gallery/foto_39.jpg", legenda: "" },
    ],

    arvore_genealogica: [

        { nome: "Wellisson Santos", relacao: "filho" },
        { nome: "Wadson Santos", relacao: "filho" },
        { nome: "Aryel Santos", relacao: "filho" },
        { nome: "Welvys Santos", relacao: "filho" },
        { nome: "Elon Santos", relacao: "neto" },
        { nome: "Joaquim Santos", relacao: "neto" },
    ],

    linha_tempo: [
        { titulo_evento: "Nascimento", data_evento: "1972-04-12", descricao: "Nasceu em 12 de abril de 1972, em Moita Bonita, Sergipe, trazendo alegria à sua família.", ordem: 1 },
        { titulo_evento: "Primeiro Filho", data_evento: "1993-01-01", descricao: "Nascimento de Wellisson, em Aracaju, marcando o início de sua jornada como mãe.", ordem: 2 },
        { titulo_evento: "Segundo Filho", data_evento: "1995-01-01", descricao: "Nascimento de Wadson, em Itabaiana, ampliando ainda mais seu amor e dedicação à família.", ordem: 3 },
        { titulo_evento: "Terceiro Filho", data_evento: "2006-01-01", descricao: "Nascimento de Aryel, em Itabaiana, fortalecendo os laços familiares.", ordem: 4 },
        { titulo_evento: "Quarto Filho", data_evento: "2010-01-01", descricao: "Nascimento de Welvys, em Itabaiana, completando sua linda missão como mãe.", ordem: 5 },
        { titulo_evento: "Formatura do Filho", data_evento: "2016-01-01", descricao: "Formatura de seu filho Wellisson na universidade, um momento de grande orgulho e realização.", ordem: 6 },
        { titulo_evento: "Casa Própria", data_evento: "2019-01-01", descricao: "Realizou o sonho da casa própria na cidade de Moita Bonita, fruto de muito esforço e trabalho.", ordem: 7 },
        { titulo_evento: "Primeiro Neto", data_evento: "2022-01-01", descricao: "Nascimento de Elon, em Itabaiana, trazendo uma nova alegria à família.", ordem: 8 },
        { titulo_evento: "Segundo Neto", data_evento: "2023-01-01", descricao: "Nascimento de Joaquim, em Itabaiana, enchendo ainda mais seu coração de amor.", ordem: 9 },
        { titulo_evento: "Partida", data_evento: "2023-12-17", descricao: "Partiu em 17 de dezembro de 2023, deixando um legado eterno de força, amor e dedicação.", ordem: 10 },
    ],

    homenagens: [
        { nome: "Nome Autor", vinculo: "Relação", mensagem: "Mensagem de carinho...", data: "2024-01-01" },
    ],

    // Observe a extensão do arquivo (jpg, png, webp)
    localizacao_tumulo: {
        endereco: "Cemitério Municipal de Moita Bonita, Moita Bonita - SE, 49560-000",
        horario_visita: "Segunda a Domingo, das 8h às 17h",
        link_maps: "https://maps.app.goo.gl/uUFwgqPb8q5JvaYKA",
        query_mapa: "", // Termo de busca exato ou coordenadas lat,long para o mapa (opcional)
        foto_url: "/fotos/000000_maria_7r26gz/tumulo.jpg", // Opcional (/fotos/ID_MEMORIAL/tumulo.jpg)
    },
};
