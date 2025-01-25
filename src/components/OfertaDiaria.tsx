import React from 'react';

export const OfertaDiaria: React.FC = () => {
  const currentMonth = new Date().getMonth(); // 0-11

  const intentions = [
    {
      month: 'JANEIRO/25',
      title: 'Pelo direito à educação.',
      description: 'Rezemos para que os migrantes, os refugiados e as pessoas atingidas pela guerra vejam sempre respeitado o seu direito à educação, necessária para construir um mundo melhor.'
    },
    {
      month: 'FEVEREIRO',
      title: 'Pelas vocações para a vida sacerdotal e religiosa.',
      description: 'Oremos a fim de que a comunidade eclesial acolha os desejos e as dúvidas dos jovens que sentem o chamamento ao serviço da missão de Cristo na vida sacerdotal e religiosa.'
    },
    {
      month: 'MARÇO',
      title: 'Pelas famílias em crise.',
      description: 'Rezemos para que as famílias divididas possam encontrar no perdão a cura das suas feridas, redescobrindo também nas próprias diferenças a riqueza recíproca.'
    },
    {
      month: 'ABRIL',
      title: 'Pelo uso das novas tecnologias.',
      description: 'Oremos a fim de que o uso das novas tecnologias não substitua as relações humanas, respeite a dignidade das pessoas e ajude a enfrentar as crises do nosso tempo.'
    },
    {
      month: 'MAIO',
      title: 'Pelas condições de trabalho.',
      description: 'Rezemos para que, através do trabalho, cada pessoa se realize, as famílias se sustentem com dignidade e a sociedade possa tornar-se mais humana.'
    },
    {
      month: 'JUNHO',
      title: 'Para que cresçamos na compaixão pelo mundo.',
      description: 'Oremos a fim de que cada um de nós encontre consolação na relação pessoal com Jesus e aprenda do seu Coração a compaixão pelo mundo.'
    },
    {
      month: 'JULHO',
      title: 'Pela formação no discernimento.',
      description: 'Rezemos para aprender cada vez mais a discernir, a saber escolher os percursos de vida e a rejeitar tudo o que nos afasta de Cristo e do Evangelho.'
    },
    {
      month: 'AGOSTO',
      title: 'Pela convivência comum.',
      description: 'Oremos a fim de que as sociedades em que a convivência parece mais difícil não cedam à tentação do conflito por motivos étnicos, políticos, religiosos ou ideológicos.'
    },
    {
      month: 'SETEMBRO',
      title: 'Pela nossa relação com toda a criação.',
      description: 'Rezemos para que, inspirados por São Francisco, possamos experimentar a nossa interdependência com todas as criaturas, amadas por Deus e dignas de amor e respeito.'
    },
    {
      month: 'OUTUBRO',
      title: 'Pela colaboração entre as diferentes tradições religiosas.',
      description: 'Oremos a fim de que nós, crentes de diversas tradições religiosas, trabalhemos juntos para defender e promover a paz, a justiça e a fraternidade humana.'
    },
    {
      month: 'NOVEMBRO',
      title: 'Pela prevenção do suicídio.',
      description: 'Rezemos para que as pessoas tentadas pelo suicídio encontrem na sua comunidade o apoio, a assistência e o amor de que precisam e se abram à beleza da vida.'
    },
    {
      month: 'DEZEMBRO',
      title: 'Pelos cristãos em contextos de conflito.',
      description: 'Oremos a fim de que os cristãos que vivem em contextos de guerra ou de conflito, especialmente no Médio Oriente, possam ser sementes de paz, reconciliação e esperança.'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md border border-[#e5d6ac] p-6">
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#503d2e' }}>OFERECIMENTO DIÁRIO</h2>
        <p className="text-sm italic mb-4" style={{ color: '#503d2e' }}>(APOSTOLADO DA ORAÇÃO)</p>
        <p className="text-sm mb-4 italic" style={{ color: '#503d2e' }}>
          Texto aprovado com o Nihil Obstat de DOM Odilo Pedro Scherer, Arcebispo de São Paulo
        </p>

        <div className="space-y-4 mb-8">
          <p className="text-lg leading-relaxed" style={{ color: '#503d2e' }}>
            Deus, nosso Pai, eu te ofereço todo o dia de hoje: minhas orações e obras, meus pensamentos e palavras, minhas alegrias e sofrimentos, em reparação de nossas ofensas, em união com o Coração de teu Filho, Jesus, que continua a oferecer-se a Ti, na Eucaristia, pela salvação do mundo.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: '#503d2e' }}>
            Que o Espírito Santo, que guiou a Jesus, seja meu guia e meu amparo neste dia para que eu possa ser testemunhas do teu amor: Com Maria, Mãe de Jesus e da Igreja, rezo especialmente pelas intenções do Santo Padre para este mês:
          </p>
        </div>

        <div className="space-y-6">
          {intentions.map((intention, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg ${currentMonth === index ? 'bg-[#e5d6ac] shadow-sm' : ''}`}
            >
              <h3 className="text-xl font-bold mb-2" style={{ color: '#503d2e' }}>{intention.month}</h3>
              <p className="font-semibold mb-2" style={{ color: '#503d2e' }}>{intention.title}</p>
              <p className="text-lg" style={{ color: '#503d2e' }}>{intention.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
