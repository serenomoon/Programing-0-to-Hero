"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  bgColor: string;
  cambiarBg: (color: string) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [bgColor, setBgColor] = useState("bg-slate-900");

  // 🔹 Al iniciar la app, leemos localStorage
  useEffect(() => {
    const guardado = localStorage.getItem("bgColor");
    if (guardado) {
      setBgColor(guardado);
    }
  }, []);

  // 🔹 Cada vez que cambia el color, lo guardamos
  const cambiarBg = (color: string) => {
    setBgColor(color);
    localStorage.setItem("bgColor", color);
  };

  return (
    <ThemeContext.Provider value={{ bgColor, cambiarBg }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe usarse dentro de ThemeProvider");
  }
  return context;
};
