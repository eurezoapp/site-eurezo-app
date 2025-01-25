import React, { useState } from 'react';

export const OficioImaculada: React.FC = () => {
  const [isLatim, setIsLatim] = useState(false);

  const renderHora = (titulo: string, conteudo: JSX.Element) => (
    <section className="mt-8 first:mt-0">
      <h3 className="text-xl font-semibold mb-4 text-center" style={{ color: '#503d2e' }}>{titulo}</h3>
      {conteudo}
    </section>
  );

  const renderVersiculoResposta = (versiculo: string, resposta: string) => (
    <div className="mb-2">
      <p className="text-lg" style={{ color: '#503d2e' }}>
        <span className="text-red-600 font-semibold">V.</span> {versiculo}<br/>
        <span className="text-red-600 font-semibold">R.</span> {resposta}
      </p>
    </div>
  );

  const renderOracao = (texto: string) => (
    <p className="text-lg italic mt-4 mb-4" style={{ color: '#503d2e' }}>
      Oremos: {texto}
    </p>
  );

  const renderHino = (estrofes: string[]) => (
    <div className="space-y-4 my-4">
      {estrofes.map((estrofe, index) => (
        <p key={index} className="text-lg whitespace-pre-line" style={{ color: '#503d2e' }}>
          {estrofe}
        </p>
      ))}
    </div>
  );

  const portugues = (
    <>
      <div className="mb-6">
        <p className="text-lg mb-4" style={{ color: '#503d2e' }}>
          Deus vos salve, filha de Deus Pai!<br/>
          Deus vos salve, mãe de Deus Filho!<br/>
          Deus vos salve, esposa do Espírito santo!<br/>
          Deus vos salve, sacrário da Santíssima trindade!
        </p>
      </div>

      {renderHora("MATINAS", (
        <>
          <p className="text-lg italic mb-4" style={{ color: '#503d2e' }}>
            Agora, lábios meus dizei e anunciai os grandes louvores da Virgem, Mãe de Deus
          </p>

          {renderVersiculoResposta(
            "Sede em meu favor, Virgem soberana,",
            "livrai-me do inimigo com vosso valor."
          )}

          {renderVersiculoResposta(
            "Glória seja ao Pai, ao Filho e ao Amor também,",
            "que é um só Deus em pessoas três, agora e sempre e sem fim. Amém."
          )}

          <h4 className="text-lg font-semibold mb-2 mt-4" style={{ color: '#503d2e' }}>Hino</h4>
          {renderHino([
            "Deus vos salve,\nVirgem Senhora do mundo\nrainha dos céus,\ne das virgens, Virgem.",
            "Estrela da manhã\nDeus vos Salve,\ncheia de graça divina,\nformosa e louçã.",
            "Dai pressa, Senhora,\nem favor do mundo,\npois vos reconhece\ncomo defensora.",
            "Deus vos nomeou\ndesde a eternidade\npara a mãe do Verbo\ncom o qual criou",
            "Terra, mar e céus,\ne vos escolheu,\nquando Adão pecou,\npor esposa de Deus.",
            "Deus a escolheu\ne, já muito antes,\nem seu tabernáculo\nmorada lhe deu.",
            "Ouvi, Mãe de Deus,\nminha oração.\nToquem em vosso peito\nos clamores meus."
          ])}

          {renderOracao("Santa Maria, rainha dos céus, mãe de nosso Senhor Jesus Cristo, senhora do mundo, que a nenhum pecador desamparais e nem desprezais, ponde, senhora, em mim os olhos de vossa piedade e alcançai de vosso amado filho o perdão de todos os meus pecados, para que eu, que agora venero com devoção vossa Santa e Imaculada Conceição, mereça na outra vida alcançar o prêmio da bem-aventurança, pelo merecimento de vosso bendito Filho Jesus Cristo, nosso Senhor, que com o Pai e o Espírito Santo vive e reina para sempre. Amém.")}
        </>
      ))}

      {renderHora("PRIMA (LAUDES)", (
        <>
          {renderVersiculoResposta(
            "Sede em meu favor, Virgem soberana,",
            "livrai-me do inimigo com vosso valor."
          )}

          {renderVersiculoResposta(
            "Glória seja ao Pai, ao Filho e ao Amor também,",
            "que é um só Deus em pessoas três, agora e sempre e sem fim. Amém."
          )}

          <h4 className="text-lg font-semibold mb-2 mt-4" style={{ color: '#503d2e' }}>Hino</h4>
          {renderHino([
            "Deus vos salve, mesa\npara Deus ornada,\ncoluna sagrada,\nde grande firmeza.",
            "Casa dedicada\na Deus sempiterno.\nSempre preservada,\nVirgem, do pecado.",
            "Antes que nascida\nfostes, Virgem santa,\nno ventre ditoso\nde Ana concebida.",
            "Sois mãe criadora\ndos mortais viventes.\nSois dos santos porta,\ndos anjos, senhora.",
            "Sois forte esquadrão\ncontra o inimigo.\nEstrela de Jacó,\nrefúgio do cristão.",
            "A Virgem criou\nDeus, no Espírito Santo,\ne todas as suas obras,\ncom ela as ornou.",
            "Ouvi, Mãe de Deus,\nminha oração.\nToquem em vosso peito\nos clamores meus."
          ])}

          {renderOracao("Santa Maria, rainha dos céus, mãe de nosso Senhor Jesus Cristo, senhora do mundo, que a nenhum pecador desamparais e nem desprezais, ponde, senhora, em mim os olhos de vossa piedade e alcançai de vosso amado filho o perdão de todos os meus pecados, para que eu, que agora venero com devoção vossa Santa e Imaculada Conceição, mereça na outra vida alcançar o prêmio da bem-aventurança, pelo merecimento de vosso bendito Filho Jesus Cristo, nosso Senhor, que com o Pai e o Espírito Santo vive e reina para sempre. Amém.")}
        </>
      ))}

      {renderHora("TERÇA", (
        <>
          {renderVersiculoResposta(
            "Sede em meu favor, Virgem soberana,",
            "livrai-me do inimigo com vosso valor."
          )}

          {renderVersiculoResposta(
            "Glória seja ao Pai, ao Filho e ao Amor também,",
            "que é um só Deus em pessoas três, agora e sempre e sem fim. Amém."
          )}

          <h4 className="text-lg font-semibold mb-2 mt-4" style={{ color: '#503d2e' }}>Hino</h4>
          {renderHino([
            "Deus vos salve, trono\ndo grão Salomão,\narca do concerto\nvelo de Gedeão!",
            "Íris do céu clara,\nsarça da visão,\nfavo de Sansão,\nflorescente vara,",
            "A qual escolheu\npara ser mãe sua,\ne de vós nasceu\no Filho de Deus.",
            "Assim vos livrou\nda culpa original\nDe nenhum pecado\nhá em vós sinal.",
            "Vós que habitais\nlá nas alturas,\ne tendes vosso trono\nentre as nuvens puras.",
            "Ouvi, Mãe de Deus,\nminha oração.\nToquem em vosso peito\nos clamores meus."
          ])}

          {renderOracao("Santa Maria, rainha dos céus, mãe de nosso Senhor Jesus Cristo, senhora do mundo, que a nenhum pecador desamparais e nem desprezais, ponde, senhora, em mim os olhos de vossa piedade e alcançai de vosso amado filho o perdão de todos os meus pecados, para que eu, que agora venero com devoção vossa Santa e Imaculada Conceição, mereça na outra vida alcançar o prêmio da bem-aventurança, pelo merecimento de vosso bendito Filho Jesus Cristo, nosso Senhor, que com o Pai e o Espírito Santo vive e reina para sempre. Amém.")}
        </>
      ))}

      {renderHora("SEXTA", (
        <>
          {renderVersiculoResposta(
            "Sede em meu favor, Virgem soberana,",
            "livrai-me do inimigo com vosso valor."
          )}

          {renderVersiculoResposta(
            "Glória seja ao Pai, ao Filho e ao Amor também,",
            "que é um só Deus em pessoas três, agora e sempre e sem fim. Amém."
          )}

          <h4 className="text-lg font-semibold mb-2 mt-4" style={{ color: '#503d2e' }}>Hino</h4>
          {renderHino([
            "Deus vos salve, Virgem,\nda Trindade templo,\nalegria dos anjos,\nda pureza exemplo.",
            "Que alegrais os tristes\ncom vossa clemência,\nhorto de deleites,\npalma de paciência.",
            "Sois terra bendita\ne sacerdotal.\nSois da castidade,\nsímbolo real.",
            "Cidade do Altíssimo,\nporta oriental,\nsois a mesma graça,\nVirgem singular.",
            "Qual lírio cheiroso\nentre espinhas duras\ntal sois vós, Senhora,\nentre as criaturas.",
            "Ouvi, Mãe de Deus,\nminha oração.\nToquem em vosso peito\nos clamores meus."
          ])}

          {renderOracao("Santa Maria, rainha dos céus, mãe de nosso Senhor Jesus Cristo, senhora do mundo, que a nenhum pecador desamparais e nem desprezais, ponde, senhora, em mim os olhos de vossa piedade e alcançai de vosso amado filho o perdão de todos os meus pecados, para que eu, que agora venero com devoção vossa Santa e Imaculada Conceição, mereça na outra vida alcançar o prêmio da bem-aventurança, pelo merecimento de vosso bendito Filho Jesus Cristo, nosso Senhor, que com o Pai e o Espírito Santo vive e reina para sempre. Amém.")}
        </>
      ))}

      {renderHora("NONA (NOA)", (
        <>
          {renderVersiculoResposta(
            "Sede em meu favor, Virgem soberana,",
            "livrai-me do inimigo com vosso valor."
          )}

          {renderVersiculoResposta(
            "Glória seja ao Pai, ao Filho e ao Amor também,",
            "que é um só Deus em pessoas três, agora e sempre e sem fim. Amém."
          )}

          <h4 className="text-lg font-semibold mb-2 mt-4" style={{ color: '#503d2e' }}>Hino</h4>
          {renderHino([
            "Deus vos salve, cidade\nde torres guarnecida,\nde Davi com armas\nbem fortalecida.",
            "De suma caridade\nsempre abrasada.\nDo dragão a força\nfoi por vós prostrada.",
            "Ó mulher tão forte!\nÓ invicta Judite!\nQue vós alentastes\no sumo Davi!",
            "Do Egito o curador\nde Raquel nasceu,\ndo mundo o Salvador,\nMaria no-lo deu.",
            "Toda é formosa\nminha companheira;\nnela não há mácula\nda culpa primeira.",
            "Ouvi, Mãe de Deus,\nminha oração.\nToquem em vosso peito\nos clamores meus."
          ])}

          {renderOracao("Santa Maria, rainha dos céus, mãe de nosso Senhor Jesus Cristo, senhora do mundo, que a nenhum pecador desamparais e nem desprezais, ponde, senhora, em mim os olhos de vossa piedade e alcançai de vosso amado filho o perdão de todos os meus pecados, para que eu, que agora venero com devoção vossa Santa e Imaculada Conceição, mereça na outra vida alcançar o prêmio da bem-aventurança, pelo merecimento de vosso bendito Filho Jesus Cristo, nosso Senhor, que com o Pai e o Espírito Santo vive e reina para sempre. Amém.")}
        </>
      ))}

      {renderHora("VÉSPERAS", (
        <>
          {renderVersiculoResposta(
            "Sede em meu favor, Virgem soberana,",
            "livrai-me do inimigo com vosso valor."
          )}

          {renderVersiculoResposta(
            "Glória seja ao Pai, ao Filho e ao Amor também,",
            "que é um só Deus em pessoas três, agora e sempre e sem fim. Amém."
          )}

          <h4 className="text-lg font-semibold mb-2 mt-4" style={{ color: '#503d2e' }}>Hino</h4>
          {renderHino([
            "Deus vos salve, relógio\nque andando atrasado\nserviu de sinal\nao verbo encarnado.",
            "Para que o homem suba\nàs sumas alturas,\ndesce Deus do céu\npara as criaturas.",
            "Com raios claros\ndo Sol de Justiça\nresplandece a Virgem\ndando ao sol cobiça",
            "Sois lírio formoso\nque cheiro respira\nentre os espinhos\nda serpente a ira.",
            "Vós a quebrantais\ncom vosso poder.\nOs cegos errados\nvós alumiais.",
            "Fizestes nascer\nSol tão fecundo,\ne, com as nuvens\ncobristes o mundo.",
            "Ouvi, Mãe de Deus,\nminha oração.\nToquem em vosso peito\nos clamores meus."
          ])}

          {renderOracao("Santa Maria, rainha dos céus, mãe de nosso Senhor Jesus Cristo, senhora do mundo, que a nenhum pecador desamparais e nem desprezais, ponde, senhora, em mim os olhos de vossa piedade e alcançai de vosso amado filho o perdão de todos os meus pecados, para que eu, que agora venero com devoção vossa Santa e Imaculada Conceição, mereça na outra vida alcançar o prêmio da bem-aventurança, pelo merecimento de vosso bendito Filho Jesus Cristo, nosso Senhor, que com o Pai e o Espírito Santo vive e reina para sempre. Amém.")}
        </>
      ))}

      {renderHora("COMPLETAS", (
        <>
          {renderVersiculoResposta(
            "Rogai a Deus, vós, Virgem, nos converta.",
            "Que a sua ira, aparte de nós."
          )}

          {renderVersiculoResposta(
            "Sede em meu favor, Virgem soberana,",
            "livrai-me do inimigo com vosso valor."
          )}

          {renderVersiculoResposta(
            "Glória seja ao Pai, ao Filho e ao Amor também,",
            "que é um só Deus em pessoas três, agora e sempre e sem fim. Amém."
          )}

          <h4 className="text-lg font-semibold mb-2 mt-4" style={{ color: '#503d2e' }}>Hino</h4>
          {renderHino([
            "Deus vos salve, Virgem,\nMãe imaculada,\nrainha de clemência\nde estrela coroada.",
            "Vós sobre os anjos\nsois purificada;\nde Deus à mão direita\nestais de ouro ornada.",
            "Por vós, Mãe da graça,\nmereçamos ver\na Deus nas alturas\ncom todo prazer.",
            "Pois sois esperança\ndos pobres errantes,\ne seguro porto\ndos navegantes.",
            "Estrela do mar\ne saúde certa,\ne porta que estais\npara o céu aberta.",
            "É óleo derramado,\nVirgem, vosso nome,\ne os servos vossos\nvos hão sempre amado.",
            "Ouvi, Mãe de Deus,\nminha oração.\nToquem em vosso peito\nos clamores meus."
          ])}

          {renderOracao("Santa Maria, rainha dos céus, mãe de nosso Senhor Jesus Cristo, senhora do mundo, que a nenhum pecador desamparais e nem desprezais, ponde, senhora, em mim os olhos de vossa piedade e alcançai de vosso amado filho o perdão de todos os meus pecados, para que eu, que agora venero com devoção vossa Santa e Imaculada Conceição, mereça na outra vida alcançar o prêmio da bem-aventurança, pelo merecimento de vosso bendito Filho Jesus Cristo, nosso Senhor, que com o Pai e o Espírito Santo vive e reina para sempre. Amém.")}
        </>
      ))}

      {/* Continua com as outras horas... */}

      {renderHora("OFERECIMENTO", (
        <>
          {renderHino([
            "Humildes oferecemos\na vós, Virgem pia,\nestas orações,\nporque, em nossa guia,\nvades vós adiante\ne, na agonia,\nvós nos animeis,\nó doce Mãe Maria!\nAmém."
          ])}
        </>
      ))}
    </>
  );

  const latim = (
    <>
      <div className="mb-6">
        <p className="text-lg italic mb-4" style={{ color: '#503d2e' }}>
          Signum Crucis:<br/>
          Per signum <span className="text-red-600">✠</span> crucis, de <span className="text-red-600">✠</span> inimicis nostris libera-nos Deus <span className="text-red-600">✠</span> noster.<br/>
          In nonime Patris <span className="text-red-600">✠</span> et Fílio <span className="text-red-600">✠</span> et Spitiui Sancto <span className="text-red-600">✠</span>. Amen.
        </p>
      </div>

      {renderHora("Ad Matutinum", (
        <>
          <p className="text-lg italic mb-4" style={{ color: '#503d2e' }}>
            Eia, mea labia, nunc annuntiate, laudes et praeconia Virginis beatae.
          </p>

          {renderVersiculoResposta(
            "DOMINA, in adiutorium meum intende.",
            "Me de manu hostium potenter defende."
          )}

          {renderVersiculoResposta(
            "Gloria Patri, et Filio, et Spiritui Sancto.",
            "Sicut erat in principio, et nunc, et semper, et in saecula saeculorum. Amen."
          )}

          <h4 className="text-lg font-semibold mb-2 mt-4" style={{ color: '#503d2e' }}>Hymnus</h4>
          {renderHino([
            "SALVE, mundi Domina,\ncaelorum Regina:\nSalve, Virgo virginum,\nstella matutina",
            "Salve, plena gratia,\nclara luce divina.\nMundi in auxilium,\nDomina, festina.",
            "Ab aeterno Dominus\nte praeordinavit\nmatrem unigeniti\nVerbi, quo creavit.",
            "Terram, pontum, aethera,\nte pulchram ornavit\nsibi Sponsam, quae\nin Adam non peccavit.\nAmen."
          ])}

          {renderVersiculoResposta(
            "Elegit eam Deus, et praeelegit eam.",
            "In tabernaculo suo habitare fecit eam."
          )}

          {renderVersiculoResposta(
            "Domina, protege orationem meam.",
            "Et clamor meus ad te veniat."
          )}

          {renderOracao("Sancta Maria, Regina caelorum, Mater Domini nostri Iesu Christi, et mundi Domina, quae nullum derelinquis, et nullum despicis: respice me, Domina, clementer oculo pietatis, et impetra mihi apud tuum dilectum Filium cunctorum veniam peccatorum: ut qui nunc tuam sanctam et immaculatam conceptionem devoto affectu recolo, aeternae in futurum beatitudinis, bravium capiam, ipso, quem virgo peperisti, donante Domino nostro Iesu Christo: qui cum Patre et Sancto Spiritu vivit et regnat, in Trinitate perfecta, Deus, in saecula saeculorum. Amen.")}
        </>
      ))}

      {/* Continua com as outras horas em latim... */}

      {renderHora("Ad Commendationem", (
        <>
          {renderHino([
            "SUPPLICES offerimus\ntibi, virgo pia,\nhaec laudum praeconia:\nFac nos ut in via\nDucas cursu prospero,\net in agonia\ntu nobis assiste,\nO dulcis Maria.\n\nR. Deo gratias."
          ])}

          <p className="text-lg italic mt-4" style={{ color: '#503d2e' }}>
            Ant. Haec est virga in qua nec nodus originalis, nec cortex actualis culpae fuit.
          </p>

          {renderVersiculoResposta(
            "In conceptione tua virgo immaculata fuisti.",
            "Ora pro nobis Patrem, cuius Filium peperisti."
          )}

          {renderOracao("Deus, qui per immaculatam Virginis conceptionem dignum Filio tuo habitaculum praeparasti: quaesumus, ut qui ex morte eiusdem Filii tui praevisa eam ab omni labe praeservasti, nos quoque mundos eius intercessione ad te pervenire concedas. Per eundem Christum Dominum nostrum. Amen.")}
        </>
      ))}
    </>
  );

  return (
    <div className="max-w-2xl mx-auto p-4">
      <button
        onClick={() => setIsLatim(!isLatim)}
        className={`px-4 py-2 rounded-md transition-colors ${
          isLatim 
            ? 'bg-[#503d2e] text-white' 
            : 'bg-[#e5d6ac] text-[#503d2e]'
        }`}
      >
        {isLatim ? 'Ver em Português' : 'Ver em Latim'}
      </button>

      <div className="mt-6 p-4 bg-white rounded-lg shadow-md border border-[#e5d6ac]">
        {!isLatim ? (
          portugues
        ) : (
          latim
        )}
      </div>
    </div>
  );
};
