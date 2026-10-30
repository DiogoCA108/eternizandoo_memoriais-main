import type { MemorialData } from "../types";

// ===========================================================================
// TEMPLATE DE MEMORIAL PET
// ===========================================================================
// 1. Copie este arquivo (dentro de src/data/memoriais/pets/) e renomeie para o ID_PET
//    (ex: 000001_thor_k3m9xa.ts). Pets têm contagem PRÓPRIA: 000001, 000002... (recomeça do zero)
// 2. Crie a pasta public/fotos/pets/ID_PET/ (com subpasta gallery/) e coloque as fotos.
// 3. Substitua URL_FINAL e ID_MEMORIAL pelo ID_PET e pela URL reais.
// 4. Adicione o import e a chave no arquivo src/data/memoriais/pets/index.ts.
//
// IMPORTANTE: em TypeScript o nome de uma variável não pode começar com número. Como o ID_PET
// começa com número, coloque um underline (_) na frente da constante e no import do index.ts:
// export const _000001_thor_k3m9xa
//
// O que muda nos memoriais de pets (rota /memorial/pet/<slug>):
//   - Títulos e textos das seções (ex: "Nossa História Juntos", "Recados e Carinhos")
//   - Visual: paleta verde-água suave e ícone de patinha
//   - Árvore "Nossa Família": Tutores → pet → Família e Companheiros de Patinhas
//   - Rodapé e botão do WhatsApp levam ao pedido de "Memorial Pet"

export const _000000_template: MemorialData = {
    // --- DADOS DO PET ---
    especie: "Cachorro", // Cachorro, Gato, Coelho, Pássaro... (opcional)
    raca: "Sem raça definida", // Opcional. Aparece abaixo do nome: "Cachorro • Sem raça definida"

    // --- ROTA DO SITE ---
    // Ex: thor-12-03-2024 (nome do pet + data de falecimento). Link final: /memorial/pet/thor-12-03-2024
    slug: "URL_FINAL",

    // Configuração de exibição das seções (por padrão aparecem as que tiverem dados)
    secoes_ativas: {
        biografia: true,
        habitos: true,
        galeria: true,
        musicas: false,
        arvore_genealogica: true,
        linha_tempo: true,
        homenagens: true,
        localizacao: false, // Ative só se houver um local (cemitério pet, jardim, etc.)
    },

    // --- IMAGENS PRINCIPAIS ---
    // A hero pode ser a mesma imagem padrão dos outros memoriais.
    heroImage: "/fotos/pets/ID_MEMORIAL/hero.jpg",
    profilePhoto: "/fotos/pets/ID_MEMORIAL/profile.jpg",

    // --- DADOS BÁSICOS ---
    nome_completo: "Nome do Pet",
    genero: "M", // "M" para macho, "F" para fêmea
    data_nascimento: "2010-01-01", // Se não souber, use a data de adoção ou aproximada
    data_falecimento: "2024-12-31",
    frase_homenagem: "Frase curta e carinhosa sobre o pet.",

    // --- TEXTOS DA PÁGINA (OPCIONAIS) ---
    // Deixe em branco para usar o padrão do pet ("Nossa História Juntos" etc.)
    // biografia_titulo: "",
    // biografia_subtitulo: "",
    dedicatoria: "Com amor eterno, sua família 🐾",

    // --- CONTEÚDO ---
    texto_biografico: `Conte aqui a história do pet: como chegou à família, sua personalidade, suas travessuras e o que ele significava para todos.

Pode ter múltiplos parágrafos separados por uma linha em branco.`,

    // tipos: "bebida", "comida" (petiscos), "habito" (manias e brincadeiras), "frase" (jeitinhos)
    habitos: [
        { tipo: "comida", descricao: "Petisco favorito" },
        { tipo: "habito", descricao: "Brinquedo ou brincadeira preferida" },
        { tipo: "habito", descricao: "Mania engraçada" },
        { tipo: "frase", descricao: "Um jeitinho único dele (ex: o latido quando alguém chegava)" },
    ],

    galeria: [
        // { tipo: "foto", url: "/fotos/pets/ID_MEMORIAL/gallery/foto_01.jpg", legenda: "Legenda da foto" },
    ],

    // trilha_sonora: {
    //     titulo: "Nome da Música",
    //     descricao: "Descrição (opcional)",
    //     url_audio: "/trilhas_sonoras/pets/ID_MEMORIAL.mp3"
    // },

    musicas: [],

    // relacao: "tutor"/"tutora" (tutores), "familia" (demais da família),
    //          "companheiro"/"companheira" (outros pets da casa)
    arvore_genealogica: [
        { nome: "Nome do Tutor", relacao: "tutor" },
        { nome: "Nome da Tutora", relacao: "tutora" },
        { nome: "Nome de um familiar", relacao: "familia" },
        { nome: "Nome de outro pet", relacao: "companheiro" },
    ],

    linha_tempo: [
        { titulo_evento: "Nascimento", data_evento: "2010-01-01", descricao: "Nasceu...", ordem: 1 },
        { titulo_evento: "Chegada em casa", data_evento: "2010-03-01", descricao: "Chegou à família e conquistou todo mundo.", ordem: 2 },
        { titulo_evento: "Partida", data_evento: "2024-12-31", descricao: "Partiu deixando uma saudade enorme e muito amor.", ordem: 3 },
    ],

    homenagens: [],

    // Só use se houver um local para visitar (deixe secoes_ativas.localizacao: false caso contrário)
    localizacao_tumulo: {
        endereco: "",
        horario_visita: "",
        link_maps: "",
        query_mapa: "",
        foto_url: "", // Opcional (/fotos/pets/ID_MEMORIAL/tumulo.jpg)
    },
};
