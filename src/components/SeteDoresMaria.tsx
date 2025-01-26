import React from 'react';

interface SeteDoresMariaProps {
  fontSize: number;
}

export const SeteDoresMaria: React.FC<SeteDoresMariaProps> = ({ fontSize }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6" style={{ fontSize: `${fontSize}px` }}>
      <h1 className="text-2xl font-bold text-center mb-6">AS 7 DORES DE MARIA</h1>
      
      <h2 className="text-xl font-bold text-center mb-4">Meditações e orações de Santo Afonso</h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-bold mb-3">Preparação</h3>
          <p className="mb-4">
            Virgem dolorosíssima, seríamos ingratos se não nos esforçássemos para promover a memória e o culto de Vossas Dores e Lágrimas, particulares graças para uma sincera penitência, oportunos auxílios e socorros em todas as necessidades e perigos. Alcançai-nos Senhora, de Vosso Divino Filho, pelos méritos de Vossas Dores e Lágrimas, a graça...
          </p>
          <p className="mb-4">
            Virgem sem mácula, Mãe de piedade, cheia de aflição e de amargura; com toda a humildade de meu coração eu vos suplico que ilustreis o meu entendimento e acendais minha vontade, para que com espírito fervoroso e compassivo contemple as dores que se propõem nesta Santa Coroa, e possa conseguir as graças e favores prometidos, aos que se ocupam neste santo exercício. Amém.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">1ª Dor: <em>A profecia de Simeão (Lc 2, 34-35)</em></h3>
          <p className="mb-3">
            Compadeço-me de Vós, Senhora, pela dor que padecestes com a profecia de Simeão, quando vos disse que Vosso coração seria o alvo da paixão de vossas dores. Fazei, Mãe, que eu seja conforme à vontade de Deus.
          </p>
          <p className="italic text-center mb-3">Ave-Maria</p>
          <p className="mb-4">
            Ó, minha bendita Mãe, não só uma espada, porém tantas quantas foram os meus pecados, tenho eu acrescentado ao vosso coração. Não a vós, que sois inocente, minha Senhora, mas a mim, réu de tantos delitos, são devidas as penas. Já que, contudo, quisestes sofrer tanto por meu amor, impetrai-me pelos vossos merecimentos uma grande dor de minhas culpas, e a paciência necessária para sofrer os trabalhos desta vida. Por maiores que sejam, sempre serão leves em comparação dos castigos que tenho merecido, e de meus pecados, que me têm tornado tantas vezes digno do inferno. Amém.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">2ª Dor: <em>A fuga para o Egito (Mt 2, 13-21)</em></h3>
          <p className="mb-3">
            Compadeço-me, Senhora, de Vós, pela dor que padecestes no desterro ao Egito, pobre e necessitada naquela longa viagem. Fazei, Mãe, que eu seja livre das perseguições de meus inimigos.
          </p>
          <p className="italic text-center mb-3">Ave-Maria</p>
          <p className="mb-4">
            Ó, Maria, nem depois de vosso Filho ter sido imolado pelos homens, que o perseguiram até à morte, cessaram esses ingratos de persegui-lo com seus pecados, e de afligir-vos, ó, Mãe dolorosa? E eu mesmo, ó, meu Deus, não tenho sido um desses ingratos? Ah! minha Mãe dulcíssima, impetrai-me lágrimas para chorar tanta ingratidão. E pelas muitas penas que sofrestes na viagem para o Egito, assisti-me com vosso auxílio na viagem que estou fazendo para a eternidade, a fim de que possa um dia ir amar convosco meu Salvador perseguido, na pátria dos bem-aventurados. Amém.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">3ª Dor: <em>Jesus perdido no Templo (Lc 2, 41-51)</em></h3>
          <p className="mb-3">
            Compadeço-me de Vós, Senhora, pela dor que padecestes, com a perda de vosso Filho em Jerusalém por três dias. Concedei-me lágrimas de verdadeira dor para chorar minhas culpas, pelas vezes que perdi a meu Deus, e que o ache para sempre.
          </p>
          <p className="italic text-center mb-3">Ave-Maria</p>
          <p className="mb-4">
            Ó, Virgem bendita, por que assim vos afligis, buscando o vosso Filho, como se não soubésseis onde ele está? Não vos recordais que está em vosso coração? Não sabeis que ele se compraz entre os lírios? Vós mesma o dissestes: "O meu amado é para mim e eu sou para ele, que se apascenta entre as açucenas" (Ct 2,16).
          </p>
          <p className="mb-4">
            Vossos pensamentos e afetos, tão humildes, tão puros, tão santos, são outros lírios que convidam o Divino Esposo a habitar em vós. Ah! Maria, vós suspirais por Jesus, vós que não amais senão a Jesus! Eu é que devo suspirar, eu e tantos pecadores que o não amamos, e o temos perdido por nossas ofensas. Minha Mãe amabilíssima, se por minha culpa vosso Filho ainda não tornou à minha alma, fazei que eu o ache de novo. Bem sei que ele se faz achar por quem o busca. Mas fazei que eu o procure como devo. Vós sois a porta pela qual se chega a Jesus, fazei que também eu chegue a ele por meio de vós. Amém.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">4ª Dor: <em>Encontro com Jesus rumo ao Calvário (Lc 23, 27-31)</em></h3>
          <p className="mb-3">
            Compadeço-me de Vós, Senhora, pela dor que padecestes vendo Vosso Filho com a cruz sobre seus ombros, caminhando para o Calvário entre escárneos, baldões e quedas. Fazei, Mãe, que leve com paciência a cruz da mortificação e dos trabalhos.
          </p>
          <p className="italic text-center mb-3">Ave-Maria</p>
          <p className="mb-4">
            Ó, minha Mãe dolorosa! Pelo merecimento da dor que sentistes, vendo vosso amado Jesus conduzido à morte, impetrai-me a graça de também levar com paciência as cruzes que Deus me envia. Feliz serei, se souber acompanhar-vos com minha cruz até à morte. Vós e Jesus, que eram inocentes, carregaram uma cruz tão pesada, e eu, pecador, que tenho merecido o inferno, recusarei carregar a minha? Ah! Virgem Imaculada, de vós espero socorro para sofrer com paciência todas as cruzes. Amém.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">5ª Dor: <em>Maria aos pés da Cruz de Jesus (Jo 19, 25-27)</em></h3>
          <p className="mb-3">
            Compadeço-me de Vós, Senhora, pela dor que padecestes vendo seu filho agonizante e elevado na cruz, chagado, prostrado, trespassado por cravos. O vosso pranto mereceu para nós aquilo que nós jamais mereceríamos: o privilégio inimaginável de sermos vossos filhos. Fazei,Mãe, que eu viva crucificado a meus vícios e paixões.
          </p>
          <p className="italic text-center mb-3">Ave-Maria</p>
          <p className="mb-4">
            Ó, aflitíssima entre todas as mães, morreu, pois, vosso Filho tão amável e que tanto vos ama. Chorai, que bem razão tendes para chorar. Quem poderia vos consolar jamais? Só pode dar-vos algum alívio pensar que Jesus com sua morte venceu o inferno, abriu aos homens o paraíso, que lhes estava fechado, e fez a conquista de tantas almas. Do trono da cruz Ele reinará sobre tantos corações que, pelo amor vencidos, o servirão com amor. Dignai-vos, entretanto, ó, minha Mãe, consentir que me conserve a vossos pés, chorando convosco, já que eu, pelos meus grandes pecados, tenho mais razão de chorar que vós. Ah! Mãe de Misericórdia, em primeiro lugar pela morte de meu Redentor, e depois pelo merecimento de vossas dores, espero o perdão e a salvação eterna. Amém.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">6ª Dor: <em>Maria recebe Jesus descido da Cruz (Mt 27, 55-58)</em></h3>
          <p className="mb-3">
            Compadeço-me de Vós, Senhora, pela dor que padecestes ao receberdes em vossos braços aquele Santíssimo Corpo de Jesus, exangue por tantas chagas e feridas. Fazei, Mãe, que meu coração viva ferido do amor divino, e morto a todo amor profano.
          </p>
          <p className="italic text-center mb-3">Ave-Maria</p>
          <p className="mb-4">
            Ó, Virgem dolorosa, ó, alma grande pelas virtudes e também pelas dores, pois que ambas nascem do grande incêndio do amor que tendes a Deus, o único objeto amado por vosso coração. Ah! Minha Mãe, tende piedade de mim, que não tenho amado a Deus e tanto o tenho ofendido. Vossas dores me enchem de grande confiança, e me fazem esperar o perdão. Mas isso não me basta; quero amar a meu Senhor. E quem me pode alcançar essa graça melhor que vós, que sois a Mãe do belo amor? Ah! Maria, a todos consolastes; consolai também a mim. Amém.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">7ª Dor: <em>O corpo de Jesus é sepultado (Jo, 19-42)</em></h3>
          <p className="mb-3">
            Compadeço-me de Vós, Senhora, pela dor que padecestes em vossa soledade, depois de sepultado vosso Filho. Fazei, Mãe, que eu fique sepultado para tudo o que é terreno e viva só para Deus e para Vós.
          </p>
          <p className="italic text-center mb-3">Ave-Maria</p>
          <p className="mb-4">
            Ó, minha Mãe dolorosa, não vos quero deixar chorando sozinha. Quero acompanhar-vos com minhas lágrimas. Esta graça hoje vos peço: obtende-me uma contínua memória com uma terna devoção à Paixão de Jesus e à vossa, para que os dias que me restam de vida me não sirvam senão para chorar vossas dores, ó, minha Mãe, e as de meu Redentor. Essas vossas dores, espero eu, na hora de minha morte, me hão de dar coragem, força e confiança para não desesperar à vista do muito que ofendi ao meu Senhor. E elas me hão de impetrar o perdão, a perseverança e o paraíso, onde espero depois alegrar-me convosco, e cantar as misericórdias infinitas de meu Deus, por toda a eternidade. Assim o espero, assim seja. Amém.
          </p>
        </section>

        <section className="mt-8">
          <h3 className="text-lg font-bold mb-3">Oração</h3>
          <p className="mb-4">
            Concedei-nos, Senhora, compreender o oceano de angústias que fizeram de Vós a "Mãe das Dores", para que possamos participar de Vossos sofrimentos e Vos consolemos pelo nosso amor e nossa fidelidade. Choramos convosco, ó Rainha dos Mártires, na esperança de ter a felicidade de um dia nos alegrarmos convosco no Céu. Amém.
          </p>
        </section>
      </div>
    </div>
  );
};
