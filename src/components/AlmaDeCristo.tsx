import React from 'react';

export const AlmaDeCristo: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center" style={{ color: '#503d2e' }}>
        Alma de Cristo
      </h2>
      <p className="text-center text-sm italic mb-4">(Santo Inácio de Loyola)</p>
      <div className="p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
        <p className="whitespace-pre-line">
          Alma de Cristo, santificai-me.
          Corpo de Cristo, salvai-me.
          Sangue de Cristo, inebriai-me.
          Água do lado de Cristo, lavai-me.
          Paixão de Cristo, confortai-me.
          Ó bom Jesus, ouvi-me.
          Dentro de Vossas chagas, escondei-me.
          Não permitais que me separe de Vós.
          Do espírito maligno, defendei-me.
          Na hora da morte, chamai-me
          e mandai-me ir para Vós,
          para que com os vossos Santos Vos louve
          por todos os séculos dos séculos.
          Amém.
        </p>
      </div>
    </div>
  );
};