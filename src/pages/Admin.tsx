import React from 'react';
import { useAuthStore } from '../stores/authStore';
import { AdminLogin } from '../components/admin/AdminLogin';
import { AdminDashboard } from '../components/admin/AdminDashboard';

export const Admin: React.FC = () => {
  const { profile, isAdmin, loading } = useAuthStore();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#e5d6ac]">
        <div className="text-[#503d2e]">Carregando...</div>
      </div>
    );
  }

  if (!profile || !isAdmin) {
    return <AdminLogin />;
  }

  return <AdminDashboard />;
};