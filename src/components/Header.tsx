import React from 'react';
import { Type } from 'lucide-react';

interface HeaderProps {
  fontSize: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const Header: React.FC<HeaderProps> = ({ fontSize, onIncrease, onDecrease }) => {
  return (
    <header className="bg-[#503d2e] text-white w-full">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
<img
  src="/logo.webp"
  alt="Logo"
  className="max-h-12 w-auto"
/>

          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onDecrease}
              className="p-2 hover:opacity-80 rounded bg-[#eac948] text-[#503d2e] flex items-center gap-1 font-bold"
            >
              A-
            </button>
            <button
              onClick={onIncrease}
              className="p-2 hover:opacity-80 rounded bg-[#eac948] text-[#503d2e] flex items-center gap-1 font-bold"
            >
              A+
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};