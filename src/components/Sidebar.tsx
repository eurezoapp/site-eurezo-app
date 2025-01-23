import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Menu, X } from 'lucide-react';

interface Page {
  id: string;
  title: string;
  slug: string;
}

export const Sidebar: React.FC = () => {
  const [pages, setPages] = useState<Page[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loadPages = async () => {
      const { data } = await supabase
        .from('pages')
        .select('id, title, slug')
        .order('title');
      
      if (data) setPages(data);
    };

    loadPages();
  }, []);

  if (pages.length === 0) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-4 z-50 p-2 bg-[#503d2e] text-white rounded-md md:hidden"
      >
        <Menu size={24} />
      </button>

      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-200 ease-in-out md:translate-x-0 shadow-lg`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-[#503d2e]">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-600 hover:text-gray-800 md:hidden"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="space-y-2">
            {pages.map((page) => (
              <a
                key={page.id}
                href={`/page/${page.slug}`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                {page.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};