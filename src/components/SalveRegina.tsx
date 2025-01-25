import React, { useState } from 'react';

export const SalveRegina: React.FC = () => {
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
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#503d2e' }}>Salve Rainha</h2>
            <p className="text-lg leading-relaxed whitespace-pre-line" style={{ color: '#503d2e' }}>
              Salve, Rainha, Mãe de misericórdia,
              vida, doçura e esperança nossa, salve!
              A vós bradamos, os degredados filhos de Eva;
              a vós suspiramos, gemendo e chorando
              neste vale de lágrimas.

              Eia, pois advogada nossa,
              esses vossos olhos misericordiosos a nós volvei;
              e depois deste desterro nos mostrai Jesus,
              bendito fruto do vosso ventre,
              ó clemente, ó piedosa,
              ó doce sempre Virgem Maria.
            </p>
            <div className="mt-4">
              <p className="text-lg" style={{ color: '#503d2e' }}>
                <span className="font-bold text-red-600">V.</span> Rogai por nós, santa Mãe de Deus.<br/>
                <span className="font-bold text-red-600">R.</span> Para que sejamos dignos das promessas de Cristo.
              </p>
            </div>
          </div>
        ) : (
          <div className="prose">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#503d2e' }}>Salve Regina</h2>
            <p className="text-lg leading-relaxed whitespace-pre-line" style={{ color: '#503d2e' }}>
              Salve, Regina, Mater misericordiae,
              vita, dulcédo et spes nostra, salve.
              Ad te clamamus, éxsules filii Evae.
              Ad te suspirámus geméntes et flentes
              in hac lacrimárum valle.

              Eia ergo, advocáta nostra,
              illos tuos misericórdes óculos ad nos convérte.
              Et Jesum benedíctum fructum Ventris tui,
              nobis, post hoc exsílium, osténde.
              O clemens, o pia, o dulcis Virgo María!
            </p>
            <div className="mt-4">
              <p className="text-lg" style={{ color: '#503d2e' }}>
                <span className="font-bold text-red-600">V.</span> Ora pro nobis, sancta Dei Génitrix.<br/>
                <span className="font-bold text-red-600">R.</span> Ut digni efficiámur promissiónibus Christi.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
