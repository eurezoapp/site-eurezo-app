import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Copy, Check } from 'lucide-react';

export const Donate: React.FC = () => {
  const [copied, setCopied] = React.useState(false);
  const pixKey = 'guthierresc@hotmail.com';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#e5d6ac]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Link 
              to="/" 
              className="inline-flex items-center text-[#503d2e] hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Link>
            
            <h1 className="text-2xl font-bold mb-6 text-center" style={{ color: '#503d2e' }}>
              Ajude o EuRezo a Permanecer no ar
            </h1>

            <div className="prose max-w-none mb-8">
              <p className="text-center mb-6">
                Ficamos felizes por seu interesse em nos ajudar a manter o App EuRezo. 
                Sou seminarista e me dedico também a fazer a internet um meio para fazer 
                chegar o Evangelho, e ao povo de Deus favorecer meios para que eles possam rezar mais.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <p className="font-semibold mb-2">Chave PIX:</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <code className="bg-white px-4 py-2 rounded border">
                    {pixKey}
                  </code>
                  <button
                    onClick={handleCopyPix}
                    className="p-2 bg-[#503d2e] text-white rounded-md hover:bg-[#3d2e22] transition-colors"
                  >
                    {copied ? <Check size={20} /> : <Copy size={20} />}
                  </button>
                </div>
                {copied && (
                  <p className="text-green-600 text-sm">
                    Chave copiada, com App do seu banco faça sua colaboração.
                  </p>
                )}
              </div>

              <p className="text-center mt-6 font-semibold">
                Deus te abençoe!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};