# Tutorial: Como Criar um Novo Memorial

Este guia explica o passo a passo de como adicionar uma nova página de memorial no site. Todo o processo foi desenhado para ser rápido e exigir o mínimo de código possível.

Neste exemplo, vamos criar um memorial para uma pessoa chamada "Maria".

---

## Passo 1: Organizar as Fotos

Antes de mexer no código, precisamos colocar as fotos da pessoa no lugar certo.

1. No seu explorador de arquivos (lado esquerdo do VS Code), vá até a pasta:
   `public/fotos/`
2. **Crie uma nova pasta** com o nome da pessoa (preferencialmente letras minúsculas e sem espaços). 
   *Exemplo*: Clique com o botão direito em `fotos`, escolha "New Folder" (Nova Pasta) e digite `maria`.
3. Dentro da pasta `maria`, coloque **duas fotos principais**:
   - A foto de capa do topo. Exemplo: `hero.jpg`.
   - A foto redonda de perfil. Exemplo: `profile.jpg`.
4. Ainda dentro da pasta `maria`, **crie uma subpasta** chamada `gallery` (galeria).
5. Coloque todas as outras fotos dentro dessa pasta `gallery` (as fotos que vão aparecer na seção de galeria do site).

Sua pasta deve ficar assim:
```text
public/fotos/maria/
├── hero.jpg             (Foto principal do topo)
├── profile.jpg          (Foto redonda)
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
4. **Renomeie** a cópia para o nome da pessoa. 
   *Exemplo*: Renomeie para `maria.ts`.
5. Abra o seu novo arquivo `maria.ts`.

### Preenchendo o `maria.ts`

Leia os comentários dentro do arquivo, eles te guiarão. Basicamente você precisa:

1. **Preencher os textos:**
   - Na linha `slug: "SLUG",` troque pela URL que você quer. Ex: `slug: "maria",`.
   - Preencha `nome_completo`, `data_nascimento`, `texto_biografico`, etc., entre as aspas.
   - Preencha os caminhos das imagens (`heroImage` e `profilePhoto`) com os caminhos diretos. Ex: `heroImage: "/fotos/maria/hero.jpg"`.

2. **Preencher os arrays (listas):**
   - Na **galeria**, para cada foto que você adicionou, adicione uma linha:
     `{ tipo: "foto", url: "/fotos/maria/gallery/foto1.jpg", legenda: "Foto do sorvete" },`
   - Preencha os hábitos, timeline e árvore genealógica seguindo o modelo que já está lá. Se não quiser alguma dessas abas, é só deixar a lista vazia: `[]`.

**Não esqueça de salvar o arquivo (Ctrl + S)!**

---

## Passo 3: Registrar o Novo Memorial (O Toque Mágico)

O site ainda não sabe que o arquivo `maria.ts` existe. Vamos avisá-lo.

1. Na mesma pasta (`src/data/memoriais/`), abra o arquivo chamado **`index.ts`**.
2. **Adicione uma linha de importação** para o seu novo memorial (copie o estilo das que já existem):
   ```typescript
   import { joaoData } from "./joao";
   import { desafio16kmData } from "./16km";
   import { memorialData as mariaData } from "./maria"; // ← Sua nova linha
   ```
3. Dentro do bloco `export const memoriais = { ... }`, adicione a chave e o valor do seu novo memorial:
   ```typescript
   export const memoriais: Record<string, MemorialData> = {
     "joao": joaoData,
     "16km": desafio16kmData,
     "maria": mariaData, // ← Sua nova linha (URL na esquerda, dados na direita)
   };
   ```

**Salve o arquivo!**

---

## Passo 4: Testar!

Tudo pronto! Se você rodar o seu site (`npm run dev`), você poderá acessar a página do novo memorial digitando a URL com o **slug** que você colocou no arquivo `index.ts`.

*Exemplo:* `http://localhost:8080/memorial/maria`

A página já vai estar com o layout perfeito, cores, botões e dividores, tudo puxando os dados que você digitou de forma automática!
