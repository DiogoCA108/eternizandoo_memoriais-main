# Memorial Pet — Guia Completo

Memorial Pet é um **produto permanente e secundário** do Eternizandoo. Usa o mesmo motor visual dos memoriais de pessoas, mas é mantido **totalmente separado**: rota própria, contagem própria e pastas próprias. Assim dá para distinguir de longe, no programa e no servidor, o que é pessoa e o que é pet.

> Para criar memoriais de pessoas, veja [como-criar-novo-memorial.md](./como-criar-novo-memorial.md). Os memoriais de pessoas **não foram alterados** e continuam nas pastas de sempre.
>
> Para pedir as informações ao cliente, use o roteiro em [mensagens-cliente-memorial-pet.md](./mensagens-cliente-memorial-pet.md).

---

## 1. Visão geral

| Item | Pessoa | Pet |
|---|---|---|
| Link público | `/memorial/<slug>` | `/memorial/pet/<slug>` |
| ID (contagem própria) | `000010_maria_d6gndf` | `000001_thor_k3m9xa` |
| Visual | Dourado e azul-marinho | Verde-água suave |
| Aparece na vitrine da página inicial | Sim | **Nunca** |

**Contagem:** o ID tem o mesmo formato das pessoas, mas a contagem dos pets **recomeça em `000001`** (o primeiro pet é `000001_...`, o segundo `000002_...`). Não há conflito com as pessoas porque pets ficam em pastas separadas e em um registro separado.

> Como o ID começa com número, a constante exportada **precisa de underline** na frente (regra do TypeScript): `export const _000001_thor_k3m9xa`. Use o mesmo underline no import do `pets/index.ts`.

---

## 2. Estrutura de pastas

Os pets ficam em uma pasta própria dentro de cada área. Pessoas continuam onde sempre estiveram.

| O quê | Pessoa | Pet |
|---|---|---|
| Arquivos de dados | `src/data/memoriais/` | `src/data/memoriais/pets/` |
| Lista (registro) | `src/data/memoriais/index.ts` | `src/data/memoriais/pets/index.ts` |
| Template | `src/data/memoriais/_template.ts` | `src/data/memoriais/pets/_template_pet.ts` |
| Fotos | `public/fotos/<ID>/` | `public/fotos/pets/<ID_PET>/` |
| Trilha sonora (.mp3) | `public/trilhas_sonoras/<ID>.mp3` | `public/trilhas_sonoras/pets/<ID_PET>.mp3` |
| QR Code (`public/.htaccess`) | blocos "TESTES" e "CLIENTES REAIS" | bloco "PETS" |

Dentro de cada pasta de fotos de pet:

```text
public/fotos/pets/000001_thor_k3m9xa/
├── hero.jpg        (pode ser a mesma imagem padrão dos outros memoriais)
├── profile.jpg     (foto redonda)
├── tumulo.jpg      (opcional — só se houver local para visitar)
└── gallery/        (demais fotos)
```

---

## 3. Passo a passo para criar um memorial pet

1. **Defina o ID:** próximo número da contagem de pets. Ex: `000001_thor_k3m9xa` (código de 6 caracteres no final).
2. **Fotos:** crie `public/fotos/pets/<ID_PET>/` com `hero.jpg`, `profile.jpg` e a subpasta `gallery/`.
3. **Arquivo de dados:** copie `src/data/memoriais/pets/_template_pet.ts` (dentro da própria pasta `pets/`) e renomeie para `<ID_PET>.ts`. Troque o nome da constante e todos os `ID_MEMORIAL` pelo ID do pet.
4. **Registre** em `src/data/memoriais/pets/index.ts` (import + chave):
   ```ts
   import { _000001_thor_k3m9xa } from "./000001_thor_k3m9xa";

   export const pets: Record<string, MemorialData> = {
       "000001_thor_k3m9xa": _000001_thor_k3m9xa,
   };
   ```
5. **QR Code:** no `public/.htaccess`, dentro do bloco **PETS**, adicione:
   ```
   # PET: 000001 (thor-12-03-2024)
   # CODIGO: k3m9xa
   RewriteRule ^m/k3m9xa/?$ https://www.eternizandoo.com/memorial/pet/thor-12-03-2024 [R=302,L,NE]
   ```
6. **Teste** em `http://localhost:8080/memorial/pet/<slug>`.

---

## 4. Campos específicos de pet

```ts
especie: "Cachorro",   // opcional
raca: "Shih Tzu",      // opcional — aparece abaixo do nome: "Cachorro • Shih Tzu"
```

### Hábitos (`habitos`)
Os `tipo` são os mesmos de sempre; só mudam os nomes das abas:

| `tipo` | Aba exibida (pet) |
|---|---|
| `bebida` | Bebidas |
| `comida` | Petiscos e Comidas |
| `habito` | Manias e Brincadeiras |
| `frase` | Jeitinhos Únicos |

### Família (`arvore_genealogica`)

| `relacao` | Grupo exibido |
|---|---|
| `tutor` / `tutora` | Tutores (acima do pet) |
| `familia` | Família (abaixo do pet) |
| `companheiro` / `companheira` | Companheiros de Patinhas (outros pets, com ícone de patinha) |

Para marcar quem já partiu, use `✝` no nome.

### Localização (`localizacao_tumulo`)
Nem todo pet tem um local para visitar. Mantenha `secoes_ativas.localizacao: false` se não houver (cemitério pet, jardim, etc.). A seção só aparece se estiver ativa **e** tiver `endereco`.

---

## 5. O que muda no visual e nos textos

| Item | Pessoa | Pet |
|---|---|---|
| Ícone do topo | Cruz | Patinha 🐾 |
| Moldura da foto de perfil | Oval em pé | Círculo perfeito com selo de patinha 🐾 na base |
| Lema do topo | In Memoriam | Para sempre no coração |
| Data de falecimento | † | 🌈 |
| Menu | Memorial Eterno | Memorial Pet Eterno |
| Biografia | História de Vida | Nossa História Juntos |
| Hábitos | Hábitos, Manias e Frases | Manias, Petiscos e Brincadeiras |
| Galeria | Galeria de Memórias | Galeria de Momentos |
| Músicas | Trilha Sonora e Canções | Nossa Trilha Sonora |
| Árvore | Árvore Genealógica | Nossa Família |
| Linha do tempo | Linha do Tempo | Nossa Jornada Juntos |
| Homenagens | Mensagens e Homenagens | Recados e Carinhos |
| Localização | Localização do Túmulo | Cantinho de Descanso |
| Dedicatória padrão | Com amor eterno, a família | Com amor eterno, sua família 🐾 |
| Rodapé / WhatsApp | Memorial Eterno | Memorial Pet |

> **Regra dos títulos:** a regra de **não alterar os títulos das seções** continua valendo para memoriais de **pessoas**. Para **pets**, os títulos foram adaptados de propósito (autorizado pelo responsável do projeto).

**Onde editar:**
- Textos e títulos: `src/lib/memorialLabels.tsx` (objeto `labelsPet`). O objeto `labelsPessoa` replica exatamente os textos originais.
- Cores do tema pet: bloco `.theme-pet` em `src/index.css`.

---

## 6. Resumo técnico

- **Rota** (`src/App.tsx`): `/memorial/pet/:slug` renderiza `<MemorialPage tipoRota="pet" />`. A rota de pessoas (`/memorial/:slug`) continua igual.
- **Busca de dados** (`src/pages/MemorialPage.tsx`): com `tipoRota="pet"`, procura **apenas** em `pets`; caso contrário, apenas em `memoriais`. Um pet nunca abre pelo link de pessoa, e vice-versa. Slug não encontrado leva ao 404. Por isso um pet e uma pessoa podem até ter o mesmo `slug` sem conflito.
- **Textos por tipo:** `src/lib/memorialLabels.tsx` define os rótulos e um contexto React (`LabelsContext`). Os componentes leem os textos com `useLabels()`. Fora do contexto, o padrão é o de pessoa.
- **Tema:** a página recebe a classe `theme-pet`, que troca as variáveis de cor do Tailwind/CSS só dentro dela.
- **Componentes adaptados** para ler os rótulos: `HeroSection`, `BiographySection`, `HabitsSection`, `FamilyTreeSection`, `TimelineSection`, `MusicSection`, `TributesSection`, `LocationSection`, `PhotoGallery` (fundo via `--gallery-bg`), `MemorialNav` e `FooterSection`.
- **Hero:** mostra `especie • raca` abaixo do nome, quando preenchidos. Para pets, a moldura da foto de perfil é um círculo perfeito (com a foto enquadrada um pouco mais para cima, para preservar o rosto) e um selo redondo com patinha na base; a moldura oval das pessoas permanece intacta (`HeroSection.tsx`).
- **Homenagens:** as mensagens de pets são gravadas na planilha com o prefixo `pet/` (ex: `pet/thor-12-03-2024`), separando-as das de pessoas.
- **Vitrine da página inicial:** `LandingPersonas` e `LandingMarquee` leem só o registro de pessoas; pets nunca aparecem nelas.

---

## 7. Registro das mudanças desta etapa

**Arquivos novos**
- `src/lib/memorialLabels.tsx` — rótulos de pessoa e pet + contexto
- `src/data/memoriais/pets/index.ts` — registro de pets (vazio por enquanto)
- `src/data/memoriais/pets/_template_pet.ts` — template de pet
- `public/fotos/pets/` e `public/trilhas_sonoras/pets/` — pastas dos pets (com `.gitkeep`)
- `tutoriais/memorial-pet-guia-completo.md` — este guia

**Arquivos alterados**
- `src/App.tsx` — nova rota de pets
- `src/pages/MemorialPage.tsx` — `tipoRota`, tema, rótulos e prefixo `pet/` nas homenagens
- `src/data/memoriais/types.ts` — campos opcionais `especie` e `raca`
- `src/index.css` — tema `.theme-pet` e variável `--gallery-bg`
- Componentes listados na seção 6
- `src/data/memoriais/index.ts` — apenas um comentário citando o template de pet
- `public/.htaccess` — bloco "PETS" com modelo de redirecionamento do QR Code

**Arquivos removidos**
- `tutoriais/como-criar-memorial-pet.md` — absorvido por este guia

**Não alterado:** nenhum memorial de pessoa (dados, fotos ou links).

---

## 8. Decisões em aberto

- **Código do QR Code:** hoje o código curto (6 caracteres) segue o mesmo formato das pessoas (`/m/k3m9xa`), só com destino diferente. Se for preferível que o link do QR também indique pet (`/m/pet/k3m9xa`), basta ajustar o bloco "PETS" do `.htaccess`.
- **Pasta para pessoas:** decidido **não** criar. Só pets têm pasta própria, por serem um braço secundário do projeto.

---

## 9. Dicas de produto

- **QR Code:** pode ser impresso em uma plaquinha para coleira, urna ou jazigo.
- Memoriais de pets costumam ter menos texto e mais fotos: vale pedir à família de 10 a 20 fotos.
