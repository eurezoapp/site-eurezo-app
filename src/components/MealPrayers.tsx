import React, { useState } from 'react';

export const MealPrayers: React.FC = () => {
  const [isExtended, setIsExtended] = useState(false);

  const oracaoBreve = (
    <div className="prose">
      <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#503d2e' }}>Oração antes das refeições (Breve)</h2>
      <div className="text-lg leading-relaxed space-y-2" style={{ color: '#503d2e' }}>
        <p className="text-center">
          Abençoai, Senhor, a nós e a estes dons, que de vossa liberalidade recebemos. Por Cristo, Nosso Senhor. Amém.<br/>
          Em nome do Pai ✠ e do Filho e do Espírito Santo. Amém.
        </p>
      </div>
    </div>
  );

  const oracaoEstendida = (
    <div className="prose">
      <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#503d2e' }}>Oração antes das refeições (Estendida)</h2>
      <div className="text-lg leading-relaxed space-y-2" style={{ color: '#503d2e' }}>
        <p className="text-center">
          Deus eterno e todo-poderoso, nós Vos suplicamos que Vos digneis abençoar e santificar estes alimentos, que de Vossa bondade recebemos.<br/>
          Agradecemos por este momento de fraternidade e Vos pedimos que, por Vossa graça, possamos estreitar ainda mais nossa união Convosco, na amizade e no amor fraterno.<br/>
          Abençoai também todos aqueles que, por Vosso auxílio, contribuíram para que estes alimentos chegassem até nós.<br/>
          Tudo isso Vos pedimos por Cristo, Vosso Filho, que convosco vive e reina na unidade do Espírito Santo. Amém!<br/>
          Em nome do Pai ✠ e do Filho e do Espírito Santo. Amém.
        </p>
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-4">
      <button
        onClick={() => setIsExtended(!isExtended)}
        className={`px-4 py-2 rounded-md transition-colors ${
          isExtended 
            ? 'bg-[#503d2e] text-white' 
            : 'bg-[#e5d6ac] text-[#503d2e]'
        }`}
      >
        {isExtended ? 'Ver versão breve' : 'Ver versão estendida'}
      </button>

      <div className="mt-6 p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
        {!isExtended ? oracaoBreve : oracaoEstendida}
      </div>
    </div>
  );
};
