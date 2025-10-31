import { Injectable } from '@angular/core';
import { Faixa, FaixaSection, Tecnica, TextoTeorico, SecoesEspeciais } from '../models/faixa.model';


@Injectable({ providedIn: 'root' })
export class ConteudoService {
  private textosTeoricos: TextoTeorico[] = [
    {
      id: 'historia',
      titulo: 'História do Taekwondo',
      conteudo: `<p>A origem do Taekwondo confunde-se com a própria história da Coréia. A arte marcial, popular em todo o planeta, tem suas raízes em ritos e práticas de combate do século VI, durante o período dos três reinos: Silla, Goguryeo e Baekje. O Taekwondo moderno surge como uma síntese de diversas artes marciais coreanas, como o Taekkyon e o Hwarangdo, com a influência do Karatê japonês.</p>
        <p>Apesar de seu crescimento acelerado em todas as partes do mundo, com sua inserção, inclusive, nos Jogos Olímpicos, o Taekwondo só foi reconhecido oficialmente como esporte nacional da Coreia em 1971. A sua filosofia baseia-se nos princípios do YIN e YANG, que representam o equilíbrio dos contrários e a natureza da dualidade que permeia o mundo.</p>
        <p>A Kukkiwon, sediada em Seul, Coreia do Sul, é a entidade que centraliza o controle do esporte em todo o mundo. A palavra <strong>"Kukkiwon"</strong> significa "Academia Mundial do Taekwondo".</p>
        <p>No Brasil, o Taekwondo foi introduzido em 1970 pelo grão-mestre Sang Min Cho, que veio ao país para difundir a prática e o conhecimento de sua arte marcial. Em 1976, é a vez do grão-mestre Yong Min Kim, responsável por uma nova geração de mestres e mestras do esporte no Brasil. Sua mestra, Lúcia Kobayashi, por exemplo, é uma das principais referências para esta apostila de conhecimento.</p>
        <p>O Taekwondo, traduzido do coreano, significa <strong>"caminho dos pés e das mãos através da mente e do corpo"</strong>. É uma arte marcial que, além de ser um esporte, é uma filosofia de vida, ensinando valores como disciplina, respeito e autocontrole.</p>
      `
    },
    {
      id: 'espirito etc.',
      titulo: 'Espírito, Princípios  e as Cinco Virtudes do Taekwondo',
      conteudo: `
      <p>O Taekwondo não é apenas uma arte marcial que consiste em exercícios físicos. É também um modo de vida, que nos ensina a respeitar os mais velhos, a honrar nossos mestres, a ser disciplinado e a ter autocontrole. O espírito do Taekwondo é a busca constante pela perfeição, tanto física quanto mental. O aluno de Taekwondo tem como objetivo não apenas se tornar um lutador, mas um cidadão exemplar, que contribui para o bem-estar da sociedade.</p>
      <ol>
        <li><strong>CORTESIA</strong> (sua relação com o outro)</li>
        <li><strong>INTEGRIDADE</strong> (evolução moral)</li>
        <li><strong>PERSEVERANÇA</strong> (superar dificuldades internas)</li>
        <li><strong>AUTOCONTROLE</strong> (controle das emoções)</li>
        <li><strong>ESPÍRITO INDOMÁVEL</strong> (não recuar diante do inimigo)</li>
      </ol>kwondo, traduzido do coreano, significa <strong>"caminho dos pés e das mãos através da mente e do corpo"</strong>. É uma arte marcial que, além de ser um esporte, é uma filosofia de vida, ensinando valores como disciplina, respeito e autocontrole.</p>  
      <p>A Filosofia do Taekwondo, segundo a Kukkiwon, é a busca pela perfeição do corpo e da mente, através de um treinamento rigoroso e constante. A prática do Taekwondo deve ser um meio de se alcançar a harmonia interior e exterior, o equilíbrio entre o corpo e a mente.</p>
      <p>No Taekwondo, a filosofia se materializa em cinco virtudes:</p>
        <ol>
          <li>**Cortesia (Ye Ui)**: agir com respeito e educação;</li>
          <li>**Integridade (Yom Chi)**: ser honesto e justo;</li>
          <li>**Perseverança (In Nae)**: nunca desistir;</li>
          <li>**Autocontrole (Geuk Gi)**: dominar as próprias emoções;</li>
          <li>**Espírito Indomável (Baekjul Boolgool)**: lutar por suas crenças e por um mundo mais pacífico.</li>
        </ol>
      `
    },
    {
      id: 'juramento',
      titulo: 'O Juramento do Aluno',
      conteudo: `<p>O juramento do aluno de Taekwondo, recitado ao final de cada aula, reforça o compromisso com os princípios da arte marcial:</p>
        <ol>
          <li>Observar as regras do Taekwondo.</li>
          <li>Respeitar o instrutor e os superiores.</li>
          <li>Nunca fazer mau uso do Taekwondo.</li>
          <li>Ser um campeão da liberdade e da justiça.</li>
          <li>Construir um mundo mais pacífico.</li>
        </ol>
      `
    },
{
 id: 'taegeuk',
 titulo: 'Significado dos Taegeuks',
 conteudo: '<p>Significados do Taegeuk</p> <br><p>Marcante é a influência da filosofia chinesa na cultura coreana. Os preceitos sociais e filosóficos do confucionismo e do taoísmo foram assimilados por distintas dinastias, o que se mantém hoje na própria a simbologia oficial do Estado coreano, em sua bandeira e significados, o que ocorre também na filosofia que acompanha a graduação das faixas do taekwondo.</p> ' 
},
  ];

   private faixas: Faixa[] = [
    {

      id: 'faixa-branca',
      nome: 'BRANCA',
      grau: '10º GUB',
      introducao: 'Neste conteúdo programático da Faixa Branca, os termos em coreano romanizado em laranja recebem sua tradução na sintaxe do português logo abaixo, em vermelho.<br><br> Bom treino!',
      background: 'assets/faixas/faixa-branca.jpg',
      imageClass: 'faixa-branca-bg',
      sections: [
        {
          title: 'Juchum Jireugi – 주춤지르기 ',
          translation: 'Soco na Base do Cavalo',
          tecnicas: [
            {
descricao: 'Deslocar o pé à esquerda e socar com a esquerda em dez contagens com kihap no último golpe',
              id: 'jutchun-moa',
              nome: '(Momtong) Moa-seogi-jireugi',
              traducao: '(Tronco) Soco na Base Fechada',
              videoId: 'dQw4w9WgXcQ',
              nota: '<i>(Momtong) Moa-seogi-jireugi</i> = (Tronco) Fechada base-soco.',
             notaId: 1,
             audioFile: 'assets/audio/1 Momtong-moa-seogi-jireugi.mp3'
            },
            {

              id: 'jutchun-naran',
              nome: '(Momtong) Narani-seogi-jireugi',
              traducao: '(Tronco) Soco na Base Paralela',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
                 nota: '<i>(Momtong) Narani-seogi-jireugi</i> = (Tronco)-Paralela base-soco.',
             notaId: 2,     
              audioFile: 'assets/audio/2 Momtong-narani-seogi-jireugi.mp3'
            },
            {
              id: 'jutchun-jutchun',
              nome: '(Momtong) Juchum-seogi-jireugi',
              traducao: '(Tronco) Soco na Base do Cavalo',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Juchum-seogi-jireugi</i> – a punch to the trunk in a Horseback Riding Stance. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.9)</a>',
             notaId: 3,
              audioFile: 'assets/audio/3 Momtong-juchum-seogi-jireugi.mp3'
            }

          ]
        },
        {
          title: 'Gibon Dongjak - 기본동작',
          translation: 'Técnicas Fundamentais',
          tecnicas: [

            {
               descricao: 'Apgubi (Base Frontal)',
              id: 'arae-makgi',
              nome: 'Arae-makgi',
              traducao: 'Defesa Embaixo',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>(Bakkatpalmok) naeryeo-makgi [=Arae-makgi]</i> / (바깥팔목) 내려막기 [=아래막기] / (Outside Wrist) Downward Block [=Low Block]. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.50)</a>', // Adicionada nota de exemplo
            notaId: 4,
             audioFile: 'assets/audio/4 Arae-makgi.mp3'
                        },
            {
              id: 'momtong-makgi ',
              nome: 'Momtong-makgi ',
              traducao: 'Defesa no Tronco',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>(Bakkatpalmok) An-makgi </i> (Outside Wrist Inward Block) [=Momtong-makgi].<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.6)</a>.', // Adicionada nota de exemplo
            notaId: 5,
             audioFile: 'assets/audio/5 Momtong-makgi.mp3'
            
            },
            {
              id: 'Eolgul-makgi  ',
              nome: 'Eolgul-makgi',
              traducao: 'Defesa no Rosto',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>(Bakkatpalmok) Ollyeo-makgi </i> (Outside Wrist Upward Block) [=Eolgul-makgi].<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.6)</a>.</a>', // Adicionada nota de exemplo
            notaId: 6,
             audioFile: 'assets/audio/6 Eolgul-makgi.mp3'
            },
            {
              id: 'naeryeo-hecheo-makgi',
              nome: '(Bakkatpalmok) naeryeo-hecheo-makgi ',
              traducao: 'Defesa Espalhada Descendente',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>(Bakkatpalmok) naeryeo-hecheo-makgi</i>. (Kukkiwon, p.49-50). O mestre Sérgio Moller (6º DAN) executa a técnica em:  <a href="https://www.youtube.com/watch?v=oyyzQCpawu8&t=305s" target="_blank">(Moller, min. 5.05)</a>.', // Adicionada nota de exemplo
            notaId: 7,
             audioFile: 'assets/audio/7 (Bakkatpalmok) naeryeo-hecheo-makgi.mp3'
            },
            {
              descricao: 'Ap-seogi (Base de Caminhada)',
              id: 'arae-jireugi',
              nome: 'Arae-jireugi ',
              traducao: 'Soco Embaixo',
              videoId: 'dQw4w9WgXcQ',
               nota: '<i>Arae-jireugi </i> = Embaixo-soco.',
             notaId: 8,
              audioFile: 'assets/audio/8 Arae-jireugi.mp3'
             
               // mesmo do seu HTML simplificado
             },
            {
              id: 'momtong-jireugi',
              nome: 'Momtong-jireugi',
              traducao: 'Soco no Tronco',
              videoId: 'dQw4w9WgXcQ',
                 nota: '<i>Momtong-jireugi </i> = Tronco-soco.',
             notaId: 9,
              audioFile: 'assets/audio/9 Momtong-jireugi.mp3'
                  },
            {
              id: 'eolgul-jireugi',
              nome: 'Eolgul-jireugi',
              traducao: 'Soco no Rosto',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Eolgul-jireugi </i> = Rosto-soco.',
             notaId: 10,
              audioFile: 'assets/audio/10 Eolgul-jireugi.mp3' 
             
                       }, 
            //             {
            //   descricao: 'Base de Luta',
            //   id: '(bakkatpalmok) geoduro-bakkat-makgi',
            //   nome: '(Bakkatpalmok) Geoduro-bakkat-makgi',
            //   traducao: 'Defesa Externa Assistida',
            //   videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
            //   nota: '<i> (Bakkatpalmok) geodeureo-bakkat-makgi </i>/ (바깥팔목) 거들어 바깥막기 / (OutsideWrist) Supporting Outward Block <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.45, adaptado).</a> Moller executa a técnica em: <a href="https://www.youtube.com/watch?v=oyyzQCpawu8&ab_channel=SergioMollerTaekwondo" target="_blank">(Moller, 2022, min. 4.27).</a>',
            // notaId: 11
            // },
//                    {
//               descricao: 'FGTKD - Ap-seogi',
//               id: '(bakkatpalmok) naeryeo-hecheo-makgi ',
//               nome: '(Bakkatpalmok) naeryeo-hecheo-makgi',
//               traducao: 'Defesa Externa Assistida',
//               videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
//               nota: '<i> (Bakkatpalmok) naeryeo-hecheo-makgi </i>/ (바깥팔목) 거들어 바깥막기 / (OutsideWrist) Supporting Outward Block <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.45, adaptado).</a> Moller executa a técnica em: <a href="https://www.youtube.com/watch?v=oyyzQCpawu8&ab_channel=SergioMollerTaekwondo" target="_blank">(Moller, 2022, min. 4.27).</a>',
//             notaId: 11
//             },
//                 {
//               descricao: 'Apgubi',
//               id: 'anpalmok-bakkat-makgi  ',
//               nome: 'Anpalmok-bakkat-makgi ',
//               traducao: 'Defesa Externa Assistida',
//               videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
//               nota: '<i> Anpalmok-bakkat-makgi  </i>/ 안팔목 바깥막기 / Inside Wrist Outward Block. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.45).',
//             notaId: 12
//             },
//             {
        
//               id: 'nun-gawisonkkeut-jjireugi',
//               nome: 'Nun-gawisonkkeut-jjireugi',
//               traducao: 'Perfurar Olhos c/ Dedos em Tesoura',
//               videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
//               nota: '<i> Gawisonkkeut-jjireugi </i>/ 가위손끝 찌르기  / Scissors Fingertip Thrust.   <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.37).',
//             notaId: 13,
//             },


//  {
//               id: 'mok-pyeonsonkkeut-eopeo-jjireugi ',
//               nome: 'Mok-pyeonsonkkeut-eopeo-jjireugi ',
//               traducao: 'Perfurar Garganta c/ Mão em Lança',
//               videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
//               nota: '<i>(Pyeonsonkkeut) eopeo-jjireugi </i>/ (편손끝) 엎어찌르기 / (Spear Hand) Horizontal Thrust.    <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.37).',
//             notaId: 14,
//             },
//              {
        
//               id: 'mok-du-sonnal-an-chigi ',
//               nome: 'Mok-du-sonnal-an-chigi ',
//               traducao: 'Golpear Pescoço c/ Mãos em Faca',
//               videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
//               nota: '<i>Du-sonnal-an-chigi</i>/ 두 손날 안치기 / Two-Knife Hand Inward Strike.    <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.23).',
//             notaId: 15,
//             },
            
          ],
           
          
        },
        {
          title: 'Bal Kisul - 발기술 ',
          translation: 'Técnicas de Chute',
          description: 'naeryeo-hecheo-makgi <br> (Defesa Espalhada Descendente)',
          tecnicas: [
            {
              descricao: 'Dwitbal (Perna de trás)',
              id: 'bandal-chagi  ',
              nome: 'Bandal-chagi',
              traducao: 'Chute Meia Lua',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Bandal-chagi</i> (반달차기): Crescent Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.13)</a>.  ',
             notaId: 11  ,
              audioFile: 'assets/audio/11 Bandal-chagi.mp3'
            },
            {
              id: 'ap-chagi  ',
              nome: 'Ap-chagi ',
              traducao: 'Chute Frontal',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Ap-chagi</i> (앞차기): Front (Snap) Kick.<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.12)</a>. ',
             notaId: 12,
              audioFile: 'assets/audio/12 Ap-chagi.mp3'
            },
            {
              id: 'naeryeo-oligi  ',
              nome: 'naeryeo-oligi (Naeryeo-chagi)  ',
              traducao: 'Elevação Frontal',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
             nota: '<i>Naeryeo-chagi</i> (내려차기): Axe Kick.<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.20)</a>. ',
             notaId: 13,
              audioFile: 'assets/audio/13 Naeryeo-chagi.mp3'
            },
            {
              id: 'bakkat-olig ',
              nome: 'Bakkat-oligi (Bakkat-chagi)   ',
              traducao: 'Elevação Externa (Chute Externo)',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
             nota: '<i>Bakkat-chagi</i>(바깥차기): Outward Kick.  <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.13)</a>.',
             notaId: 14,
              audioFile: 'assets/audio/14 Bakkat-chagi.mp3'
            },

 {
              id: 'an-oligi (An-chagi)',
              nome: 'An-oligi (An-chagi)',
              traducao: 'Elevação Interna (Chute Interno)',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
             nota: '<i>An-chagi</i>(안차기): Inward Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.12)</a>.',
             notaId: 15,
              audioFile: 'assets/audio/15 An-chagi.mp3'
            },
            {
              id: 'ttwieo-ap-chagi ',
              nome: 'Ttwieo-ap-chagi ',
              traducao: 'Chute Frontal Saltado',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Ttwieo-ap-chagi</i> / 뛰어 앞차기 / Jumping Front Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.13)</a>', // Adicionada nota de exemplo
            notaId: 16,
             audioFile: 'assets/audio/16 Ttwieo-ap-chagi.mp3'
            },
          ]
        },
        {
          title: 'Forma',
          translation: '',
          description: '',
          tecnicas: [
            {
              id: 'saju-ap-chagi',
              nome: 'Saju-ap-chagi',
              traducao: 'Chute Frontal nas Quatro Direções',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Saju-ap-chagi</i> = Quatro direções-frente-chute.',// Adicionada nota de exemplo
              notaId: 17 
            },
 
          ]
        }
      ],



     
referencias: [ 
        
        'KUKKIWON.<strong> Taekwondo Technical Terminology.</strong> World Taekwondo Headquarters, <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank"> 2012.</a>',
        'Sergio Moller Taekwondo. <strong>Nomenclatura Oficial Kukkiwon: Defesas (Makgi) 1 (...)</strong>. Youtube, <a href="https://www.youtube.com/watch?v=oyyzQCpawu8&ab_channel=SergioMollerTaekwondo" target="_blank">2022.</a>'
      ]
    },
     {
    id: 'faixa-cinza',
    nome: 'CINZA',
    grau: '9º GUB',
    introducao: 'Olá, seja bem vindo. <br> Na Faixa Cinza, incluímos agora o<i> Gibon Yeonseub,</i> além de novas técnicas de defesa como a <i>(Bakkatpalmok) Bakkat-makgi </i> (Defesa Externa c/ Pulso Externo), <i>Anpalmok-bakkat-makgi</i> (Defesa Externa c/ Pulso Interno), assim como novos chutes, como o <i>Yeop-chagi</i> (Chute Lateral) e <i>Dollyeo-chagi</i> (Chute Circular). A forma da Faixa Cinza é o <i>Saju Jireugi</i> <br> Bom treino!     ',
    background: '/assets/faixas/faixa-cinza.jpg',
     imageClass: 'faixa-cinza-bg',
    sections: [
      {
        title: 'Gibon Yeonseub – 기본연습',
        translation: 'Práticas Fundamentais',
        tecnicas: [
          {
            descricao: 'Jutchun-seogi (Base do Cavalo):',
            id: 'arae-makgi-ky',
            nome: '- Arae-makgi<br><span class="destaque-vermelho">Defesa Embaixo</span><br>- Momtong-makgi<br><span class="destaque-vermelho">Defesa no Tronco</span><br>- Anpalmok-bakkat-makgi<br><span class="destaque-vermelho">Defesa Externa c/ Pulso Interno</span><br>- (Bakkatpalmok) Bakkat-makgi<br><span class="destaque-vermelho">Defesa Externa c/ Pulso Externo</span><br>- Eolgul-makgi<br><span class="destaque-vermelho">Defesa no Rosto</span><br>- Arae-jireugi<br><span class="destaque-vermelho">Soco Embaixo</span><br>- Momtong-jireugi<br><span class="destaque-vermelho">Soco no Tronco<br></span>- Eolgul-jireugi<br><span class="destaque-vermelho">Soco no Rosto</span>',
            traducao: '',
            videoId: 'video_id_exemplo',
                        nota: 'Gibon yonsup destaca quatro ou menos partes fundamentais de técnicas básicas, em seis movimentos: <br> 짜기 (<i><strong>Jjagi</i></strong>) = “Tecer”. Preparar a posição inicial. <br>  허리 틀기 (<i><strong>Heori Teulgi</strong></i>) = “Quadril Girar”. É o giro do quadril. <br> 틀어 막기 (<i><strong>Teureo Makgi ou Chigi</strong></i>) = “Torcer Defesa ou Golpe”. A execução da defesa ou golpe. <br>  팔굽치기 (<i><strong>Palgup Chigi</strong></i>) = “Cotovelo Golpe”. A cotovelada que faz o quadril girar novamente. <br> 힘의 약강 (<i><strong>Him-ui Yakgang</strong></i>) = “Força Suavidade/Dureza”.  Uma execução completa com ênfase no equilíbrio entre suavidade e força. <br> 속도의 완급 (<i><strong>Sokdo-ui Wangeup</strong></i>) = “Velocidade Aceleração/Desaceleração”. Uma execução completa com ênfase no equilíbrio entre aceleração e desaceleração.',

            notaId: 1
          },
//           {
//             id: 'montong-makgi-ky',
//             nome: 'Momtong-makgi',
//             traducao: 'Defesa no Tronco',
//             videoId: 'video_id_exemplo',
//             nota: '<i>Momtong-makgi</i> = Tronco-defesa',
//             notaId: 2
//           },
// {
//             id: 'anpalmok-bakkat-makgi-ky',
//             nome: 'Anpalmok-bakkat-makgi',
//             traducao: 'Defesa Externa c/ Pulso Interno',
//             videoId: 'video_id_exemplo',
//             nota: '<i>Anpalmok-bakkat-makgi</i> = Internopulso-externa-defesa',
//             notaId: 3
//           },
//           {
//             id: 'bakkat-makgi-ky',
//             nome: '(Bakkatpalmok) Bakkat-makgi',
//             traducao: 'Defesa Externa c/ Pulso Externo',
//             videoId: 'video_id_exemplo',
//             nota: '<i>(Bakkatpalmok) Bakkat-makgi</i> = Externopulso-externa-defesa',
//             notaId: 4
//           },
//            {
//             id: 'Eolgul-makgi-ky',
//             nome: 'Eolgul-makki',
//             traducao: 'Defesa no Rosto',
//             videoId: 'video_id_exemplo',
//             nota: '<i>Eolgul-makki</i> = Rosto-defesa',
//             notaId: 5
//           },
//  {
//             id: 'arae-jireugi-ky',
//             nome: 'Arae-jireugi',
//             traducao: 'Soco no Rosto',
//             videoId: 'video_id_exemplo',
//             nota: '<i>Arae-jireugi</i> = Embaixo-soco',
//             notaId: 6
//           },
// {
//             id: 'momtong-jireugi-ky',
//             nome: 'Momtong-jireugi',
//             traducao: 'Soco no Tronco',
//             videoId: 'video_id_exemplo',
//             nota: '<i>Momtong-jireigu</i> = Tronco-soco',
//             notaId: 7
//           },
// {
//             id: 'Eolgul-jireugi-ky',
//             nome: 'Eolgul-jireugi',
//             traducao: 'Soco no Rosto',
//             videoId: 'video_id_exemplo',
//             nota: '<i>Eolgul-jireigu</i> = Rosto-soco',
//             notaId: 8
//           },
        
          ]
        },
        {
          title: 'Gibon Dongjak - 기본동작',
          translation: 'Técnicas Fundamentais',
          description: '',
          tecnicas: [

            {
              id: 'arae-makgi',
              descricao:'Apgubi (Base Frontal)',
              nome: 'Arae-makgi',
              traducao: 'Defesa Embaixo',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>(Bakkatpalmok) naeryeo-makgi [=Arae-makgi] </i> / (바깥팔목) 내려막기 [=아래막기] / (Outside Wrist) Downward Block [=Low Block]<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.50)</a></i>  ', // Adicionada nota de exemplo
            notaId: 2,
            audioFile: 'assets/audio/4 Arae-makgi.mp3'
            },
            {
              id: 'anpalmok-bakkat-makgi',
              nome: 'Anpalmok-bakkat-makgi',
              traducao: 'Defesa Externa c/ Pulso Interno',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Anpalmok-bakkat-makgi</i> / 안팔목 바깥막기 / Inside Wrist Outward Block <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.45).</a>',
            notaId: 3,
            audioFile: 'assets/audio/17 Anpalmok-bakkat-makgi.mp3'
            },
            {
              id: '(bakkatpalmok)-bakkat-makgi ',
              nome: '(Bakkatpalmok)-bakkat-makgi ',
              traducao: 'Defesa Externa c/ Pulso Externo',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>(Bakkatpalmok) Bakkat-makgi</i> / (바깥팔목) 바깥막기 / (Outside Wrist) Outward Block. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.45).</a>',
            notaId: 4,
            audioFile: 'assets/audio/18 (Bakkatpalmok) Bakkat-makgi.mp3',
            },
             {
              id: 'arae-makgi + momtong-biteureo-jireugi',
              nome: 'Arae-makgi + (Momtong) Biteureo-jireugi',
              traducao: 'Defesa Embaixo + Soco Inverso no Tronco',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Arae-makgi + momtong-biteureo-jireugi</i> = Embaixo-defesa + tronco-Inverso-soco. Comum entre os currículos brasileiros, os conectivos "<i>chago</i>", para indicar um chute (<i>chagi</i>) em sequência, ou "<i>mako</i>" para indicar uma defesa (<i>makgi</i>) em sequência, não são utilizados pela Kukkwiwon, que nesse casso, organiza técnicas em sequência com o simbolo + ou ->.',
            notaId: 5,
            audioFile: 'assets/audio/19 Arae-makgi-biteureo-jireugi.mp3'
            },
            {
              descricao: 'Mo-juchum-seogi (Base do Cavalo na Diagonal)',
              id: '(bakkatpalmok) geodeureo-bakkat-makgi',
              nome: '(Bakkatpalmok) Geodeureo-bakkat-makgi',
              traducao: 'Defesa Externa Assistida',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>(Bakkatpalmok) Geodeureo-bakkat-makgi</i> / (바깥팔목) 거들어 바깥막기 / (Outside Wrist) Supporting Outward Block <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.45).</a> <br>- Moller executa a técnica em: <a href="https://www.youtube.com/watch?v=oyyzQCpawu8&ab_channel=SergioMollerTaekwondo" target="_blank">(Moller, 2022, min. 4.27).</a>',
            notaId: 6,
            audioFile: 'assets/audio/20 (Bakkatpalmok) geodeureo-bakkat-makgi.mp3'
            },
        ]
      },
      {
          title: 'BALKISUL',
          translation: 'Técnicas de chute',
          description: 'Apgubi-naeryeo-hecheo-makgi (Defesa Espalhada Descendente na Base Frontal)',
          tecnicas: [
{
descricao: 'Dwitbal (Perna de Trás)',
id: 'an-chagi-jejari-bakkat-chagi',
nome: 'An-chagi-jejari-bakkat-chagi',
traducao: 'Chute Interno (Estático) Chute Externo',
videoId: 'dQw4w9WgXcQ',
nota:'<i>An-chagi-jejari-bakkat-chagi</i> = Interno-chute-mesmolugar-fora-chute',
 notaId: 7,
  audioFile: 'assets/audio/21 An-chagi-jejari-bakkat-chagi.mp3'
},
{
id: 'naeryeo-chagi ',
nome: 'Naeryeo-chagi',
traducao: 'Chute Descendente',
nota: '<i>Naeryeo-chagii</i>(내려차기): Axe Kick.<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.20).</a>  ',
notaId: 8,
audioFile: 'assets/audio/13 Naeryeo-chagi.mp3'
},
{
id: 'mireo-chagi ',
nome: 'Mireo-chagi',
traducao: 'Chute Empurrão',
nota: '<i>Mireo-chagi</i>(밀어차기): Pushing Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.20).</a>',
notaId: 9,
audioFile: 'assets/audio/22 Mireo-chagi.mp3'
},
{
id: 'eolgul-dollyeo-chagi',
nome: '(Eolgul) Dollyeo-chagi',
traducao: 'Chute Circular no Rosto',
videoId: 'dQw4w9WgXcQ',
nota: '<i>Eolgul-dollyeo-chagi</i> = Rosto-circular-chute',
notaId: 10,
audioFile: 'assets/audio/23 Eolgul-dollyeo-chagi.mp3'
},
{
id: 'yeop-chagi',
nome: 'Yeop-chagi',
traducao: 'Chute Lateral',
videoId: 'dQw4w9WgXcQ',
nota: '<i>Yeop-chagi</i> (옆차기): Side Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.22).</a>',
notaId: 11,
audioFile: 'assets/audio/24 Yeop-chagi.mp3'
},
{
id: 'dwidora-ttwieo-dwit-chagi',
nome: 'Dwidora-ttwieo-dwit-chagi',
traducao: 'Chute Coice Saltado',
videoId: 'dQw4w9WgXcQ',
nota: '<i>Dwidora-ttwieo-dwit-chagi</i> = Giro-salto-atrás-chute',
notaId: 12,
audioFile: 'assets/audio/25 Dwidora-ttwieo-dwit-chagi.mp3'
},
{
id: 'bandal-chagi + yeop-chagi',
nome: 'Bandal-chagi + Yeop-chagi',
traducao: 'Chute Meia Lua + Chute Lateral',
videoId: 'dQw4w9WgXcQ',
nota: '<i>Bandal-chagi + Yeop-chagi</i> = Luacrescente-chute + lado-chute',
notaId: 13,
audioFile: 'assets/audio/26 Bandal-chagi + Yeop-chagi.mp3'
},

{
id: 'yeop-chagi-dwidora-ttwieo-dwit-chagi',
nome: 'Yeop-chagi + Dwidora-ttwieo-dwit-chagi ',
traducao: 'Chute Lateral + Chute Coice Saltado',
videoId: 'dQw4w9WgXcQ',
nota: '<i>Yeop-chagi + Dwidora-ttwieo-dwit-chagi </i> = Lado-chute + giro-salto-atrás-chute',
notaId: 14,
audioFile: 'assets/audio/27 Yeop-chagi + Dwidora-ttwieo-dwit-chagi.mp3'
},
          ],          
      },
       {
          title: 'Forma',
          translation: '',
          description: '',
          tecnicas: [
            {
              id: 'saju-jireugi',
              nome: 'Saju-jireugi',
              traducao: 'Soco nas Quatro Direções',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Saju-jireugi</i> = Quatro direções-soco.',// Adicionada nota de exemplo
              notaId: 15 
            },

          ]
        }


    ],
  referencias: [ 
        // 'FGTKD. <strong>Apostila de Taekwondo</strong>. <a href="https://archive.org/details/apostila-fgtkd-2025">(s.d.).</a>',
        'KUKKIWON.<strong> Taekwondo Technical Terminology.</strong> World Taekwondo Headquarters, <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank"> 2012.</a>',
        'Sergio Moller Taekwondo. <strong>Nomenclatura Oficial Kukkiwon: Defesas (Makgi) 1 (...)</strong>. Youtube, <a href="https://www.youtube.com/watch?v=oyyzQCpawu8&ab_channel=SergioMollerTaekwondo" target="_blank">2022.</a>'
      ]
    },   
   {
    id: 'faixa-amarela',
    nome: 'AMARELA',
    grau: '8º GUB',
    introducao: '',
    background: 'assets/faixas/faixa-amarela.jpg',
    imageClass: 'faixa-amarela-bg',
    sections: [
     {
 title: 'Gibon Yonsup - 기본연습 ',
        translation: 'Sequências Fundamentais',
        tecnicas: [
          {
            descricao: 'Juchum-seogi (Base do Cavalo)',
            id: 'amarela-makgi-ky',
            nome: '- Arae-makgi<br><span class="destaque-vermelho">Defesa Embaixo</span><br>- Momtong-makgi<br><span class="destaque-vermelho">Defesa no Tronco</span><br>- Anpalmok-bakkat-makgi<br><span class="destaque-vermelho">Defesa Externa c/ Pulso Interno</span><br>- (Bakkatpalmok) Bakkat-makgi<br><span class="destaque-vermelho">Defesa Externa c/ Pulso Externo</span><br>- Eolgul-makgi<br><span class="destaque-vermelho">Defesa no Rosto</span> ',
            // <br>- Nun-gawisonkkeut-jjireugi <br><span class="destaque-vermelho">Perfurar Olhos c/ Dedos em Tesoura</span><br>- Mok-pyeonsonkkeut-eopeo-jjireugi <br><span class="destaque-vermelho">Perfurar Garganta c/ Mão em Lança<br></span>- Mok-du-sonnal-an-chigi<br><span class="destaque-vermelho">Perfurar Pescoço c/ Mão em Faca</span>
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: 'Gibon yonsup destaca quatro ou menos partes fundamentais de técnicas básicas, em seis movimentos: <br> 짜기 (<i><strong>Jjagi</i></strong>) = “Tecer”. Preparar a posição inicial. <br>  허리 틀기 (<i><strong>Heori Teulgi</strong></i>) = “Quadril Girar”. É o giro do quadril. <br> 틀어 막기 (<i><strong>Teureo Makgi ou Chigi</strong></i>) = “Torcer Defesa ou Golpe”. A execução da defesa ou golpe. <br>  팔굽치기 (<i><strong>Palgup Chigi</strong></i>) = “Cotovelo Golpe”. A cotovelada que faz o quadril girar novamente. <br> 힘의 약강 (<i><strong>Him-ui Yakgang</strong></i>) = “Força Suavidade/Dureza”.  Uma execução completa com ênfase no equilíbrio entre suavidade e força. <br> 속도의 완급 (<i><strong>Sokdo-ui Wangeup</strong></i>) = “Velocidade Aceleração/Desaceleração”. Uma execução completa com ênfase no equilíbrio entre aceleração e desaceleração.',
              notaId: 1
          },
          

        
          ]
        },
        {
          title: 'Gibon Dongjak - 기본동작',
          translation: 'Técnicas Fundamentais',
          tecnicas: [

            {
              id: 'arae-makgi + momtong-biteureo-jireugi',
              descricao:'Apgubi (Base Frontal)',
              nome: 'Arae-makgi + (Momtong) Biteureo-jireugi',
              traducao: 'Defesa Embaixo + Soco Inverso no Tronco ',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Arae-makgi + (Momtong) Biteureo-jireugi</i> = Baixo-defesa + (Tronco) Inverito-soco.',
              notaId: 2,
              audioFile: 'assets/audio/28 Arae-makgi + (Momtong) Biteureo-jireugi.mp3'
            },
            {
              id: 'anpalmok-bakkat-makgi',
              nome: 'Anpalmok-bakkat-makgi',
              traducao: 'Defesa Externa c/ Pulso Interno',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Anpalmok-bakkat-makgi</i>/ 안팔목 바깥막기 / Inside Wrist Outward Block. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.45).</a>:',
            notaId: 3,
             audioFile: 'assets/audio/17 Anpalmok-bakkat-makgi.mp3'
            },
            {
              id: '(bakkatpalmok)-bakkat-makgi ',
              nome: '(Bakkatpalmok) Bakkat-makgi',
              traducao: 'Defesa Externa c/ Pulso Externo',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>(Bakkatpalmok) Bakkat-makgi</i> = (Pulsoexterno) Externo-defesa.',
            notaId: 4,
             audioFile: 'assets/audio/18 (Bakkatpalmok) Bakkat-makgi.mp3'
            },
             {
              id: '(eolgul)-sonnal-bakkat-makgi ',
              nome: '(Eolgul) Sonnal-bakkat-makgi ',
              traducao: 'Defesa Externa c/ Mão em Faca no Rosto',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Sonnal-bakkat-makgi </i> / 손날 바깥막기 / Knife Hand Outward Block. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon p. 46)</a>.',
                          notaId: 5,
                           audioFile: 'assets/audio/29 (Eolgul) Sonnal-bakkat-makgi.mp3'
            },
            {
  
              id: '(momtong)-sonnal-geodeureo-bakkat-makgi',
              nome: '(Momtong) Sonnal-geodeureo-bakkat-makgi',
              traducao: 'Defesa Externa c/ Mão em Faca Assistida no Tronco',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Sonnal-geodeureo-bakkat-makgi</i>/ 손날 거들어 바깥막기 / Knife Hand Supporting Outward Block <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon p. 45)</a>.', 
            notaId: 6,
            audioFile: 'assets/audio/30 (Momtong) Sonnal-geodeureo-bakkat-makgi.mp3'
            },
{
  
              id: 'dwitbal-ap-chagi + Eolgul-jireugi',
              nome: 'Dwitbal-ap-chagi + Eolgul-jireugi',
              traducao: 'Chute Frontal c/ Perna de Trás + Soco no Rosto',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Dwitbal-ap-chagi + Eolgul-jireugi</i> = Pernadetrás-frente-chute + rosto-soco', 
            notaId: 7,
             audioFile: 'assets/audio/31 Dwitbal-ap-chagi + Eolgul-jireugi.mp3'
            },
{
  descricao: 'Ap-seogi (Base de Caminhada)',
              id: 'momtong-biteuro-jireugi',
              nome: '(Momtong) Biteuro-jireugi',
              traducao: 'Soco Inverso no Tronco',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Momtong-biteuro-jireugi</i> = Tronco-ivertido-soco', 
            notaId: 8,
               audioFile: 'assets/audio/32 (Momtong) Biteuro-jireugi.mp3'
            },
            {
              id: '(momtong) biteuro-makgi',
              nome: '(Momtong) Biteuro-makgi',
              traducao: 'Defesa Inversa no Tronco ',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Momtong-biteuro-makgi</i> = Tronco-inverso-defesa', 
            notaId: 9, 
              audioFile: 'assets/audio/33 (Momtong) Biteuro-makgi.mp3'
            },
  {
              id: 'ap-chagi + montong-Jireugi',
              nome: 'Ap-chagi + Montong-jireugi',
              traducao: 'Chute Frontal c/ Perna de Trás + Soco no Rosto ',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Ap-chagi + Montong-Jireugi</i> = Frente-chute + tronco-soco', 
            notaId: 10,
            audioFile: 'assets/audio/34 Ap-chagi + Montong-jireugi.mp3'
            },
        ]
      },
      {
          title: 'Bal Kisul -발기술 ',
          translation: 'Técnicas de chute',
          description: 'Apgubi-naeryeo-hecheo-makgi <br> (Defesa Espalhada Descendente na Base Frontal)',
          tecnicas: [
{
descricao: 'Dwitbal (Perna de Trás)',
id: 'naeryeo-chagi',
nome: 'Naeryeo-chagi',
traducao: 'Chute Descendente',
videoId: 'dQw4w9WgXcQ',
nota:'<i>Naeryeo-chagi</i> (내려차기): Axe Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon p. 20)</a> ',
 notaId: 11,
  audioFile: 'assets/audio/13 Naeryeo-chagi.mp3'
},
{
id: 'dollyeo-chagi',
nome: 'Eolgul-dollyeo-chagi',
traducao: 'Chute Circular no Cabeça',
videoId: 'dQw4w9WgXcQ',
nota: '<i>Dollyeo-chagi</i> (돌려차기): Roundhouse Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon p. 15)</a> ',
notaId: 12,
},
{
id: 'yeop-chagi',
nome: 'Yeop-chagi',
traducao: 'Chute Lateral',
videoId: 'dQw4w9WgXcQ',
nota: '<i>Yeop-chagi</i> (옆차기): Side Kick <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon p. 22)</a>',
notaId: 16,
},
{
id: 'dwit-chagi',
nome: 'Dwit-chagi',
traducao: 'Chute Coice',
videoId: 'dQw4w9WgXcQ',
nota: '<i>Dwit-chagi</i> / 뒤차기 / Back Kick.<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon p. 16)</a>',
notaId: 17,
},
{
id: 'bandal-chagi + yeop-chagi',
nome: 'Bandal-chagi + Yeop-chagi',
traducao: 'Chute Semicircular + Chute Lateral',
videoId: 'dQw4w9WgXcQ',
nota: '<i>Bandal-chagi</i> (반달차기): Crescent Kick.<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon p. 14)</a> ',
notaId: 18,
},


          ],          
      },
       {
          title: 'Poomsae - 품새',
          translation: 'Forma',
          description: '',
          tecnicas: [
            {
              id: 'taegeuk-1',
              nome: 'Taeguk Il Jang',
              traducao: '',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
            },

          ]
        },
{
          title: 'Sebon Gyeorugi - 세본 겨루기 ',
          translation: 'Luta em Três Passos',
          description: '',
          tecnicas: [
            {
              id: 'san Boderion 1 a 10',
              nome: 'San Boderion 1 a 10 ',
              traducao: '',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
            },

          ]
        },
    ],
  referencias: [ 
    
        'KUKKIWON.<strong> Taekwondo Technical Terminology.</strong> World Taekwondo Headquarters, <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank"> 2012.</a>',
       
      ]
    },
   {
    id: 'faixa-laranja',
    nome: 'FAIXA LARANJA',
    grau: '7º GUB',
    background: 'assets/faixas/faixa-laranja.jpg',
    introducao: '',
    sections: [
      {
 title: 'Gibon Yonsup- 기본연습 ',
        translation: 'Sequências Fundamentais',
        tecnicas: [
          {
            descricao: 'Naran-seogi (Base Paralela)',
            id: 'laranja-gy',
            nome: '- Arae-makgi<br><span class="destaque-vermelho">Defesa Embaixo</span><br>- Momtong-makgi<br><span class="destaque-vermelho">Defesa no Tronco</span><br>- Anpalmok-bakkat-makgi<br><span class="destaque-vermelho">Defesa Externa c/ Pulso Interno</span><br>- (Bakkatpalmok) Bakkat-makgi<br><span class="destaque-vermelho">Defesa Externa c/ Pulso Externo</span><br>- Eolgul-makgi<br><span class="destaque-vermelho">Defesa no Rosto</span><br>- Arae-jireugi<br><span class="destaque-vermelho">Soco Embaixo</span><br>- Momtong-jireugi<br><span class="destaque-vermelho">Soco no Tronco<br></span>- Eolgul-jireugi<br><span class="destaque-vermelho">Soco no Rosto</span>',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: 'Na Faixa Laranja, a prática do Gibon Yonsup destaca as quatro partes fundamentais de técnica básicas. A primeira parte é o <i>Jjagi</i>, a posição inical. A segunda é o <i>Heori Teulgi</i>, o giro do quadril. A terceira é <i>Teureo Makgi</i> ou <i>Chigi</i>, a execução da técnica. A quarta é o <i>Palgup Chigi</i>, a cotovelada que faz o quadril girar novamente. Os comandos <i>Himui Yakgang</i> e <i>Sokdoui Wangeup</i> são execuções completas que enfatizam velocidade e força, respectivamente.<br> Logo, os comandos: <br> <i> - Jjagi - Heori Teulgi - Teureo Makgi - Palgup Chigi - Himui Yakgang - Sokdoui Wangeup </i> <br> Podem ser traduzidos como: <br> - Preparar / Virar quadril / Executar defesa / Golpear com cotovelo / Velocidade / Força <br>',
              notaId: 1
          },
          ]
        },
{
 title: 'GIBON DONGJAK - 기본동작 ',
        translation: 'Técnicas Fundamentais',
        tecnicas: [
          {
            descricao: 'Apgubi (Base Frontal)',
            id: 'momtong-dubang-jireugi',
            nome: 'Momtong-dubang-biteureo-jireugi',
            traducao: 'Soco Duplo Inverso no Tronco ',
            videoId: 'video_id_exemplo',
            nota: '<i>Momtong-dubang-biteureo-jireugi</i> = Tronco-duplo-inverso-soco',
              notaId: 2
          },

          {
            id: 'momtong-an-palmok-bakkat-makgi + momtong-biteureo-jireugi',
            nome: 'Momtong-an-palmok-bakkat-makgi + momtong-biteureo-jireugi',
            traducao: 'Defesa Externa c/ Pulso Interno + Soco Inverso no Tronco ',
            videoId: 'video_id_exemplo',
            nota: '<i>Momtong-an-palmok-bakkat-makgi + momtong-biteureo-jireugi</i> = Tronco-interno-pulso-externa-defesa + Tronco-inverso-soco',
              notaId: 3
          },

          {
            id: '(bakkatpalmok)-bakkat-makgi + momtong-biteureo-jireugi',
            nome: '(Bakkatpalmok)-bakkat-makgi + momtong-biteureo-jireugi',
            traducao: 'Defesa Externa c/ Pulso Externo + Soco Inverso no Tronco',
            videoId: 'video_id_exemplo',
            nota: '<i>(Bakkatpalmok)-bakkat-makgi + momtong-biteureo-jireugi</i> = (Externopulso)-externo-defesa + Tronco-inverso-soco',
              notaId: 4
          },
 {
            id: 'Eolgul-sonnal-bakkat-makgi / momtong-biteureo-jireugi',
            nome: 'Eolgul-sonnal-bakkat-makgi / momtong-biteureo-jireugi',
            traducao: 'Defesa no Rosto c/ Faca da Mão + Soco Inverso no Tronco',
            videoId: 'video_id_exemplo',
            nota: '<i>Eolgul-sonnal-bakkat-makgi / momtong-biteureo-jireugi</i> = Rosto-facadamão-externo-defesa',
              notaId: 5
          },

{
            id: 'dwitbal-ap-chagi + Eolgul-jireugi',
            nome: 'Dwitbal-ap-chagi + Eolgul-jireugi',
            traducao: 'Chute Frontal c/ Perna de Trás + Soco no Rosto',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwitbal-ap-chagi + Eolgul-jireugi</i> = Pernadetrás-frente-chute + Rosto-soco',
              notaId: 6
          },

{
            descricao: 'Ap-seogi (Base de Caminhada)',
            id: 'momtong-biteuro-makgi',
            nome: 'Momtong-biteuro-makgi',
            traducao: 'Defesa Inversa no Tronco ',
            videoId: 'video_id_exemplo',
            nota: '<i>Momtong-biteuro-makgi</i> = Tronco-inverso-defesa',
              notaId: 7
          },
{
            id: 'dwitbal-ap-chagi + momtong-jireugi',
            nome: 'Dwitbal-ap-chagi + momtong-jireugi',
            traducao: 'Chute Frontal c/ Perna de Trás + Soco no Tronco ',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwitbal-ap-chagi + momtong-jireugi</i> = Pernadetrás-frente-chute + tronco-soco',
              notaId: 8
          },
{
            descricao: 'Dwitgubi (Base de Trás)',
            id: 'momtong-du-sonnal-makgi ',
            nome: 'Momtong-du-sonnal-makgi ',
            traducao: 'Defesa no Tronco c/ Mãos em Faca ',
            videoId: 'video_id_exemplo',
            nota: '<i>Momtong-du-sonnal-makgi </i> = Tronco-duas-facadamão-defesa',
              notaId: 9
          },
          ] 
        },

         {
 title: 'Bal Kisul - 발기술 ',
        translation: 'Técnicas de Chute',
        description: 'Apgubi-naeryeo-hecheo-makgi <br> (Defesa Espalhada Descendente na Base Frontal)',
        tecnicas: [
          {
            descricao: 'Dwitbal (Perna de Trás)',
            id: 'an-chagi-jejari-bakkat-chagi',
            nome: 'An-chagi-jejari-bakkat-chagi',
            traducao: 'Chute Interno Estático + Chute Externo',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwitbal-an-chagi-jejari-bakkat-chagi</i> = Pernadetrás-interno-chute-estático-externo-chute',
              notaId: 10
          },
           {
            
            id: 'ttwieo-ap-chagi ',
            nome: 'Ttwieo-ap-chagi ',
            traducao: 'Chute Frontal Saltado',
            videoId: 'video_id_exemplo',
            nota: '<i>Ttwieo-ap-chagi</i> = Salto-frente-chute',
              notaId: 11
          },
           {
            
            id: 'bandal-chagi + Apbal-ttwieo-bandal-chagi ',
            nome: 'Bandal-chagi + Apbal-ttwieo-bandal-chagi ',
            traducao: 'Chute Meia Lua + Chute Circular c/ a Perna da Frente',
            videoId: 'video_id_exemplo',
            nota: '<i>Bandal-chagi + Apbal-ttwieo-bandal-chagi </i> = Luacrescente-chute + Pernadafrente-salto-luacrescente-chute',
              notaId: 12
          },
          {
           descricao: 'Apbal (Perna da Frente)',
            id: 'ttwieo-naeryeo-chagi',
            nome: 'Ttwieo-naeryeo-chagi ',
            traducao: 'Chute Descendente Saltado',
            videoId: 'video_id_exemplo',
            nota: '<i>Ttwieo-naeryeo-chagi </i> = Salto-descendente-chute',
              notaId: 13
          },

{
            id: 'ttwieo-yeop-chagi-jejari-apbal-dollyeo-chagi',
            nome: 'Ttwieo-yeop-chagi-jejari-dollyeo-chagi',
            traducao: 'Chute Lateral Saltado Estático + Chute Circular ',
            videoId: 'video_id_exemplo',
            nota: '<i>Apbal-ttwieo-yeop-chagi-jejari-apbal-dollyeo-chagi</i> = Pernadafrente-salto-lado-chute-estático-pernadafrente-circular-chute',
              notaId: 14
          },
          {
           
            id: 'ttwieo-dollyeo-chagi ',
            nome: 'Ttwieo-dollyeo-chagi ',
            traducao: 'Chute Circular Saltado',
            videoId: 'video_id_exemplo',
            nota: '<i>Apbal-ttwieo-dollyeo-chagi</i> = Salto-circular-chute',
              notaId: 15
          },
          {
           
            id: 'dwi-kkoa-seogi-apbal-huryeo-chagi + Dwitbal-huryeo-chagi ',
            nome: 'Dwi-kkoa-seogi-huryeo-chagi + Dwitbal-huryeo-chagi',
            traducao: 'Chute Chicote na Base Cruzada + Chute Chicote c/ a Perna de Trás',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwi-kkoa-seogi-apbal-huryeo-chagi + Dwitbal-huryeo-chagi</i> = Trás-cruzada-base-pernadafrente-chicote-chute ',
              notaId: 16
          },
          ]
        },
{
 title: 'POOMSAE',
        translation: 'Forma',
        tecnicas: [
          {
            descricao: '',
            id: 'taeguk I Jang',
            nome: 'Taeguk I Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: '',
              notaId: 17
          },
          {
              id: 'taegeuk-1',
              nome: 'Taeguk Il Jang',
              traducao: '',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
            },
          ]
        },


{
 title: 'SEBON Gyeorugi',
        translation: 'Técnicas de Defesa Pessoal',
        tecnicas: [
          {
            descricao: 'San Boderion',
            id: '1 a 10 Wen e Oren',
            nome: '1 a 10 Wen e Oren',
            traducao: '',
            videoId: 'video_id_exemplo',
            
          },
          ]
        },






// {
           
//             id: ' ',
//             nome: ' ',
//             traducao: ' ',
//             videoId: 'video_id_exemplo',
//             nota: '<i> </i> = ',
//               notaId: 16
//           },



// {
//  title: '',
//         translation: '',
//         tecnicas: [
//           {
//             descricao: '',
//             id: '',
//             nome: '',
//             traducao: '',
//             videoId: 'video_id_exemplo',
//             nota: '',
//               notaId: 1
//           },
//           ]
//         },




        

    ],
    referencias: [
      
        'KUKKIWON.<strong> Taekwondo Technical Terminology.</strong> World Taekwondo Headquarters, <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank"> 2012.</a>',
        'Sergio Moller Taekwondo. <strong>Nomenclatura Oficial Kukkiwon: Defesas (Makgi) 1 (...)</strong>. Youtube, <a href="https://www.youtube.com/watch?v=oyyzQCpawu8&ab_channel=SergioMollerTaekwondo" target="_blank">2022.</a>'
    ]
  },
    {
    id: 'faixa-verde-claro',
    nome: 'VERDE CLARA',
    grau: '7º GUB',
    background: 'assets/faixas/faixa-verde-claro.jpg',
    sections: [
      {
        title: 'TÉCNICAS DA FAIXA VERDE CLARO',
        translation: 'Técnicas Avançadas',
        description: 'Conteúdo programático da faixa verde',
        tecnicas: []
      }
    ],
    referencias: []
  },
  {
    id: 'faixa-verde',
    nome: 'VERDE ESCURA',
    grau: '6º GUB',
    background: 'assets/faixas/faixa-verde.jpg',
    sections: [
      {
        title: 'TÉCNICAS DA FAIXA VERDE',
        translation: 'Técnicas Complexas',
        description: 'Conteúdo programático da faixa verde',
        tecnicas: []
      }
    ],
    referencias: []
  },
  {
    id: 'faixa-azul-claro',
    nome: 'AZUL CLARA',
    grau: '5º GUB',
    background: 'assets/faixas/faixa-azul-claro.jpg',
    sections: [
      {
        title: 'TÉCNICAS DA FAIXA AZUL CLARO',
        translation: 'Técnicas de Combate',
        description: 'Conteúdo programático da faixa azul claro',
        tecnicas: []
      }
    ],
    referencias: []
  },
  {
    id: 'faixa-azul',
    nome: 'AZUL ESCURA',
    grau: '4º GUB',
    background: 'assets/faixas/faixa-azul.jpg',
    sections: [
      {
        title: 'TÉCNICAS DA FAIXA AZUL',
        translation: 'Técnicas de Defesa Pessoal',
        description: 'Conteúdo programático da faixa azul',
        tecnicas: []
      }
    ],
    referencias: []
  },
  {
    id: 'faixa-vermelha',
    nome: 'VERMELHA',
    grau: '3º GUB',
    background: 'assets/faixas/faixa-vermelha.jpg',
    sections: [
      {
        title: 'TÉCNICAS DA FAIXA VERMELHA',
        translation: 'Técnicas de Mestre',
        description: 'Conteúdo programático da faixa vermelha',
        tecnicas: []
      }
    ],
    referencias: []
  },
  {
    id: 'faixa-vinho',
    nome: 'VINHO',
    grau: '2º GUB',
    background: 'assets/faixas/faixa-vinho.jpg',
    sections: [
      {
        title: 'TÉCNICAS DA FAIXA VINHO',
        translation: 'Técnicas Avançadas de Mestre',
        description: 'Conteúdo programático da faixa vinho',
        tecnicas: []
      }
    ],
    referencias: []
  },


  ];

  getFaixas(): Faixa[] {
    return this.faixas;
  }

  getFaixaById(id: string): Faixa | undefined {
    return this.faixas.find(f => f.id === id);
  }

  getTheoreticalTexts(): TextoTeorico[] {
    return this.textosTeoricos;
  }

  getTextoTeoricoById(id: string): TextoTeorico | undefined {
    return this.textosTeoricos.find(t => t.id === id);
  }
}