import React from 'react';
import { consagracaoPrayer } from '../types/prayers';

export const ConsagracaoPrayer: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center" style={{ color: '#503d2e' }}>
        {consagracaoPrayer.title}
      </h2>
      <div className="p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
        <p className="whitespace-pre-line">{consagracaoPrayer.prayer}</p>
      </div>
    </div>
  );
};