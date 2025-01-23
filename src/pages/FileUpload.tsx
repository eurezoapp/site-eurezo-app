import React, { useState } from 'react';
import { Upload, Check, Loader } from 'lucide-react';

export const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 3 * 1024 * 1024) {
        setError('O arquivo deve ter no máximo 3MB');
        return;
      }
      
      const allowedTypes = ['.png', '.jpg', '.pdf', '.webp', '.svg'];
      const fileExtension = selectedFile.name.toLowerCase().slice(selectedFile.name.lastIndexOf('.'));
      
      if (!allowedTypes.includes(fileExtension)) {
        setError('Formato de arquivo não permitido');
        return;
      }

      setFile(selectedFile);
      setError('');
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', file);

      // Simulating upload delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFile(null);
      }, 3000);
    } catch (err) {
      setError('Erro ao enviar arquivo');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#e5d6ac] flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6 text-center text-[#503d2e]">
            Upload de Arquivos
          </h1>

          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
                accept=".png,.jpg,.pdf,.webp,.svg"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <Upload className="w-12 h-12 text-gray-400 mb-2" />
                <span className="text-sm text-gray-600">
                  Clique para selecionar um arquivo
                </span>
                <span className="text-xs text-gray-500 mt-1">
                  (Máx: 3MB - PNG, JPG, PDF, WEBP, SVG)
                </span>
              </label>
            </div>

            {file && (
              <div className="bg-gray-50 p-3 rounded flex items-center justify-between">
                <span className="text-sm truncate">{file.name}</span>
                <button
                  onClick={handleUpload}
                  disabled={uploading}
                  className="px-4 py-2 bg-[#503d2e] text-white rounded-md hover:bg-[#3d2e22] transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {uploading ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : success ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Enviado!</span>
                    </>
                  ) : (
                    <span>Enviar</span>
                  )}
                </button>
              </div>
            )}

            {error && (
              <div className="text-red-500 text-sm text-center">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};