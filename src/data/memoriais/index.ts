import { joaoData } from "./joao";
import { desafio16kmData } from "./16km";
import type { MemorialData } from "./types";
import { _000002_manoel_fv4ffc } from "./000002_manoel_fv4ffc";
import { mariaData } from "./maria";
import { _000000_maria_y974hd } from "./000000_maria_y974hd";
import { _000001_jose_623pm5 } from "./000001_jose_623pm5";
import { _000003_monica_c66zpt } from "./000003_monica_c66zpt";
import { _000007_sandro_qvnu4b } from "./000007_sandro_qvnu4b";

// Para adicionar um novo memorial:
// 1. Crie o arquivo de dados do memorial copiando o "_template.ts"
// 2. Importe o arquivo acima: 
//    (ex: import { _000001_josefo_7r26gz } from "./000001_josefo_7r26gz";)
// 3. Adicione uma entrada no objeto abaixo:
//    (ex: "000001_josefo_7r26gz": _000001_josefo_7r26gz,)

export const memoriais: Record<string, MemorialData> = {
    "joao": joaoData,
    "16km": desafio16kmData,
    "000002_manoel_fv4ffc": _000002_manoel_fv4ffc,
    "maria": mariaData,
    "000000_maria_y974hd": _000000_maria_y974hd,
    "000001_jose_623pm5": _000001_jose_623pm5,
    "000003_monica_c66zpt": _000003_monica_c66zpt,
    "000007_sandro_qvnu4b": _000007_sandro_qvnu4b,
};  