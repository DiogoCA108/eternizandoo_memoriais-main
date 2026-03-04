# Tutorial Futuro: Criando Memoriais com Supabase

Neste momento, você (ou um desenvolvedor) precisa mexer em arquivos no VS Code para criar um memorial. No futuro, com a integração do **Supabase** (que funcionará como nosso Banco de Dados e Hospedagem de Imagens), o processo mudará completamente e ficará **100% automatizado para o cliente final**.

Veja como será o processo no futuro.

---

## Parte 1: Como o Cliente Final criará um Memorial

O cliente não precisará saber de código, programação ou VS Code. O processo será feito inteiramente através do navegador.

### Passo 1: Acessar o Painel Administrativo
O cliente entrará em uma rota oculta ou painel do seu site (exemplo: `seusite.com.br/admin`) e fará login com email e senha.

### Passo 2: Preencher o Formulário
Ele clicará em um botão **"Criar Novo Memorial"**. Uma tela com um formulário simples vai aparecer:
- **Nome Completo:** [   Caixa de texto   ]
- **Data de Nascimento:** [ Calendário ]
- **Data de Falecimento:** [ Calendário ]
- **Dedicatória:** [   Caixa de texto   ]
- **Texto Biográfico:** [ Grande área de texto onde ele pode digitar livremente ]

### Passo 3: Fazer Upload das Fotos (Supabase Storage)
No mesmo formulário, haverá botões para enviar as fotos direto do celular ou computador dele:
- `[ Fazer upload da Foto de Capa ]`
- `[ Fazer upload da Foto de Perfil ]`
- `[ Adicionar fotos na Galeria ]`

Quando ele seleciona as fotos, o site fará o envio automaticamente para a nuvem do Supabase (Supabase Storage).

### Passo 4: Salvar e Publicar
Após preencher e revisar os dados, ele clicará em **"Salvar e Publicar"**.
- O painel vai gerar o "slug" (o nome na URL) automaticamente. Se o nome for "Maria Mendonça", a URL será `/memoriais/maria-mendonca`.
- Os dados de texto serão salvos no banco de dados (Supabase Database).
- A página do memorial estará **imediatamente no ar**, sem precisar de um desenvolvedor ou de um `npm run build`.

---

## Parte 2: O que vai mudar no Código (Para o Desenvolvedor)

Como nós já preparamos a estrutura (o arquivo `types.ts` com a interface `MemorialData`), o impacto no código será muito pequeno quando essa migração acontecer.

O que precisará ser feito no nível de código:

1. **Criar as Tabelas no Supabase:**
   Será criada uma tabela no Supabase exatamente com os mesmos campos que definimos no nosso `types.ts` (nome, heroImage, biografia, etc.).

2. **Alterar a página de Memorial (MemorialPage.tsx):**
   Hoje, a página busca os dados em um arquivo local:
   ```typescript
   // Como é hoje
   import { memoriais } from "@/data/memoriais";
   const data = memoriais[slug];
   ```
   No futuro, mudaremos apenas essa busca para ir no Supabase:
   ```typescript
   // Como será no futuro
   import { supabase } from "@/lib/supabase";
   
   // Busca os dados na tabela 'memoriais' onde a URL for igual ao slug
   const { data } = await supabase.from('memoriais').select('*').eq('slug', slug);
   ```

3. **Criar a tela de Painel Admin:**
   Alguém precisará desenvolver a interface do formulário (descrita na Parte 1) para que os clientes possam inserir e alterar os dados direto no banco do Supabase através do seu site.

### Resumo
Toda a base técnica já está pronta. A estrutura de como a página "lê" a história de uma pessoa já foi programada de forma inteligente. O único passo que falta é trocar o lugar onde essas histórias estão guardadas: tirar da "pasta do seu computador" e colocar "nas nuvens" do Supabase!
