"use client";

import { createContext, useState } from "react";

type User = {
  name: string;
};

type UserContextType = {
  user: User | null;
  login: (name: string) => void;
  logout: () => void;
};

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (name: string) => {
    setUser({ name });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
