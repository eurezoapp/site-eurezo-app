import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';

interface AdEditorProps {
  ad?: Ad;
  onSave: () => void;
}

export const AdEditor: React.FC<AdEditorProps> = ({ ad, onSave }) => {
  const [name, setName] = useState(ad?.name || '');
  const [code, setCode] = useState(ad?.code || '');
  const [location, setLocation] = useState(ad?.location || 'main');
  const [active, setActive] = useState(ad?.active ?? true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSave = async () => {
    setError('');
    setSuccess('');

    if (!name || !code) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    setSaving(true);
    try {
      if (ad?.id) {
        const { error: updateError } = await supabase
          .from('ads')
          .update({ name, code, location, active })
          .eq('id', ad.id);
          
        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase
          .from('ads')
          .insert([{ name, code, location, active }]);
          
        if (insertError) throw insertError;
      }
      
      setSuccess('Anúncio salvo com sucesso!');
      setTimeout(() => {
        onSave();
      }, 1500);
    } catch (err) {
      setError('Erro ao salvar o anúncio. Tente novamente.');
      console.error('Error saving ad:', err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      {error && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {success && (
        <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          {success}
        </div>
      )}

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome do Anúncio"
        className="w-full px-4 py-2 border rounded-md"
        required
      />

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full px-4 py-2 border rounded-md"
      >
        <option value="main">Principal</option>
        <option value="sidebar">Lateral</option>
        <option value="footer">Rodapé</option>
      </select>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Código do Anúncio"
        className="w-full h-40 px-4 py-2 border rounded-md font-mono"
        required
      />

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="active"
          checked={active}
          onChange={(e) => setActive(e.target.checked)}
          className="rounded border-gray-300"
        />
        <label htmlFor="active" className="text-sm text-gray-700">
          Anúncio ativo
        </label>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-4 py-2 bg-[#503d2e] text-white rounded-md hover:bg-[#3d2e22] transition-colors disabled:opacity-50"
        >
          {saving ? 'Salvando...' : 'Salvar'}
        </button>
      </div>
    </div>
  );
};