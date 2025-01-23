import React from 'react';

export const InitialPrayers: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2" style={{ color: '#503d2e' }}>Sinal da Cruz</h3>
        <p>Em nome do Pai e do Filho e do Espírito Santo. Amém.</p>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2" style={{ color: '#503d2e' }}>Oferecimento</h3>
        <p>
          Divino Jesus, nós Vos oferecemos este Terço que vamos rezar, meditando os mistérios da nossa Redenção. 
          Concedei-nos, por intercessão da Virgem Maria, Mãe de Deus e nossa Mãe, as virtudes que nos são 
          necessárias para bem rezá-lo e a graça de ganharmos as indulgências desta santa devoção.
        </p>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2" style={{ color: '#503d2e' }}>Creio</h3>
        <p>Creio em Deus Pai...</p>
      </div>

      <div>
        <h3 className="font-semibold mb-2" style={{ color: '#503d2e' }}>Pai Nosso</h3>
        <p>Pai Nosso que estais no céu...</p>
      </div>

      <div>
        <h3 className="font-semibold mb-2" style={{ color: '#503d2e' }}>Três Ave-Marias</h3>
        <div className="space-y-2">
          <p><span className="font-medium" style={{ color: '#503d2e' }}>1ª Ave-Maria</span> - Em honra a Deus Pai Criador</p>
          <p><span className="font-medium" style={{ color: '#503d2e' }}>2ª Ave-Maria</span> - Em honra a Deus Filho Redentor</p>
          <p><span className="font-medium" style={{ color: '#503d2e' }}>3ª Ave-Maria</span> - Em honra ao Espírito Santo que nos santifica</p>
        </div>
      </div>
    </div>
  );
};

export const GloriaPrayer: React.FC = () => {
  return (
    <div className="mt-2 pt-2 border-t border-gray-200">
      <p className="font-medium" style={{ color: '#503d2e' }}>Glória ao Pai e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.</p>
    </div>
  );
};

export const FinalPrayers: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2" style={{ color: '#503d2e' }}>Agradecimento</h3>
        <p>
          Infinitas graças vos damos, Soberana Rainha, pelos benefícios que todos os dias recebemos de vossas 
          mãos liberais. Dignai-vos, agora e para sempre, tomar-nos debaixo do vosso poderoso amparo e, para 
          mais vos obrigar, vos saudamentos com uma Salve, Rainha.
        </p>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2" style={{ color: '#503d2e' }}>Salve Rainha</h3>
        <p>Salve Rainha, Mãe de misericórdia...</p>
      </div>
    </div>
  );
};