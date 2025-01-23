import React, { useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Prayer } from '../types/prayers';

interface PrayerViewProps {
  prayer: Prayer;
}

export const PrayerView: React.FC<PrayerViewProps> = ({ prayer }) => {
  useEffect(() => {
    const incrementViews = async () => {
      await supabase
        .from('prayers')
        .update({ views: prayer.views + 1 })
        .eq('id', prayer.id);
    };

    incrementViews();
  }, [prayer.id, prayer.views]);

  const handlePrayClick = async () => {
    await supabase
      .from('prayers')
      .update({ pray_count: prayer.pray_count + 1 })
      .eq('id', prayer.id);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center" style={{ color: '#503d2e' }}>
        {prayer.title}
      </h2>
      
      <div 
        className="prayer-content"
        dangerouslySetInnerHTML={{ __html: prayer.content }}
      />

      <div className="flex justify-between items-center text-sm text-gray-600">
        <div>
          Visualizações: {prayer.views}
        </div>
        <button
          onClick={handlePrayClick}
          className="px-4 py-2 bg-[#503d2e] text-white rounded-md hover:bg-[#3d2e22] transition-colors"
        >
          Rezei esta oração
        </button>
      </div>
    </div>
  );
};