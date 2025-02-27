import { MercyPrayer } from './mercyPrayers';

export interface Prayer {
  id: string;
  title: string;
  content: string;
  views: number;
  pray_count: number;
  created_at: string;
  updated_at: string;
}

export interface PrayerStats {
  total_views: number;
  total_prayers: number;
  most_viewed: Prayer[];
  most_prayed: Prayer[];
}

export interface AngelusPrayer {
  verse?: string;
  response?: string;
  prayer?: string;
}

export interface GloryPrayer {
  prayer: string;
  repeat: number;
}

export const angelusPrayers: AngelusPrayer[] = [
  {
    verse: "O Anjo do Senhor anunciou a Maria",
    response: "E ela concebeu do Espírito Santo",
    prayer: "Ave Maria..."
  },
  {
    verse: "Eis aqui a serva do Senhor",
    response: "Faça-se em mim segundo a vossa palavra",
    prayer: "Ave Maria..."
  },
  {
    verse: "E o Verbo se fez carne",
    response: "E habitou entre nós",
    prayer: "Ave Maria..."
  }
];

export const angelusFinalPrayer = `Rogai por nós, Santa Mãe de Deus. Para que sejamos dignos das promessas de Cristo. Oremos: Infundi, Senhor, nós Vos pedimos, a vossa graça em nossas almas, para que nós, que pela anunciação do Anjo conhecemos a encarnação de Jesus Cristo, vosso Filho, pela sua paixão e morte na cruz alcancemos a glória da ressurreição. Pelo mesmo Cristo, Senhor nosso. Amém.

Glória ao Pai e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém. (3x)`;

export const reginaCoeli: AngelusPrayer[] = [
  {
    verse: "Rainha do céu, alegrai-vos, aleluia",
    response: "Porque Aquele que merecestes trazer em vosso seio, aleluia"
  },
  {
    verse: "Ressuscitou como disse, aleluia",
    response: "Rogai a Deus por nós, aleluia"
  }
];

export const reginaCoeliPrayer = "Alegrai-vos e exultai, ó Virgem Maria, aleluia! Porque o Senhor ressuscitou verdadeiramente, aleluia!";

export const gloryPrayer: GloryPrayer = {
  prayer: "Glória ao Pai e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.",
  repeat: 3
};

export const consagracaoPrayer = {
  title: "Consagração a Nossa Senhora",
  prayer: `Ó Senhora minha, ó minha Mãe, eu me ofereço todo(a) a vós, e em prova de minha devoção para convosco, eu vos consagro neste dia meus olhos, meus ouvidos, minha boca, meu coração e inteiramente todo o meu ser. E porque assim sou vosso(a), ó incomparável Mãe, guardai-me e defendei-me como coisa e propriedade vossa. Amém.`
};

export const tenCommandments = {
  title: "Os Dez Mandamentos",
  commandments: [
    {
      number: 1,
      commandment: "Amar a Deus sobre todas as coisas",
      explanation: "Não ter outros deuses, não fazer imagens para adoração"
    },
    {
      number: 2,
      commandment: "Não tomar Seu santo nome em vão",
      explanation: "Não usar o nome de Deus de maneira desrespeitosa"
    },
    {
      number: 3,
      commandment: "Guardar domingos e festas",
      explanation: "Santificar o dia do Senhor"
    },
    {
      number: 4,
      commandment: "Honrar pai e mãe",
      explanation: "Respeitar e cuidar dos pais"
    },
    {
      number: 5,
      commandment: "Não matar",
      explanation: "Respeitar a vida humana"
    },
    {
      number: 6,
      commandment: "Não pecar contra a castidade",
      explanation: "Manter a pureza do corpo e da mente"
    },
    {
      number: 7,
      commandment: "Não furtar",
      explanation: "Respeitar a propriedade alheia"
    },
    {
      number: 8,
      commandment: "Não levantar falso testemunho",
      explanation: "Falar sempre a verdade"
    },
    {
      number: 9,
      commandment: "Não desejar a mulher do próximo",
      explanation: "Manter a pureza dos pensamentos"
    },
    {
      number: 10,
      commandment: "Não cobiçar as coisas alheias",
      explanation: "Ser satisfeito com o que tem"
    }
  ]
};

export const whenToConfess = {
  title: "Quando devo me confessar?",
  sections: [
    {
      title: "Confissão por Pecado Mortal",
      content: "Se você cometeu um pecado mortal, deve se confessar o mais rápido possível. Um pecado é mortal quando: 1) É grave; 2) Você sabe que é grave; 3) Você o comete com pleno consentimento.",
      source: "Catecismo da Igreja Católica, 1857"
    },
    {
      title: "Confissão Regular",
      content: "A Igreja recomenda que os fiéis se confessem ao menos uma vez por ano, preferencialmente durante a Quaresma. No entanto, é aconselhável confessar-se com mais frequência para crescimento espiritual.",
      source: "Código de Direito Canônico, 989"
    },
    {
      title: "Antes da Comunhão",
      content: "Se você está consciente de ter cometido um pecado mortal, deve se confessar antes de receber a Sagrada Comunhão.",
      source: "Catecismo da Igreja Católica, 1385"
    }
  ]
};

export const saoMiguelPrayer = {
  portuguese: {
    title: "ORAÇÃO A SÃO MIGUEL ARCANJO",
    subtitle: "Composta pelo Papa Leão XIII no dia 13 de outubro de 1884",
    prayer: `São Miguel Arcanjo, defendei-nos no combate,
sede nosso refúgio contra a maldade e as ciladas do demônio!
Ordene-lhe Deus, instantemente o pedimos,
e vós príncipe da milícia celeste, pelo Divino Poder,
precipitai no inferno a Satanás e a todos os espíritos malignos,
que andam pelo mundo para perder as almas.
Amém.`
  },
  latin: {
    title: "ORATIO AD SANCTUM MICHAELEM",
    prayer: `Sancte Michael Archangele, defende nos in proelio,
contra nequitiam et insidias diaboli esto praesidium.
Imperet illi Deus, supplices deprecamur:
tuque, Princeps militiae caelestis,
Satanam aliosque spiritus malignos,
qui ad perditionem animarum pervagantur in mundo,
divina virtute, in infernum detrude.
Amen.`
  }
};

export const atoContricao = {
  title: "ATO DE CONTRIÇÃO",
  subtitle: "(cf. Ritual da Penitência, Rito Romano)",
  prayers: [
    {
      prayer: `Senhor, eu me arrependo sinceramente
de todo o mal que pratiquei
e do bem que deixei de fazer.
Pecando, eu vos ofendi, meu Deus, sumo bem,
digno de ser amado sobre todas as coisas.
Proponho firmemente, ajudado por vossa graça,
fazer penitência, não mais pecar
e fugir às ocasiões do pecado.
Senhor, tende piedade de mim,
pelos méritos da paixão
de nosso Salvador, Jesus Cristo.
Amém.`
    },
    {
      rubric: "(Sl 24(25), 6-7)",
      prayer: `Recordai, Senhor meu Deus, vossa ternura
e a vossa compaixão que são eternas!
Não recordeis os meus pecados quando jovem,
nem vos lembreis de minhas faltas e delitos!
De mim lembrai-vos porque sois misericórdia
e sois bondade sem limites, ó Senhor! 
Amém.`
    },
    {
      rubric: "(Sl 50 (51), 4-5)",
      prayer: `Lavai-me todo inteiro do pecado,
e apagai completamente a minha culpa!
Eu reconheço toda a minha iniquidade,
o meu pecado está sempre à minha frente.
Amém.`
    },
    {
      rubric: "(cf. Lc 15,18; 18,13)",
      prayer: `Pai, pequei contra ti;
Já não mereço ser chamado teu filho.
Tende piedade de mim, que sou pecador!
Amém.`
    },
    {
      prayer: `Deus, Pai de misericórdia,
como filho(a) arrependido(a) regresso para dizer-vos:
"Pequei contra vós;
Já não sou digno de ser chamado voss(o) filh(o)".
Cristo Jesus, Salvador do mundo,
eu vos peço como o ladrão arrependido,
"Lembrai-vos de mim, Senhor,
quando estiverdes no vosso Reino".
Espírito Santo, fonte de amor,
cheio de confiança vos suplico:
Purificai o meu coração
e concedei-me viver como filho da luz".
Amém.`
    },
    {
      prayer: `Senhor Jesus,
que abristes os olhos dos cegos e curastes os enfermos,
que perdoastes a pecadora,
e confirmastes Pedro em vosso amor, após o seu pecado,
atendei à minha súplica:
perdoai todos os meus pecados,
renovai em mim o vosso amor,
e concedei-me viver em caridade fraterna
para que possa anunciar a todos a vossa salvação.
Amém.`
    },
    {
      prayer: `Senhor Jesus,
que quisestes ser chamado o amigo dos pecadores,
livrai-me dos meus pecados
pelo mistério de vossa morte e ressurreição.
Que a vossa paz permaneça em mim,
para que eu possa produzir frutos
de caridade, justiça e verdade.
Amém.`
    },
    {
      prayer: `Senhor Jesus Cristo,
Cordeiro de Deus que tirais o pecado do mundo,
dignai-vos reconciliar-nos com vosso Pai,
pela graça do Espírito Santo;
purificai-me em, vosso sangue, de todo o pecado,
e fazei-me renascer para uma vida nova,
a fim de proclamar a vossa glória.
Amém.`
    },
    {
      prayer: `Meu Deus, tende misericórdia de mim
na vossa bondade;
desviai a vossa face dos meus pecados;
apagai a minha iniquidade,
criai em mim um coração que seja puro,
e dai-me um espírito reto.
Amém.`
    },
    {
      prayer: `Senhor Jesus, filho de Deus,
tende piedade de mim, que sou um(a) pecador(a).
Amém.`
    }
  ]
};
