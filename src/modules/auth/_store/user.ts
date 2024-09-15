import { User } from "@/shared/types";
import { Credentials } from "../_types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  credentials: Credentials | null;
  setCredentials: (credentials: Credentials) => void;
};

export const useUserStore = create<UserState>()(
  devtools((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    credentials: null,
    setCredentials: (credentials) => set({ credentials }),
  }))
);
