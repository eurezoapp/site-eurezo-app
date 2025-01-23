export interface MercyPrayer {
  title: string;
  description: string;
  repeat?: number;
}

interface MercyPrayerStructure {
  initial: MercyPrayer[];
  main: {
    fatherPrayer: MercyPrayer;
    decadePrayer: MercyPrayer;
  };
  final: MercyPrayer[];
}

export const mercyPrayers: MercyPrayerStructure = {
  initial: [
    {
      title: "Pai-Nosso",
      description: "01 Pai-Nosso…"
    },
    {
      title: "Ave-Maria",
      description: "01 Ave-Maria…"
    },
    {
      title: "Creio",
      description: "01 Creio…"
    }
  ],
  main: {
    fatherPrayer: {
      title: "Nas contas do Pai-Nosso, reza-se:",
      description: "Eterno Pai, eu Vos ofereço o Corpo e Sangue, Alma e Divindade de Vosso diletíssimo Filho, Nosso Senhor Jesus Cristo, em expiação dos nossos pecados e dos do mundo inteiro."
    },
    decadePrayer: {
      title: "Nas contas das Ave-Marias, reza-se:",
      description: "Pela Sua dolorosa Paixão, tende misericórdia de nós e do mundo inteiro.",
      repeat: 10
    }
  },
  final: [
    {
      title: "Ao final do terço, reza-se:",
      description: "Deus Santo, Deus Forte, Deus Imortal, tende piedade de nós e do mundo inteiro.",
      repeat: 3
    },
    {
      title: "Final",
      description: "Estamos e permaneceremos reunidos: Em nome do Pai e do Filho e do Espírito Santo, Amém!"
    }
  ]
};