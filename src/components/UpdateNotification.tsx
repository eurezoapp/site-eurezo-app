import React, { useState, useEffect } from 'react';

interface UpdateNotificationProps {
  currentVersion: string;
}

export const UpdateNotification: React.FC<UpdateNotificationProps> = ({ currentVersion }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [newVersion, setNewVersion] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  useEffect(() => {
    // Verifica a versão a cada 1 hora
    const checkVersion = async () => {
      try {
        const response = await fetch('/version.json', { cache: 'no-cache' });
        const data = await response.json();
        
        if (data.version !== currentVersion) {
          setNewVersion(data.version);
          setUpdateMessage(data.updateMessage || 'Nova versão disponível!');
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

  const handleUpdate = async () => {
    try {
      // Primeiro, limpa o cache
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
      }

      // Atualiza o service worker
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.ready;
        await registration.update();
      }

      // Armazena a nova versão
      localStorage.setItem('appVersion', newVersion);
      
      // Recarrega a página para aplicar as atualizações
      window.location.reload();
    } catch (error) {
      console.error('Erro durante a atualização:', error);
      // Se houver erro, apenas recarrega a página
      window.location.reload();
    }
    
    setShowNotification(false);
  };

  if (!showNotification) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#503d2e] text-white p-4 flex justify-between items-center">
      <div>
        <p className="font-bold">Atualização disponível!</p>
        <p className="text-sm">{updateMessage}</p>
      </div>
      <button
        onClick={handleUpdate}
        className="bg-[#e5d6ac] text-[#503d2e] px-4 py-2 rounded-md hover:bg-[#d4c59b] transition-colors"
      >
        Atualizar agora
      </button>
    </div>
  );
};
