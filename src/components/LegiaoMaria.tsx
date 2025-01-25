import React, { useState } from 'react';

export const LegiaoMaria: React.FC = () => {
  const [isLatin, setIsLatin] = useState(false);

  const portugues = (
    <div className="space-y-6">
      {/* ORAÇÕES INICIAIS */}
      <section>
        <h4 className="text-lg font-semibold mb-2" style={{ color: '#503d2e' }}>Orações Iniciais</h4>
        <p className="text-lg" style={{ color: '#503d2e' }}>
          <span className="text-red-600 font-semibold">V.</span> Em nome do Pai e do Filho e do Espírito Santo.<br/>
          <span className="text-red-600 font-semibold">R.</span> Amém.<br/>
          <span className="text-red-600 font-semibold">V.</span> Vinde, Espírito Santo...<br/>
          <span className="text-red-600 font-semibold">R.</span> Enchei os corações dos vossos fiéis e acendei neles o fogo do vosso amor. Enviai o vosso Espírito e tudo será criado.<br/>
          <span className="text-red-600 font-semibold">V.</span> E renovareis a face da terra.<br/>
        </p>
        <p className="text-lg italic mt-2" style={{ color: '#503d2e' }}>
          Oremos: Ó Deus, que instruístes os corações dos vossos fiéis com a luz do Espírito Santo, fazei que apreciemos retamente todas as coisas segundo o mesmo Espírito e gozemos sempre da sua consolação. Por Cristo Senhor nosso.
        </p>
        <p className="text-lg" style={{ color: '#503d2e' }}>
          <span className="text-red-600 font-semibold">R.</span> Amém.
        </p>
      </section>

      {/* CATENA LEGIONIS */}
      <section>
        <h4 className="text-lg font-semibold mb-2" style={{ color: '#503d2e' }}>Catena Legionis</h4>
        <p className="text-lg italic mb-4" style={{ color: '#503d2e' }}>
          Antífona: Quem é esta que avança como aurora nascente, formosa como a lua, brilhante como o sol, terrível como um exército em ordem de batalha?
        </p>
        <p className="text-lg" style={{ color: '#503d2e' }}>
          A Magnificat (Lc 1,46-55)<br/>
          A minha alma glorifica o Senhor<br/>
          E o meu espírito se alegra em Deus, meu Salvador!
        </p>
      </section>

      {/* ORAÇÃO A SÃO MIGUEL */}
      <section>
        <h4 className="text-lg font-semibold mb-2" style={{ color: '#503d2e' }}>Oração a São Miguel</h4>
        <p className="text-lg" style={{ color: '#503d2e' }}>
          São Miguel Arcanjo, defendei-nos no combate, sede o nosso refúgio contra as maldades e ciladas do demônio. Ordene-lhe Deus, instantemente o pedimos, e vós, príncipe da milícia celeste, pela virtude divina, precipitai no inferno a satanás e aos outros espíritos malignos, que andam pelo mundo para perder as almas. Amém.
        </p>
      </section>
    </div>
  );

  const latim = (
    <div className="space-y-6">
      {/* ORAÇÕES INICIAIS */}
      <section>
        <h4 className="text-lg font-semibold mb-2" style={{ color: '#503d2e' }}>Preces Initiales</h4>
        <p className="text-lg" style={{ color: '#503d2e' }}>
          <span className="text-red-600 font-semibold">V.</span> In nómine Patris, et Fílii, et Spíritus Sancti.<br/>
          <span className="text-red-600 font-semibold">R.</span> Amen.<br/>
          <span className="text-red-600 font-semibold">V.</span> Veni, Sancte Spíritus...<br/>
          <span className="text-red-600 font-semibold">R.</span> Reple tuórum corda fidélium, et tui amóris in eis ignem accénde. Emítte Spíritum tuum et creabúntur.<br/>
          <span className="text-red-600 font-semibold">V.</span> Et renovábis fáciem terræ.<br/>
        </p>
        <p className="text-lg italic mt-2" style={{ color: '#503d2e' }}>
          Orémus: Deus, qui corda fidélium Sancti Spíritus illustratióne docuísti: da nobis in eódem Spíritu recta sápere; et de eius semper consolatióne gaudére. Per Christum Dóminum nostrum.
        </p>
        <p className="text-lg" style={{ color: '#503d2e' }}>
          <span className="text-red-600 font-semibold">R.</span> Amen.
        </p>
      </section>

      {/* CATENA LEGIONIS */}
      <section>
        <h4 className="text-lg font-semibold mb-2" style={{ color: '#503d2e' }}>Catena Legionis</h4>
        <p className="text-lg italic mb-4" style={{ color: '#503d2e' }}>
          Antiphona: Quæ est ista quæ progréditur quasi auróra consúrgens, pulchra ut luna, elécta ut sol, terríbilis ut castrórum ácies ordináta?
        </p>
        <p className="text-lg" style={{ color: '#503d2e' }}>
          Magnificat (Lc 1,46-55)<br/>
          Magníficat ánima mea Dóminum<br/>
          Et exsultávit spíritus meus in Deo salutári meo.
        </p>
      </section>

      {/* ORAÇÃO A SÃO MIGUEL */}
      <section>
        <h4 className="text-lg font-semibold mb-2" style={{ color: '#503d2e' }}>Oratio ad Sanctum Michaelem</h4>
        <p className="text-lg" style={{ color: '#503d2e' }}>
          Sancte Míchaël Archángele, defénde nos in proélio; contra nequítiam et insídias diáboli esto præsídium. Imperet illi Deus, súpplices deprecámur: tuque, Princeps milítiæ cæléstis, Sátanam aliósque spíritus malígnos, qui ad perditiónem animárum pervagántur in mundo, divína virtúte in inférnum detrúde. Amen.
        </p>
      </section>
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
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#503d2e' }}>Legião de Maria</h2>
        <h3 className="text-xl font-semibold mb-6 text-center" style={{ color: '#503d2e' }}>Orações da Tessera</h3>

        {!isLatin ? portugues : latim}
      </div>
    </div>
  );
};
