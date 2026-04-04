import { joaoData } from "./joao";
import { desafio16kmData } from "./16km";
import type { MemorialData } from "./types";
import { mariaData } from "./maria";
import { _000001_josefo_7r26gz } from "./000001_josefo_7r26gz";

// Para adicionar um novo memorial:
// 1. Crie o arquivo de dados do memorial copiando o "_template.ts"
// 2. Importe o arquivo acima: 
//    (ex: import { _000001_josefo_7r26gz } from "./000001_josefo_7r26gz";)
// 3. Adicione uma entrada no objeto abaixo:
//    (ex: "000001_josefo_7r26gz": _000001_josefo_7r26gz,)

export const memoriais: Record<string, MemorialData> = {
    "joao": joaoData,
    "16km": desafio16kmData,
    "maria": mariaData,
    "000001_josefo_7r26gz": _000001_josefo_7r26gz,
};