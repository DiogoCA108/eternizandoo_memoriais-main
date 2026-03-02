import fotoLargadaAguilhadas from "@/assets/16km/gallery/fotoLargadaAguilhadas.png";
import fotoPrimeiraLadeira from "@/assets/16km/gallery/fotoPrimeiraLadeira.jpg";
import fotoPercursoNublado from "@/assets/16km/gallery/fotoPercursoNublado.jpg";
import fotoKm8 from "@/assets/16km/gallery/fotoKm8.jpg";
import fotoKmFinal from "@/assets/16km/gallery/fotoKmFinal.jpg";
import fotoPosDesafio from "@/assets/16km/gallery/fotoPosDesafio.jpg";
import fotoAguaGelada from "@/assets/16km/gallery/fotoAguaGelada.jpeg";
import fotoAcai from "@/assets/16km/gallery/fotoAcai.jpeg";
import fotoDiogo from "@/assets/16km/gallery/fotoDiogo.jpg";
import fotoWellison from "@/assets/16km/gallery/fotoWellison.jpg";
import fotoDuplaUnida from "@/assets/16km/gallery/fotoDuplaUnida.jpg";

export const memorialData_16km = {
  nome_completo: "Desafio 16KM - Lagoa Redonda",
  data_nascimento: "2025-12-21",
  data_falecimento: "2026-02-28",
  frase_homenagem: "A palavra não tem volta, o exemplo fica para sempre.",
  texto_biografico: `No dia 28/02/2026, foi dia de colocar o corpo e a mente à prova. Diogo Martins e Wellison Silveira encararam um desafio de 16KM, saindo do Trevo das Aguilhadas com destino ao povoado de Lagoa Redonda. No papel, parecia “só mais uma corrida”… mas na prática, foi uma verdadeira jornada de superação 😅.

Logo de cara, como se fosse um aviso do universo dizendo “vocês têm certeza?”, já pegamos uma ladeira de 2KM no início do percurso. Aquela subida que faz você repensar todas as decisões da vida enquanto tenta manter o ritmo e a dignidade. O tempo estava nublado, o que ajudou a não castigar tanto no calor, mas também trouxe aquele clima introspectivo perfeito pra começar a batalha interna.

E foi justamente nos quilômetros finais que o verdadeiro desafio apareceu. As pernas já pesavam, a respiração pedia trégua, e o psicológico começou a sussurrar: “Dá pra parar por aqui…” Mas ali a gente decidiu que não era só sobre correr — era sobre terminar. Cada passo virou uma conversa interna. Cada metro, uma pequena vitória. E assim, um incentivando o outro, seguimos até cruzar a linha invisível que marcava o fim do desafio.

Missão cumprida, veio a melhor parte: água gelada e um belo açaí pra recuperar as energias. Porque ninguém é de ferro — mas também ninguém é de desistir fácil.

Depois, ainda tinha a logística: organizar o retorno ao ponto de partida. E lá fomos nós, voltando de carona em duas motos, com aquela mistura de cansaço e orgulho estampada no rosto. Corpo moído, mente fortalecida e a certeza de que desafios assim não são só sobre quilômetros… são sobre quem a gente se torna no caminho.

E que venham os próximos. 💪`,

  habitos: [
    { tipo: "bebida", descricao: "Água gelada logo após cruzar a chegada dos 16KM" },
    { tipo: "bebida", descricao: "Açaí reforçado para recuperar as energias depois do desafio" },
    { tipo: "comida", descricao: "Banana antes da largada no Trevo das Aguilhadas" },
    { tipo: "comida", descricao: "Barrinha de cereal no meio do percurso" },
    { tipo: "comida", descricao: "Lanche improvisado pós-desafio já em Lagoa Redonda" },
    { tipo: "habito", descricao: "Acordar cedo para encarar desafios físicos e mentais" },
    { tipo: "habito", descricao: "Motivar o parceiro nos quilômetros mais difíceis" },
    { tipo: "habito", descricao: "Transformar cansaço em combustível para continuar" },
    { tipo: "frase", descricao: '"Não é só sobre correr — é sobre terminar."' },
    { tipo: "frase", descricao: '"Cada passo é uma vitória contra o próprio limite."' },
    { tipo: "frase", descricao: '"O psicológico desiste antes do corpo — controle a mente e avance."' },
  ],

  galeria: [
    { tipo: "foto" as const, url: fotoWellison, legenda: "Wellison Silveira" },
    { tipo: "foto" as const, url: fotoDiogo, legenda: "Diogo Martins" },
    { tipo: "foto" as const, url: fotoLargadaAguilhadas, legenda: "Largada no Trevo das Aguilhadas, 28/02/2026" },
    { tipo: "foto" as const, url: fotoPrimeiraLadeira, legenda: "Primeira ladeira de 2KM logo no início" },
    { tipo: "foto" as const, url: fotoPercursoNublado, legenda: "Percurso sob céu nublado" },
    { tipo: "foto" as const, url: fotoKm8, legenda: "Metade do percurso, foco total" },
    { tipo: "foto" as const, url: fotoKmFinal, legenda: "Quilômetros finais — batalha mental" },
    { tipo: "foto" as const, url: fotoAguaGelada, legenda: "Água gelada para recuperar as forças" },
    { tipo: "foto" as const, url: fotoAcai, legenda: "Açaí pós-desafio" },
    { tipo: "foto" as const, url: fotoDuplaUnida, legenda: "Quem sai junto chega junto" },
    { tipo: "foto" as const, url: fotoPosDesafio, legenda: "Missão cumprida após 16KM" },
  ],

  musicas: [
    { titulo: "Eye of the Tiger — Survivor", url_player: "#" },
    { titulo: "Dias de Luta, Dias de Glória — Charlie Brown Jr.", url_player: "#" },
    { titulo: "Tempo Perdido — Legião Urbana", url_player: "#" },
    { titulo: "Hall of Fame — The Script", url_player: "#" },
  ],

  arvore_genealogica: [
    { nome: "Diogo Gonçalves Martins", relacao: "atleta" },
    { nome: "Wellison Silveira", relacao: "atleta" },
    { nome: "Desafio 16KM", relacao: "conquista" },
    { nome: "Trevo das Aguilhadas", relacao: "ponto_partida" },
    { nome: "Lagoa Redonda", relacao: "ponto_chegada" },
    { nome: "Primeira Ladeira 2KM", relacao: "maior_desafio_inicial" },
  ],

  linha_tempo: [
    { titulo_evento: "Surgimento da Ideia", data_evento: "2025-12-18", descricao: "Durante uma conversa surgiu a provocação: encarar 16KM do Trevo das Agulhadas até Lagoa Redonda.", ordem: 1 },
    { titulo_evento: "Acordo Firmado", data_evento: "2025-12-21", descricao: "Desafio oficialmente aceito entre Diogo Gonçalves Martins e Wellison Silveira, transformando a ideia em compromisso.", ordem: 2 },
    { titulo_evento: "Início da Preparação", data_evento: "2026-01-05", descricao: "Começo dos treinos e fortalecimento mental para enfrentar as ladeiras e a longa distância.", ordem: 3 },
    { titulo_evento: "Alinhamento Final", data_evento: "2026-02-24", descricao: "Conversa estratégica sobre ritmo, hidratação, alimentação e logística de retorno.", ordem: 4 },
    { titulo_evento: "Largada", data_evento: "2026-02-29", descricao: "Início do desafio no Trevo das Agulhadas sob céu nublado.", ordem: 5 },
    { titulo_evento: "Primeira Ladeira (2KM)", data_evento: "2026-02-29", descricao: "Logo nos primeiros quilômetros, uma subida intensa de 2KM colocou o psicológico à prova.", ordem: 6 },
    { titulo_evento: "Quilômetros Finais", data_evento: "2026-02-29", descricao: "Momento decisivo de luta interna contra o cansaço e o desejo de parar.", ordem: 7 },
    { titulo_evento: "Chegada em Lagoa Redonda", data_evento: "2026-02-29", descricao: "Conclusão dos 16KM com sensação de missão cumprida e superação.", ordem: 8 },
    { titulo_evento: "Recuperação", data_evento: "2026-02-29", descricao: "Água gelada e açaí para celebrar e recuperar as energias após o desafio.", ordem: 9 },
    { titulo_evento: "Retorno de Moto", data_evento: "2026-02-29", descricao: "Logística resolvida com carona em duas motos até o ponto de partida.", ordem: 10 },
  ],

  homenagens: [
    { nome: "Wellison Silveira", vinculo: "Parceiro de Desafio", mensagem: "Foram 16KM de superação. Um puxando o outro até o fim. Que venham os próximos.", data: "2026-02-29" },
    { nome: "Amigo Anônimo", vinculo: "Apoiador", mensagem: "Vocês provaram que o limite está na mente. Parabéns pela determinação!", data: "2026-03-01" },
    { nome: "Família", vinculo: "Incentivo", mensagem: "Orgulho por mais esse desafio vencido. A disciplina de vocês inspira.", data: "2026-03-01" },
    { nome: "Comunidade Local", vinculo: "Acompanhamento", mensagem: "Do Trevo das Agulhadas até Lagoa Redonda — exemplo de força e persistência.", data: "2026-03-02" },
  ],

  localizacao_tumulo: {
    endereco: "Percurso: Trevo das Agulhadas até o povoado de Lagoa Redonda",
    horario_visita: "Livre — desafio realizado em 29/02/2026",
    link_maps: "https://maps.app.goo.gl/66Qb619J9rTYwosF7",
    foto_url: "https://1.bp.blogspot.com/-Mby_a8v5wc4/U2i_TQ0xtAI/AAAAAAAAUFQ/KpOA4-4Mrks/s1600/Dunas+e+Lagoa+Redonda,+em+Pirambu,++Litoral+Norte+de+Sergipe+-+Por+Tito+Garcez.jpg",
  },
};
