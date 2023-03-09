import { create } from "zustand"
import { persist } from "zustand/middleware"

// Auth Store
type AuthState = {
  token: string
  setToken: (token: string) => void
  removeToken: (token: string) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      token: "",
      setToken: token => set({ token }),
      removeToken: () => set({ token: "" }),
    }),
    {
      name: "bearer",
    }
  )
)
