import { joaoData } from "./joao";
import { desafio16kmData } from "./16km";
import type { MemorialData } from "./types";
import { mariaData } from "./maria";

// Para adicionar um novo memorial:
// 1. Crie o arquivo de dados do memorial copiando o "_template.ts"
// 2. Importe o arquivo acima
// 3. Adicione uma entrada no objeto abaixo (chave = slug, valor = objeto exportado)

export const memoriais: Record<string, MemorialData> = {
    "joao": joaoData,
    "16km": desafio16kmData,
    "maria": mariaData,
};