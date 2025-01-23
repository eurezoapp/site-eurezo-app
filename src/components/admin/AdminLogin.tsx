import React, { useState } from 'react';
import { useAuthStore } from '../../stores/authStore';
import { Lock } from 'lucide-react';

export const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('Admin');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const signIn = useAuthStore((state) => state.signIn);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
    } catch (err) {
      setError('Credenciais inválidas');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e5d6ac]">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-center mb-6">
          <Lock className="h-12 w-12 text-[#503d2e]" />
        </div>
        
        <h2 className="text-2xl font-bold text-center mb-6 text-[#503d2e]">
          Login Administrativo
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Usuário
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#503d2e] focus:ring focus:ring-[#503d2e] focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#503d2e] focus:ring focus:ring-[#503d2e] focus:ring-opacity-50"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#503d2e] text-white py-2 px-4 rounded-md hover:bg-[#3d2e22] transition-colors"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};