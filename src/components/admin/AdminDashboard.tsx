import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { PrayerEditor } from './PrayerEditor';
import { PageEditor } from './PageEditor';
import { AdEditor } from './AdEditor';
import { PlusCircle, Edit, Trash2, LogOut, Eye, EyeOff, Home } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';

// ... rest of imports ...

export const AdminDashboard: React.FC = () => {
  // ... existing state declarations ...

  useEffect(() => {
    const loadData = async () => {
      const [prayersData, pagesData, adsData] = await Promise.all([
        supabase.from('prayers').select('*').order('created_at', { ascending: false }),
        supabase.from('pages').select('*').order('created_at', { ascending: false }),
        supabase.from('ads').select('*').order('created_at', { ascending: false })
      ]);
      
      if (prayersData.data) setPrayers(prayersData.data);
      if (pagesData.data) setPages(pagesData.data);
      if (adsData.data) setAds(adsData.data);
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-[#e5d6ac]">
      <header className="bg-[#503d2e] text-white p-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-12 w-auto"
              />
              <h1 className="text-2xl font-bold">
                Painel Administrativo
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2 bg-[#eac948] text-[#503d2e] rounded-md hover:opacity-90 transition-opacity"
              >
                <Home size={20} />
                Página Inicial
              </Link>
              <button
                onClick={() => signOut()}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                <LogOut size={20} />
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* ... rest of the existing dashboard content ... */}
        </div>
      </div>
    </div>
  );
};