"use client";

import { UserProvider } from "./estado-global/context/UserContext";

export function Providers({ children }:{ children: React.ReactNode }) {
    return <UserProvider>{ children }</UserProvider>
}