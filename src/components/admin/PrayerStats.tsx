import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { PrayerStats } from '../../types/prayers';
import { BarChart, Activity } from 'lucide-react';

export const PrayerStats: React.FC = () => {
  const [stats, setStats] = useState<PrayerStats | null>(null);

  useEffect(() => {
    const loadStats = async () => {
      const { data: prayers } = await supabase
        .from('prayers')
        .select('*')
        .order('views', { ascending: false });

      if (prayers) {
        const totalViews = prayers.reduce((sum, p) => sum + p.views, 0);
        const totalPrayers = prayers.reduce((sum, p) => sum + p.pray_count, 0);
        const mostViewed = prayers.slice(0, 5);
        const mostPrayed = [...prayers]
          .sort((a, b) => b.pray_count - a.pray_count)
          .slice(0, 5);

        setStats({
          total_views: totalViews,
          total_prayers: totalPrayers,
          most_viewed: mostViewed,
          most_prayed: mostPrayed
        });
      }
    };

    loadStats();
  }, []);

  if (!stats) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <BarChart className="text-[#503d2e]" />
          <h3 className="text-lg font-semibold text-[#503d2e]">
            Mais Visualizadas
          </h3>
        </div>
        <div className="space-y-2">
          {stats.most_viewed.map((prayer) => (
            <div key={prayer.id} className="flex justify-between">
              <span className="truncate">{prayer.title}</span>
              <span className="text-gray-600">{prayer.views}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="text-[#503d2e]" />
          <h3 className="text-lg font-semibold text-[#503d2e]">
            Mais Rezadas
          </h3>
        </div>
        <div className="space-y-2">
          {stats.most_prayed.map((prayer) => (
            <div key={prayer.id} className="flex justify-between">
              <span className="truncate">{prayer.title}</span>
              <span className="text-gray-600">{prayer.pray_count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};