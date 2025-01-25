import React, { useState, useEffect } from 'react';

interface UpdateNotificationProps {
  currentVersion: string;
}

export const UpdateNotification: React.FC<UpdateNotificationProps> = ({ currentVersion }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [newVersion, setNewVersion] = useState('');

  useEffect(() => {
    // Verifica a versão a cada 1 hora
    const checkVersion = async () => {
      try {
        const response = await fetch('/version.json', { cache: 'no-cache' });
        const data = await response.json();
        
        if (data.version !== currentVersion) {
          setNewVersion(data.version);
          setShowNotification(true);
        }
      } catch (error) {
        console.error('Erro ao verificar atualizações:', error);
      }
    };

    checkVersion();
    const interval = setInterval(checkVersion, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [currentVersion]);

  const handleUpdate = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        // Força a atualização do service worker
        registration.update().then(() => {
          // Armazena a nova versão
          localStorage.setItem('appVersion', newVersion);
          
          // Recarrega a página para aplicar as atualizações
          window.location.reload();
        });
      });
    }
    setShowNotification(false);
  };

  if (!showNotification) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-[#503d2e] text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex flex-col gap-2">
        <p className="font-medium">Novas orações disponíveis!</p>
        <p className="text-sm">Atualize o aplicativo para acessar as novas orações.</p>
        <div className="flex justify-end gap-2 mt-2">
          <button
            onClick={() => setShowNotification(false)}
            className="px-3 py-1 text-sm rounded-md hover:bg-[#614b3c] transition-colors"
          >
            Depois
          </button>
          <button
            onClick={handleUpdate}
            className="px-3 py-1 text-sm bg-[#e5d6ac] text-[#503d2e] rounded-md hover:bg-[#d4c59b] transition-colors font-medium"
          >
            Atualizar agora
          </button>
        </div>
      </div>
    </div>
  );
};
