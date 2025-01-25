import React, { useState } from 'react';

export const SaoBentoMedalha: React.FC = () => {
  const [isLatin, setIsLatin] = useState(false);

  const portugues = (
    <div className="prose">
      <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#503d2e' }}>Oração da Medalha de São Bento</h2>
      <div className="text-lg leading-relaxed space-y-2" style={{ color: '#503d2e' }}>
        <p className="text-center">
          A Cruz sagrada seja a minha Luz.<br/>
          Não seja o Dragão meu guia.<br/>
          Retira-te Satanás!<br/>
          Nunca me aconselhes coisas vãs.<br/>
          É mal o que tu me ofereces.<br/>
          Bebe tu mesmo do teu veneno!
        </p>
      </div>
    </div>
  );

  const latim = (
    <div className="prose">
      <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#503d2e' }}>Oratio Medalliae Sancti Benedicti</h2>
      <div className="text-lg leading-relaxed space-y-2" style={{ color: '#503d2e' }}>
        <p className="text-center">
          Crux Sacra Sit Mihi Lux<br/>
          Non Draco Sit Mihi Dux<br/>
          Vade Retro Satana<br/>
          Nunquam Suade Mihi Vana<br/>
          Sunt Mala Quae Libas<br/>
          Ipse Venena Bibas
        </p>
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-4">
      <button
        onClick={() => setIsLatin(!isLatin)}
        className={`px-4 py-2 rounded-md transition-colors ${
          isLatin 
            ? 'bg-[#503d2e] text-white' 
            : 'bg-[#e5d6ac] text-[#503d2e]'
        }`}
      >
        {isLatin ? 'Ver em Português' : 'Ver em Latim'}
      </button>

      <div className="mt-6 p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
        {!isLatin ? portugues : latim}
      </div>
    </div>
  );
};
