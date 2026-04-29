import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types";

interface AuthState {
  user: User | null;
  isAuth: boolean;

  setAuth: (user: User | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuth: false,

      setAuth: (user) =>
        set({
          user,
          isAuth: !!user,
        }),

      logout: () => {
        set({ user: null, isAuth: false });

        localStorage.removeItem("token");
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);
