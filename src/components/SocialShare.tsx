import React, { useEffect, useState } from 'react';

const SocialShare: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const currentUrl = window.location.href;
  const whatsappMessage = "As orações mais utilizadas pelos católicos de maneira fácil e simples, acesse e instale o EuRezo, e vemos rezar!";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    const message = `${whatsappMessage}\n${currentUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  const shareOnInstagram = async () => {
    try {
      const shareData = {
        title: 'Eurezo App',
        text: whatsappMessage,
        url: currentUrl,
      };
      
      if (navigator.share) {
        await navigator.share(shareData);
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="social-share" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '1rem 0',
      margin: '0'
    }}>
      <span style={{
        fontSize: '0.85rem',
        color: '#666',
        marginBottom: '0.25rem'
      }}>
        Compartilhe
      </span>
      <div style={{
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <button
          onClick={shareOnFacebook}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            padding: '0.25rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          aria-label="Compartilhar no Facebook"
        >
          <img 
            src="/icons/facebook.png" 
            alt="Facebook" 
            style={{ width: '24px', height: '24px' }} 
          />
        </button>
        
        <button
          onClick={shareOnWhatsApp}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            padding: '0.25rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          aria-label="Compartilhar no WhatsApp"
        >
          <img 
            src="/icons/whatsapp.png" 
            alt="WhatsApp" 
            style={{ width: '24px', height: '24px' }} 
          />
        </button>

        {isMobile && (
          <button
            onClick={shareOnInstagram}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              padding: '0.25rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Compartilhar no Instagram"
          >
            <img 
              src="/icons/instagram.png" 
              alt="Instagram" 
              style={{ width: '24px', height: '24px' }} 
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default SocialShare;
