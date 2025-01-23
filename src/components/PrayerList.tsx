import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Prayer } from '../types/prayers';
import { PrayerView } from './PrayerView';

export const PrayerList: React.FC = () => {
  const [prayers, setPrayers] = useState<Prayer[]>([]);
  const [selectedPrayer, setSelectedPrayer] = useState<Prayer | null>(null);

  useEffect(() => {
    const loadPrayers = async () => {
      const { data } = await supabase
        .from('prayers')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (data) setPrayers(data);
    };

    loadPrayers();
  }, []);

  return (
    <div className="space-y-6">
      {selectedPrayer ? (
        <>
          <button
            onClick={() => setSelectedPrayer(null)}
            className="text-[#503d2e] hover:underline"
          >
            ← Voltar para lista
          </button>
          <PrayerView prayer={selectedPrayer} />
        </>
      ) : (
        <div className="grid gap-4">
          {prayers.map((prayer) => (
            <button
              key={prayer.id}
              onClick={() => setSelectedPrayer(prayer)}
              className="text-left p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-lg mb-2" style={{ color: '#503d2e' }}>
                {prayer.title}
              </h3>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Visualizações: {prayer.views}</span>
                <span>Orações: {prayer.pray_count}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};