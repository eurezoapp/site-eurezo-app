import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { mysteryGroups } from './types/mysteries';
import { InitialPrayers, FinalPrayers } from './components/Prayers';
import { MysteryDisplay } from './components/MysteryDisplay';
import { Header } from './components/Header';
import { MysterySelector } from './components/MysterySelector';
import { DivineChaplet } from './components/DivineChaplet';
import { AngelusPrayers } from './components/AngelusPrayers';
import { ConsagracaoPrayer } from './components/ConsagracaoPrayer';
import { WhenToConfess } from './components/WhenToConfess';
import { TenCommandments } from './components/TenCommandments';
import { AlmaDeCristo } from './components/AlmaDeCristo';
import { ComunhaoEspiritual } from './components/ComunhaoEspiritual';
import { HomiliasDominicais } from './components/HomiliasDominicais';
import { Footer } from './components/Footer';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { Stats } from './pages/Stats';
import { InstallButton } from './components/InstallButton';
import { Donate } from './pages/Donate';
import { FileUpload } from './pages/FileUpload';
import { MealPrayers } from './components/MealPrayers';
import { SalveRegina } from './components/SalveRegina';
import { VeniSancte } from './components/VeniSancte';
import { OfertaDiaria } from './components/OfertaDiaria';
import { LegiaoMaria } from './components/LegiaoMaria';
import { OficioImaculada } from './components/OficioImaculada';
import { SaoBentoMedalha } from './components/SaoBentoMedalha';

const App: React.FC = () => {
  const [fontSize, setFontSize] = useState(16);
  const [selectedMystery, setSelectedMystery] = useState(mysteryGroups[0].mysteries);
  const [prayerType, setPrayerType] = useState<'none' | 'rosary' | 'mercy' | 'angelus' | 'consagracao' | 'confession' | 'commandments' | 'almacristo' | 'comunhao' | 'homilias' | 'mealprayers' | 'salveregina' | 'venisancte' | 'ofertadiaria' | 'legiaomaria' | 'oficioimaculada' | 'saobentobencao'>('none');
  const location = useLocation();
  
  useEffect(() => {
    // Increment visit count
    const visits = parseInt(localStorage.getItem('totalVisits') || '0') + 1;
    localStorage.setItem('totalVisits', visits.toString());
    
    // Track prayer usage
    const prayerStats = JSON.parse(localStorage.getItem('prayerStats') || '{}');
    if (prayerType !== 'none') {
      prayerStats[prayerType] = (prayerStats[prayerType] || 0) + 1;
      localStorage.setItem('prayerStats', JSON.stringify(prayerStats));
    }
  }, [prayerType]);

  useEffect(() => {
    const today = new Date().getDay();
    const dayMap: { [key: string]: number } = {
      'Domingo': 0,
      'Segunda-feira': 1,
      'Terça-feira': 2,
      'Quarta-feira': 3,
      'Quinta-feira': 4,
      'Sexta-feira': 5,
      'Sábado': 6
    };
    
    const todayMystery = mysteryGroups.find(group => 
      group.days.some(day => dayMap[day] === today)
    );
    
    if (todayMystery) {
      setSelectedMystery(todayMystery.mysteries);
    }
  }, []);

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 12));

  const handlePrayerTypeSelect = (value: string) => {
    if (value === 'Terço da Misericórdia') {
      setPrayerType('mercy');
    } else if (value === 'Ângelus') {
      setPrayerType('angelus');
    } else if (value === 'Consagração a Nossa Senhora') {
      setPrayerType('consagracao');
    } else if (value === 'Quando Confessar') {
      setPrayerType('confession');
    } else if (value === 'Os 10 Mandamentos') {
      setPrayerType('commandments');
    } else if (value === 'Alma de Cristo') {
      setPrayerType('almacristo');
    } else if (value === 'Comunhão Espiritual') {
      setPrayerType('comunhao');
    } else if (value === 'Homilias Dominicais') {
      setPrayerType('homilias');
    } else if (value === 'Oração antes das refeições') {
      setPrayerType('mealprayers');
    } else if (value === 'Salve Rainha') {
      setPrayerType('salveregina');
    } else if (value === 'Vinde Espírito Santo') {
      setPrayerType('venisancte');
    } else if (value === 'Oferecimento Diário') {
      setPrayerType('ofertadiaria');
    } else if (value === 'Legião de Maria') {
      setPrayerType('legiaomaria');
    } else if (value === 'Ofício da Imaculada') {
      setPrayerType('oficioimaculada');
    } else if (value === 'Bênção de São Bento') {
      setPrayerType('saobentobencao');
    } else if (value === 'none') {
      setPrayerType('none');
    } else {
      setPrayerType('rosary');
      const mystery = mysteryGroups.find(g => g.name === value);
      if (mystery) setSelectedMystery(mystery.mysteries);
    }
  };

  const renderPrayer = () => {
    switch (prayerType) {
      case 'mercy':
        return <DivineChaplet />;
      case 'angelus':
        return <AngelusPrayers />;
      case 'consagracao':
        return <ConsagracaoPrayer />;
      case 'confession':
        return <WhenToConfess />;
      case 'commandments':
        return <TenCommandments />;
      case 'almacristo':
        return <AlmaDeCristo />;
      case 'comunhao':
        return <ComunhaoEspiritual />;
      case 'homilias':
        return <HomiliasDominicais />;
      case 'mealprayers':
        return <MealPrayers />;
      case 'salveregina':
        return <SalveRegina />;
      case 'venisancte':
        return <VeniSancte />;
      case 'ofertadiaria':
        return <OfertaDiaria />;
      case 'legiaomaria':
        return <LegiaoMaria />;
      case 'oficioimaculada':
        return <OficioImaculada />;
      case 'saobentobencao':
        return <SaoBentoMedalha />;
      case 'rosary':
        return (
          <>
            <InitialPrayers />
            <MysteryDisplay mystery={selectedMystery} />
            <FinalPrayers />
          </>
        );
      default:
        return null;
    }
  };

  const MainContent = () => (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#e5d6ac', fontSize: `${fontSize}px` }}>
      <Header 
        fontSize={fontSize}
        onIncrease={increaseFontSize}
        onDecrease={decreaseFontSize}
      />

      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          {/* Welcome Message */}
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#503d2e' }}>
              Seja bem-vindo(a) ao App de orações cotidianas
            </h2>
            <p className="text-gray-600">
              Selecione a oração que deseja rezar.
            </p>
          </div>

          {/* Prayer Selector */}
          <div className="space-y-4">
            <MysterySelector
              mysteryGroups={mysteryGroups}
              selectedMystery={
                prayerType === 'rosary' 
                  ? selectedMystery.title 
                  : prayerType === 'mercy'
                    ? 'Terço da Misericórdia'
                    : prayerType === 'angelus'
                      ? 'Ângelus'
                      : prayerType === 'confession'
                        ? 'Quando Confessar'
                        : prayerType === 'commandments'
                          ? 'Os 10 Mandamentos'
                          : prayerType === 'consagracao'
                            ? 'Consagração a Nossa Senhora'
                            : prayerType === 'almacristo'
                              ? 'Alma de Cristo'
                              : prayerType === 'comunhao'
                                ? 'Comunhão Espiritual'
                                : prayerType === 'homilias'
                                  ? 'Homilias Dominicais'
                                  : prayerType === 'mealprayers'
                                    ? 'Oração antes das refeições'
                                    : prayerType === 'salveregina'
                                      ? 'Salve Rainha'
                                      : prayerType === 'venisancte'
                                        ? 'Vinde Espírito Santo'
                                        : prayerType === 'ofertadiaria'
                                          ? 'Oferecimento Diário'
                                          : prayerType === 'legiaomaria'
                                            ? 'Legião de Maria'
                                            : prayerType === 'oficioimaculada'
                                              ? 'Ofício da Imaculada'
                                              : prayerType === 'saobentobencao'
                                                ? 'Bênção de São Bento'
                                                : 'Selecione uma oração'
              }
              onSelect={handlePrayerTypeSelect}
              showAdditionalPrayers={true}
            />
            
            {prayerType === 'none' && <InstallButton />}
          </div>

          {/* Prayer Content */}
          {renderPrayer()}

          {/* Ad Space */}
          <div className="mt-8 p-4 bg-gray-100 rounded-lg text-center">
            <div id="ad-space" className="min-h-[100px] flex items-center justify-center">
              <p className="text-gray-500">Anuncie Aqui!</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="sticky bottom-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="max-w-3xl mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  );

  if (location.pathname === '/stats') {
    return <Stats />;
  }

  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/termos" element={<Terms fontSize={fontSize} />} />
      <Route path="/privacidade" element={<Privacy fontSize={fontSize} />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/upload" element={<FileUpload />} />
    </Routes>
  );
};

export default App;
