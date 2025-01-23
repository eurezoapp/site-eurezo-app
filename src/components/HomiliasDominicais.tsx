import React, { useState } from 'react';

export const HomiliasDominicais: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoId = '6N_T9hqIhNk';

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center" style={{ color: '#503d2e' }}>
        Homilias Dominicais
      </h2>

      <div className="prose max-w-none">
        <div className="homilia-content">
          <h3 className="text-xl font-semibold mb-4" style={{ color: '#503d2e' }}>
  2º Domingo do Tempo Comum
</h3>

<p className="mb-4">
  Independentemente do ciclo litúrgico vigente, o evangelho do segundo domingo do Tempo Comum é sempre um texto do Evangelho segundo João (Ano A: Jo 1,29-34; Ano B: Jo 1,35-42). Neste ano, por ocasião do ciclo litúrgico "C", o texto proposto é Jo 2,1-11, que corresponde ao relato do episódio conhecido como as "Bodas de Caná". Ao longo do ano, a liturgia do Tempo Comum apresenta de forma contínua a vida pública de Jesus, desde os seus primeiros passos na Galileia até seu final em Jerusalém, onde viveu a paixão e morreu na cruz. Para começar o Tempo Comum, utiliza-se o Evangelho de João no segundo domingo como estratégia didática e catequética, já que esse Evangelho melhor introduz a vida pública de Jesus por meio da sequência de eventos denominada "semana inaugural" (Jo 1,19–2,11). Essa semana começa com o envio de uma comitiva pelas autoridades religiosas de Jerusalém para fiscalizar a atividade de João Batista (Jo 1,19-28) e conclui com o episódio das Bodas de Caná.
</p>

<p className="mb-4">
  Embora simples do ponto de vista narrativo, o episódio das Bodas de Caná apresenta grande complexidade teológica. Por séculos, prevaleceu uma interpretação literal que fundamentava a intercessão de Maria, fomentando a devoção mariana, mas sem explorar plenamente a riqueza cristológica empregada pelo evangelista. A exegese moderna busca restituir ao texto seu valor teológico, situando-o no contexto da "semana inaugural" que introduz a vida pública de Jesus. O ponto alto dessa semana é o evento em Caná, que serve como porta de entrada para todo o Quarto Evangelho, antecipando temas centrais que serão desenvolvidos posteriormente. Este é também o primeiro episódio onde Jesus assume o papel de protagonista.
</p>

<p className="mb-4">
  O texto começa com a expressão "No terceiro dia", frequentemente omitida na tradução litúrgica, mas de importância teológica significativa, apontando para uma manifestação especial de Deus. A expressão evoca acontecimentos bíblicos marcantes como o sacrifício de Isaac (Gn 22,4) e a entrega da Lei no Sinai (Ex 19,16ss), culminando na ressurreição de Jesus, o maior evento ocorrido "no terceiro dia". Assim, João sinaliza que toda a vida de Jesus é manifestação do agir divino, com sua ressurreição como ápice. Esse contexto enfatiza a importância das Bodas de Caná como introdução à missão messiânica de Jesus.
</p>

<p className="mb-4">
  Na cultura semita, o casamento simbolizava a relação entre Deus e Israel. O evangelista utiliza a festa de casamento para retratar a situação da aliança e a necessidade de renovação. A Mãe de Jesus, cuja presença representa o resto fiel de Israel, aponta para a carência espiritual ao dizer: "Eles não têm mais vinho" (v. 3). Mais que uma observação factual, essa frase denuncia a ausência de amor e alegria na antiga aliança, simbolizados pelo vinho. Jesus responde: "Mulher, por que dizes isto a mim? Minha hora ainda não chegou" (v. 4), indicando que sua ação depende do Pai e que sua "hora" será plenamente manifestada na cruz.
</p>

<p className="mb-4">
  A Mãe, modelo de fé, instrui os servos: "Fazei o que ele vos disser" (v. 5). Essa ordem ecoa a antiga promessa de Israel de obedecer a Deus, promessa fracassada na prática. Ao encherem as talhas de água até a boca, os servos, prefiguração dos discípulos ideais, demonstram serviço pleno e sem medidas. Jesus transforma a água em vinho de qualidade superior, revelando sua glória e inaugurando um novo tempo de plenitude e comunhão. Este primeiro sinal aponta para a renovação definitiva da aliança em sua paixão, morte e ressurreição.
</p>

<p className="mb-4">
  A profundidade teológica das Bodas de Caná reflete a transição da antiga para a nova aliança, enfatizando a ação redentora de Jesus e sua solidariedade com as necessidades humanas. Assim, o episódio transcende uma leitura devocional e convida à reflexão sobre a relação viva e transformadora com Deus que Cristo inaugura.
</p>
          <h1 className="text-xl  mb-1" style={{ color: '#503d2e' }}>
            Pe. Francisco Cornelio F. Rodrigues – Diocese de Mossoró-RN
          </h1>

        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4" style={{ color: '#503d2e' }}>
            Vídeo da Semana
          </h3>
          
          <div 
            className="cursor-pointer relative aspect-video bg-gray-100 rounded-lg overflow-hidden"
            onClick={() => setShowVideo(true)}
          >
            <img 
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Thumbnail do vídeo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setShowVideo(false)}
        >
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};