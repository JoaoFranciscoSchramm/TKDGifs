import { Injectable } from '@angular/core';
import { Faixa, FaixaSection, Tecnica, TextoTeorico, SecoesEspeciais } from '../models/faixa.model';


@Injectable({ providedIn: 'root' })
export class ConteudoService {
  private textosTeoricos: TextoTeorico[] = [
    {
      id: 'historia',
      titulo: 'História do Taekwondo',
      conteudo: `<p</p>
      `
    },
//     {
//       id: 'espirito etc.',
//       titulo: 'Espírito, Princípios  e as Cinco Virtudes do Taekwondo',
//       conteudo: `
//       // <p>O Taekwondo não é apenas uma arte marcial que consiste em exercícios físicos. É também um modo de vida, que nos ensina a respeitar os mais velhos, a honrar nossos mestres, a ser disciplinado e a ter autocontrole. O espírito do Taekwondo é a busca constante pela perfeição, tanto física quanto mental. O aluno de Taekwondo tem como objetivo não apenas se tornar um lutador, mas um cidadão exemplar, que contribui para o bem-estar da sociedade.</p>
//       // <ol>
//       //   <li><strong>CORTESIA</strong> (sua relação com o outro)</li>
//       //   <li><strong>INTEGRIDADE</strong> (evolução moral)</li>
//       //   <li><strong>PERSEVERANÇA</strong> (superar dificuldades internas)</li>
//       //   <li><strong>AUTOCONTROLE</strong> (controle das emoções)</li>
//       //   <li><strong>ESPÍRITO INDOMÁVEL</strong> (não recuar diante do inimigo)</li>
//       // </ol>kwondo, traduzido do coreano, significa <strong>"caminho dos pés e das mãos através da mente e do corpo"</strong>. É uma arte marcial que, além de ser um esporte, é uma filosofia de vida, ensinando valores como disciplina, respeito e autocontrole.</p>  
//       // <p>A Filosofia do Taekwondo, segundo a Kukkiwon, é a busca pela perfeição do corpo e da mente, através de um treinamento rigoroso e constante. A prática do Taekwondo deve ser um meio de se alcançar a harmonia interior e exterior, o equilíbrio entre o corpo e a mente.</p>
//       // <p>No Taekwondo, a filosofia se materializa em cinco virtudes:</p>
//       //   <ol>
//       //     <li>**Cortesia (Ye Ui)**: agir com respeito e educação;</li>
//       //     <li>**Integridade (Yom Chi)**: ser honesto e justo;</li>
//       //     <li>**Perseverança (In Nae)**: nunca desistir;</li>
//       //     <li>**Autocontrole (Geuk Gi)**: dominar as próprias emoções;</li>
//       //     <li>**Espírito Indomável (Baekjul Boolgool)**: lutar por suas crenças e por um mundo mais pacífico.</li>
//       //   </ol>
//       `
//     },
//     {
//       id: 'juramento',
//       titulo: 'O Juramento do Aluno',
//       conteudo: 
      
//       // `<p>O juramento do aluno de Taekwondo, recitado ao final de cada aula, reforça o compromisso com os princípios da arte marcial:</p>
//       //   <ol>
//       //     <li>Observar as regras do Taekwondo.</li>
//       //     <li>Respeitar o instrutor e os superiores.</li>
//       //     <li>Nunca fazer mau uso do Taekwondo.</li>
//       //     <li>Ser um campeão da liberdade e da justiça.</li>
//       //     <li>Construir um mundo mais pacífico.</li>
//       //   </ol>
//       // `
//     },
// {
//  id: 'taegeuk',
//  titulo: 'Significado dos Taegeuks',
//  conteudo: '<p>Significados do Taegeuk</p> <br><p>Marcante é a influência da filosofia chinesa na cultura coreana. Os preceitos sociais e filosóficos do confucionismo e do taoísmo foram assimilados por distintas dinastias, o que se mantém hoje na própria a simbologia oficial do Estado coreano, em sua bandeira e significados, o que ocorre também na filosofia que acompanha a graduação das faixas do taekwondo.</p> ' 
// },
  ];

   private faixas: Faixa[] = [
    {

      id: 'faixa-branca',
      nome: 'BRANCA',
      grau: '10º GUB',
      introducao: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
      background: 'assets/faixas/faixa-branca1.jpg',
      imageClass: 'faixa-branca-bg',
      sections: [
        {
          title:'Juchum Jireugi - 주춤지르기',
          translation: 'Soco na Base do Cavalo',
          tecnicas: [
            {
descricao: 'Deslocar o pé e socar com o lado esquerdo',
              id: 'jutchun-moa',
              nome: ' Moa-seogi-jireugi',
              traducao: ' Soco na Base Fechada',
              videoId: 'dQw4w9WgXcQ',
              nota: '<i> Moa-seogi-jireugi</i> =  Fechada base-soco.',
             notaId: 1,
             audioFile: 'assets/audio/1 Moa-seogi-jireugi.mp3'
            },
            {

              id: 'jutchun-naran',
              nome: ' Narani-seogi-jireugi',
              traducao: ' Soco na Base Paralela',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
                 nota: '<i> Narani-seogi-jireugi</i> = -Paralela base-soco.',
             notaId: 2,     
              audioFile: 'assets/audio/2 Narani-seogi-jireugi.mp3'
            },
            {
              id: 'jutchun-jutchun',
              nome: ' Juchum-seogi-jireugi',
              traducao: ' Soco na Base do Cavalo',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Juchum-seogi-jireugi</i> – a punch to the trunk in a Horseback Riding Stance. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.9)</a>',
             notaId: 3,
              audioFile: 'assets/audio/3 Juchum-seogi-jireugi.mp3'
            }

          ]
        },
        {
          title: 'Kibon Dongjak - 기본동작',
          translation: 'Técnicas Fundamentais',
          tecnicas: [

            {
               descricao: 'Apgubi (Base Frontal)',
              id: 'arae-makgi',
              nome: 'Arae-makgi',
              traducao: 'Bloqueio Embaixo',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>(Bakkatpalmok) naeryeo-makgi [=Arae-makgi]</i> / (바깥팔목) 내려막기 [=아래막기] / (Outside Wrist) Downward Block [=Low Block]. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.50)</a>', // Adicionada nota de exemplo
            notaId: 4,
             audioFile: 'assets/audio/4 Arae-makgi.mp3'
                        },
            {
              id: 'momtong-makgi ',
              nome: 'Momtong-makgi ',
              traducao: 'Bloqueio no Tronco',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>(Bakkatpalmok) An-makgi </i> (Outside Wrist Inward Block) [=Momtong-makgi].<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.6)</a>.', // Adicionada nota de exemplo
            notaId: 5,
             audioFile: 'assets/audio/5 Momtong-makgi.mp3'
            
            },
            {
              id: 'Eolgul-makgi  ',
              nome: 'Eolgul-makgi',
              traducao: 'Bloqueio no Rosto',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>(Bakkatpalmok) Ollyeo-makgi </i> (Outside Wrist Upward Block) [=Eolgul-makgi].<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.6)</a>.</a>', // Adicionada nota de exemplo
            notaId: 6,
             audioFile: 'assets/audio/6 Eolgul-makgi.mp3'
            },
            {
              id: 'naeryeo-hecheo-makgi',
              nome: '(Bakkatpalmok) naeryeo-hecheo-makgi ',
              traducao: 'Bloqueio Espalhado Descendente',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>(Bakkatpalmok) naeryeo-hecheo-makgi</i>. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.49 e 50).</a>. O mestre Sérgio Moller (6º DAN) executa a técnica em:  <a href="https://www.youtube.com/watch?v=oyyzQCpawu8&t=305s" target="_blank">(Moller, min. 5.05)</a>.', // Adicionada nota de exemplo
            notaId: 7,
             audioFile: 'assets/audio/7 (Bakkatpalmok) Naeryeo-hecheo-makgi.mp3'
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
                        {
              descricao: '',
              id: 'gyeorugi jumbi',
              nome: 'Gyeorugi Jumbi',
              traducao: 'Postura de Luta',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Gyeorugi-junbi</i> (겨루기준비): Sparring Posture [=겨룸새:<i> Gyeorumsae</i>]<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank"> (Kukkiwon, p.41).</a>',
            notaId: 11,
              audioFile: 'assets/audio/36 Gyeorugi-junbi.mp3' 
            }, 
                ],
            },
        {
          title: 'Bal Kisul - 발기술 ',
          translation: 'Técnicas de Chute',
          description: 'Naeryeo-hecheo-makgi <br> (Bloqueio Espalhado Descendente)',
          tecnicas: [
            {
              descricao: 'Dwitbal (Perna Atrás)',
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
              nome: 'Naeryeo-oligi (Naeryeo-chagi)  ',
              traducao: 'Elevação Frontal',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
             nota: '<i>Naeryeo-chagi</i> (내려차기): Axe Kick.<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.20)</a>. ',
             notaId: 13,
              audioFile: 'assets/audio/13 Naeryeo-chagi.mp3'
            },
            {
              id: 'bakkat-olig ',
              nome: 'Bakkat-oligi (Bakkat-chagi)   ',
              traducao: 'Elevação Externo(Chute Externo)',
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
              id: 'saju-jireugi',
              nome: 'Saju-jireugi',
              traducao: 'Soco nas Quatro Direções',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Saju-jireugi</i> = Quatro direções-soco.',// Adicionada nota de exemplo
              notaId: 17 
            },
 
            {
              id: 'saju-ap-chagi',
              nome: 'Saju-ap-chagi',
              traducao: 'Chute Frontal nas Quatro Direções',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Saju-ap-chagi</i> = Quatro direções-frente-chute.',// Adicionada nota de exemplo
              notaId: 18
            },

 
          ]
        }
      ],



     
referencias: [ 
        
        'KUKKIWON.<strong> Taekwondo Technical Terminology.</strong> World Taekwondo Headquarters, <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank"> 2012.</a>',
        'Sergio Moller Taekwondo. <strong>Nomenclatura Oficial Kukkiwon: Bloqueios (Makgi) 1 (...)</strong>. Youtube, <a href="https://www.youtube.com/watch?v=oyyzQCpawu8&ab_channel=SergioMollerTaekwondo" target="_blank">2022.</a>'
      ]
    },
   {
    id: 'faixa-amarela',
    nome: 'AMARELA',
    grau: '8º GUB',
    introducao: '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>',
    background: 'assets/faixas/faixa-amarela.png',
    imageClass: 'faixa-amarela-bg',
    sections: [
    
        {
          title: 'Kibon Dongjak - 기본동작',
          translation: 'Técnicas Fundamentais',
          tecnicas: [

            {
              id: 'arae-makgi + momtong-biteureo-jireugi',
              descricao:'Apgubi',
              nome: 'Arae-makgi +  Biteureo-jireugi',
              traducao: 'Bloqueio Embaixo + Soco Inverso no Tronco ',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Arae-makgi +  Biteureo-jireugi</i> = Baixo-Bloqueio +  Inverso-soco.',
              notaId: 1,
              audioFile: 'assets/audio/28 Arae-makgi + Biteureo-jireugi.mp3'
            },
            {
              id: 'anpalmok-bakkat-makgi',
              nome: 'Anpalmok-bakkat-makgi',
              traducao: 'Bloqueio p/ Fora c/ Pulso Interno',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Anpalmok-bakkat-makgi</i>/ 안팔목 바깥막기 / Inside Wrist Outward Block. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.45).</a>',
            notaId: 2,
             audioFile: 'assets/audio/17 Anpalmok-bakkat-makgi.mp3'
            },
            {
              id: '(bakkatpalmok)-bakkat-makgi ',
              nome: '(Bakkatpalmok) Bakkat-makgi',
              traducao: 'Bloqueio p/ Fora c/ Pulso Externo',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>(Bakkatpalmok) Bakkat-makgi</i> = (Pulsoexterno) Externo-Bloqueio.',
            notaId: 3,
             audioFile: 'assets/audio/18 (Bakkatpalmok) Bakkat-makgi.mp3'
            },
             {
              id: '(eolgul)-sonnal-bakkat-makgi ',
              nome: '(Eolgul) Sonnal-bakkat-makgi ',
              traducao: 'Bloqueio p/ Fora c/ Mão em Faca no Rosto',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Sonnal-bakkat-makgi </i> / 손날 바깥막기 / Knife Hand Outward Block. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon p. 46).</a>.',
                          notaId: 4,
                           audioFile: 'assets/audio/29 (Eolgul) Sonnal-bakkat-makgi.mp3'
            },
            {
              id: 'sonnal-geodeureo-bakkat-makgi',
              nome: ' Sonnal-geodeureo-bakkat-makgi',
              traducao: 'Bloqueio p/ Fora c/ Faca da Mão Assistida no Tronco',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Sonnal-geodeureo-bakkat-makgi</i>/ 손날 거들어 바깥막기 / Knife Hand Supporting Outward Block <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon p. 45).</a>.', 
            notaId: 5,
            audioFile: 'assets/audio/30 Sonnal-geodeureo-bakkat-makgi.mp3'
            },
{
  
              id: 'dwitbal-ap-chagi + Eolgul-jireugi',
              nome: 'Dwitbal-ap-chagi + Eolgul-jireugi',
              traducao: 'Chute Frontal c/ Perna Atrás + Soco no Rosto',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Dwitbal-ap-chagi + Eolgul-jireugi</i> = Pernadetrás-frente-chute + Rosto-soco.', 
            notaId: 6,
             audioFile: 'assets/audio/31 Dwitbal-ap-chagi + Eolgul-jireugi.mp3'
            },
{
  descricao: 'Ap-seogi',
              id: 'momtong-biteuro-jireugi',
              nome: ' Biteureo-jireugi',
              traducao: 'Soco Inverso no Tronco',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Momtong-biteureo-jireugi</i> = Tronco-ivertido-soco.', 
            notaId: 7,
               audioFile: 'assets/audio/32 Biteureo-jireugi.mp3'
            },
            {
              id: ' biteuro-makgi',
              nome: ' Momtong-biteuro-makgi',
              traducao: 'Bloqueio Inverso no Tronco ',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Momtong-biteuro-makgi</i> = Tronco-inverso-Bloqueio.', 
            notaId: 8, 
              audioFile: 'assets/audio/33 Momtong-biteureo-makgi.mp3'
            },
  {
              id: 'ap-chagi + montong-jireugi',
              nome: 'Ap-chagi + Montong-jireugi',
              traducao: 'Chute Frontal c/ Perna Atrás + Soco no Rosto ',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Ap-chagi + Montong-Jireugi</i> = Frente-chute + tronco-soco.', 
            notaId: 9,
            audioFile: 'assets/audio/34 Ap-chagi + Montong-jireugi.mp3'
            },
        ]
      },
      {
          title: 'Bal Kisul -발기술 ',
          translation: 'Técnicas de chute',
          description: 'Naeryeo-hecheo-makgi',
          tecnicas: [
 {
  descricao: 'Dwitbal',
              id: 'an-chagi',
              nome: 'An-chagi',
              traducao: 'Chute Adentro',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
             nota: '<i>An-chagi</i>(안차기): Inward Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.12)</a>.',
             notaId: 10,
              audioFile: 'assets/audio/15 An-chagi.mp3'
            },
{
              id: 'bakkat-chagi',
              nome: 'Bakkat-chagi',
              traducao: 'Chute Externo',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
             nota: '<i>Bakkat-chagi</i>(바깥차기): Outward Kick.  <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.13)</a>.',
             notaId: 11,
              audioFile: 'assets/audio/14 Bakkat-chagi.mp3'
            },
{

id: 'naeryeo-chagi',
nome: 'Naeryeo-chagi',
traducao: 'Chute Descendente',
videoId: 'dQw4w9WgXcQ',
nota:'<i>Naeryeo-chagi</i> (내려차기): Axe Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon p. 20).</a> ',
 notaId: 12,
  audioFile: 'assets/audio/13 Naeryeo-chagi.mp3'
},
{
id: 'mireo-chagi ',
nome: 'Mireo-chagi',
traducao: 'Chute Empurrão',
nota: '<i>Mireo-chagi</i>(밀어차기): Pushing Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukiwwon, p.20).</a>',
notaId: 13,
audioFile: 'assets/audio/22 Mireo-chagi.mp3'
},
{
id: 'eolgul-dollyeo-chagi',
nome: 'Eolgul-dollyeo-chagi',
traducao: 'Chute Circular na Cabeça',
videoId: 'dQw4w9WgXcQ',
nota: '<i>Dollyeo-chagi</i> (돌려차기): Roundhouse Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon p. 15).</a> ',
notaId: 14,
audioFile: 'assets/audio/37 (Eolgul) Dollyeo-chagi.mp3'
},
{
id: 'yeop-chagi',
nome: 'Yeop-chagi',
traducao: 'Chute Lateral',
videoId: 'dQw4w9WgXcQ',
nota: '<i>Yeop-chagi</i> (옆차기): Side Kick <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon p. 22).</a>',
notaId: 15,
audioFile: 'assets/audio/38 Yeop-chagi.mp3'
},

{
id: 'dwi-chagi',
nome: 'Dwi-chagi',
traducao: 'Coice',
videoId: 'dQw4w9WgXcQ',
nota: '<i>Dwit-chagi</i> / 뒤차기 / Back Kick.<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon p. 16).</a>',
notaId: 16,
audioFile: 'assets/audio/39 Dwi-chagi.mp3'
},
{
id: 'bandal-chagi + yeop-chagi',
nome: 'Bandal-chagi + Yeop-chagi',
traducao: 'Chute Semicircular + Chute Lateral',
videoId: 'dQw4w9WgXcQ',
nota: '<i>Bandal-chagi</i> (반달차기): Crescent Kick.<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon p. 14).</a> ',
notaId: 17,
audioFile: 'assets/audio/26 Bandal-chagi + Yeop-chagi.mp3'
},
{
id: 'yeop-chagi + dwit-chagi',
nome: 'Yeop-chagi + Dwit-chagi',
traducao: 'Chute Lateral + Coice',
videoId: 'dQw4w9WgXcQ',
nota: '<i>Yeop-chagi + Dwit-chagi</i> = Chute Lateral + Coice (반달차기): Crescent Kick.<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon p. 14).</a> ',
notaId: 18,
audioFile: 'assets/audio/40 Yeop-chagi + Dwi-chagi.mp3'
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
              nome: 'Taegeuk Il Jang',
              traducao: 'Taegeuk 1',
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
              id: 'san Boderion 1 a 5',
              nome: 'San Boderion 1 a 5 (ambos os lados sempre)',
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
    nome: 'LARANJA',
    grau: '7º GUB',
    background: 'assets/faixas/faixa-laranja.png',
    introducao: '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>',
    sections: [

{
 title: 'Kibon DONGJAK - 기본동작 ',
        translation: 'Técnicas Fundamentais',
        tecnicas: [
          {
            descricao: 'Apgubi',
            id: 'dubang-jireugi',
            nome: 'Dubang-biteureo-jireugi',
            traducao: 'Soco Duplo Inverso',
            videoId: 'video_id_exemplo',
            nota: '<i>Dubang-biteureo-jireugi</i> = Duas vezes-inverso-soco.',
              notaId: 1,
              audioFile:'assets/audio/41 Apgubi-dubang-biteureo-jireugi.mp3'

          },
          {
            id: 'anpalmok-bakkat-makgi + biteureo-jireugi',
            nome: 'Anpalmok-bakkat-makgi + Biteureo-jireugi',
            traducao: 'Bloqueio Afora c/ Pulso Interno + Soco Inverso',
            videoId: 'video_id_exemplo',
            nota: '<i>Anpalmok-bakkat-makgi </i> / 안팔목 바깥막기 / Inside Wrist Outward Block. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.45).</a>',
              notaId: 2,
               audioFile:'assets/audio/42 Anpalmok-bakkat-makgi + Biteureo-jireugi.mp3'
          },
          {
            id: '(bakkatpalmok)-bakkat-makgi + momtong-biteureo-jireugi',
            nome: '(Bakkatpalmok)-bakkat-makgi + Biteureo-jireugi',
            traducao: 'Bloqueio Afora c/ Pulso Externo + Soco Inverso',
            videoId: 'video_id_exemplo',
            nota: '<i>(Bakkatpalmok)-bakkat-makgi</i> / (바깥팔목) 바깥막기 / (Outside Wrist) Outward Block. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.45).</a> ',
              notaId: 3,
               audioFile:'assets/audio/43 (Bakkatpalmok)-bakkat-makgi + Biteureo-jireugi.mp3'
          },
 {
            id: '(eolgul)-sonnal-bakkat-makgi + biteureo-jireugi',
            nome: '(Eolgul) Sonnal-bakkat-makgi + Biteureo-jireugi',
            traducao: 'Bloqueio Externo c/ Faca da Mão no Rosto + Soco Inverso',
            videoId: 'video_id_exemplo',
            nota: '<i>Sonnal-bakkat-makgi</i> / 손날 바깥막기 / Knife Hand Outward Block. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.46).</a> ',
              notaId: 4,
               audioFile:'assets/audio/44 (Eolgul) Sonnal-bakkat-makgi + Biteureo-jireugi.mp3'
          },

{
            id: 'dwitbal-ap-chagi + Eolgul-jireugi',
            nome: 'Dwitbal-ap-chagi + Eolgul-jireugi',
            traducao: 'Chute Frontal c/ Perna Atrás + Soco no Rosto',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwitbal-ap-chagi + Eolgul-jireugi</i> = Pernadetrás-frente-chute + Rosto-soco.',
              notaId: 5,
               audioFile:'assets/audio/45 Dwitbal-ap-chagi + Eolgul-jireugi.mp3'
          },

{
            descricao: 'Ap-seogi',
            id: 'momtong-biteuro-makgi',
            nome: 'Momtong-biteuro-makgi',
            traducao: 'Bloqueio Inverso no Tronco ',
            videoId: 'video_id_exemplo',
            nota: '<i>Momtong-biteuro-makgi</i> = Tronco-inverso-bloqueio',
              notaId: 6,
               audioFile:'assets/audio/46 Ap-seogi-momtong-biteureo-makgi.mp3'
          },
{
            id: 'dwitbal-ap-chagi + momtong-jireugi',
            nome: 'Dwitbal-ap-chagi + Momtong-jireugi',
            traducao: 'Chute Frontal c/ Perna Atrás + Soco no Tronco ',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwitbal-ap-chagi + momtong-jireugi</i> = Pernadetrás-frente-chute + tronco-soco.',
              notaId: 7,
               audioFile:'assets/audio/47 Dwitbal-ap-chagi + Momtong-jireugi.mp3'
          },
{
            descricao: 'Dwitgubi (Base Atrás)',
            id: 'sonnal-geodeureo-bakkat-makgi ',
            nome: 'Sonnal-geodeureo-bakkat-makgi ',
            traducao: 'Bloqueio Externo Assistido c/ Faca da Mão',
            videoId: 'video_id_exemplo',
            nota: '<i>Sonnal-geodeureo-bakkat-makgi</i> / 손날 거들어 바깥막기 / Knife Hand Supporting Outward Block. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.45).</a>',
              notaId: 8,
               audioFile:'assets/audio/48 Dwitgubi-sonnal-geodeureo-bakkat-makgi.mp3'
          },
          ] 
        },

         {
 title: 'Bal Kisul - 발기술 ',
        translation: 'Técnicas de Chute',
        description: 'Apgubi-naeryeo-hecheo-makgi',
        tecnicas: [


          {
            descricao: 'Dwitbal',
            id: 'an-chagi-jejari-bakkat-chagi',
            nome: 'An-chagi-jejari-bakkat-chagi',
            traducao: 'Chute Interno c/ Perna Atrás (Estático) Chute Externo',
            videoId: 'video_id_exemplo',
            nota: '<i>An-chagi</i> (안차기): Inward Kick.<i> Jejari</i> (in place). <i>Bakkat-chagi</i> (바깥차기): Outward Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.12, 7 e 13).',
              notaId: 9,
               audioFile:'assets/audio/49 Dwitbal-an-chagi-jejari-bakkat-chagi.mp3'
          },
{
            id: 'ttwieo-ap-chagi ',
            nome: 'Ttwieo-ap-chagi ',
            traducao: 'Chute Frontal Saltado ',
            videoId: 'video_id_exemplo',
            nota: '<i>Ttwieo-ap-chagi</i> / 뛰어 앞차기 / Jumping Front Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.13).</a>',
              notaId: 10,
               audioFile:'assets/audio/16 Ttwieo-ap-chagi.mp3'
          },
{
            id: 'bandal-chagi + ttwieo-bandal-chagi ',
            nome: 'Bandal-chagi + Ttwieo-dollyeo-chagi ',
            traducao: 'Chute Semicircular + Chute Circular ',
            videoId: 'video_id_exemplo',
            nota:'<i>Bandal-chagi + Ttwieo-dollyeo-chagi</i> = Lua crescente-chute + Salto-circular-chute.',
              notaId: 11,
               audioFile:'assets/audio/50 Bandal-chagi + Ttwieo-dollyeo-chagi.mp3'
          },
           {
            descricao:'Apbal',
            id: 'Ttwieo-naeryo-chagi',
            nome: 'Ttwieo-naeryo-chagi',
            traducao: 'Chute Descendente Saltado',
            videoId: 'video_id_exemplo',
            nota: '<i>Naeryeo-chagi</i> (내려차기): Axe Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.20).</a>',
              notaId: 12,
               audioFile:'assets/audio/51 Apbal-ttwieo-naeryo-chagi.mp3'
            },
  {
            id: 'Ttwieo-yeop-chagi-jejari-apbal-dollyeo-chagi',
            nome: 'Ttwieo-yeop-chagi-jejari-apbal-dollyeo-chagi',
            traducao: 'Chute Lateral Saltado (Estático) Chute Circular',
            videoId: 'video_id_exemplo',
            nota: '<i>Ttwieo-yeop-chagi</i> / 뛰어 옆차기 / Jumping Side kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.22).</a> ',
              notaId: 13,
               audioFile:'assets/audio/52 Ttwieo-yeop-chagi-jejari-dollyeo-chagi.mp3'
            },
              { 
            id: 'Ttwieo-dollyeo-chagi ',
            nome: 'Ttwieo-dollyeo-chagi ',
            traducao: 'Chute Circular Saltado',
            videoId: 'video_id_exemplo',
            nota: '<i>Ttwieo-dollyeo-chagi</i> / 뛰어 돌려차기 / Jumping Roundhouse Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.15).</a>',
              notaId: 14,
               audioFile:'assets/audio/53 Ttwieo-dollyeo-chagi.mp3'
          },

          {descricao: 'Dwi-kkoa-seogi',
            id: 'apbal-huryeo-chagi + dwitbal-huryeo-chagi ',
            nome: 'Apbal-huryeo-chagi + Dwitbal-huryeo-chagi',
            traducao: 'Chute Chicote c/ Perna Afrente na Base Cruzada (Atrás) + Chute Chicote c/ Perna Atrás',
            videoId: 'video_id_exemplo',
            nota: '<i>apbal-huryeo-chagi</i> / 앞발 후려차기 / Front Foot Whip Kic.  <i>Dwi-kkoa-seogi</i> <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.19 e 64).</a>',
              notaId: 15,
               audioFile:'assets/audio/54 Apbal-huryeo-chagi + Dwitbal-huryeo-chagi.mp3'
          },
          ]
        },
{
 title: 'POOMSAE - 품새 ',
        translation: 'Forma',
        tecnicas: [
          {
            descricao: '',
            id: 'taeguk I Jang',
            nome: 'Taeguk I Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
          
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
 title: 'SEBON Gyeorugi - 세본 겨루기 ',
        translation: 'Luta em Três Passos',
        tecnicas: [
          {
            descricao: 'San Boderion',
            id: '1 a 10',
            nome: '1 a 10',
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
        'Sergio Moller Taekwondo. <strong>Nomenclatura Oficial Kukkiwon: Bloqueios (Makgi) 1 (...)</strong>. Youtube, <a href="https://www.youtube.com/watch?v=oyyzQCpawu8&ab_channel=SergioMollerTaekwondo" target="_blank">2022.</a>'
    ]
  },
    {
    id: 'faixa-verde-claro',
    nome: 'VERDE CLARA',
    grau: '6º GUB',
    background: 'assets/faixas/faixa-verde-claro.jpg',
   introducao:'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.<br> Mauris placerat eleifend leo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    sections: [



{
 title: 'Kibon Dongjak - 기본동작',
        translation: 'Técnicas Fundamentais',
        tecnicas: [
          {
            descricao: 'Apgubi',
            id: 'dwitbal-ap-chagi + dubeon-biteureo-jireugi  ',
            nome: 'Dwitbal-ap-chagi + Dubeon-biteureo-jireugi  ',
            traducao: 'Chute Frontal c/ Perna Atrás + Soco Duplo Inverso ',
            videoId: 'video_id_exemplo',
            nota: '<i>Dubeon</i>(두번). 두 (<i>Du</i>) = “dois”; 번 (beon) = “vez(es), ocorrência”.',
              notaId: 1,
              audioFile: 'assets/audio/55 Dwitbal-ap-chagi + Dubeon-biteureo-jireugi.mp3'
          },
          {
            descricao: 'Ap-seogi',
            id: '(moc) biteureo-sonnal-an-chigi ',
            nome: '(Moc) Biteureo-sonnal-an-chigi',
            traducao: 'Golpe Interno Inverso c/ Mão em Faca no Pescoço',
            videoId: 'video_id_exemplo',
            nota: '<i>Sonnal-an-chigi</i> / 손날 안치기 / Knife Hand Inward Strike. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.23).</a>',
              notaId: 2,
              audioFile: 'assets/audio/56 Apgubi (Moc) Biteureo-sonnal-an-chigi.mp3'
          },
          {
            id: 'dwitbal-ap-chagi + arae-makgi +  biteureo-jireugi',
            nome: 'Dwitbal-ap-chagi + Arae-makgi +  Biteureo-jireugi ',
            traducao: 'Chute Frontal c/ Perna Atrás + Bloqueio Embaixo + Soco Inverso no Tronco',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwitbal-ap-chagi + Arae-makgi +  Biteureo-jireugi</i> = Perna Atrás-frente-chute + Embaixo-Bloqueio  Inverso-soco',
              notaId: 3,
              audioFile: 'assets/audio/57 Dwitbal-ap-chagi + Arae-makgi + Biteureo-jireugi.mp3'
          },
          {
            descricao: 'Dwitgubi',
            id: ' sonnal-bakkat-makgi + apgubi-biteureo-jireugi',
            nome: ' Sonnal-bakkat-makgi + Apgubi + Biteureo-jireugi',
            traducao: 'Bloqueio Externo c/ Faca da Mão no Tronco + Soco Inverso no Tronco na Base Frontal',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwitbal-ap-chagi + Arae-makgi +  Biteureo-jireugi</i> = Perna Atrás-frente-chute + Embaixo-Bloqueio  Inverso-soco',
              notaId: 4,
              audioFile: 'assets/audio/58 Dwitgubi-sonnal-bakkat-makgi + Apgubi + Biteureo-jireugi.mp3'
          },
          ]
        },
{
 title: 'Bal Kisul -발기술',
        translation: 'Técnicas de Chute',
        description: 'Gyeorugi-jumbi',
        tecnicas: [
          {
            descricao: 'Dwitbal',
            id: 'narae-chagi + dollyeo-chagi',
            nome: 'Narae-chagi + Dollyeo-chagi',
            traducao: 'Chute Asa + Chute Circular ',
            videoId: 'video_id_exemplo',
            nota: '  <i>Narae-chagi</i> (나래차기): Double Kicks. Dollyeo-chagi (돌려차기): Roundhouse Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.21 e 15).</a>',
              notaId: 5,
               audioFile: 'assets/audio/59 Dwitbal-narae-chagi + Dollyeo-chagi.mp3'
          },
          {

            id: 'bandal-chagi + dwit-chagi  ',
            nome: 'Bandal-chagi + Dwit-chagi ',
            traducao: 'Chute Semicircular + Coice',
            videoId: 'video_id_exemplo',
            nota: '<i>Bandal-chagi </i>(반달차기): Crescent Kick. <i>Dwi-chagi</i>/ 뒤차기 / Back Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.14 e 16).</a> ',
              notaId: 7,
              audioFile: 'assets/audio/60 Bandal-chagi + Dwit-chagi.mp3'
          },
{

            id: 'bandal Chagi + apbal-dollyeo-chagi ',
            nome: 'Bandal Chagi + Apbal-dollyeo-chagi',
            traducao: 'Chute Semicircular + Chute Circular c/ Perna Afrente',
            videoId: 'video_id_exemplo',
            nota: '<i> Bandal-chagi + Apbal-dollyeo-chagi</i>= Semicircular-chute + Perna Afrente-circular-chute',
              notaId: 8,
              audioFile: 'assets/audio/61 Bandal Chagi + Apbal-dollyeo-chagi.mp3'
          },
{
            descricao: 'Apbal',
            id: 'Narae-chagi + Dwitbal-narae-chagi',
            nome: 'Narae-chagi + Dwitbal-narae-chagi',
            traducao: 'Chute Asa + Chute Asa c/ Perna Atrás',
            videoId: 'video_id_exemplo',
            nota: '<i>Narae-chagi + Dwitbal-narae-chagi</i> = Asa-chute + Perna Atrás-asa-chute ',
              notaId: 9,
              audioFile: 'assets/audio/62 Apbal-narae-chagi + dwitbal-narae-chagi.mp3'
          },
{

            id: 'ttwieo-bandal-chagi + dwitbal-dollyeo-chagi  ',
            nome: 'Ttwieo-bandal-chagi + Dwitbal-dollyeo-chagi ',
            traducao: 'Chute Semicircular Saltado + Chute Circular c/ Perna Atrás',
            videoId: 'video_id_exemplo',
            nota: '<i>Ttwieo-bandal-chagi + Dwitbal-dollyeo-chagi</i> = Salto-lua crescente-chute + Perna Atrás-circular-chute',
              notaId: 10,
              audioFile: 'assets/audio/63 Ttwieo-bandal-chagi + Dwitbal-dollyeo-chagi.mp3'
          },
{

            id: 'ttwieo-yeop-chagi + ttwieo-dwit-chagi ',
            nome: 'Ttwieo-yeop-chagi + Ttwieo-dwit-chagi',
            traducao: 'Chute Lateral Saltado + Coice Saltado',
            videoId: 'video_id_exemplo',
            nota: '<i>Ttwieo-yeop-chagi</i>/ 뛰어 옆차기 / Jumping Side Kick. <i>Ttwieo-dwi-chagi</i>/ 뛰어 뒤차기 / Jumping Back Kick.<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.22 e 16).</a>',
              notaId: 11,
              audioFile: 'assets/audio/64 Ttwieo-yeop-chagi + Ttwieo-dwit-chagi.mp3'
          },
          {

            id: 'bandal-chagi + 360º dwi-huryeo-chagi  ',
            nome: 'Bandal-chagi + 360º Dwi-huryeo-chagi   ',
            traducao: 'Chute Semicircular + Chute Chicote Girado',
            videoId: 'video_id_exemplo',
            nota: '<i>360º Dwi-huryeo-chagi</i>/ 360도 뒤후려차기 / 360º Back Whip Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.18).</a>',
            notaId: 12,
            audioFile: 'assets/audio/65 Bandal-chagi + Dwi-huryeo-chagi.mp3'
          },
          ]
        },

{
 title: 'POOMSAE - 품새 ',
        translation: 'Forma',
        tecnicas: [
           {
            id: 'taeguk-1',
            nome: 'Taeguk Il Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: '',
          },
          {
              id: 'taegeuk-2',
              nome: 'Taeguk I Jang',
              traducao: '',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
            },
          {
            id: 'taeguk san jang',
            nome: 'Taeguk San Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
          ]
        },
{
 title: 'SEBON Gyeorugi - 세본 겨루기 ',
        translation: 'Técnicas de Bloqueio Pessoal',
        tecnicas: [
          {
            descricao: 'San Boderion',
            id: '1 a 15',
            nome: '1 a 15',
            traducao: '',
            videoId: 'video_id_exemplo',
            
          },
          ]
        },
    ],
    referencias: [
      'KUKKIWON.<strong> Taekwondo Technical Terminology.</strong> World Taekwondo Headquarters, <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank"> 2012.</a>',
    ]





//  {

//             id: ' ',
//             nome: ' ',
//             traducao: ' ',
//             videoId: 'video_id_exemplo',
//             nota: '<i> </i> = ',
//             notaId: 12,
//             audioFile: 
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



  },
  {
     id: 'faixa-verde',
    nome: 'VERDE ESCURA',
    grau: '5º GUB',
    background: 'assets/faixas/faixa-verde-escuro.jpg',
   introducao:'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leoDonec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leoDonec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leoDonec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leoDonec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo <br> Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo',
    sections: [
//       {
//         title: 'Kibon Yeonseub – 기본연습 ',
//         translation: 'Sequências Fundamentais',
//         description: '',
//         tecnicas: [
//  {
//             descricao: 'Narani-seogi',
//             id: 'amarela-makgi-ky',
//             nome: '- Batangson-nulleo-makgi <br><span class="destaque-vermelho">Bloqueio Pressionado c/ Palma da Mão</span><br>- (Pyeonsonkkeut) sewo-jjireugi <br><span class="destaque-vermelho">Estocada Vertical c/ Mão em Lança </span><br>- Jebipum (sonnal) an-chigi  <br><span class="destaque-vermelho">Golpe Interno c/ Faca da Mão na Postura da Andorinha </span><br>Deungjumeok-ap-chigi   <br><span class="destaque-vermelho">Golpe Frontal c/ Dorso do Punho </span><br>',
//             traducao: '',
//             videoId: 'video_id_exemplo',
//             nota: '<i>Kibon Yeonsup</i> destaca quatro ou menos partes fundamentais de técnicas básicas, em seis movimentos: <br> 짜기 (<i><strong>Jjagi</i></strong>) = “Tecer”. Preparar a posição inicial. <br>  허리 틀기 (<i><strong>Heori Teulgi</strong></i>) = “Quadril Girar”. É o giro do quadril. <br> 틀어 막기 (<i><strong>Teureo Makgi ou Chigi</strong></i>) = “Torcer Bloqueio ou Golpe”. A execução da Bloqueio ou golpe. <br>  팔굽치기 (<i><strong>Palgup Chigi</strong></i>) = “Cotovelo Golpe”. A cotovelada que faz o quadril girar novamente. <br> 힘의 약강 (<i><strong>Him-ui Yakgang</strong></i>) = “Força Suavidade/Dureza”.  Uma execução completa com ênfase no equilíbrio entre suavidade e força. <br> 속도의 완급 (<i><strong>Sokdo-ui Wangeup</strong></i>) = “Velocidade Aceleração/Desaceleração”. Uma execução completa com ênfase no equilíbrio entre aceleração e desaceleração.',
//               notaId: 1
//           },
//           ]
//         },
        {
          title: 'Kibon Dongjak - 기본동작',
          translation: 'Técnicas Fundamentais',
          tecnicas: [

            {
              descricao:'Apgubi',
              id: 'batangson-nulleo-makgi + (pyeonsonkkeut) sewo-jjireugi ',
              nome: 'Batangson-nulleo-makgi + (Pyeonsonkkeut) sewo-jjireugi ',
              traducao: 'Bloqueio Pressionado c/ Palma da Mão + Estocada Vertical c/ Mão em Lança',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Batangson-nulleo-makgi</i>/ 바탕손 눌러막기 / Palm Heel Pressing Block. <i>(Pyeonsonkkeut) sewo-jjireugi</i> / (편손끝) 세워찌르기 / (Spear Hand) Vertical Thrust. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.51 e 38).</a>',
              notaId: 1,
              audioFile: 'assets/audio/66 Batangson-nulleo-makgi + (Pyeonsonkkeut) sewo-jjireugi.mp3'
            },
            {
              id: 'jebipum (sonnal) an-chigi ',
              nome: 'Jebipum (sonnal) an-chigi',
              traducao: 'Golpe Interno c/ Faca da Mão na Postura da Andorinha ',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: 'Jebipum (sonnal) an-chigi / 제비품 (손날) 안치기 / Swallow (Knife) Inward Strike.<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.26).</a>',
            notaId: 2,
              audioFile: 'assets/audio/67 Jebipum (sonnal) an-chigi.mp3'
            },
            {
              id: 'dwitbal-ap-chagi +  Biteureo-jireugi',
              nome: 'Dwitbal-ap-chagi +  Biteureo-jireugi',
              traducao: 'Chute Frontal c/ Perna Atrás + Soco no Tronco Inverso',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Dwitbal-ap-chagi + Biteureo-jireugi</i> = Perna Atrás-frente-chute + Inverso-soco.',
            notaId: 3,
              audioFile: 'assets/audio/68 Dwitbal-ap-chagi + Biteureo-jireugi.mp3'
            },
             {
              id: 'dwitbal-ap-chagi + deungjumeok-ap-chigi ',
              nome: 'Dwitbal-ap-chagi + Deungjumeok-ap-chigi',
              traducao: 'Chute Frontal c/ Perna Atrás + Golpe Frontal c/ Dorso do Punho',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Dwitbal-ap-chagi + Deungjumeok-ap-chigi</i> = Perna Atrás-frente-chute + Dorso do punho-frente-golpe.',
                          notaId: 4,
                          audioFile: 'assets/audio/69 Dwitbal-ap-chagi + Deungjumeok-ap-chigi.mp3'
            },
            {
              id: 'momtong-makgi + dubeon-jireugi ',
              nome: 'Momtong-makgi + Dubeon-jireugi ',
              traducao: 'Bloqueio no Tronco + Soco Duplo no Tronco',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Momtong-makgi + Dubeon-jireugi</i> = Tronco-Bloqueio + Duplo-soco. ', 
            notaId: 5,
            audioFile: 'assets/audio/70 Momtong-makgi + Dubeon-jireugi.mp3'
            },
{
  descricao: 'Dwitgubi',
              id: 'dwitbal-yeop-chagi + sonnal-bakkat-makgi ',
              nome: 'Dwitbal-yeop-chagi + Sonnal-bakkat-makgi',
              traducao: 'Chute Lateral c/ Perna Atrás + Bloqueio Externo c/ Faca da Mão  ',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>Sonnal-bakkat-makgi</i> / 손날 바깥막기 / Knife Hand Outward Block.<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.46).</a>', 
            notaId: 6,
             audioFile: 'assets/audio/71 Dwitgubi-dwitbal-yeop-chagi + Sonnal-bakkat-makgi.mp3'
            },
            {
              id: '(bakkatpalmok) bakkat-makgi',
              nome: '(Bakkatpalmok) Bakkat-makgi',
              traducao: 'Bloqueio Afora c/ Pulso Externo',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>(Bakkatpalmok) Bakkat-makgi</i> / 손날 바깥막기 / Knife Hand Outward Block.<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.46).</a>', 
            notaId: 7,
            audioFile: 'assets/audio/72 Dwitgubi (Bakkatpalmok) Bakkat-makgi바깥팔목 바깥막기.mp3'
            },
{
              id: '(bakkatpalmok) bakkat-makgi + dwitbal-ap-chagi + montong-biteureo-makgi ',
              nome: '(Bakkatpalmok) bakkat-makgi + Dwitbal-ap-chagi + Montong-biteureo-makgi ',
              traducao: 'Bloqueio de Afora c/ Pulso Externo + Chute Frontal c/ Perna Atrás + Bloqueio Inverso no Tronco ',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
              nota: '<i>(Bakkatpalmok) bakkat-makgi + Dwitbal-ap-chagi + Montong-biteureo-makgi</i> = (Externopulso) externa-Bloqueio + Perna Atrás-frente-chute.', 
            notaId: 8,
           audioFile: 'assets/audio/73 (Bakkatpalmok) bakkat-makgi + Dwitbal-ap-chagi + Montong-biteureo-makgi.mp3'
            },
        ]
      },
      {
          title: 'Bal Kisul -발기술 ',
          translation: 'Técnicas de chute',
          description: 'Gyeorugi-jumbi',
          tecnicas: [
{

id: 'dolgae-chagi ',
nome: 'Dolgae-chagi ',
traducao: 'Chute Tornado',
videoId: 'dQw4w9WgXcQ',
nota:'<i>Dwidora-ttwieo-dollyeo-chagi</i> (Back Jumping Spin Kick) [=Dolgae-chagi].<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.5).</a>',
 notaId: 9,
 audioFile: 'assets/audio/74 Dolgae-chagi.mp3'
},
{
id: 'dolgae-chagi',
nome: '(Eolgul) Dolgae-chagi',
traducao: 'Chute Tornado no Cabeça',
videoId: 'dQw4w9WgXcQ',
nota: '<i>(Eolgul) Dolgae-chagi</i> = (Face) Tornado-chute.',
notaId: 10,
 audioFile: 'assets/audio/75 (Eolgul) 360º Dolgae-chagi.mp3' 
},
{
id: 'apbal-ttwieo-yeop-chagi',
nome: 'Apbal-ttwieo-yeop-chagi ',
traducao: 'Chute Lateral Saltado c/ Perna Afrente',
videoId: 'dQw4w9WgXcQ',
nota: 'Ttwieo-yeop-chagi / 뛰어 옆차기 / Jumping Side Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.76).</a>.',
notaId: 11,
 audioFile: 'assets/audio/76 Apbal-ttwieo-yeop-chagi.mp3'
},
{
id: 'Dwitbal-dubang-ap-chagi ',
nome: 'Dwitbal-dubang-ap-chagi ',
traducao: 'Chute Frontal em Dois Alvos c/ Perna Atrás',
videoId: 'dQw4w9WgXcQ',
nota: '<i>Dwitbal-dubang-ap-chagi</i> = Perna Atrás-dois alvos-frente-chute.',
notaId: 12,
 audioFile: 'assets/audio/77 Dwitbal-dubang-ap-chagi.mp3'
},
{
id: 'dwitbal-dubang-dollyeo-chagi ',
nome: 'Dwitbal-dubang-dollyeo-chagi',
traducao: 'Chute Circular em Dois Alvos c/ Perna Atrás',
videoId: 'dQw4w9WgXcQ',
nota: '<i>Dwitbal-dubang-dollyeo-chagi</i> = Perna Atrás-dois alvos-circular-chute.',
notaId: 13,
 audioFile: 'assets/audio/78 Dwitbal-dubang-dollyeo-chagi.mp3'
},
{
id: 'dwitbal-dubang-yeop-chagi ',
nome: 'Dwitbal-dubang-yeop-chagi ',
traducao: 'Chute Lateral em Dois Alvos c/ Perna Atrás',
videoId: 'dQw4w9WgXcQ',
nota: '<i>Dwitbal-dubang-yeop-chagi </i> = Perna Atrás-dois alvos-lateral-chute.',
notaId: 14,
 audioFile: 'assets/audio/79 Dwitbal-dubang-yeop-chagi.mp3'
},

          ],          
      },
     {
 title: 'POOMSAE - 품새 ',
        translation: 'Forma',
        tecnicas: [
           {
            id: 'taeguk-1',
            nome: 'Taeguk Il Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: '',
          },
          {
              id: 'taegeuk-2',
              nome: 'Taeguk I Jang',
              traducao: '',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
            },
          {
            id: 'taeguk san jang',
            nome: 'Taeguk San Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
           {
            id: 'taeguk sae jang',
            nome: 'Taeguk Sae Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
          ]
        },
{
          title: 'Sebon Gyeorugi - 세본 겨루기 ',
          translation: 'Luta em Três Passos',
          description: '',
          tecnicas: [
            {
              id: 'san Boderion 1 a 20',
              nome: 'San Boderion 1 a 20',
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
    id: 'faixa-azul-claro',
    nome: 'AZUL CLARA',
    grau: '4º GUB',
    background: 'assets/faixas/faixa-azul-claro.jpg',
    introducao: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. <br>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.<br>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo',
    sections: [

{
        title: 'Kibon Dongjak - 기본동작 ',
        translation: 'Técnicas Fundamentais',
        tecnicas: [
           {
            descricao: 'Apgubi',
            id: 'montong-makgi + momtong-biteureo-makgi',
            nome: 'Montong-makgi + Momtong-biteureo-makgi',
            traducao: 'Bloqueio no Tronco + Bloqueio Invertido no Tronco ',
            videoId: 'video_id_exemplo',
            nota: '<i>Montong-makgi + Momtong-biteureo-makgi</i> = Tronco-Bloqueio + Tronco-Inverso-Bloqueio.',
            notaId: 1,
            audioFile: 'assets/audio/80 Montong-makgi + Momtong-biteureo-makgi.mp3'
          },
 {
            id: 'dwitbal-ap-chagi + deungjumeok-ap-chigi + momtong-biteureo-makgi',
            nome: 'Dwitbal-ap-chagi + Deungjumeok-ap-chigi + Momtong-biteureo-makgi',
            traducao: 'Chute Frontal c/ Perna Atrás + Golpe Frontal c/ Dorso do Punho + Bloqueio Inverso no Tronco',
            videoId: 'video_id_exemplo',
            nota: '<i>Deungjumeok-ap-chigi</i> / 등주먹 앞치기 / Back Fist Forward Strike. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank"> (Kukkiwon, p.24).</a>',
            notaId: 2,
            audioFile: 'assets/audio/81 Dwitbal-ap-chagi + Deungjumeok-ap-chigi + Momtong-biteureo-makgi.mp3'
          },
          {
            id: 'dwitbal-yeop-chagi + palgup-pyojeok-chigi',
            nome: 'Dwitbal-yeop-chagi + Palgup-pyojeok-chigi',
            traducao: 'Chute Lateral c/ Perna Atrás + Golpe de Cotovelo ao Alvo',
            videoId: 'video_id_exemplo',
            nota: '<i> Palgup-pyojeok-chigi </i> / 팔굽 표적치기 / Elbow Target Strike.<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank"> (Kukkiwon, p.28).</a>',
            notaId: 3,
            audioFile: 'assets/audio/82 Dwitbal-yeop-chagi + Palgup-pyojeok-chigi.mp3'
          },
 {
            id: 'palgup-dollyeo-chigi ',
            nome: 'Palgup-dollyeo-chigi ',
            traducao: 'Golpe de Cotovelo em Rotação ',
            videoId: 'video_id_exemplo',
            nota: '<i> Palgup-dollyeo-chigi </i> / 팔굽 돌려치기 / Elbow Turn Strike. (Kukkiwon p. 24).<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank"> (Kukkiwon, p.24).</a>',
            notaId: 4,
            audioFile: 'assets/audio/83 Palgup-dollyeo-chigi.mp3'
          },
 {
            id: 'dwitbal-ap-chagi + arae-makgi + momtong-biteureo-makgi',
            nome: 'Dwitbal-ap-chagi + Arae-makgi + Momtong-biteureo-makgi',
            traducao: 'Chute Frontal c/ Perna Atrás + Bloqueio Embaixo + Bloqueio Inverso no Tronco ',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwitbal-ap-chagi + Arae-makgi + Momtong-biteureo-makgi</i> = Perna Atrás-frente-chute + Embaixo-Bloqueio + Tronco-Inverso-Bloqueio.',
            notaId: 5,
            audioFile: 'assets/audio/84 Dwitbal-ap-chagi + Arae-makgi + Momtong-biteureo-makgi.mp3'
          },
           {   
            id: 'arae-makgi + yeop-seogi-mejumeok-naeryeo-chigi ',
            nome: 'Arae-makgi + Yeop-seogi-mejumeok-naeryeo-chigi ',
            traducao: 'Bloqueio Embaixo + Golpe Descendente c/ Punho em Martelo na Base de Lado',
            videoId: 'video_id_exemplo',
            nota: '<i>Yeop-seogi</i>(옆서기): Side Stance. <i> Mejumeok-naeryeo-chigi</i> / 메주먹 내려치기 / Hammer Fist Downward Strike. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank"> (Kukkiwon, p.65 e 22).</a>',
            notaId: 6,
            audioFile: 'assets/audio/85 Arae-makgi + Yeop-seogi-mejumeok-naeryeo-chigi.mp3'
          },
          { 
            descricao: 'Dwitgubi',
            id: 'sonnal-bakkat-makgi',
            nome: 'Sonnal-bakkat-makgi',
            traducao: 'Bloqueio Afora c/ Faca da Mão',
            videoId: 'video_id_exemplo',
            nota: '<i>Sonnal-bakkat-makgi</i> / 손날 바깥막기 / Knife Hand Outward Block. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank"> (Kukkiwon, p.46).</a> ',
            notaId: 7,
            audioFile: 'assets/audio/86 Dwitgubi-sonnal-bakkat-makgi.mp3'
          },
{
            descricao: 'Dwitgubi',
            id: 'sonnal-bakkat-makgi + ap-euro + apgubi-palgup-dollyeo-chigi',
            nome: 'Sonnal-bakkat-makgi + Ap-euro + Apgubi-palgup-dollyeo-chigi',
            traducao: 'Bloqueio c/ Faca da Mão na Base Atrás + Avanço + Golpe de Cotovelo ao Alvo na Base Frontal',
            videoId: 'video_id_exemplo',
            nota: '<i>Sonnal-bakkat-makgi </i> / 손날 바깥막기 / Knife Hand Outward Block. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.46).</a>',
            notaId: 8,
            audioFile: 'assets/audio/87 Sonnal-bakkat-makgi + Apgubi-palgup-dollyeo-chigi.mp3'
          },
          {
            descricao: 'Kkoa-seogi',
            id: 'dwitbal-ap-chagi + kkoa-seogi-deungjumeok-ap-chigi',
            nome: 'Dwitbal-ap-chagi + Kkoa-seogi-deungjumeok-ap-chigi',
            traducao: 'Chute Frontal c/ Perna Atrás + Golpe Frontal c/ Dorso do Punho na Base Cruzada ',
            videoId: 'video_id_exemplo',
            nota: '<i>Kkoa-seogi </i>  (꼬아서기): Cross Stance. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.63).</a>',
            notaId: 9,
            audioFile: 'assets/audio/88 Dwitbal-ap-chagi + Kkoa-seogi-deungjumeok-ap-chigi.mp3'
  },      
        ]
      },
{
        title: 'Bal Kisul -발기술 ',
        translation: 'Técnicas de Chute',
        tecnicas: [
{
            descricao: 'Gyorugi-jumbi',
            id: 'ttwieo-apbal-huryeo-chagi',
            nome: 'Ttwieo-apbal-huryeo-chagi',
            traducao: 'Chute Chicote c/ Perna Afrente Saltado',
            videoId: 'video_id_exemplo',
            nota: '<i>Apbal-huryeo-chagi </i>/ 앞발 후려차기 / Front Foot Whip Kick.<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.19).</a>',
            notaId: 10,
            audioFile: 'assets/audio/89 Ttwieo-apbal-huryeo-chagi.mp3'
          },
          {
            id: 'dolgae-chagi + dwitbal-dwi-huryeo-chagi ',
            nome: 'Dolgae-chagi + Dwitbal-dwi-huryeo-chagi ',
            traducao: 'Chute Tornado + Chute Chicote Girado',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwidora-ttwieo-dollyeo-chagi</i> (Back Jumping Spin Kick) [=Dolgae-chagi]. <i>360º Dwi-huryeo-chagi</i> / 360도 뒤후려차기 / 360º Back Whip Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.5 e 18).</a>',
            notaId: 11,
            audioFile: 'assets/audio/90 Dolgae-chagi + Dwi-huryeo-chagi.mp3'
          },
{   
            id: 'dwitbal-bandal-chagi + apbal-bandal-chagi + dolgae-chagi',
            nome: 'Dwitbal-bandal-chagi + Apbal-bandal-chagi + Dolgae-chagi',
            traducao: 'Chute Semicircular c/ Perna Atrás + Chute Semicircular c/ Perna Afrente + Chute Tornado',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwitbal-bandal-chagi + Apbal-bandal-chagi + 360º Dolgae-chagi</i> = Perna Atrás-lua crescente-chute + Perna Afrente-lua crescente-chute + 360º Tornado-chute',
            notaId: 12,
            audioFile: 'assets/audio/91 Dwitbal-bandal-chagi + Apbal-bandal-chagi + Dolgae-chagi.mp3'
          },
{
            id: 'dolgae-an-chagi ',
            nome: 'Dolgae-an-chagi',
            traducao: 'Chute Tornado Interno',
            videoId: 'video_id_exemplo',
            nota: '<i>Dolgae-an-chagi</i> = Tornado-interno-chute',
            notaId: 13,
            audioFile: 'assets/audio/92 Dolgae-an-chagi.mp3'
          },
          {
            id: 'dwitbal-narae-chagi + dwit-chagi',
            nome: 'Dwitbal-narae-chagi + Dwit-chagi',
            traducao: 'Chute Asa c/ Perna Atrás + Coice',
            videoId: 'video_id_exemplo',
            nota: '<i>Narae-chagi</i>(나래차기): Double Kicks. <i>Dwi-chagi</i> / 뒤차기 / Back Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.15 e 16).</a>    ',
            notaId: 14,
            audioFile: 'assets/audio/93 Dwitbal-narae-chagi + Dwit-chagi.mp3'
          },
{
            id: 'mireo-chagi + naeryo-chagi + dwi-huryeo-chagi',
            nome: 'Mireo-chagi + Naeryo-chagi + Dwi-huryeo-chagi',
            traducao: 'Chute Empurrão + Chute Descendente + Chute Chicote Girado ',
            videoId: 'video_id_exemplo',
            nota: '<i>Naeryeo-chagi</i> (내려차기): Axe Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.20).</a>',
            notaId: 15,
            audioFile: 'assets/audio/94 Mireo-chagi + Naeryo-chagi + Dwi-huryeo-chagi.mp3'
          },
 {
            id: 'ttwieo-dwi-huryeo-chagi',
            nome: 'Ttwieo-dwi-huryeo-chagi',
            traducao: 'Chute Chicote Saltado c/ Perna Atrás',
            videoId: 'video_id_exemplo',
            nota: '<iTtwieo-dwi-huryeo-chagi</i> / 뛰어 뒤후려차기 / Jumping Back Whip Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.19).</a>    ',
            notaId: 16,
            audioFile: 'assets/audio/95 Ttwieo-dwi-huryeo-chagi.mp3'
          },
        ]
      },
{
 title: 'POOMSAE - 품새 ',
        translation: 'Forma',
        tecnicas: [
           {
            id: 'taeguk-1',
            nome: 'Taeguk Il Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: '',
          },
          {
              id: 'taegeuk-2',
              nome: 'Taeguk I Jang',
              traducao: '',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
            },
          {
            id: 'taeguk san jang',
            nome: 'Taeguk San Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
           {
            id: 'taeguk sae jang',
            nome: 'Taeguk Sae Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
           {
            id: 'taeguk O Jang',
            nome: 'Taeguk O Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
          ]
        },
{
          title: 'Sebon Gyeorugi - 세본 겨루기 ',
          translation: 'Luta em Três Passos',
          description: '',
          tecnicas: [
            {
              id: 'san Boderion 1 a 25',
              nome: 'San Boderion 1 a 25',
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
    id: 'faixa-azul',
    nome: 'AZUL ESCURO',
    grau: '3º GUB',
    background: 'assets/faixas/faixa-azul-escuro.jpg',
   introducao: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. <br>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.<br>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo',
    sections: [
       {
        title: 'Kibon Dongjak - 기본동작 ',
        translation: 'Técnicas Fundamentais',
        description: '',
        tecnicas: [
{
            descricao: 'Apgubi',
            id: '(eolgul) sonnal-biteureo-bakkat-makgi',
            nome: '(Eolgul) Sonnal-biteureo-bakkat-makgi',
            traducao: 'Bloqueio p/ Fora c/ Mão em Faca Inversa no Rosto',
            videoId: 'video_id_exemplo',
            nota: '<i>Sonnal-biteureo-bakkat-makgi</i>/ 손날 비틀어 바깥막기 / Knife Hand Twisting Outward Block. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.46).</a> ',
              notaId: 1,
              audioFile:'assets/audio/96 (Eolgul) Sonnal-biteureo-bakkat-makgi.mp3'
          },
          {
            id: 'dwitbal-dollyeo-chagi + (oelgul) (bakkatpalmok) bakkat-makgi + momtong-jireugi',
            nome: 'Dwitbal-dollyeo-chagi + (Oelgul) (Bakkatpalmok) Bakkat-makgi + Momtong-jireugi',
            traducao: 'Chute Circular c/ Perna Atrás + Bloqueio p/ Fora c/ Punho Externo no Rosto + Soco no Tronco',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwitbal-dollyeo-chagi + (Oelgul) (Bakkatpalmok) Bakkat-makgi + Momtong-jireugi</i> = Perna Atrás-circular-chute + (Face) (Externopulso) Externo-bloqueio + Tronco-soco.',
              notaId: 2,
                audioFile:'assets/audio/97 Dwitbal-dollyeo-chagi + (Oelgul) (Bakkatpalmok) Bakkat-makgi + Momtong-jireugi.mp3'
          },
{
            id: 'batangson-an-makgi + biteureo-jireugi',
            nome: 'Batangson-an-makgi + Biteureo-jireugi',
            traducao: 'Bloqueio p/ Dentro c/ Palma da Mão + Soco Inverso',
            videoId: 'video_id_exemplo',
            nota: '<i>Batangson-an-makgi</i> / 바탕손 안막기 / Palm Heel Inward Block. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.44).</a>  ',
              notaId: 3,
              audioFile:'assets/audio/98 Batangson-an-makgi + Biteureo-jireugi.mp3'  
          },
          {
            id: 'dwitbal-ap-chagi + dwitgubi-(bakkatpalmok) bakkat-makgi',
            nome: 'Dwitbal-ap-chagi + Dwitgubi-(Bakkatpalmok) Bakkat-makgi',
            traducao: 'Chute Frontal c/ Perna Atrás + Base Atrás + Bloqueio p/ Fora c/ Pulso Externo',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwitbal-ap-chagi + Dwitgubi-(Bakkatpalmok) Bakkat-makgi</i> = Perna Atrás-frente-chute + Base Atrás-(Externopulso) Externo-bloqueio.',
              notaId: 4,
                audioFile:'assets/audio/99 Dwitbal-ap-chagi + Dwitgubi-(Bakkatpalmok) Bakkat-makgi.mp3'
          },
        ]
      },
{
        title: 'Bal Kisul -발기술 ',
        translation: 'Técnicas de Chute',
        tecnicas: [
{
            descricao: 'Gyorugi-jumbi',
            id: 'dolgae-chagi + dwi-huryeo-chagi',
            nome: 'Dolgae-chagi + Dwi-huryeo-chagi',
            traducao: 'Chute Tornado + Chute Chicote Girado',
            videoId: 'video_id_exemplo',
            nota: '<i>Dolgae-chagi</i> (돌개차기): Tornado Kick / 앞발 후려차기 /. <i>360º Dwi-huryeo-chagi</i> / 360도 뒤후려차기 / 360º Back Whip Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.15 e 18).</a>',
              notaId: 5,
                audioFile:'assets/audio/100 Dolgae-chagi + Dwi-huryeo-chagi.mp3'
          },
    {   
            id: 'dwitbal-bandal-chagi + apbal-dollyeo-chagi + dolgae-chagi',
            nome: 'Dwitbal-bandal-chagi + Apbal-dollyeo-chagi + Dolgae-chagi',
            traducao: 'Chute Semicircular c/ Perna Atrás + Chute Circular c/ Perna Afrente + Chute Tornado',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwitbal-bandal-chagi + Apbal-bandal-chagi + Dolgae-chagi</i> = Perna Atrás-lua crescente-chute + Perna Afrente-lua crescente-chute + 360º Tornado-chute.',
              notaId: 6,
                audioFile:'assets/audio/101 Dwitbal-bandal-chagi + Apbal-bandal-chagi + 360º Dolgae-chagi.mp3'
          },
{
            id: 'dwitbal-narae-chagi + ttwieo-dwi-chagi  ',
            nome: 'Dwitbal-narae-chagi + Ttwieo-dwi-chagi  ',
            traducao: 'Chute Asa c/ Perna Atrás + Coice Saltado ',
            videoId: 'video_id_exemplo',
            nota: '<i>Narae-chagi</i> (나래차기): Double Kicks. <i>Ttwieo-dwi-chagi</i> / 뛰어 뒤차기 / Jumping Back Kick. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.21 e 16).</a>',
              notaId: 7,
                audioFile:'assets/audio/102 Dwitbal-narae-chagi + Ttwieo-dwi-chagi.mp3'
          },
          
{
            id: 'dwitbal-bandal-chagi + jejari + dollyeo-chagi',
            nome: 'Dwitbal-bandal-chagi + Jejari + Dollyeo-chagi',
            traducao: 'Chute Semicircular c/ Perna Atrás (Estático) Chute Circular',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwitbal-bandal-chagi + Jejari + Dollyeo-chagi</i> = Perna Atrás-lua crescente-chute + Mesmo lugar + Circular-chute.',
              notaId: 8,
                audioFile:'assets/audio/103 Dwitbal-bandal-chagi + Jejari + Dollyeo-chagi.mp3'
          },
 {
            id: 'dwitbal-bandal-chagi + jejari + Dwi-huryeo-chagi + jejari + dollyeo-chagi.',
            nome: 'Dwitbal-bandal-chagi + Jejari + Dwi-huryeo-chagi + Jejari + Dollyeo-chagi.',
            traducao: 'Chute Semicircular c/ Perna Atrás (Estático) Chute Chicote Girado (Estático) Chute Circular',
            videoId: 'video_id_exemplo',
            nota: '<i> Dwitbal-bandal-chagi + Jejari + 360ºDwi-huryeo-chagi + Jejari + Dollyeo-chagi</i> = Perna Atrás-Lua crescente-chute + Mesmo lugar + Trás-chicote-chute + Mesmo Lugar + Circular-chute. ',
              notaId: 9,
                audioFile:'assets/audio/104 Dwitbal-bandal-chagi + Jejari + Dwi-huryeo-chagi + Jejari + Dollyeo-chagi..mp3'
          },
 {
            id: 'apbal-ttwieo-naeryo-chagi + dolgae-an-chagi',
            nome: 'apbal-ttwieo-naeryo-chagi + Dolgae-an-chagi',
            traducao: 'Chute Descendente Saltado c/ Perna Afrente + Chute Tornado Interno',
            videoId: 'video_id_exemplo',
            nota: '<i>Apbal-ttwieo-naeryo-chagi + Dolgae-an-chagi</i> = Perna Afrente-salto-descendente-chute + 360º Tornado-chute.',
              notaId: 10,
                audioFile:'assets/audio/105 Apbal-ttwieo-naeryo-chagi +Dolgae-an-chagi.mp3'
          },
          {
            id: 'apbal-ttwieo-naeryo-chagi + dwi-chagi',
            nome: 'Apbal-ttwieo-naeryo-chagi + Dwi-chagi',
            traducao: 'Chute Descendente Saltado c/ Perna Afrente + Coice',
            videoId: 'video_id_exemplo',
            nota: '<i>Apbal-ttwieo-naeryo-chagi + Dwi-chagi</i> = Perna Afrente-salto-descendente-chute + Trás-chute.',
              notaId: 11,
                audioFile:'assets/audio/106 Apbal-ttwieo-naeryo-chagi + Dwi-chagi.mp3'
          },
          {
            id: 'apbal-ttwieo-dollyeo-chagi + dwitbal-mulleo-ditgi + dwi-chagi',
            nome: 'Apbal-ttwieo-dollyeo-chagi + Dwitbal-mulleo-ditgi  + Dwi-chagi',
            traducao: 'Chute Circular c/ Perna Afrente + Step p/ Trás c/ Perna Atrás + Coice',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwitbal-mulleo-ditgi</i> / 뒷발 물러딛기 / Rear Foot Backward Step. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.30).</a>   = Perna Afrente-salto-descendente-chute + Trás-chute',
              notaId: 12,
                audioFile:'assets/audio/107 Apbal-ttwieo-dollyeo-chagi + Dwitbal-mulleo-ditgi + Dwi-chagi.mp3'
          },
          {
            id: 'hadan-dwi-huryeo-chagi',
            nome: '(Hadan) Dwi-huryeo-chagi-jejary-dwi-huryeo-chagi',
            traducao: 'Chute Chicote Girado Embaixo (Estático) Chute Chicote Girado',
            videoId: 'video_id_exemplo',
            nota: '<i> (Hadan) Dwi-huryeo-chagi-jejary-dwi-huryeo-chagi</i> = (Abaixo) Atrás-chicote-chute.',
              notaId: 13,
                audioFile:'assets/audio/108 (Hadan) Dwi-huryeo-chagi-jejari-dwi-chagi.mp3'
          },
           {
            id: 'dolgae-chagi + (eolgul) dolgae-chagi',
            nome: 'Dolgae-chagi + (Eolgul) Dolgae-chagi',
            traducao: 'Chute Tornado + Chute Tornado na Cabeça',
            videoId: 'video_id_exemplo',
            nota: '<i> Dolgae-chagi + (Eolgul) Dolgae-chagi</i> = Tornado-chute + (Face) Tornado-chute.',
              notaId: 14,
                audioFile:'assets/audio/109 Dolgae-chagi + (Eolgul) Dolgae-chagi.mp3'
          },
           {
            id: 'dwitbal-naeryo-chagi + apbal-dollyeo-chagi',
            nome: 'Dwitbal-naeryo-chagi + Apbal-dollyeo-chagi',
            traducao: 'Chute Descendente c/ Perna Atrás + Chute Circular c/ Perna Afrente.',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwitbal-naeryo-chagi + Apbal-dollyeo-chagii</i> = Perna de trás-descendente-chute + Perna da frente-circular-chute.',
              notaId: 15,
                audioFile:'assets/audio/110 Dwitbal-naeryo-chagi + Apbal-dollyeo-chagi.mp3'
          },
        ]
      },
{
 title: 'POOMSAE - 품새 ',
        translation: 'Forma',
        tecnicas: [
           {
            id: 'taeguk-1',
            nome: 'Taeguk Il Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: '',
          },
          {
              id: 'taegeuk-2',
              nome: 'Taeguk I Jang',
              traducao: '',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
            },
          {
            id: 'taeguk san jang',
            nome: 'Taeguk San Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
           {
            id: 'taeguk sae jang',
            nome: 'Taeguk Sae Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
           {
            id: 'taeguk O Jang',
            nome: 'Taeguk O Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
           {
            id: 'taeguk yuk Jang',
            nome: 'Taeguk Yuk Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
          ]
        },
{
          title: 'Sebon Gyeorugi - 세본 겨루기 ',
          translation: 'Luta em Três Passos',
          description: '',
          tecnicas: [
            {
              id: 'I Boderion 1 a 8 direita e esquerda',
              nome: 'I Boderion 1 a 8 direita e esquerda ',
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
    id: 'faixa-vermelha',
    nome: 'FAIXA VERMELHA',
    grau: '2º GUB',
    background: 'assets/faixas/faixa-vermelha.png',
   introducao: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. <br>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.<br>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    sections: [
       {
        title: 'Kibon Dongjak - 기본동작 ',
        translation: 'Técnicas Fundamentais',
        description: '',
        tecnicas: [
{
            descricao: 'Apgubi',
            id: 'gawi-makgi ',
            nome: 'Gawi-makgi',
            traducao: 'Bloqueio Tesoura',
            videoId: 'video_id_exemplo',
            nota: '<i>Gawi-makgi</i>(가위막기): Scissors Block. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.41).</a> ',
              notaId: 1,
              audioFile: 'assets/audio/111 Apgubi-gawi-makgi.mp3'
          },
          {
            id: '(bakkatpalmnok) hecheo-makgi + mureup-ollyeo-chigi + dwi-kkoa-seogi + Du-jumeok-jeocheo-jireugi + apgubi+ (palmok) eotgeoreo-makgi ',
            nome: '(Bakkatpalmnok) Hecheo-makgi + Mureup-ollyeo-chigi + Dwi-kkoa-seogi + Du-jumeok-jeocheo-jireugi + Apgubi + (Palmok) eotgeoreo-makgi ',
            traducao: 'Bloqueio Espalhado c/ Pulso Externo + Golpe Ascendente c/ Joelho + Soco Duplo c/ Punho Inverso na Base Cruzada p/ Trás + Bloqueio em Cruz c/ Pulso na Base Frontal ',
            videoId: 'video_id_exemplo',
            nota: '<i>(Bakkat-palmok) hecheo-makgi</i> / (바깥팔목) 헤쳐막기 / (Outside Wrist) Scattered Block.<i> Mureup-ollyeo-chigi</i> / 무릎 올려치기 / Knee Upward Strike.<i> (Jumeok) jeocheo-jireugi</i> / (주먹) 젖혀지르기 / (Fist) Turn-over Punch. <i>(Palmok) eotgeoreo-makgi</i> / (팔목) 엇걸어막기 / (Wrist) Cross Block. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.50, 27, 35 e 49).</a>',
              notaId: 2,
               audioFile: 'assets/audio/112 (Bakkatpalmnok) hecheo-makgi + Mureup-ollyeo-chigi + Dwi-kkoa-seogi + Du-jumeok-jeocheo-jireugi + Apgubi + (Palmok) eotgeoreo-makgi.mp3'
                },
{
  descricao: 'Dwitgubi',
            id: 'dwitgubi-arae-sonnal-geodeureo-bakkat-makgi ',
            nome: 'Dwitgubi-arae-sonnal-geodeureo-bakkat-makgi ',
            traducao: 'Bloqueio Embaixo c/ Faca da Mão Assistida na Base Atrás',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwitgubi-arae-sonnal-geodeureo-bakkat-makgi</i> = Base Atrás-embaixo-Faca da Mão-assistido-externo-bloqueio',
              notaId: 3,
               audioFile: 'assets/audio/113 Dwitgubi-arae-sonnal-geodeureo-bakkat-makgi.mp3'
          },
          {
            descricao: 'Beom-seogi (Base do Tigre)',
            id: 'batangson-biteureo-an-makgi',
            nome: 'Batangson-biteureo-an-makgi',
            traducao: 'Bloqueio Interno Inverso c/ Palma da Mão',
            videoId: 'video_id_exemplo',
            nota: '<i>Beom-seogi</i> (범서기): Tiger Stance. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.61).</a>',
              notaId: 4,
               audioFile: 'assets/audio/114 Beom-seogi-batangson-biteureo-an-makgi.mp3'
          },
           {
            id: 'batangson-biteureo-geodeureo-an-makgi + deungjumeok-geodeureo-ap-chigi ',
            nome: 'Batangson-biteureo-geodeureo-an-makgi + Deungjumeok-geodeureo-ap-chigi ',
            traducao: 'Bloqueio Interno Assistido c/ Palma da Mão + Golpe Frontal Assistido c/ Dorso do Punho no Rosto',
            videoId: 'video_id_exemplo',
            nota: '<i>바탕손 안막기</i> / 바탕손 안막기 / Palm Heel Inward Block.<i> Deungjumeok-bakkat-chigi</i> / 등주먹 바깥치기 / Back Fist Outward Strike. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.44 e 23).</a>',
              notaId: 5,
               audioFile: 'assets/audio/116 Batangson-biteureo-geodeureo-an-makgi + Deungjumeok-geodeureo-ap-chigi.mp3'
          },
          {
            id: 'ap-chagi + batangson-an-makgi',
            nome: 'Ap-chagi + Batangson-an-makgi',
            traducao: 'Bloqueio p/ Dentro c/ Palma da Mão',
            videoId: 'video_id_exemplo',
            nota: '<i>Ap-chagi + Batangson-an-makgi</i> = Frente-chute + Tigre-base-bloqueio',
              notaId: 6,
               audioFile: 'assets/audio/117 Ap-chagi + Batangson-an-makgi.mp3'
          },
          {
            descricao: 'Ap-seogi',
            id: 'deungjumeok-bakkat-chigi + pyojeok-chagi + juchum-seogi + palgup-pyojeok-chigi',
            nome: 'Deungjumeok-bakkat-chigi + Pyojeok-chagi + Juchum-seogi + Palgup-pyojeok-chigi',
            traducao: 'Golpe Externo c/ Dorso do Punho + Chute ao Alvo + Golpe de Cotovelo ao Alvo na Base do Cavalo',
            videoId: 'video_id_exemplo',
            nota: '<i>Pyojeok-chagi</i> (표적차기): Target Kick. <i>Palgup-pyojeok-chigi </i> / 팔굽 표적치기 / Elbow Target Strike. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.27 e 28).</a>     ',
              notaId: 7,
               audioFile: 'assets/audio/118 Deungjumeok-bakkat-chigi + Pyojeok-chagi + Juchum-seogi + Palgup-pyojeok-chigi.mp3'
          },
        ]
      },
{
        title: 'Bal Kisul -발기술 ',
        translation: 'Técnicas de Chute',
        description: 'Gyorugi-jumbi',
        tecnicas: [
{
            descricao: 'Dwitbal',
            id: 'yeop-chagi + apbal-huryeo-chagi',
            nome: 'Yeop-chagi + Apbal-huryeo-chagi',
            traducao: 'Chute Lateral + Chute Chicote (sem tocar no solo)',
            videoId: 'video_id_exemplo',
            nota: '<i>Yeop-chagi + Apbal-huryeo-chagi</i> = Lado-chute + Perna afrente-chicote-chute.',
              notaId: 8,
               audioFile: 'assets/audio/119 Dwitbal-yeop-chagi + Apbal-huryeo-chagi.mp3'
          },
          {
            id: 'ap-chagi + dollyeo-chagi + yeop-chagi ',
            nome: 'Ap-chagi + Dollyeo-chagi + Yeop-chagi ',
            traducao: 'Chute Frontal + Chute Circular + Chute Lateral (sem tocar no solo) ',
            videoId: 'video_id_exemplo',
            nota: '<i>Ap-chagi + Dollyeo-chagi + Yeop-chagi </i> = Frente-chute + Circular-chute + Lateral-chute.',
              notaId: 9,
               audioFile: 'assets/audio/120 Ap-chagi + Dollyeo-chagi + Yeop-chagi.mp3'
          },
{   
            id: 'dwi-huryeo-chagi-jejari-dollyeo-chagi',
            nome: 'Dwi-huryeo-chagi-jejari-dollyeo-chagi',
            traducao: 'Chute Chicote Girado (Estático) Chute Circular',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwi-huryeo-chagi-jejari-dollyeo-chagi</i> = Atrás-chicote-chute-mesmo lugar-circular-chute.',
              notaId: 10,
               audioFile: 'assets/audio/121 Dwi-huryeo-chagi -jejari-dollyeo-chagi.mp3'
          },
{
            id: 'sebang-narae-chagi-jejari-dwi-huryeo-chagi',
            nome: 'Sebang-narae-chagi-jejari-dwi-huryeo-chagi',
            traducao: 'Chute Asa c/ Três Alvos (Estático) Chute Chicote Girado',
            videoId: 'video_id_exemplo',
            nota: '<i>Sebang-narae-chagi-jejari-dwi-huryeo-chagi</i> = Três-vezes-chute-mesmo lugar-atrás-chicote-chute.',
              notaId: 11,
               audioFile: 'assets/audio/122 Sebang-narae-chagi-jejari-dwi-huryeo-chagi.mp3'
          },
          {
            id: 'sebang-narae-chagi-jejari-dwi-chagi ',
            nome: 'Sebang-narae-chagi-jejari-dwi-chagi',
            traducao: 'Chute Asa Triplo (Estático) Chute Coice',
            videoId: 'video_id_exemplo',
            nota: '<i>Sebang-narae-chagi-jejari-dwi-chagi</i> = Três vezes-asa-chute-mesmo lugar-atrás-chute.',
              notaId: 12,
               audioFile: 'assets/audio/123 Sebang-narae-chagi-jejari-dwi-chagi.mp3'
          },
{
            id: 'dwitbal-bandal-chagi-jejari-dollyeo-chagi',
            nome: 'Dwitbal-bandal-chagi-jejari-dollyeo-chagi',
            traducao: 'Chute Semicircular c/ Perna Atrás (Estático) Chute Circular',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwitbal-bandal-chagi-jejari-dollyeo-chagi</i> = Perna atrás-lua crescente-chute-mesmo lugar-circular-chute.',
              notaId: 13,
               audioFile: 'assets/audio/124 Dwitbal-bandal-chagi + Jejari + Dollyeo-chagi.mp3'
          },
 {
            id: 'sebang-narae-jejari-(eolgul)-dolgae-chagi',
            nome: 'Sebang-narae-chagi-jejari-(eolgul)-dolgae-chagi',
            traducao: 'Chute Asa Triplo (Estático) Chute Tornado no Rosto',
            videoId: 'video_id_exemplo',
            nota: '<i>Sebang-narae-chagi-jejari-(eolgul)-dolgae-chagi</i> = Três vezes-asa-chute-mesmo lugar-(rosto)-tornado-chute. ',
              notaId: 14,
               audioFile: 'assets/audio/125 Sebang-narae-chagi-jejari-(eolgul)-dolgae-chagi.mp3'
          },
          {
            id: '(hadan) dwi-huryeo-chagi-jejari-dwi-huryeo-chagi',
            nome: '(Hadan) Dwi-huryeo-chagi-jejari-dwi-huryeo-chagi',
            traducao: 'Chute Chicote Girado Embaixo (Estático) Chute Chicote Girado',
            videoId: 'video_id_exemplo',
            nota: '<i>(Hadan) Dwi-huryeo-chagi-jejari-dwi-huryeo-chagi</i> = (Embaixo) Atrás-chicote-chute-mesmo lugar-atrás-chicote-chute.',
              notaId: 15,
               audioFile: 'assets/audio/108 (Hadan) Dwi-huryeo-chagi-jejari-dwi-huryeo-chagi.mp3'
          },
          {
            id: 'yeop-chagi-jejari-ttwieo-dwi-chagi',
            nome: 'Yeop-chagi-jejari-ttwieo-dwi-chagi',
            traducao: 'Chute Lateral (Estático) Chute Coice Saltado',
            videoId: 'video_id_exemplo',
            nota: '<i>Yeop-chagi-jejari-dwi-chagi</i> = Lado-chute-mesmo lugar-atrás-chute.',
              notaId: 16,
               audioFile: 'assets/audio/125.1 Yeop-chagi-jejari-ttwieo-dwi-chagi.mp3'
          },
           {
            id: 'Dollyeo-chagi-jejari-dwi-huryeo-chagi-jejari-dollyeo-chagi',
            nome: 'Dollyeo-chagi-jejari-dwi-huryeo-chagi-jejari-dollyeo-chagi',
            traducao: 'Chute Circular (Estático) Chute Chicote Girado (Estático) Chute Circular',
            videoId: 'video_id_exemplo',
            nota: '<i>Dollyeo-chagi-jejari-dwi-huryeo-chagi-jejari-dollyeo-chagi</i> = Circular-chute-mesmo lugar-atrás-chute-mesmo luigar-atrás-chicote-chute.',
              notaId: 17,
               audioFile: 'assets/audio/126 Dollyeo-chagi-jejari-dwi-huryeo-chagi-jejari-dollyeo-chagi.mp3'
          },
           {descricao: 'Apbal',
            id: 'yeop-chagi + ttwieo-dwi-chagi',
            nome: 'Yeop-chagi + Ttwieo-dwi-chagi',
            traducao: 'Chute Lateral + Chute Coice Saltado (escorado)',
            videoId: 'video_id_exemplo',
            nota: '<i>Yeop-chagi + Ttwieo-dwi-chagi</i> = Lado-chute = Salto-atrás-chute.',
              notaId: 18,
               audioFile: 'assets/audio/127 Apbal-yeop-chagi + Ttwieo-dwi-chagi.mp3'
          },
        ]
      },
{
 title: 'POOMSAE - 품새 ',
        translation: 'Forma',
        tecnicas: [
           {
            id: 'taeguk-1',
            nome: 'Taeguk Il Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: '',
          },
          {
              id: 'taegeuk-2',
              nome: 'Taeguk I Jang',
              traducao: '',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
            },
          {
            id: 'taeguk-3',
            nome: 'Taeguk San Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
           {
            id: 'taeguk-4',
            nome: 'Taeguk Sae Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
           {
            id: 'taeguk-5',
            nome: 'Taeguk O Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
           {
            id: 'taeguk-6',
            nome: 'Taeguk Yuk Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
          {
            id: 'taeguk-7',
            nome: 'Taeguk Til Jang ',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
          ]
        },
{
          title: 'Sebon Gyeorugi - 세본 겨루기 ',
          translation: 'Luta em Três Passos',
          description: '',
          tecnicas: [
            {
              id: '',
              nome: '',
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
    id: 'faixa-vinho',
    nome: 'FAIXA VINHO',
    grau: '2º GUB',
    background: 'assets/faixas/faixa-vinho.png',
   introducao: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. <br>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.<br>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    sections: [
       {
        title: 'Kibon Dongjak - 기본동작 ',
        translation: 'Técnicas Fundamentais',
        description: '',
        tecnicas: [
{
            
            id: 'dwitgubi-bakkatpalmok-geodeureo-bakkat-makgi ',
            nome: 'Dwitgubi-bakkatpalmok-geodeureo-bakkat-makgi',
            traducao: 'Defesa p/ Fora Assistida na Base Atrás + Soco Inverso no Tronco na Base Frontal',
            videoId: 'video_id_exemplo',
            nota: '<i>(Bakkatpalmok) geodeureo-bakkat-makgi</i> / (바깥팔목) 거들어 바깥막기 / (Outside Wrist) Supporting Outward Block. (Kukkiwon, p.45). <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.45).</a> ',
              notaId: 1,
              audioFile: 'assets/audio/128 Dwitgubi (Bakkatpalmok) geodeureo-bakkat-makgi.mp3'
          },
          {
            
            id: 'apgubi-(Palmok) oe-santeul-makgi',
            nome: 'Apgubi-(Palmok) oe-santeul-makgi',
            traducao: 'Bloqueio Montanha Única c/ Pulso na Base Frontal',
            videoId: 'video_id_exemplo',
            nota: '<i>(Palmok) oe-santeul-makgi</i> / (팔목) 외산틀막기 / (Wrist) Single Mountain Block. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.51).</a>',
              notaId: 2,
              audioFile: 'assets/audio/129 Apgubi-(Palmok) oe-santeul-makgi.mp3'
          },
{
            id: 'apgubi-danggyeo-jireugi',
            nome: 'Apgubi-danggyeo-jireugi',
            traducao: 'Soco c/ Puxada na Base Frontal',
            videoId: 'video_id_exemplo',
            nota: '<i>danggyeo-jireugi</i> (당겨지르기): Pulling and Punching. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.33).</a>',
              notaId:3,
              audioFile: 'assets/audio/129.1 Apgubi-danggyeo-jireugi.mp3'
          },
           {
            id: 'dwitgubi-sonnal-geodeureo-bakkat-makgi + apgubi-momtong-biteureo-jireugi',
            nome: 'Dwitgubi-sonnal-geodeureo-bakkat-makgi + Apgubi-momtong-biteureo-jireugi',
            traducao: 'Defesa p/ Fora c/ Mão em Faca Assistida na Base Atrás + Soco Inverso no Tronco ',
            videoId: 'video_id_exemplo',
            nota: '<i>Sonnal-geodeureo-bakkat-makgi</i>/ 손날 거들어 바깥막기 / Knife Hand Supporting Outward Block. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.45).</a>',
              notaId: 4,
              audioFile: 'assets/audio/129.2 Dwitgubi-sonnal-geodeureo-bakkat-makgi + Apgubi-momtong-biteureo-jireugi.mp3'
          },
           {
            id: 'Dwitbal-ap-chagi + Beon-seogi-batangson-an-makgi',
            nome: 'Dwitbal-ap-chagi + Beon-seogi-batangson-an-makgi',
            traducao: 'Bloqueio p/ Dentro c/ a Palma da Mão Assistida na Base do Tigre + Golpe Frontal c/ Dorso do Punho Assistido no Rosto',
            videoId: 'video_id_exemplo',
            nota: '<i>Batangson-an-makgi</i> / 바탕손 안막기 / Palm Heel Inward Block.<i> Deungjumeok-bakkat-chigi</i> / 등주먹 바깥치기 / Back Fist Outward Strike. <a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.44 e 23).</a>',
              notaId: 5,
              audioFile: 'assets/audio/130 Dwitbal-ap-chagi + Beom-seogi-batangson-an-makgi.mp3'
          },
           {
            id: 'beon-seogi-sonnal-geodeureo-bakkat-makgi + apbal-ap-chagi + apgubi-biteureo-jireugi-jejari-beon-seogi-batangson-an-makgi',
            nome: 'Beon-seogi-sonnal-geodeureo-bakkat-makgi + Apbal-ap-chagi + Apgubi-biteureo-jireugi-jejari-beon-seogi-batangson-an-makgi',
            traducao: 'Bloqueio p/ Dentro c/ Mão em Faca Assistida na Base do Tigre + Chute Frontal c/ Perna Arás + Soco Inverso (Estático) Bloqueio p/ Dentro c/ Palma da Mão na Base do Tigre',
            videoId: 'video_id_exemplo',
            nota: '<i>Beon-seogi-sonnal-geodeureo-bakkat-makgi + Apbal-ap-chagi + Apgub-biteureo-jireugi-jejari-beon-seogi-batangson-an-makgi</i> = Tigre-base-mão em faca-assistida-externa-defesa + Perna afrente-frente-chute + Base frontal-invero-soco-mesmo lugar-tigre-base-palma da mão-interna-defesa. ',
              notaId: 6,
              audioFile: 'assets/audio/131 Beon-seogi-sonnal-geodeureo-bakkat-makgi + Apbal-ap-chagi + Apgubi-biteureo-jireugi-jejari-beon-seogi-batangson-an-makgi.mp3'
          },
          {
            id: 'Dwitgubi-arae-geodeureo-makgi ',
            nome: 'Dwitgubi-arae-geodeureo-makgi ',
            traducao: 'Defesa Assistida Embaixo na Base de Trás',
            videoId: 'video_id_exemplo',
            nota: '<i>Geodeureo-makgi</i> = (거들어막기): Supporting Block.<a href="https://wientaekwondo.com/wp-content/uploads/2022/07/Technical_Terminology_ENG.pdf" target="_blank">(Kukkiwon, p.48).</a> ',
              notaId: 7,
              audioFile: 'assets/audio/132 Dwitgubi-arae-geodeureo-makgi.mp3'
          },
          {
            id: 'dwitbal-ap-chagi + ttwieo-ap-chagi + apgubi-momtong-makgi + momtong-du-jireugi',
            nome: 'Dwitbal-ap-chagi + Ttwieo-ap-chagi + Apgubi-momtong-makgi + Momtong-du-jireugi',
            traducao: 'Chute Frontal c/ Perna de Trás + Chute Frontal Saltado + Defesa no Tronco na Base Frontal + Soco Duplo',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwitbal-ap-chagi + Ttwieo-ap-chagi + Apgubi-momtong-makgi + Momtong-du-jireugi</i> = Perna atrás-frente-chute + Salto-frente-chute + Base frontal-tronco-bloqueio + Duplo-soco.',
              notaId: 8,
              audioFile: 'assets/audio/133 Dwitbal-ap-chagi + Ttwieo-ap-chagi + Apgubi-momtong-makgi + Momtong-du-jireugi.mp3'
          },
          {
            id: 'apgubi-palgup-dollyeo-chigi + deungjumeok-ap-chigi + biteureo-jireugi',
            nome: 'Apgubi-palgup-dollyeo-chigi + Deungjumeok-ap-chigi + Biteureo-jireugi',
            traducao: 'Golpe de Cotovelo Circular + Golpe Frontal c/ Dorso do Punho + Soco Inverso',
            videoId: 'video_id_exemplo',
            nota: '<i>Apgubi-palgup-dollyeo-chigi + Deungjumeok-ap-chigi + Biteureo-jireugi</i> = Perna atrás-frente-chute + Salto-frente-chute + Base frontal-tronco-bloqueio + Duplo-soco.',
              notaId: 9,
              audioFile: 'assets/audio/134 Apgubi-palgup-dollyeo-chigi + Deungjumeok-ap-chigi + Biteureo-jireugi.mp3'
          },
        ]
      },
{
        title: 'Bal Kisul -발기술 ',
        translation: 'Técnicas de Chute',
        description: "Gyorugi-jumbi",
        tecnicas: [
{
            descricao: 'Dwitbal',
            id: 'dubang-ap-chagi ',
            nome: 'Dubang-ap-chagi ',
            traducao: 'Chute Frontal em Dois Alvos ',
            videoId: 'video_id_exemplo',
            nota: '<i>Dubang-ap-chagi</i> = Dois alvos-frente-chute.',
              notaId: 10,
              audioFile: 'assets/audio/77 Dwitbal-dubang-ap-chagi.mp3'
          },
          {
            id: 'dubang-yeop-chagi',
            nome: 'Dubang-yeop-chagi',
            traducao: 'Chute Lateral em Dois Alvos',
            videoId: 'video_id_exemplo',
            nota: '<i>Dubang-yeop-chagi</i> = Dois alvos-lado-chute.',
              notaId: 11,
              audioFile: 'assets/audio/79 Dwitbal-dubang-yeop-chagi.mp3'
          },
{   
            id: 'dubang-dollyeo-chagi ',
            nome: 'Dubang-dollyeo-chagi ',
            traducao: 'Chute Chicote Girado (Estático) Chute Circular',
            videoId: 'video_id_exemplo',
            nota: '<i>Dubang-dollyeo-chagi </i> = Dois alvos-circular-chute.',
              notaId: 12,
              audioFile: 'assets/audio/135 Dubang-dollyeo-chagi.mp3'
          },
{
            id: 'apchuk-dollyeo-chagi',
            nome: 'Apchuk-dollyeo-chagi',
            traducao: 'Chute Asa c/ Três Alvos (Estático) Chute Chicote Girado',
            videoId: 'video_id_exemplo',
            nota: '<i>Apchuk-dollyeo-chagi</i>',
              notaId: 13,
              audioFile: 'assets/audio/135.1 Apchuk-dollyeo-chagi.mp3'
          },
          {
            id: 'bandal-chagi + mireo-chagi + dollyeo-chagi ',
            nome: 'Bandal-chagi + Mireo-chagi + Dollyeo-chagi ',
            traducao: 'Chute Semicircular + Chute Empurrão + Chute Circular ',
            videoId: 'video_id_exemplo',
            nota: '<i>Bandal-chagi + Mireo-chagi + Dollyeo-chagi</i> = Lua crescente-chute + Empurrar-chute + Circular-chute.',
              notaId: 14,
              audioFile: 'assets/audio/136 Bandal-chagi + Mireo-chagi + Dollyeo-chagi.mp3'
          },
          
{
            id: 'an-chagi-jejari-bakkat-chagi-jejari-huryeo-chagi-jejari-dollyeo-chagi',
            nome: 'An-chagi-jejari-bakkat-chagi-jejari-huryeo-chagi-jejari-dollyeo-chagi ',
            traducao: 'Chute Semicircular c/ Perna Atrás (Estático) Chute Circular.',
            videoId: 'video_id_exemplo',
            nota: '<i>An-chagi-jejari-bakkat-chagi-jejari-huryeo-chagi-jejari-dollyeo-chagi</i> = Dentro-chute-mesma posição-fora-chute-mesma posição-chicote chute-mesma posição-circular chute.',
              notaId: 15,
              audioFile: 'assets/audio/137 An-chagi-jejari-bakkat-chagi-jejari-huryeo-chagi-jejari-dollyeo-chagi.mp3'
          },
 {
            id: 'ap-chagi + ttwieo-mireo-ap-chagi',
            nome: 'Ap-chagi + Ttwieo-mireo-ap-chagi',
            traducao: 'Chute Asa Triplo (Estático) Chute Tornado no Rosto',
            videoId: 'video_id_exemplo',
            nota: '<i> Ap-chagi + Ttwieo-mireo-ap-chagi</i> = Frente-chute + Salto-empurrar-frente-chute.',
              notaId: 16,
              audioFile: 'assets/audio/138 Ap-chagi + Ttwieo-mireo-ap-chagi.mp3'
          },
          {
            id: 'dwitbal-ap-chagi + dollyeo-chagi + yeop-chagi',
            nome: 'Dwitbal-ap-chagi + Dollyeo-chagi + Yeop-chagi (Sem tocar o pé no solo)',
            traducao: 'Chute Frontal c/ Perna de Trás + Chute Circular + Chute Lateral ',
            videoId: 'video_id_exemplo',
            nota: '<i>Dwitbal-ap-chagi + Dollyeo-chagi + Yeop-chagi</i> = Perna atrás-frente-chute + circular-chute + Lado-chute.',
              notaId: 17,
              audioFile: 'assets/audio/140 Dwitbal-ap-chagi + Dollyeo-chagi + Yeop-chagi.mp3'
          },
          {
            descricao: 'Apbal',
            id: 'ttwieo-apbal-huryeo-chagi-jejari-yeop-chagi ',
            nome: 'Ttwieo-apbal-huryeo-chagi-jejari-yeop-chagi ',
            traducao: 'Chute Lateral (Estático) Chute Coice Saltado',
            videoId: 'video_id_exemplo',
            nota: '<i>Ttwieo-huryeo-chagi-jejari-yeop-chagi </i> = Salto-chicote-chute-mesma posição-lado-chute.',
              notaId: 18,
              audioFile: 'assets/audio/140.1 Ttwieo-huryeo-chagi-jejari-yeop-chagi.mp3'
          },
           {
            id: 'ttwieo-naeryo-chagi + ttwieo-dwi-chagi ',
            nome: 'Ttwieo-naeryo-chagi + Ttwieo-dwi-chagi ',
            traducao: 'Chute Circular (Estático) Chute Chicote Girado (Estático) Chute Circular',
            videoId: 'video_id_exemplo',
            nota: '<i> Ttwieo-naeryo-chagi + Ttwieo-dwi-chagi </i> = Salto-descendente-chute + Salto-atrás-chute.',
              notaId: 19,
              audioFile: 'assets/audio/141 Ttwieo-naeryo-chagi + Ttwieo-dwi-chagi.mp3'
          },
           {
            id: 'técnicas de chutes livre em 1 minuto',
            nome: 'Técnicas de chutes livre em 1 minuto',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: '<i></i> = ',
             
          },
        ]
      },
{
 title: 'POOMSAE - 품새 ',
        translation: 'Forma',
        tecnicas: [
           {
            id: 'taeguk-1',
            nome: 'Taeguk Il Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: '',
          },
          {
              id: 'taegeuk-2',
              nome: 'Taeguk I Jang',
              traducao: '',
              videoId: 'dQw4w9WgXcQ', // mesmo do seu HTML simplificado
            },
          {
            id: 'taeguk-3',
            nome: 'Taeguk San Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
           {
            id: 'taeguk-4',
            nome: 'Taeguk Sae Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
           {
            id: 'taeguk-5',
            nome: 'Taeguk O Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
           {
            id: 'taeguk-6',
            nome: 'Taeguk Yuk Jang',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
          {
            id: 'taeguk-7',
            nome: 'Taeguk Til Jang ',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
           {
            id: 'taeguk-8',
            nome: 'Taeguk Pal Jang ',
            traducao: '',
            videoId: 'video_id_exemplo',
            nota: ''
          },
          ]
        },
{
          title: 'Sebon Gyeorugi - 세본 겨루기 ',
          translation: 'Luta em Três Passos',
          description: '',
          tecnicas: [
            {
              id: '',
              nome: '',
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