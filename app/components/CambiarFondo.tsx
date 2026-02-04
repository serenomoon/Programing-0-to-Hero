"use client";

import { useTheme } from "../context/ThemeContext";

export const CambiarFondo = () => {
  const { cambiarBg } = useTheme();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl">Cambiar fondo global</h1>

      <div className="flex gap-3">
        <button
          className="bg-slate-700 px-3 py-1 rounded"
          onClick={() => cambiarBg("bg-slate-900")}
        >
          Oscuro
        </button>

        <button
          className="bg-blue-600 px-3 py-1 rounded"
          onClick={() => cambiarBg("bg-blue-900")}
        >
          Azul
        </button>

        <button
          className="bg-emerald-600 px-3 py-1 rounded"
          onClick={() => cambiarBg("bg-emerald-900")}
        >
          Verde
        </button>
      </div>
    </div>
  );
}
