import React, { useState } from 'react';

interface AntifonasNossaSenhoraProps {
  fontSize?: number;
}

export const AntifonasNossaSenhora: React.FC<AntifonasNossaSenhoraProps> = ({ fontSize = 16 }) => {
  const [isLatin, setIsLatin] = useState(false);

  const portugues = (
    <div className="prose">
      <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#503d2e' }}>Antífonas de Nossa Senhora</h2>
      <div className="text-lg leading-relaxed space-y-6" style={{ color: '#503d2e' }}>
        <div>
          <h3 className="text-xl font-semibold mb-2">1</h3>
          <p className="text-center">
            Ó Mãe do Redentor, do céu ó porta,<br/>
            ao povo que caiu, socorre e exorta,<br/>
            pois busca levantar-se, Virgem pura,<br/>
            nascendo o Criador da criatura:<br/>
            tem piedade de nós e ouve, suave,<br/>
            o anjo te saudando com seu Ave!
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">2</h3>
          <p className="text-center">
            Ave, Rainha do céu;<br/>
            ave, dos anjos Senhora;<br/>
            ave, raiz, ave, porta;<br/>
            da luz do mundo és aurora.<br/>
            Exulta, ó Virgem tão bela,<br/>
            as outras seguem-te após;<br/>
            nós te saudamos: adeus!<br/>
            E pede a Cristo por nós!<br/>
            Virgem Mãe, ó Maria!
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">3</h3>
          <p className="text-center">
            Salve, Rainha, Mãe de misericórdia,<br/>
            vida doçura, esperança nossa, Salve!<br/>
            A vós bradamos os degredados filhos de Eva,<br/>
            a vós suspiramos gemendo e chorando<br/>
            neste vale de lágrimas!<br/>
            Eia, pois, Advogada nossa,<br/>
            esses vossos olhos misericordiosos a nós volvei,<br/>
            e depois deste desterro mostrai-nos Jesus,<br/>
            bendito fruto do vosso ventre!<br/>
            Ó clemente, ó piedosa,<br/>
            ó doce sempre Virgem Maria.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">4</h3>
          <p className="text-center">
            À vossa proteção recorremos, santa Mãe de Deus;<br/>
            não desprezeis as nossas súplicas em nossas necessidades,<br/>
            mas livrai-nos sempre de todos os perigos,<br/>
            ó Virgem gloriosa e bendita.
          </p>
        </div>
      </div>
    </div>
  );

  const latim = (
    <div className="prose">
      <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#503d2e' }}>Antiphonae Beatae Mariae Virginis</h2>
      <div className="text-lg leading-relaxed space-y-6" style={{ color: '#503d2e' }}>
        <div>
          <h3 className="text-xl font-semibold mb-2">I</h3>
          <p className="text-center">
            Alma Redemptóris Mater,<br/>
            quae pérvia caeli porta manes,<br/>
            et stella maris, succúrre cadénti,<br/>
            súrgere qui curat, pópulo;<br/>
            tu quae genuísti, natura miránte,<br/>
            tuum sanctum Genitórem,<br/>
            Virgo prius ac postérius,<br/>
            Gabriélis ab ore sumens illud Ave,<br/>
            peccatórum miserére.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">II</h3>
          <p className="text-center">
            Ave, Regína caelórum<br/>
            ave, Dómina angelórum,<br/>
            salve, radix, salve, porta,<br/>
            ex qua mundo lux est orta.<br/>
            Gaude, Virgo gloriósa,<br/>
            super omnes speciósa;<br/>
            vale, o valde decóra,<br/>
            et pro nobis Christum exóra.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">III</h3>
          <p className="text-center">
            Sub tuum praesídium confúgimus,<br/>
            sancta Dei Génitrix;<br/>
            nostras deprecatiónes ne despícias in necessitátibus,<br/>
            sed a perículis cunctis líbera nos semper,<br/>
            Virgo gloriósa et benedícta.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-4" style={{ fontSize: `${fontSize}px` }}>
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
