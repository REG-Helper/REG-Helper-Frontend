import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type SuggestionState = {
  searchJob: string;
  selectedJob: string;
  actions: {
    setSearchJob: (text: string) => void;
    setSelectedJob: (text: string) => void;
  };
};

export const useSuggestionStore = create<SuggestionState>()(
  devtools((set) => ({
    searchJob: '',
    selectedJob: '',
    actions: {
      setSearchJob: (text) => set({ searchJob: text }),
      setSelectedJob: (text) => set({ selectedJob: text }),
    },
  })),
);
