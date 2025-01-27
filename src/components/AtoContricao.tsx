import React, { useState } from 'react';
import { atoContricao } from '../types/prayers';

interface AtoContricaoProps {
  fontSize: number;
}

export const AtoContricao: React.FC<AtoContricaoProps> = ({ fontSize }) => {
  const [selectedVersion, setSelectedVersion] = useState(0);

  return (
    <div className="space-y-6" style={{ fontSize: `${fontSize}px` }}>
      <h2 className="text-2xl font-bold text-center" style={{ color: '#503d2e' }}>
        {atoContricao.title}
      </h2>
      
      <p className="text-red-600 italic text-center">
        {atoContricao.subtitle}
      </p>

      <div className="flex justify-center">
        <select
          value={selectedVersion}
          onChange={(e) => setSelectedVersion(Number(e.target.value))}
          className="px-4 py-2 rounded-md bg-[#e5d6ac] text-[#503d2e] border-2 border-[#503d2e]"
        >
          <option value={0}>Versão Principal</option>
          <option value={1}>Salmo 24(25)</option>
          <option value={2}>Salmo 50(51)</option>
          <option value={3}>Lucas 15,18</option>
          <option value={4}>Versão ao Pai, Filho e Espírito Santo</option>
          <option value={5}>Versão dos Milagres</option>
          <option value={6}>Versão do Amigo dos Pecadores</option>
          <option value={7}>Versão do Cordeiro de Deus</option>
          <option value={8}>Versão da Misericórdia</option>
          <option value={9}>Versão Breve</option>
        </select>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
        {atoContricao.prayers[selectedVersion].rubric && (
          <p className="text-red-600 italic mb-4 text-center">
            {atoContricao.prayers[selectedVersion].rubric}
          </p>
        )}
        <p className="whitespace-pre-line">
          {atoContricao.prayers[selectedVersion].prayer}
        </p>
      </div>
    </div>
  );
};
