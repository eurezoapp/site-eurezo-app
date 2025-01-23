import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface Profile {
  id: string;
  username: string;
  is_admin: boolean;
}

interface AuthState {
  profile: Profile | null;
  isAdmin: boolean;
  loading: boolean;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loadProfile: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  profile: null,
  isAdmin: false,
  loading: true,
  
  signIn: async (username: string, password: string) => {
    if (username === 'Admin' && password === 'Gutim@1992') {
      const profile = { 
        id: '1', 
        username: 'Admin', 
        is_admin: true 
      };
      localStorage.setItem('auth_profile', JSON.stringify(profile));
      set({ profile, isAdmin: true });
    } else {
      throw new Error('Invalid credentials');
    }
  },
  
  signOut: async () => {
    localStorage.removeItem('auth_profile');
    set({ profile: null, isAdmin: false });
  },
  
  loadProfile: async () => {
    try {
      const storedProfile = localStorage.getItem('auth_profile');
      if (storedProfile) {
        const profile = JSON.parse(storedProfile);
        set({ profile, isAdmin: profile.is_admin });
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    }
    set({ loading: false });
  },
}));