import React from 'react';
import { Mystery } from '../types/mysteries';
import { GloriaPrayer } from './Prayers';

interface MysteryDisplayProps {
  mystery: Mystery;
}

export const MysteryDisplay: React.FC<MysteryDisplayProps> = ({ mystery }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center" style={{ color: '#503d2e' }}>{mystery.title}</h2>
      <div className="space-y-4">
        {mystery.mysteries.map((m) => (
          <div key={m.number} className="p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
            <h3 className="font-semibold text-lg mb-2" style={{ color: '#503d2e' }}>{m.number}º Mistério</h3>
            <p>{m.description}</p>
            <GloriaPrayer />
          </div>
        ))}
      </div>
    </div>
  );
};