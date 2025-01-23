import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Heart } from 'lucide-react';

export const Stats: React.FC = () => {
  const totalVisits = localStorage.getItem('totalVisits') || '0';
  const prayerStats = JSON.parse(localStorage.getItem('prayerStats') || '{}');

  const prayerNames: { [key: string]: string } = {
    rosary: 'Terço',
    mercy: 'Terço da Misericórdia',
    angelus: 'Ângelus',
    consagracao: 'Consagração a Nossa Senhora',
    confession: 'Quando Confessar',
    commandments: 'Os 10 Mandamentos',
    almacristo: 'Alma de Cristo',
    comunhao: 'Comunhão Espiritual'
  };

  const sortedPrayers = Object.entries(prayerStats)
    .sort(([, a], [, b]) => (b as number) - (a as number))
    .map(([key, value]) => ({
      name: prayerNames[key] || key,
      count: value as number
    }));

  return (
    <div className="min-h-screen bg-[#e5d6ac]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Link 
              to="/" 
              className="inline-flex items-center text-[#503d2e] hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Link>
            
            <h1 className="text-2xl font-bold mb-6" style={{ color: '#503d2e' }}>
              Estatísticas
            </h1>

            <div className="space-y-6">
              <div className="p-4 bg-[#f8f4e8] rounded-lg border border-[#503d2e]">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="text-[#503d2e]" />
                  <h2 className="text-lg font-semibold text-[#503d2e]">
                    Total de Visitas
                  </h2>
                </div>
                <p className="text-2xl font-bold text-[#503d2e]">
                  {totalVisits}
                </p>
              </div>

              <div className="p-4 bg-[#f8f4e8] rounded-lg border border-[#503d2e]">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="text-[#503d2e]" />
                  <h2 className="text-lg font-semibold text-[#503d2e]">
                    Orações Mais Rezadas
                  </h2>
                </div>
                <div className="space-y-2">
                  {sortedPrayers.map((prayer, index) => (
                    <div 
                      key={prayer.name}
                      className="flex justify-between items-center p-2 bg-white rounded"
                    >
                      <span className="font-medium text-[#503d2e]">
                        {index + 1}. {prayer.name}
                      </span>
                      <span className="text-gray-600">
                        {prayer.count}x
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};