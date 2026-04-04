## Prompt 01

Quero fazer um ajuste na seção de músicas do memorial para a versão atual do MVP.

Hoje essa seção foi desenhada visualmente como se fosse um player de música (com botão de play/pause), mas neste momento do projeto não vamos implementar reprodução de áudio nem integração com APIs.

Objetivo desta alteração:
Transformar essa seção em uma lista de músicas que marcaram a história da pessoa, mantendo o visual elegante do memorial, mas sem qualquer funcionalidade de reprodução.

Faça as seguintes alterações:

1. Remover qualquer lógica ou comportamento de player de música.
2. Remover eventos de play/pause e qualquer código relacionado a reprodução de áudio.
3. Ajustar os elementos visuais para que os botões de play não pareçam clicáveis ou funcionais. 
   - Se necessário, remover o botão de play ou transformá-lo apenas em um elemento decorativo.
4. Manter o layout atual da lista de músicas (cards com título e artista), pois ele já está visualmente adequado para o memorial.

Estrutura das músicas:

Cada música deve possuir:
- título da música
- nome do artista

Adicionar também suporte opcional para um pequeno contexto ou descrição da música.

Esse contexto deve ser opcional, ou seja:
- se existir, ele aparece abaixo do nome da música;
- se não existir, o layout não deve quebrar nem deixar espaços vazios.

Exemplo de estrutura de dados:

{
  titulo: "Ave Maria",
  artista: "Gounod",
  contexto: "Cantada frequentemente nas manhãs de domingo"
}

ou

{
  titulo: "Trem Bala",
  artista: "Ana Vilela"
}

No segundo caso, como não existe contexto, ele simplesmente não deve ser exibido.

Importante:
- Não implementar nenhum player de música neste momento.
- Não integrar Spotify, YouTube ou qualquer API.
- A seção deve funcionar apenas como uma lista de músicas marcantes da vida da pessoa homenageada.

Objetivo final:
Manter a estética da seção, simplificando sua função para a versão MVP do produto.

## Prompt 02 (Complementação)

Quero implementar uma trilha sonora opcional no memorial usando um player flutuante.

Requisitos:

1. Criar um botão flutuante pequeno que fique visível na tela enquanto o usuário navega pelo memorial.
2. O botão deve permitir controlar a trilha sonora do memorial (play e pause).
3. A música não deve iniciar automaticamente. O visitante deve clicar em play para iniciar.
4. Quando tocar, a música deve ficar em loop e continuar tocando enquanto o usuário rola a página.
5. O botão deve ser arrastável pelo usuário (drag).
6. Quando o usuário soltar o botão, ele deve se fixar automaticamente no canto mais próximo da tela.
7. Os cantos possíveis são:
   - superior esquerdo
   - superior direito
   - inferior esquerdo
   - inferior direito
8. O botão deve ser discreto, circular e pequeno, para não atrapalhar a leitura do memorial.
9. A trilha sonora deve vir de um arquivo de áudio associado ao memorial.
10. Não usar autoplay.

Importante:
Esse player é apenas para a trilha sonora geral do memorial. A seção "Músicas que marcaram sua história" continua sendo apenas uma lista de músicas, sem player.



# Estrutura visual final da seção

Ficaria algo assim na página:

────────────────────────  
  
🎵 Trilha sonora deste memorial  
  
Amazing Grace  
Uma melodia que acompanha este memorial como símbolo de paz e lembrança.  
  
[ ▶ Ouvir trilha sonora ]  
  
────────────────────────  
  
🎶 Músicas que marcaram sua história  
  
Ave Maria — Gounod  
Trem Bala — Ana Vilela  
Como é grande o meu amor por você — Roberto Carlos  
	Amazing Gracex