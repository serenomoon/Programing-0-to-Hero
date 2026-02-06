"use client";

import { useTheme } from "../estado-global/context/ThemeContext";

export default function ThemeWrapper({children,}: {children: React.ReactNode;}) {
  const { bgColor } = useTheme();

  return (
    <div className={`${bgColor}`}>
      {children}
    </div>
  );
}
