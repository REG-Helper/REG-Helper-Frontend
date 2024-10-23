import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { STORAGE_KEY } from '../_config/storage-key';

type CourseState = {
  search: string;
  currentTerm: string;
  actions: {
    setSearch: (text: string) => void;
    setCurrentTerm: (term: string) => void;
  };
};

export const useCourseStore = create<CourseState>()(
  persist(
    devtools((set) => ({
      search: '',
      currentTerm: '2567/1',
      actions: {
        setSearch: (text) => set({ search: text }),
        setCurrentTerm: (term) => set({ currentTerm: term }),
      },
    })),
    {
      name: STORAGE_KEY.term,
      partialize: (state) => ({
        currentTerm: state.currentTerm,
      }),
    },
  ),
);
