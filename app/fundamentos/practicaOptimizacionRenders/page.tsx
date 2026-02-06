"use client"

import Link from "next/link";
import { useState, useCallback, useMemo, memo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

/*
    ============================
    COMPONENTE MEMORIZADO
    ============================

    React.memo evita que este componente
    se renderice nuevamente si sus props
    NO cambian.
*/
const ComponenteHijo = memo(({ onClick }: { onClick: () => void }) => {
    return (
        <button
            className="bg-emerald-400/30 p-2 rounded-xl text-emerald-100 mt-2"
            onClick={onClick}
        >
            Botón del componente hijo
        </button>
    );
});

export default function PracticaOptimizacionRenders() {

    const [log, setLog] = useState<string[]>([]);
    const [contador, setContador] = useState(0);
    const [numeros] = useState([1, 2, 3, 4, 5]);

    const agregarLog = (texto: string) => {
        setLog(prev => [...prev, texto]);
    };

    /* ===== SIMULACIÓN DE RENDER ===== */
    /*
        Esta función simula un render del componente padre.
        Cada vez que se ejecuta, React vuelve a renderizar.
    */
    const renderizar = () => {
        agregarLog("Render del componente padre");
        setContador(prev => prev + 1);
    };

    /* ===== useCallback ===== */
    /*
        PROBLEMA SIN useCallback:
        - La función se recrea en cada render
        - React.memo no sirve porque la prop cambia

        SOLUCIÓN:
        useCallback mantiene la MISMA función
        mientras no cambien sus dependencias
    */
    const manejarClickHijo = useCallback(() => {
        agregarLog("Click en componente hijo");
    }, []);

    /* ===== useMemo ===== */
    /*
        PROBLEMA SIN useMemo:
        - El cálculo se ejecuta en cada render
        - Aunque los datos no hayan cambiado

        SOLUCIÓN:
        useMemo guarda el RESULTADO del cálculo
        y solo lo recalcula si cambian las dependencias
    */
    const total = useMemo(() => {
        agregarLog("Calculando total");
        return numeros.reduce((acc, n) => acc + n, 0);
    }, [numeros]);

    /* ===== CÓDIGOS DE EJEMPLO ===== */

    const codeMemo = `
const ComponenteHijo = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Click</button>;
});
`;

    const codeUseCallback = `
const handleClick = useCallback(() => {
  console.log("Click");
}, []);
`;

    const codeUseMemo = `
const total = useMemo(() => {
  return numeros.reduce((acc, n) => acc + n, 0);
}, [numeros]);
`;

    return (
        <>
            {/* INTRODUCCIÓN */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl mb-5">
                    Optimización de renders en React
                </h1>

                <h3>
                    React puede renderizar componentes más veces de las necesarias.
                    Estas herramientas ayudan a evitar renders y cálculos innecesarios.
                </h3>

                <ul className="list-disc ml-6 mt-2">
                    <li>Mejoran el rendimiento.</li>
                    <li>Evitan renders innecesarios.</li>
                    <li>Se usan cuando hay componentes costosos.</li>
                </ul>
            </div>

            {/* SIMULACIÓN */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Simulación de renders:</h3>

                <div className="flex justify-center mt-4 gap-4">
                    <button
                        className="bg-amber-400/30 p-2 rounded-2xl text-amber-100"
                        onClick={renderizar}
                    >
                        Forzar render
                    </button>
                </div>

                <ComponenteHijo onClick={manejarClickHijo} />

                <div className="mt-4 bg-black/40 p-3 rounded-xl min-h-40">
                    <h4 className="text-amber-100">Log de ejecución:</h4>
                    {log.map((item, index) => (
                        <p key={index} className="text-green-300 text-sm">
                            {item}
                        </p>
                    ))}
                </div>
            </div>

            {/* REACT.MEMO */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>React.memo</h3>

                <p>
                    React.memo memoriza un componente y evita que se renderice
                    si sus props no cambian.
                </p>

                <ul className="list-disc ml-6 mt-2">
                    <li>Optimiza componentes hijos.</li>
                    <li>Depende de que las props sean estables.</li>
                    <li>No evita renders del padre.</li>
                </ul>

                <SyntaxHighlighter language="javascript" style={oneDark}>
                    {codeMemo}
                </SyntaxHighlighter>
            </div>

            {/* USECALLBACK */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>useCallback</h3>

                <p>
                    useCallback memoriza una función para que no se recree
                    en cada render.
                </p>

                <ul className="list-disc ml-6 mt-2">
                    <li>Evita que React.memo pierda efecto.</li>
                    <li>Se usa con funciones pasadas por props.</li>
                    <li>Memoriza funciones, no valores.</li>
                </ul>

                <SyntaxHighlighter language="javascript" style={oneDark}>
                    {codeUseCallback}
                </SyntaxHighlighter>
            </div>

            {/* USEMEMO */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>useMemo</h3>

                <p>
                    useMemo memoriza el resultado de un cálculo costoso
                    y evita recalcularlo en cada render.
                </p>

                <ul className="list-disc ml-6 mt-2">
                    <li>Memoriza valores.</li>
                    <li>Útil para cálculos pesados.</li>
                    <li>No debe usarse sin necesidad.</li>
                </ul>

                <SyntaxHighlighter language="javascript" style={oneDark}>
                    {codeUseMemo}
                </SyntaxHighlighter>
            </div>

            {/* CONCEPTOS CLAVE */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Conceptos importantes:</h3>
                <ul className="list-disc ml-6">
                    <li>React.memo memoriza componentes.</li>
                    <li>useCallback memoriza funciones.</li>
                    <li>useMemo memoriza valores calculados.</li>
                </ul>
            </div>

            <div className="flex justify-center mt-2 mb-4">
                <Link className="bg-amber-400/30 p-2 rounded-2xl text-amber-100" href="/">
                    Volver
                </Link>
            </div>
        </>
    );
}
