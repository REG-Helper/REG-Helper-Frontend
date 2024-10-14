import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type CourseState = {
  search: string;
  actions: {
    setSearch: (text: string) => void;
  };
};

export const useCourseStore = create<CourseState>()(
  devtools((set) => ({
    search: '',
    actions: {
      setSearch: (text) => set({ search: text }),
    },
  })),
);
