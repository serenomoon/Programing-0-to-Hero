"use client"

import { CambiarFondo } from "@/app/components/CambiarFondo";
import { ContadorZustand } from "@/app/components/ContadorZustand";
import Link from "next/link";
import { useState, createContext, useContext } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

/*
=====================================================
PROBLEMA GENERAL
=====================================================

Cuando una app crece, muchos componentes
necesitan la misma información.

Pasar props:
- ensucia el código
- genera dependencias innecesarias
- es difícil de mantener
*/

/* =====================================================
   CONTEXT
   ===================================================== */

const ContadorContext = createContext<{
    contador: number;
    incrementar: () => void;
} | null>(null);

function ContadorProvider({ children }: { children: React.ReactNode }) {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(prev => prev + 1);
    };

    return (
        <ContadorContext.Provider value={{ contador, incrementar }}>
            {children}
        </ContadorContext.Provider>
    );
}

function BotonContextA() {
    const ctx = useContext(ContadorContext);
    if (!ctx) return null;

    return (
        <button
            className="bg-sky-400/30 p-2 rounded-xl text-sky-100"
            onClick={ctx.incrementar}
        >
            Botón A (Context): {ctx.contador}
        </button>
    );
}

function BotonContextB() {
    const ctx = useContext(ContadorContext);
    if (!ctx) return null;

    return (
        <button
            className="bg-sky-400/30 p-2 rounded-xl text-sky-100"
            onClick={ctx.incrementar}
        >
            Botón B (Context): {ctx.contador}
        </button>
    );
}

/*
Ambos botones:
- no se conocen entre sí
- no reciben props
- usan el mismo estado global
*/

/* =====================================================
   ZUSTAND (SIMULADO)
   ===================================================== */

let zustandState = { contador: 0 };
let listeners: (() => void)[] = [];

function useZustandStore() {
    const [, setTick] = useState(0);

    const forceUpdate = () => setTick(t => t + 1);

    if (!listeners.includes(forceUpdate)) {
        listeners.push(forceUpdate);
    }

    const incrementar = () => {
        zustandState.contador++;
        listeners.forEach(fn => fn());
    };

    return {
        contador: zustandState.contador,
        incrementar
    };
}

function BotonZustandA() {
    const store = useZustandStore();

    return (
        <button
            className="bg-emerald-400/30 p-2 rounded-xl text-emerald-100"
            onClick={store.incrementar}
        >
            Botón A (Zustand): {store.contador}
        </button>
    );
}

function BotonZustandB() {
    const store = useZustandStore();

    return (
        <button
            className="bg-emerald-400/30 p-2 rounded-xl text-emerald-100"
            onClick={store.incrementar}
        >
            Botón B (Zustand): {store.contador}
        </button>
    );
}

/*
En Zustand:
- no hay Provider
- el estado vive fuera de React
- solo se re-renderiza quien lo usa
*/

export default function PracticaEstadoGlobal() {

    const [log, setLog] = useState<string[]>([]);

    const agregarLog = (texto: string) => {
        setLog(prev => [...prev, texto]);
    };

    const iniciar = () => {
        agregarLog("Estado global inicializado");
        agregarLog("Componentes comparten información");
        agregarLog("No se pasan props");
    };

    const codeContext = `
const MiContext = createContext(null);

function Provider({ children }) {
  const [state, setState] = useState(0);

  return (
    <MiContext.Provider value={{ state, setState }}>
      {children}
    </MiContext.Provider>
  );
}
`;

    const codeZustand = `
import { create } from 'zustand';

const useStore = create(set => ({
  contador: 0,
  incrementar: () =>
    set(state => ({ contador: state.contador + 1 }))
}));
`;

    return (
        <>
            {/* INTRODUCCIÓN */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl mb-5">
                    Estado global en React
                </h1>

                <h3>
                    El estado global permite compartir información
                    entre múltiples componentes sin props.
                </h3>

                <ul className="list-disc ml-6 mt-2">
                    <li>Un solo origen de verdad.</li>
                    <li>Menos dependencias.</li>
                    <li>Mejor escalabilidad.</li>
                </ul>
            </div>

            {/* SIMULACIÓN */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Simulación:</h3>
                <p>
                    Dos botones separados modifican el mismo estado.
                    Al tocar uno, el otro se actualiza automáticamente.
                </p>

                <div className="flex justify-center mt-4">
                    <button
                        className="bg-amber-400/30 p-2 rounded-2xl text-amber-100"
                        onClick={iniciar}
                    >
                        Iniciar ejemplo
                    </button>
                </div>

                <h4 className="mt-6 text-sky-200">Context</h4>
                <ContadorProvider>
                    <div className="flex gap-4 mt-2">
                        <BotonContextA />
                        <BotonContextB />
                    </div>
                </ContadorProvider>

                <h4 className="mt-6 text-emerald-200">Zustand</h4>
                <div className="flex gap-4 mt-2">
                    <BotonZustandA />
                    <BotonZustandB />
                </div>

                <div className="mt-4 bg-black/40 p-3 rounded-xl min-h-[120px]">
                    <h4 className="text-amber-100">Log:</h4>
                    {log.map((item, index) => (
                        <p key={index} className="text-green-300 text-sm">
                            {item}
                        </p>
                    ))}
                </div>
            </div>

            {/* QUÉ NO ES ESTADO GLOBAL */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Qué NO debería ser estado global</h3>

                <p>
                    No todo estado necesita ser global.
                    Usarlo mal genera complejidad innecesaria.
                </p>

                <ul className="list-disc ml-6 mt-2">
                    <li>Inputs de formularios locales.</li>
                    <li>Estados visuales (modales, hover).</li>
                    <li>Datos usados por un solo componente.</li>
                </ul>
            </div>

            {/* LOCAL VS GLOBAL */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Estado local vs estado global</h3>

                <ul className="list-disc ml-6 mt-2">
                    <li><b>Local:</b> vive y muere con el componente.</li>
                    <li><b>Global:</b> compartido por muchas partes de la app.</li>
                    <li>Regla práctica: empezá local, globalizá después.</li>
                </ul>
            </div>

            {/* EJEMPLOS REALES */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Casos reales de estado global</h3>

                <ul className="list-disc ml-6 mt-2">
                    <li>Usuario logueado.</li>
                    <li>Carrito de compras.</li>
                    <li>Configuración (tema, idioma).</li>
                </ul>
            </div>

            {/* CONTEXT */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Context API</h3>

                <ul className="list-disc ml-6 mt-2">
                    <li>Incluido en React.</li>
                    <li>Requiere Provider.</li>
                    <li>Ideal para estados simples.</li>
                </ul>

                <SyntaxHighlighter language="javascript" style={oneDark}>
                    {codeContext}
                </SyntaxHighlighter>
            </div>

            {/* ZUSTAND */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Zustand</h3>

                <ul className="list-disc ml-6 mt-2">
                    <li>No necesita Provider.</li>
                    <li>Menos renders innecesarios.</li>
                    <li>Mejor escalabilidad.</li>
                </ul>

                <SyntaxHighlighter language="javascript" style={oneDark}>
                    {codeZustand}
                </SyntaxHighlighter>
            </div>

            {/* CONCLUSIÓN */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Conclusión</h3>

                <ul className="list-disc ml-6">
                    <li>No todo es estado global.</li>
                    <li>Context para casos simples.</li>
                    <li>Zustand para apps medianas/grandes.</li>
                </ul>
            </div>

            <div>
                <CambiarFondo />

                <ContadorZustand />
            </div>

            <div className="flex justify-center mt-2 mb-4">
                <Link className="bg-amber-400/30 p-2 rounded-2xl text-amber-100" href="/">
                    Volver
                </Link>
            </div>


        </>
    );
}
