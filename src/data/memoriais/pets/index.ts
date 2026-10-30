import type { MemorialData } from "../types";
import { _000001_bybow_5cz3ua } from "./000001_bybow_5cz3ua";

// ===========================================================================
// REGISTRO DOS MEMORIAIS DE PETS  →  acessados em /memorial/pet/<slug>
// ===========================================================================
// Pets têm contagem PRÓPRIA, separada dos memoriais de pessoas:
//   ID_PET = número com 6 dígitos + nome + código   (ex: 000001_thor_k3m9xa)
//   Mesmo formato dos IDs de pessoas, mas a contagem recomeça em 000001 (não há conflito: a pasta é outra).
//
// Para adicionar um novo pet:
// 1. Copie "_template_pet.ts" nesta pasta e renomeie para o ID_PET (ex: 000001_thor_k3m9xa.ts)
// 2. Importe o arquivo abaixo:
//    (ex: import { _000001_thor_k3m9xa } from "./000001_thor_k3m9xa";)
// 3. Adicione uma entrada no objeto abaixo:
//    (ex: "000001_thor_k3m9xa": _000001_thor_k3m9xa,)
//
// Obs: como o ID começa com número, a constante PRECISA de underline (_) na frente (regra do TypeScript).

export const pets: Record<string, MemorialData> = {
    "000001_bybow_5cz3ua": _000001_bybow_5cz3ua,
};
