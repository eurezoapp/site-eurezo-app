import React, { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { supabase } from '../../lib/supabase';

interface PageEditorProps {
  page?: Page;
  onSave: () => void;
}

export const PageEditor: React.FC<PageEditorProps> = ({ page, onSave }) => {
  const [title, setTitle] = useState(page?.title || '');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const editorRef = useRef<any>(null);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  const handleSave = async () => {
    setError('');
    setSuccess('');

    if (!title) {
      setError('Por favor, preencha o título');
      return;
    }

    if (!editorRef.current?.getContent()) {
      setError('Por favor, adicione o conteúdo da página');
      return;
    }

    setSaving(true);
    try {
      const content = editorRef.current.getContent();
      const slug = generateSlug(title);
      
      if (page?.id) {
        const { error: updateError } = await supabase
          .from('pages')
          .update({ title, content, slug })
          .eq('id', page.id);
          
        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase
          .from('pages')
          .insert([{ title, content, slug }]);
          
        if (insertError) throw insertError;
      }
      
      setSuccess('Página salva com sucesso!');
      setTimeout(() => {
        onSave();
      }, 1500);
    } catch (err) {
      setError('Erro ao salvar a página. Tente novamente.');
      console.error('Error saving page:', err);
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
        placeholder="Título da Página"
        className="w-full px-4 py-2 border rounded-md"
        required
      />

      <Editor
        apiKey="mfispgfnvj9xi37jk9mxyv46mjmnh78pwgar1xsjnx3nd9sk"
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={page?.content || ''}
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