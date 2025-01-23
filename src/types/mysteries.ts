export interface Mystery {
  title: string;
  mysteries: {
    number: number;
    description: string;
  }[];
}

export interface MysteryGroup {
  name: string;
  days: string[];
  mysteries: Mystery;
}

export const mysteryGroups: MysteryGroup[] = [
  {
    name: 'Mistérios Gozosos',
    days: ['Segunda-feira', 'Sábado'],
    mysteries: {
      title: 'Mistérios Gozosos',
      mysteries: [
        { number: 1, description: 'A encarnação do Filho de Deus.' },
        { number: 2, description: 'A visitação de Nossa Senhora a Santa Isabel.' },
        { number: 3, description: 'O nascimento do Filho de Deus.' },
        { number: 4, description: 'A Apresentação do Senhor Jesus no templo.' },
        { number: 5, description: 'A Perda do Menino Jesus e o encontro no templo.' }
      ]
    }
  },
  {
    name: 'Mistérios Dolorosos',
    days: ['Terça-feira', 'Sexta-feira'],
    mysteries: {
      title: 'Mistérios Dolorosos',
      mysteries: [
        { number: 1, description: 'A Oração de Nosso Senhor no Horto da Oliveiras.' },
        { number: 2, description: 'A Flagelação do Senhor.' },
        { number: 3, description: 'A Coroação de espinhos.' },
        { number: 4, description: 'O Caminho do Calvário carregando a Cruz.' },
        { number: 5, description: 'A Crucificação e Morte de Nosso Senhor.' }
      ]
    }
  },
  {
    name: 'Mistérios Gloriosos',
    days: ['Quarta-feira', 'Domingo'],
    mysteries: {
      title: 'Mistérios Gloriosos',
      mysteries: [
        { number: 1, description: 'A Ressurreição do Senhor.' },
        { number: 2, description: 'A Ascensão do Senhor.' },
        { number: 3, description: 'A Vinda do Espírito Santo.' },
        { number: 4, description: 'A Assunção de Nossa Senhora aos Céus.' },
        { number: 5, description: 'A Coroação da Santíssima Virgem.' }
      ]
    }
  },
  {
    name: 'Mistérios Luminosos',
    days: ['Quinta-feira'],
    mysteries: {
      title: 'Mistérios Luminosos',
      mysteries: [
        { number: 1, description: 'O Batismo no Jordão.' },
        { number: 2, description: 'A auto-revelação nas bodas de Caná.' },
        { number: 3, description: 'O anúncio do Reino de Deus convidando à conversão.' },
        { number: 4, description: 'A Transfiguração.' },
        { number: 5, description: 'A Instituição da Eucaristia, expressão sacramental do mistério pascal.' }
      ]
    }
  }
];