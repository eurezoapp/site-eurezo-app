import React, { useState } from 'react';
import { saoMiguelPrayer } from '../types/prayers';

interface SaoMiguelPrayerProps {
  fontSize: number;
}

export const SaoMiguelPrayer: React.FC<SaoMiguelPrayerProps> = ({ fontSize }) => {
  const [showLatin, setShowLatin] = useState(false);

  return (
    <div className="space-y-6" style={{ fontSize: `${fontSize}px` }}>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setShowLatin(false)}
          className={`px-4 py-2 rounded-md transition-colors ${
            !showLatin 
              ? 'bg-[#503d2e] text-white' 
              : 'bg-[#e5d6ac] text-[#503d2e]'
          }`}
        >
          Português
        </button>
        <button
          onClick={() => setShowLatin(true)}
          className={`px-4 py-2 rounded-md transition-colors ${
            showLatin 
              ? 'bg-[#503d2e] text-white' 
              : 'bg-[#e5d6ac] text-[#503d2e]'
          }`}
        >
          Latim
        </button>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#503d2e' }}>
          {showLatin ? saoMiguelPrayer.latin.title : saoMiguelPrayer.portuguese.title}
        </h2>
        {!showLatin && saoMiguelPrayer.portuguese.subtitle && (
          <p className="text-red-600 italic mb-4">{saoMiguelPrayer.portuguese.subtitle}</p>
        )}
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
          <p className="whitespace-pre-line">
            {showLatin ? saoMiguelPrayer.latin.prayer : saoMiguelPrayer.portuguese.prayer}
          </p>
        </div>
      </div>
    </div>
  );
};
