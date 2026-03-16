# Análise e Plano de Implementação: Sistema de Links Curtos para Memoriais

> Documento gerado em 09/03/2026 — análise detalhada para consulta futura.
> Nenhuma alteração foi feita no código.

---

## 1. Análise da Estrutura Atual do Projeto
O projeto atual é uma aplicação frontend nativa em React utilizando **Vite** e **React Router DOM** para o roteamento. 
- Atualmente, os memoriais não usam banco de dados.
- Os dados residem estaticamente no diretório `src/data/memoriais/` em arquivos `.ts`.
- O roteamento hoje está configurado em `src/App.tsx` na rota `/memoriais/:slug`.
- A criação de novos memoriais, como descrito em `tutoriais/como-criar-novo-memorial.md`, é um processo *completamente manual* que envolve copiar e colar arquivos de template.

## 2. Onde a "Criação" Acontece Hoje
A criação ocorre no editor de código do desenvolvedor. Você copia manualmente o arquivo `_template.ts`, preenche as informações e adiciona ao `index.ts`. Não existe uma "fase de salvamento" em um sistema (backend) em tempo de execução.

## 3. O Melhor Ponto da Arquitetura para Gerar o Código
Dado que não existe um banco de dados agora, o único momento possível para gerar isso sem ser na mão é no momento da **criação e build do sistema**.
O melhor ponto na arquitetura MVP seria **criar um script Node.js (CLI)** auxiliar no projeto. Em vez de copiar e colar um template à mão, você rodaria um comando (ex: `npm run criar-memorial`). 
Este script cuidaria de:
1. Pedir o nome da pessoa e a data de falecimento.
2. Formatar a "rota final" (`/memorial/nome-completo-00-00-0000`).
3. Gerar o código intermediário.
4. Salvar tudo automaticamente em um arquivo de mapeamento ("Banco de dados" estático em formato `.ts` ou `.json`) e criar o arquivo `.ts` na pasta do memorial com o template básico.

## 4. Estratégia para Gerar Códigos Únicos (6 caracteres Alfanuméricos)
- **Regras:** 6 caracteres (A-Z, a-z, 0-9).
- **Como gerar (no script CLI):** Uma string gerada aleatoriamente a partir de um pool (ex: `nanoid` customizado ou função simples que escolhe caracteres aleatórios de `"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"`).
- **Como garantir unicidade no MVP:** O CLI deve ler o "banco de dados" estático atual de links. Se o código gerado já existir no arquivo, gera outro. Como há bilhões (62^6) de combinações, colisão no curto prazo é virtualmente impossível.

## 5. Compatibilidade com Futura Implementação (Supabase)
Essa arquitetura do código de 6 caracteres é **100% compatível** com o Supabase. 
No futuro, a lógica do script CLI migrará para uma *Edge Function* ou API do Supabase. E a verificação de "código já existe" será substituída por uma _constraint_ (restrição de chave única - `UNIQUE`) no banco de dados.

## 6. Como Armazenar Temporariamente o Vínculo (Sem BD)
Recomendo criar um arquivo local exclusivo para funcionar como tabela de redirecionamento, ex: `src/data/shortlinks.ts`.
Ele funcionaria internamente como um dicionário (chave-valor):
```typescript
export const shortlinks: Record<string, string> = {
  "aB3Kq9": "joao-da-silva-12-03-2024",
  "Z1x7Lm": "maria-souza-05-08-2023"
}
```

---

## 7. Plano de Implementação (Duas Fases)

### Fase 1: O MVP (Agora, sem Supabase)
Nesta fase adaptaremos a aplicação React atual.
**Passo-a-passo:**
1. **Alterar Rota Atual**: No `src/App.tsx`, mudar a rota padrão que hoje é `/memoriais/:slug` para `/memorial/:slug` para atender seu padrão desejado.
2. **Criar o Arquivo de Associação**: Criar um arquivo como `src/data/shortlinks.ts` (ou dentro do `memoriais/index.ts`) para armazenar o cache de redirecionamentos.
3. **Criar Rota Intermediária no Front**: No `src/App.tsx`, adicionar a rota `/m/:codigo`. Essa rota vai renderizar um novo componente silencioso de tela limpa que captura o `:codigo`, busca no arquivo de associação para onde a URL deve ir, e usa o `useNavigate()` ou local window redirect (se quiser alterar histórico) para encaminhar ao destino correto. Se não encontrar o código, exibe uma página de `NotFound`.
4. **Criador de Código Automatizado (Opcional, porém Altamente Recomendado para reduzir erro humano)**: Escrever um script para o Node (`scripts/newMemorial.js`) a ser rodado no terminal para facilitar a criação e povoar automaticamente o roteamento, gerando o slug correto que inclui a data e vinculando o código de 6 letras automaticamente no `shortlinks.ts`.

### Fase 2: O Futuro (Com Supabase)
**Passo-a-passo:**
1. **Banco de Dados**: Criar uma tabela (ex: `memorial_links`) no Supabase assim: `id | short_code (UNIQUE) | target_slug`.
2. **Geração no Backend**: Na infraestrutura Nova, a parte onde criávamos o script local passa a ser uma painel de admin + Edge Function que insere os dados no banco já gerando o link.
3. **Otimização do Redirect Server-Side (SSG/SSR)**: Se no backend com o banco resolver migrar o frontend atual de "Vite SP (Single Page)" para "Next.js App Router" (o que recomendo com Supabase e SEO de memoriais), o redirecionamento `/m/codigo` passará a ocorrer no próprio servidor (HTTP 301 ou 302 direto da Edge do Supabase) em vez de baixar o JavaScript só para olhar a rota e redirecionar pra outra, tornando a experiência instantânea num celular lendo QRcode. Se mantiver o Vite SPA estático, será necessário criar uma "Supabase Edge Function" própria num endereço à parte para processar os redirects na nuvem e jogar pro front Vite.

---

## Conclusão e Próximos Passos
**Abordagem Recomendada Agora:** Utilizar um componente estático de redirecionamento no React do próprio Vite, acoplado ao `App.tsx` com um arquivo TS estático ditando "De/Para". Para criar os novos perfis sem erro humano e garantir integridade entre o link e a rota final, faremos o script de geração em Node. 

**Por que ela é a melhor para esse projeto?**
Porque não mexe no stack atual, custa R$0 extra, resolve a geração e redirecionamento imediatamente e é a exata mesma forma de dados estáticos já utilizados pelo sistema de `memoriais`. Funciona perfeitamente e os links criados agora poderão ser inseridos linha-por-linha no Banco de Dados futuramente sem problema.

**Arquivos que serão alterados na Fase 1 MVP:**
- `src/App.tsx` (para adicionar as rotas)
- [NOVO] `src/pages/ShortLinkRedirect.tsx` (componente do intermediário)
- [NOVO] `src/data/shortlinks.ts` (base de dados json fictício/mapear de e para)
- [NOVO] `scripts/create-memorial.js` (script opcional porém ideal para facilitar, em vez de fazer à mão)
- Modificação na regra do `index.ts` de memoriais para considerar a data na URL
