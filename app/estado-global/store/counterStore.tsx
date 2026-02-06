import { create } from "zustand";
import { persist } from "zustand/middleware";

type CounterState = {
  count: number;
  incrementar: () => void;
  decrementar: () => void;
  reset: () => void;
};

export const useCounterStore = create<CounterState>()(
  persist(
    (set) => ({
      count: 0,

      incrementar: () =>
        set((state) => ({ count: state.count + 1 })),

      decrementar: () =>
        set((state) => ({ count: state.count - 1 })),

      reset: () => set({ count: 0 }),
    }),
    {
      name: "counter-storage", // key en localStorage
    }
  )
);
