# Plano de Implementação: Sistema de Links Curtos para Memoriais

> Documento gerado em 09/03/2026 — apenas para consulta futura.
> Nenhuma alteração foi feita no código.

---

## 1. Análise da Estrutura Atual

- O projeto é uma SPA React com **Vite** e **React Router DOM**.
- Os memoriais são arquivos `.ts` estáticos em `src/data/memoriais/`.
- O roteamento está em `src/App.tsx`, com a rota `/memoriais/:slug`.
- A criação de memoriais é manual (copiar `_template.ts`, preencher e registrar no `index.ts`).

## 2. Objetivo

Criar um sistema de **link intermediário curto** para uso em QR Codes:

```
/m/aB3Kq9  →  redireciona para  →  /memorial/joao-da-silva-12-03-2024
```

### Regras do código curto
- 6 caracteres
- **Case-insensitive:** Utiliza apenas letras minúsculas (e números).
- **Alfabeto seguro (human-friendly):** Utiliza a string de caracteres "abcdefghjkmnpqrstuvwxyz23456789".
- **Sem confusão visual:** Os caracteres ambíguos `o`, `0`, `l`, `1` e `i` foram removidos para garantir que quem for ler e digitar o código manualmente não cometa erros.
- Gerado automaticamente ao criar um memorial

### Vantagens
- QR Code aponta para link curto e fixo
- Destino pode ser alterado no futuro sem trocar o QR
- Compatível com futura migração para Supabase

---

## 3. Estratégia de Geração de Códigos Únicos

- Pool de caracteres: `abcdefghjkmnpqrstuvwxyz23456789` (31 caracteres no total)
- Gerar 6 caracteres aleatórios (31⁶ = ~887 milhões de combinações)
- Verificar unicidade contra o arquivo de mapeamento existente antes de salvar

---

## 4. Armazenamento Temporário (Sem Banco de Dados)

Arquivo estático `src/data/shortlinks.ts`:

```typescript
export const shortlinks: Record<string, string> = {
  "aB3Kq9": "joao-da-silva-12-03-2024",
  "Z1x7Lm": "maria-souza-05-08-2023",
};
```

*Nota sobre automação*: O código `"7r26gz"` que será colocado na URL intermediária será extraído do próprio nome técnico do arquivo/pasta, que agora segue o padrão `ID_MEMORIAL` (ex: `000001_josefo_7r26gz.ts`). Na hora de automatizar a criação futura, o sistema já extrairá os 6 últimos caracteres do ID para montar esse dicionário.

---

## 5. Plano em Duas Fases

### Fase 1 — MVP (sem Supabase)

| Passo | Descrição |
|-------|-----------|
| 1 | Ajustar rota `/memoriais/:slug` → `/memorial/:slug` em `src/App.tsx` |
| 2 | Criar `src/data/shortlinks.ts` com o mapeamento código → slug |
| 3 | Adicionar rota `/m/:codigo` em `src/App.tsx` |
| 4 | Criar `src/pages/ShortLinkRedirect.tsx` — componente que lê o código, busca no mapeamento e redireciona |
| 5 | *(Opcional)* Criar `scripts/create-memorial.js` — script CLI para automatizar a criação de memoriais e gerar o código curto |

**Arquivos envolvidos:**
- `src/App.tsx` — adicionar rotas
- `src/pages/ShortLinkRedirect.tsx` — **[NOVO]** componente de redirecionamento
- `src/data/shortlinks.ts` — **[NOVO]** mapeamento de códigos
- `scripts/create-memorial.js` — **[NOVO]** script auxiliar (opcional)

### Fase 2 — Futuro com Supabase

| Passo | Descrição |
|-------|-----------|
| 1 | Criar tabela `memorial_links` no Supabase (`id`, `short_code UNIQUE`, `target_slug`) |
| 2 | Migrar geração de códigos para Edge Function / painel admin |
| 3 | Redirecionamento server-side (HTTP 301/302) via Edge Function, eliminando a necessidade de carregar JS no cliente |

---

## 6. Recomendação

A abordagem MVP com arquivo estático é a mais adequada porque:
- Não altera o stack atual
- Custo zero
- Usa o mesmo padrão de dados estáticos já adotado pelo projeto
- Os links criados agora podem ser migrados linha-a-linha para o banco de dados futuramente
