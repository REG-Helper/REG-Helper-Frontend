import type { User } from '@/shared/types';
import type { Credentials } from '../_types';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type UserState = {
  user: User | null;
  loading: boolean;
  credentials: Credentials | null;
  actions: {
    setUser: (user: User | null) => void;
    setCredentials: (credentials: Credentials | null) => void;
    setLoading: (loading: boolean) => void;
  };
};

export const useUserStore = create<UserState>()(
  devtools((set) => ({
    user: null,
    credentials: null,
    loading: true,
    actions: {
      setUser: (user) => set({ user }),
      setCredentials: (credentials) => set({ credentials }),
      setLoading: (loading) => set({ loading }),
    },
  })),
);
