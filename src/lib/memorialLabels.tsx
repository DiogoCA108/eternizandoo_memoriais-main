import { createContext, useContext } from "react";

export type TipoMemorial = "pessoa" | "pet";

export interface MemorialLabels {
  tipo: TipoMemorial;

  nav: {
    marca: string;
    inicio: string;
    historia: string;
    galeria: string;
    homenagens: string;
  };

  hero: {
    lema: string; // texto pequeno acima da foto
    simboloNascimento: string;
    simboloFalecimento: string;
  };

  biografia: { titulo: string; subtitulo: string };

  habitos: {
    kicker: string;
    titulo: string;
    bebida: string;
    comida: string;
    habito: string;
    frase: string;
  };

  galeria: { titulo: string; subtitulo: string };

  musica: { kicker: string; titulo: string; trilha: string };

  familia: {
    kicker: string;
    titulo: string;
    tagMemorial: string; // texto sob o nome no cartão principal
  };

  timeline: { kicker: string; titulo: string };

  homenagens: {
    kicker: string;
    titulo: string;
    ctaTitulo: string;
    ctaTexto: string;
    sucessoDestaque: string; // trecho em negrito na mensagem de sucesso
    modalTitulo: string;
    modalTexto: string;
  };

  localizacao: { kicker: string; titulo: string };

  dedicatoria: string;

  rodape: {
    texto: string;
    qrcode: string;
    botao: string;
    mensagemWhatsapp: string;
  };
}

// ---------------------------------------------------------------------------
// PESSOA (padrão) — textos idênticos aos que já existiam nos componentes
// ---------------------------------------------------------------------------
export const labelsPessoa: MemorialLabels = {
  tipo: "pessoa",

  nav: {
    marca: "Memorial Eterno",
    inicio: "Início",
    historia: "História",
    galeria: "Galeria",
    homenagens: "Homenagens",
  },

  hero: {
    lema: "In Memoriam",
    simboloNascimento: "☆",
    simboloFalecimento: "†",
  },

  biografia: { titulo: "História de Vida", subtitulo: "Uma vida de amor" },

  habitos: {
    kicker: "Pequenos detalhes",
    titulo: "Hábitos, Manias e Frases",
    bebida: "Bebidas",
    comida: "Comidas",
    habito: "Hábitos",
    frase: "Frases",
  },

  galeria: { titulo: "Galeria de Memórias", subtitulo: "Momentos eternos" },

  musica: {
    kicker: "Melodias da alma",
    titulo: "Trilha Sonora e Canções",
    trilha: "Trilha sonora deste memorial",
  },

  familia: {
    kicker: "Raízes de amor",
    titulo: "Árvore Genealógica",
    tagMemorial: "In Memoriam",
  },

  timeline: { kicker: "Uma jornada de vida", titulo: "Linha do Tempo" },

  homenagens: {
    kicker: "Palavras de carinho",
    titulo: "Mensagens e Homenagens",
    ctaTitulo: "Deixe sua Homenagem",
    ctaTexto: "Compartilhe suas memórias e mensagens de carinho",
    sucessoDestaque: "aparecerá no memorial assim que for aprovada",
    modalTitulo: "Deixe sua homenagem",
    modalTexto: "Compartilhe uma mensagem em memória de Maria Helena.",
  },

  localizacao: { kicker: "Um lugar para visitar", titulo: "Localização do Túmulo" },

  dedicatoria: "Com amor eterno, a família",

  rodape: {
    texto:
      "Eternize a memória de quem você ama. Um memorial que vai além do tempo, mantendo viva a história do seu ente querido — sempre acessível, de qualquer lugar, a qualquer momento.",
    qrcode: "Acesse também via QR Code no local da homenagem.",
    botao: "Solicitar Memorial Eterno",
    mensagemWhatsapp: "Olá! Gostaria de solicitar um Memorial Eterno.",
  },
};

// ---------------------------------------------------------------------------
// PET — títulos e textos adaptados
// ---------------------------------------------------------------------------
export const labelsPet: MemorialLabels = {
  tipo: "pet",

  nav: {
    marca: "Memorial Pet Eterno",
    inicio: "Início",
    historia: "Nossa História",
    galeria: "Momentos",
    homenagens: "Carinhos",
  },

  hero: {
    lema: "Para sempre no coração",
    simboloNascimento: "☆",
    simboloFalecimento: "🌈",
  },

  biografia: { titulo: "Nossa História Juntos", subtitulo: "Uma vida de amor e lealdade" },

  habitos: {
    kicker: "Jeitinhos que não esqueceremos",
    titulo: "Manias, Petiscos e Brincadeiras",
    bebida: "", // vazio = aba de bebidas oculta nos pets
    comida: "Petiscos e Comidas",
    habito: "Manias e Brincadeiras",
    frase: "Jeitinhos Únicos",
  },

  galeria: { titulo: "Galeria de Momentos", subtitulo: "Alegria em cada clique" },

  musica: {
    kicker: "Melodias do coração",
    titulo: "Nossa Trilha Sonora",
    trilha: "Trilha sonora desta homenagem",
  },

  familia: {
    kicker: "Quem o amou",
    titulo: "Nossa Família",
    tagMemorial: "Para sempre no coração",
  },

  timeline: { kicker: "Uma jornada de amor", titulo: "Nossa Jornada Juntos" },

  homenagens: {
    kicker: "Palavras de carinho",
    titulo: "Recados e Carinhos",
    ctaTitulo: "Deixe seu Carinho",
    ctaTexto: "Compartilhe suas lembranças e mensagens de amor",
    sucessoDestaque: "aparecerá na homenagem assim que for aprovada",
    modalTitulo: "Deixe seu carinho",
    modalTexto: "Compartilhe uma mensagem de carinho em memória do nosso amiguinho.",
  },

  localizacao: { kicker: "Um lugar de saudade", titulo: "Cantinho de Descanso" },

  dedicatoria: "Com amor eterno, sua família 🐾",

  rodape: {
    texto:
      "Eternize a memória de quem sempre esteve ao seu lado. Uma homenagem que vai além do tempo, mantendo viva a história do seu companheiro de quatro patas — sempre acessível, de qualquer lugar, a qualquer momento.",
    qrcode: "Acesse também via QR Code na plaquinha ou no local da homenagem.",
    botao: "Solicitar Memorial Pet",
    mensagemWhatsapp: "Olá! Gostaria de solicitar um Memorial Pet.",
  },
};

export const getLabels = (tipo?: TipoMemorial): MemorialLabels =>
  tipo === "pet" ? labelsPet : labelsPessoa;

// Contexto: componentes fora de um Provider continuam usando os textos de pessoa.
export const LabelsContext = createContext<MemorialLabels>(labelsPessoa);

export const useLabels = () => useContext(LabelsContext);
