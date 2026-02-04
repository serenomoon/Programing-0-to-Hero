"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { bgColor } = useTheme();

  return (
    <div className={`${bgColor}`}>
      {children}
    </div>
  );
}
