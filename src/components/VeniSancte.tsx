import React, { useState } from 'react';

export const VeniSancte: React.FC = () => {
  const [isLatin, setIsLatin] = useState(false);

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

      <div className="mt-6 p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
        {!isLatin ? (
          <div className="prose">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#503d2e' }}>Vinde Espírito Santo</h2>
            <p className="text-lg leading-relaxed whitespace-pre-line" style={{ color: '#503d2e' }}>
              Vinde Espírito Santo,
              enchei os corações dos vossos fiéis
              e acendei neles o fogo do Vosso Amor.
              Enviai o Vosso Espírito e tudo será criado
              e renovareis a face da terra.

              Oremos: 
              Ó Deus que instruístes os corações dos vossos fiéis, 
              com a luz do Espírito Santo, 
              fazei que apreciemos retamente todas as coisas 
              segundo o mesmo Espírito 
              e gozemos da sua consolação. 
              Por Cristo Senhor Nosso. 
              Amém
            </p>
          </div>
        ) : (
          <div className="prose">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#503d2e' }}>Veni Sancte Spíritus</h2>
            <p className="text-lg leading-relaxed whitespace-pre-line" style={{ color: '#503d2e' }}>
              Veni Sancte Spíritus
              reple tuórum corda fidélium,
              et tu amóris in eis ignem accénde.
              Emítte Spíritum tuum et creabúntur.
              Et renovábis faciem terrae.

              Oremus: 
              Deus, qui corda fidélium Sancti Spíritus 
              illustratióne docuisti da nobis 
              in eódem Spíritu recta sápere, 
              et de ejus semper consolatióne gaudére. 
              Per Christum Dóminum nostrum. 
              Amen.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
