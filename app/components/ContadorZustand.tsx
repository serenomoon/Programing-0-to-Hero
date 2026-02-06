"use client";

import { useCounterStore } from "@/app/estado-global/store/counterStore";

export const ContadorZustand = () => {
  const count = useCounterStore(state => state.count);
  const incrementar = useCounterStore(state => state.incrementar);
  const decrementar = useCounterStore(state => state.decrementar);
  const reset = useCounterStore(state => state.reset);

  return (
    <div className="p-6 space-y-4 bg-black/30 rounded-xl">
      <h2 className="text-xl font-bold">Contador global (Zustand)</h2>

      <p className="text-2xl">{count}</p>

      <div className="flex gap-2">
        <button
          onClick={incrementar}
          className="px-3 py-1 bg-emerald-600 rounded"
        >
          +
        </button>

        <button
          onClick={decrementar}
          className="px-3 py-1 bg-red-600 rounded"
        >
          -
        </button>

        <button
          onClick={reset}
          className="px-3 py-1 bg-slate-600 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
