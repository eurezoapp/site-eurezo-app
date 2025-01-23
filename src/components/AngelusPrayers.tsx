import React, { useState } from 'react';
import { angelusPrayers, angelusFinalPrayer, reginaCoeli, reginaCoeliPrayer, gloryPrayer } from '../types/prayers';

export const AngelusPrayers: React.FC = () => {
  const [showReginaCoeli, setShowReginaCoeli] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setShowReginaCoeli(false)}
          className={`px-4 py-2 rounded-md transition-colors ${
            !showReginaCoeli 
              ? 'bg-[#503d2e] text-white' 
              : 'bg-[#e5d6ac] text-[#503d2e]'
          }`}
        >
          Ângelus
        </button>
        <button
          onClick={() => setShowReginaCoeli(true)}
          className={`px-4 py-2 rounded-md transition-colors ${
            showReginaCoeli 
              ? 'bg-[#503d2e] text-white' 
              : 'bg-[#e5d6ac] text-[#503d2e]'
          }`}
        >
          Regina Coeli
        </button>
      </div>

      <h2 className="text-2xl font-bold text-center" style={{ color: '#503d2e' }}>
        {showReginaCoeli ? 'Regina Coeli' : 'Ângelus'}
      </h2>
      
      {showReginaCoeli ? (
        <p className="text-center italic">(Reza-se apenas no tempo pascal)</p>
      ) : (
        <p className="text-center italic">(No tempo pascal reza-se o Regina Coeli no lugar do Ângelus)</p>
      )}

      <div className="space-y-4">
        {(showReginaCoeli ? reginaCoeli : angelusPrayers).map((prayer, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
            {prayer.verse && (
              <p className="font-semibold" style={{ color: '#503d2e' }}>
                V. {prayer.verse}
              </p>
            )}
            {prayer.response && (
              <p className="mt-1">
                R. {prayer.response}
              </p>
            )}
            {prayer.prayer && (
              <p className="mt-2 italic">{prayer.prayer}</p>
            )}
          </div>
        ))}

        <div className="p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
          <h3 className="font-semibold mb-2" style={{ color: '#503d2e' }}>
            Oração
          </h3>
          <p>{showReginaCoeli ? reginaCoeliPrayer : angelusFinalPrayer}</p>
        </div>

        {showReginaCoeli && (
          <div className="p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
            <p>{gloryPrayer.prayer}</p>
            <p className="mt-2 text-sm text-gray-600">(Repetir {gloryPrayer.repeat} vezes)</p>
          </div>
        )}
      </div>
    </div>
  );
};