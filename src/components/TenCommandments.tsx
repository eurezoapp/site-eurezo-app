import React from 'react';
import { tenCommandments } from '../types/prayers';

export const TenCommandments: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center" style={{ color: '#503d2e' }}>
        {tenCommandments.title}
      </h2>
      <div className="space-y-4">
        {tenCommandments.commandments.map((commandment) => (
          <div key={commandment.number} className="p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
            <h3 className="font-semibold mb-2" style={{ color: '#503d2e' }}>
              {commandment.number}º - {commandment.commandment}
            </h3>
            <p>{commandment.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};