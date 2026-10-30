# Mensagens para o Cliente — Memorial Pet

Roteiro de mensagens para pedir ao cliente todas as informações de um memorial pet. Copie e envie uma de cada vez (WhatsApp), esperando as respostas por partes.

> Depois que o cliente responder, siga o passo a passo do [memorial-pet-guia-completo.md](./memorial-pet-guia-completo.md) para montar o memorial.

---

## 📩 Mensagem 1: Dados principais

> Olá! 🐾 Vamos montar o memorial do seu companheiro com muito carinho. Para começar, preciso de algumas informações:
>
> **Nome do pet:**
> **Espécie** (cachorro, gato, outro):
> **Raça** (ou "sem raça definida"):
> **Macho ou fêmea:**
> **Data de nascimento** (se não souber, a data aproximada ou a data em que ele chegou à família):
> **Data de falecimento:**
> **Uma frase de homenagem** (curta e carinhosa, para aparecer no topo da página):

---

## 📩 Mensagem 2: A história dele

> Agora quero conhecer a história dele. Pode escrever do seu jeito, como se estivesse contando para alguém. 💛
>
> - Como ele chegou à família?
> - Como era a personalidade dele?
> - Quais histórias engraçadas ou marcantes vocês viveram?
> - O que ele significava para vocês?
> - Como foi a despedida? (se quiser contar)
>
> Não precisa ser perfeito, eu cuido de organizar o texto.

---

## 📩 Mensagem 3: Manias e momentos

> Agora os detalhes que só quem convivia conhecia: 🦴
>
> **Petiscos e comidas favoritas:**
> **Bebidas** (se tiver alguma, como leite ou água de coco):
> **Brincadeiras e brinquedos preferidos:**
> **Manias e costumes** (lugar favorito para dormir, o que fazia quando alguém chegava...):
> **Jeitinhos únicos dele** (o latido, o miado, o olhar, o que ele "falava"):
>
> E se puder, os marcos da vida dele, com o ano de cada um: quando nasceu, quando chegou em casa, viagens, mudanças, aniversários e o dia da partida.

---

## 📩 Mensagem 4: Família e músicas

> Quem faz parte da família dele? 🏡
>
> **Tutores** (quem cuidava dele):
> **Outros familiares** (filhos, netos, primos...):
> **Outros pets da casa** (informe se algum já partiu):
>
> **Música:** se quiser, escolha uma música especial para tocar ao abrir a página (pode ser a favorita da família ou uma que lembre ele) e outras canções que tenham a ver com a história de vocês. Me passe o nome da música e do artista.

---

## 📩 Mensagem 5: Fotos e local

> Por fim, as fotos! 📸
>
> - **1 foto de perfil:** de preferência com o rostinho dele bem visível. Ela aparece dentro de uma moldura redonda.
> - **De 10 a 20 fotos** para a galeria, as mais bonitas e divertidas.
> - **Legendas (opcional):** se quiser, escreva uma legenda curta para algumas fotos, de preferência para pelo menos as 7 primeiras, que são as que aparecem em destaque. Ex.: "No primeiro dia em casa". Não precisa legendar todas, e se preferir pode deixar sem legenda nenhuma. 😊
>
> **Onde ele descansa?** Se houver um lugar para visitar (cemitério de animais, jardim da casa, etc.), me envie:
> - o endereço ou o nome do local
> - o link do Google Maps
> - o horário de visita, se houver
> - uma foto do local
>
> **Dedicatória final** (opcional): alguém ou uma mensagem para assinar a página. Ex.: "Com amor eterno, sua família". 🐾

---

## 💡 Dicas para quem atende

- **Foto de perfil:** peça de preferência uma foto de rosto, em boa qualidade. A moldura é redonda e cortaria muito uma foto de corpo inteiro.
- **Ordem das fotos:** peça ao cliente para mandar as fotos **em ordem de preferência**, com as melhores primeiro. A galeria mostra 7 fotos de início e o restante aparece em "ver mais"; por isso as legendas valem mais nas primeiras.
- **Capa do topo (hero):** pode ser a imagem padrão, como nos outros memoriais. Não precisa pedir.
- **Endereço da página:** o nome do pet e a data de falecimento definem o link, algo como `/memorial/pet/thor-12-03-2024`.

## 🗺️ Onde cada resposta entra no memorial

| Resposta do cliente | Campo / seção no arquivo do pet |
|---|---|
| Nome, espécie, raça, macho/fêmea | `nome_completo`, `especie`, `raca`, `genero` |
| Datas | `data_nascimento`, `data_falecimento` |
| Frase de homenagem | `frase_homenagem` |
| História | `texto_biografico` (Nossa História Juntos) |
| Petiscos, brincadeiras, manias, jeitinhos | `habitos` com `tipo`: `comida`, `habito`, `frase` (bebidas: `bebida`) |
| Marcos da vida | `linha_tempo` (Nossa Jornada Juntos) |
| Tutores, família, outros pets | `arvore_genealogica` com `relacao`: `tutor`/`tutora`, `familia`, `companheiro`/`companheira` |
| Música principal e canções | `trilha_sonora` e `musicas` |
| Foto de perfil | `profile.jpg` em `public/fotos/pets/<ID_PET>/` |
| Fotos e legendas | pasta `gallery/` e array `galeria` |
| Local, mapa, horário e foto do local | `localizacao_tumulo` (Cantinho de Descanso) e `secoes_ativas.localizacao` |
| Dedicatória | `dedicatoria` |
