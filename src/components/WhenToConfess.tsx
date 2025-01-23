import React from 'react';
import { whenToConfess } from '../types/prayers';

export const WhenToConfess: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center" style={{ color: '#503d2e' }}>
        {whenToConfess.title}
      </h2>
      <div className="space-y-4">
        {whenToConfess.sections.map((section, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
            <h3 className="font-semibold mb-2" style={{ color: '#503d2e' }}>
              {section.title}
            </h3>
            <p className="mb-2">{section.content}</p>
            <p className="text-sm text-gray-600 italic">Fonte: {section.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
};