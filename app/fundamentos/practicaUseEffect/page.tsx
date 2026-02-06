"use client"

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PracticaUseEffect() {

    const codeString1 = `
    export default function PracticaUseEffect() {

    const [contador, setContador] = useState(0);
    const [, forceRender] = useState(0); // No le ponemos nombre al useState este porque no lo vamos a utilizar, no hace falta,
    // solo lo usamos para forzar un render como ejemplo
    const renderRef = useRef(0);

    `;

    const codeString2 = `
    return (
        <div>
            <h1>Contador: {contador}</h1>
            <h2>Renders: {renderRef.current}</h2>

            <button onClick={() => setContador(contador + 1)}>
                Incrementar
            </button>

            <button onClick={() => forceRender(v => v + 1)}>
                Renderizar de nuevo
            </button>
        </div>
    );
}
    `;

    const useEffect1 = `
    useEffect(() => {
        renderRef.current += 1;
        console.log("Número de renders:", renderRef.current);
    });
    `;

    const useEffect2 = `
    useEffect(() => {
        console.log("El contador se actualizó:", contador);
    }, [contador]);
    `;

    const useEffect3 = `
    
    useEffect(() => {
        console.log("Componente montado");
    }, []);

    `;

    const [contador, setContador] = useState(0);
    const [, forceRender] = useState(0);
    const renderRef = useRef(0);

    // Se ejecuta después de cada render
    useEffect(() => {
        renderRef.current += 1;
        console.log("Número de renders:", renderRef.current);
    });

    // Solo cuando cambia contador
    useEffect(() => {
        console.log("El contador se actualizó:", contador);
    }, [contador]);

    // Solo al montar
    useEffect(() => {
        console.log("Componente montado");
    }, []);

    return (
        <>
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-center">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">Uso useEffect</h1>
                <div>
                    <SyntaxHighlighter language="typescript" style={oneDark}>
                        {codeString1}
                    </SyntaxHighlighter>
                </div>
            </div>

            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">useEffect básico</h1>
                <h3>Se ejecuta después de cada render.</h3>
                <h3>En este caso, usamos un useRef para sumar 1 cada vez que se hace un render.</h3>
                <div>
                    <SyntaxHighlighter language="typescript" style={oneDark}>
                        {useEffect1}
                    </SyntaxHighlighter>
                </div>
            </div>

            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">useEffect con dependencias</h1>
                <h3>Solo cuando cambia 'contador'.</h3>
                <h3>Cuando el valor del state 'contador' cambia (o el que le pongamos), se ejecuta automaticamente el useEffect.</h3>
                <div>
                    <SyntaxHighlighter language="typescript" style={oneDark}>
                        {useEffect2}
                    </SyntaxHighlighter>
                </div>
            </div>

            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">useEffect sin dependencia</h1>
                <h3>Solo al montar el componente (una vez).</h3>
                <h3>Al poner un array vacio [], se ejecuta solo al primer render.</h3>
                <div>
                    <SyntaxHighlighter language="typescript" style={oneDark}>
                        {useEffect3}
                    </SyntaxHighlighter>
                </div>
            </div>

            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <div>
                    <SyntaxHighlighter language="typescript" style={oneDark}>
                        {codeString2}
                    </SyntaxHighlighter>
                </div>
                <div className="grid justify-center">
                    <h1 className="text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2">
                        Contador: {contador}
                    </h1>

                    <h2 className="text-amber-100 bg-amber-400/20 p-2 rounded-2xl my-2">
                        Renders: {renderRef.current}
                    </h2>

                    <button
                        className="text-amber-100 cursor-pointer bg-amber-400/30 p-2 rounded-2xl my-2"
                        onClick={() => setContador(contador + 1)}
                    >
                        Incrementar
                    </button>

                    <button
                        className="text-amber-100 cursor-pointer bg-amber-400/30 p-2 rounded-2xl my-2"
                        onClick={() => forceRender(v => v + 1)}
                    >
                        Renderizar de nuevo
                    </button>
                </div>
            </div>

            <div className="flex justify-center mt-2 mb-4">
                <Link
                    className="ml-2 bg-amber-400/30 p-2 rounded-2xl text-amber-100"
                    href={"/"}
                >
                    Volver
                </Link>
            </div>
        </>
    );
}
