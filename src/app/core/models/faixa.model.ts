// Interface Faixa atualizada
export interface Faixa 
{
  id: string;
  nome: string;
  grau: string;
background: string;
  introducao?: string; // NOVA propriedade para introdução específica
sections: FaixaSection[]; // Propriedade 'sections' adicionada
referencias: string[];
 imageClass?: string;
audioFile?: string;
}


// Interface para as seções de técnicas
export interface FaixaSection {
  title: string;
  translation: string;
  description?: string;
  tecnicas: Tecnica[];
  isSpecialSection?: boolean; // NOVA propriedade para identificar seções especiais
}

export interface Tecnica {
  descricao?: string; // ex: 'Apgubi'
  id: string; // ex: 'jut-chun'
  nome: string; // ex: 'Jutchun Jireugi'
  traducao: string; // ex: 'Soco na Base do Cavalo'
  videoId?: string; // YouTube ID se houver vídeo
  textoId?: string; // Texto vinculado (id em Faixa.textos)
  nota?: string; // Nota de rodapé
  notaId?: number; // NOVO: adicionado para a numeração
  audioFile?: string;
}

// Interface para textos teóricos
export interface TextoTeorico {
  id: string;
  titulo: string;
  conteudo: string;
}

export interface SecoesEspeciais
        {
          id: 'notas-rodape',
          title: 'Notas',
                    content: string;
        }

        export interface Referencias
        {
          id: 'referencias',
          title: 'Referências',
                  content: string;
        }