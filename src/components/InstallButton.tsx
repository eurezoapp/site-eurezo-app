import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

export const InstallButton: React.FC = () => {
  const [isStandalone, setIsStandalone] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    setIsIOS(isIOSDevice);

    // Check if app is installed
    if (window.matchMedia('(display-mode: standalone)').matches || 
        window.navigator.standalone || 
        document.referrer.includes('android-app://')) {
      setIsStandalone(true);
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const handleInstall = async () => {
    if (isIOS) {
      alert('Para instalar no iOS:\n1. Toque no botão compartilhar\n2. Role para baixo e toque em "Adicionar à Tela de Início"\n3. Toque em "Adicionar"');
    } else if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    }
  };

  if (isStandalone || (!deferredPrompt && !isIOS)) return null;

  return (
    <button
      onClick={handleInstall}
      className="px-3 py-1 bg-[#503d2e] text-white rounded-md hover:opacity-90 transition-opacity text-sm"
    >
      <span className="flex items-center gap-1">
        <Download size={16} />
        Instalar App
      </span>
    </button>
  );
};