import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleDonation = () => {
    navigate('/donate');
  };

  return (
    <footer className="mt-8 mb-4 text-center text-[9px] text-[#503d2e] opacity-75">
      <p className="mb-2">
        Criado por:{' '}
        <a
          href="https://instagram.com/guthierresc"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Sem.Guthierres
        </a>{' '}
        - Diocese de São Miguel Paulista SP - 2025
      </p>
      <div className="flex justify-center items-center gap-4 mb-2">
        <button
          onClick={handleDonation}
          className="px-3 py-1 bg-[#eac948] text-[#503d2e] rounded-md hover:opacity-90 transition-opacity"
        >
          Fazer Oferta
        </button>
      </div>
      <div className="flex justify-center items-center gap-4 text-[8px]">
        <Link to="/termos" className="hover:underline">Termos de Uso</Link>
        <span>•</span>
        <Link to="/privacidade" className="hover:underline">Política de Privacidade</Link>
        <span>•</span>
        <a href="mailto:guthierresc@hotmail.com" className="hover:underline">Contato</a>
      </div>
    </footer>
  );
};