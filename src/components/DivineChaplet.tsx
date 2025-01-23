import React from 'react';
import { mercyPrayers } from '../types/mercyPrayers';

export const DivineChaplet: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center" style={{ color: '#503d2e' }}>
        Terço da Misericórdia
      </h2>

      <div className="space-y-4">
        <p className="font-medium" style={{ color: '#503d2e' }}>
          Comece a rezar o terço da misericórdia com:
        </p>
        {mercyPrayers.initial.map((prayer, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
            <h3 className="font-semibold mb-2" style={{ color: '#503d2e' }}>
              {prayer.title}
            </h3>
            <p>{prayer.description}</p>
          </div>
        ))}

        <div className="p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
          <h3 className="font-semibold mb-2" style={{ color: '#503d2e' }}>
            {mercyPrayers.main.fatherPrayer.title}
          </h3>
          <p>{mercyPrayers.main.fatherPrayer.description}</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
          <h3 className="font-semibold mb-2" style={{ color: '#503d2e' }}>
            {mercyPrayers.main.decadePrayer.title}
          </h3>
          <p>{mercyPrayers.main.decadePrayer.description}</p>
          <p className="mt-2 text-sm text-gray-600">(Repetir 10 vezes)</p>
        </div>

        {mercyPrayers.final.map((prayer, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
            <h3 className="font-semibold mb-2" style={{ color: '#503d2e' }}>
              {prayer.title}
            </h3>
            <p>{prayer.description}</p>
            {prayer.repeat && (
              <p className="mt-2 text-sm text-gray-600">(Repetir {prayer.repeat} vezes)</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};