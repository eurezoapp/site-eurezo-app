import React from 'react';

export const ComunhaoEspiritual: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center" style={{ color: '#503d2e' }}>
        Oração para Comunhão Espiritual
      </h2>
      <p className="text-center text-sm italic mb-4">(Santo Afonso Maria de Ligório)</p>
      <div className="p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
        <p className="whitespace-pre-line">
          Oh! Meu Jesus, eu creio
          que estás presente no Santíssimo Sacramento.
          Amo-Vos sobre todas as coisas
          e minha alma suspira por Vós.
          Mas como não posso receber-Vos agora,
          de maneira Sacramental,
          vinde ao menos espiritualmente ao meu coração.
          (pausa)
          Abraço-me convosco, uno-me a Vós inteiramente.
          Não permitais que eu me separe de Vós.
          Oh Jesus, sumo bem e doce amor meu,
          vulnerai e inflamai o meu coração,
          a fim de que esteja abrasado
          em Vosso amor para sempre.
          Amém.
        </p>
      </div>
    </div>
  );
};