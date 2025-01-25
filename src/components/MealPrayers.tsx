import React, { useState } from 'react';

export const MealPrayers: React.FC = () => {
  const [isExtended, setIsExtended] = useState(false);
  const [isLatin, setIsLatin] = useState(false);

  const portugues = (
    <div className="prose">
      <h2 className="text-2xl font-bold mb-4" style={{ color: '#503d2e' }}>{isExtended ? 'Oração estendida' : 'Oração breve'}</h2>
      <p className="text-lg leading-relaxed whitespace-pre-line" style={{ color: '#503d2e' }}>
        {isExtended 
          ? `Deus eterno e todo-poderoso, 
            nós Vos suplicamos que Vos digneis abençoar 
            e santificar estes alimentos, 
            que de Vossa bondade recebemos. 

            Agradecemos por este momento de fraternidade 
            e Vos pedimos que, por Vossa graça, 
            possamos estreitar ainda mais nossa união Convosco, 
            na amizade e no amor fraterno. 

            Abençoai também todos aqueles que, 
            por Vosso auxílio, contribuíram 
            para que estes alimentos chegassem até nós. 

            Tudo isso Vos pedimos por Cristo, 
            Vosso Filho, que convosco vive e reina 
            na unidade do Espírito Santo. 
            Amém!`
          : `Abençoai, Senhor, 
            a nós e a estes dons, 
            que de vossa liberalidade recebemos. 
            Por Cristo, Nosso Senhor. 
            Amém.`}
      </p>
    </div>
  );

  const latim = (
    <div className="prose">
      <h2 className="text-2xl font-bold mb-4" style={{ color: '#503d2e' }}>{isExtended ? 'Oração estendida' : 'Oração breve'}</h2>
      <p className="text-lg leading-relaxed whitespace-pre-line" style={{ color: '#503d2e' }}>
        {isExtended 
          ? `Deus aeternus et omnipotens, 
            te supplices rogamos, 
            ut hos panes, 
            quos ex liberalitate tua accipimus, 
            benedicere et sanctificare digneris. 

            Gratias agimus pro hac fraternitatis occasione 
            et petimus, ut per tuam gratiam, 
            possimus nostram unitatem tecum, 
            in amicitia et fraterno amore, 
            magis consolidare. 

            Benedic etiam omnes, 
            qui, tuo auxilio, 
            ad nos pervenire fecerunt. 

            Omnia haec petimus per Christum, 
            Filium tuum, 
            qui tecum vivit et regnat 
            in unitate Spiritus Sancti. 
            Amen!`
          : `Benedic, Domine, 
            nos et dona, 
            quae ex liberalitate tua accipimus. 
            Per Christum, Dominum nostrum. 
            Amen.`}
      </p>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-4">
      <button
        onClick={() => setIsLatin(!isLatin)}
        className={`px-4 py-2 rounded-md transition-colors ${
          isLatin 
            ? 'bg-[#503d2e] text-white' 
            : 'bg-[#e5d6ac] text-[#503d2e]'
        }`}
      >
        {isLatin ? 'Ver em Português' : 'Ver em Latim'}
      </button>

      <button
        onClick={() => setIsExtended(!isExtended)}
        className={`px-4 py-2 rounded-md transition-colors ${
          isExtended 
            ? 'bg-[#503d2e] text-white' 
            : 'bg-[#e5d6ac] text-[#503d2e]'
        }`}
      >
        {isExtended ? 'Ver oração breve' : 'Ver oração estendida'}
      </button>

      <div className="mt-6 p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
        {!isLatin ? (
          portugues
        ) : (
          latim
        )}
      </div>
    </div>
  );
};
