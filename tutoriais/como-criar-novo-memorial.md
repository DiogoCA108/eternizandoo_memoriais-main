# Tutorial: Como Criar um Novo Memorial

Este guia explica o passo a passo de como adicionar uma nova página de memorial no site. Todo o processo foi desenhado para ser rápido e exigir o mínimo de código possível.

Neste exemplo, vamos criar um memorial para uma pessoa chamada "Josefo Martinez".

---

## Passo 1: Organizar as Fotos

Antes de mexer no código, precisamos colocar as fotos da pessoa no lugar certo.

1. No seu explorador de arquivos (lado esquerdo do VS Code), vá até a pasta:
   `public/fotos/`
2. **Crie uma nova pasta** com o **`ID_MEMORIAL`** da pessoa. 
   *Exemplo*: O sistema gerou um ID chamado `000001_josefo_7r26gz`. Você criará a pasta com esse nome exato.
3. Dentro dessa pasta, coloque as **fotos principais**:
   - A foto de capa do topo. Exemplo: `hero.jpg`.
   - A foto redonda de perfil. Exemplo: `profile.jpg`.
   - A foto do túmulo/local (opcional). Exemplo: `tumulo.jpg`.
4. Ainda dentro da pasta do memorial, **crie uma subpasta** chamada `gallery` (galeria).
5. Coloque todas as outras fotos dentro dessa pasta `gallery` (as fotos que vão aparecer na seção de galeria do site).

Sua pasta deve ficar assim:
```text
public/fotos/000001_josefo_7r26gz/
├── hero.jpg             (Foto principal do topo)
├── profile.jpg          (Foto redonda)
├── tumulo.jpg           (Foto do local, opcional)
└── gallery/             (Pasta com o resto das fotos)
    ├── foto1.jpg
    ├── foto2.png
    └── etc...
```

---

## Passo 2: Criar o Arquivo de Dados

Agora vamos preencher os textos e configurar as fotos que colocamos no Passo 1.

1. No explorador de arquivos, abra a pasta:
   `src/data/memoriais/`
2. Localize um arquivo chamado **`_template.ts`**.
3. **Copie e cole** esse arquivo dentro da mesma pasta.
4. **Renomeie** a cópia usando o seu `ID_MEMORIAL`.
   *Exemplo*: Renomeie para `000001_josefo_7r26gz.ts`.
5. Abra o seu novo arquivo.

### Preenchendo os dados do Memorial

Leia os comentários DENTRO do arquivo, eles te guiarão. Basicamente você precisa:

1. **Configurar o Arquivo e Rota:**
   - **IMPORTANTE (Regra do TypeScript):** O nome da constante exportada não pode começar com número! Se o seu arquivo for `000001_josefo_7r26gz.ts`, a const lá dentro DEVE ter um underline na frente: `export const _000001_josefo_7r26gz: MemorialData = {`
   - Na linha `slug: "URL_FINAL",` troque pela URL final limpa e amigável que você quer que o cliente acesse no navegador. *Exemplo:* `slug: "josefo-martinez-13-03-2002",`.

2. **Preencher os textos e configurar imagens:**
   - Preencha `nome_completo`, `data_nascimento`, `texto_biografico`, etc., entre as aspas.
   - Preencha os caminhos das imagens (`heroImage` e `profilePhoto`) colocando o `ID_MEMORIAL` na URL. *Exemplo:* `heroImage: "/fotos/000001_josefo_7r26gz/hero.jpg"`.
   - Lá no fim do arquivo, na seção **`localizacao_tumulo`**, se você adicionou uma foto do local, não esqueça de colocar o caminho dela em `foto_url`. *Exemplo:* `foto_url: "/fotos/000001_josefo_7r26gz/tumulo.jpg"`.

3. **Preencher os arrays (listas):**
   - Na **galeria**, para cada foto que você adicionou, adicione uma linha corrigindo o caminho:
     `{ tipo: "foto", url: "/fotos/000001_josefo_7r26gz/gallery/foto1.jpg", legenda: "Foto antiga" },`
   - Preencha os hábitos, timeline e árvore genealógica. Se não quiser alguma dessas abas, você pode apagar as linhas temporariamente ou mudar na sessão de configurações (`secoes_ativas`).

**Não esqueça de salvar o arquivo (Ctrl + S)!**

---

## Passo 3: Registrar o Novo Memorial (O Toque Mágico)

O site ainda não sabe que o arquivo `maria.ts` existe. Vamos avisá-lo.

1. Na mesma pasta (`src/data/memoriais/`), abra o arquivo chamado **`index.ts`**.
2. **Adicione uma linha de importação** para o seu novo memorial (copie o estilo das que já existem):
   ```typescript
   import { joaoData } from "./joao";
   import { desafio16kmData } from "./16km";
   import { _000001_josefo_7r26gz } from "./000001_josefo_7r26gz"; // ← Sua nova linha IMPORTANDO
   ```
3. Dentro do bloco `export const memoriais = { ... }`, adicione a chave e o valor do seu novo memorial:
   ```typescript
   export const memoriais: Record<string, MemorialData> = {
     "joao": joaoData,
     "16km": desafio16kmData,
     "000001_josefo_7r26gz": _000001_josefo_7r26gz, // A chave aqui não importa para a URL, usamos o ID_MEMORIAL para organização
   };
   ```

**Salve o arquivo!**

---

## Passo 4: Testar!

Tudo pronto! Se você rodar o seu site (`npm run dev`), você poderá acessar a página do novo memorial digitando a sua **URL_FINAL** (configurada dentro do arquivo na propriedade `slug`).

*Exemplo:* `http://localhost:8080/memorial/josefo-martinez-13-03-2002`

A página já vai estar com o layout perfeito, cores, botões e dividores, tudo puxando os dados que você digitou de forma automática!

---

## 🏗️ Entendendo a Arquitetura (ID vs URL)

Para garantir que o sistema escale sem problemas, nós deixamos estruturado no código a separação de como guardamos as fotos (nome da pasta) de como a família acessa o memorial (URL no navegador):

**`ID_MEMORIAL` (Uso Interno)**: Um identificador único, técnico e imutável (ex: `000001_josefo_7r26gz`). Ele será usado EXCLUSIVAMENTE para a organização do sistema:
- Nome da pasta de fotos: `/fotos/000001_josefo_7r26gz/`
- Nome do arquivo de dados: `000001_josefo_7r26gz.ts`
- Nome da variável no código: `export const _000001_josefo_7r26gz`
- Chave de registro no `index.ts`: `"000001_josefo_7r26gz": _000001_josefo_7r26gz` (Nota: O uso do underline `_` é uma regra do TypeScript para evitar erros em variáveis que começam com números).

**`URL_FINAL` (Uso Público)**: O link amigável que será divulgado (ex: `josefo-martinez-13-03-2002`). Ele será definido em apenas um lugar, como uma propriedade dentro do arquivo do memorial:
- `slug: "josefo-martinez-13-03-2002"`

Essa separação garante que o código do QR Code permaneça o mesmo e que os arquivos no servidor não se percam organizativamente caso a família decida pedir a alteração da URL do site no futuro.
