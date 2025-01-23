import React, { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { supabase } from '../../lib/supabase';

interface PrayerEditorProps {
  prayer?: Prayer;
  onSave: () => void;
}

export const PrayerEditor: React.FC<PrayerEditorProps> = ({ prayer, onSave }) => {
  const [title, setTitle] = useState(prayer?.title || '');
  const [visible, setVisible] = useState(prayer?.visible ?? true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const editorRef = useRef<any>(null);

  const handleSave = async () => {
    setError('');
    setSuccess('');

    if (!title) {
      setError('Por favor, preencha o título');
      return;
    }

    if (!editorRef.current?.getContent()) {
      setError('Por favor, adicione o conteúdo da oração');
      return;
    }

    setSaving(true);
    try {
      const content = editorRef.current.getContent();
      
      if (prayer?.id) {
        const { error: updateError } = await supabase
          .from('prayers')
          .update({ title, content, visible })
          .eq('id', prayer.id);
          
        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase
          .from('prayers')
          .insert([{ title, content, visible }]);
          
        if (insertError) throw insertError;
      }
      
      setSuccess('Oração salva com sucesso!');
      setTimeout(() => {
        onSave();
      }, 1500);
    } catch (err) {
      setError('Erro ao salvar a oração. Tente novamente.');
      console.error('Error saving prayer:', err);
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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título da Oração"
        className="w-full px-4 py-2 border rounded-md"
        required
      />

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="visible"
          checked={visible}
          onChange={(e) => setVisible(e.target.checked)}
          className="rounded border-gray-300"
        />
        <label htmlFor="visible" className="text-sm text-gray-700">
          Oração visível no site
        </label>
      </div>

      <Editor
        apiKey="mfispgfnvj9xi37jk9mxyv46mjmnh78pwgar1xsjnx3nd9sk"
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={prayer?.content || ''}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />

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