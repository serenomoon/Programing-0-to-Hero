"use client"

import { useRef, useState } from "react";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PracticaUseRef() {

    const codeString = `

useRef se utiliza para guardar un valor persistente que NO provoca un render al cambiar.
El valor se mantiene entre renders y recién se refleja en la UI cuando ocurre un render por otra causa.

export default function PracticaUseRef() {

    const [contador, setContador] = useState(0);
    const valorRef = useRef(0);
    const rendersRef = useRef(0);


    return (
        <div>
            <h1>Contador (state): {contador}</h1>
            <h2>Valor ref (NO renderiza): {valorRef.current}</h2>
            <h3>Renders totales: {rendersRef.current}</h3>

            <button onClick={() => setContador(contador + 1)}>
                Incrementar contador
            </button>

            <button onClick={() => valorRef.current += 1}>
                Incrementar ref
            </button>
        </div>
    );
}
    `;

    const [contador, setContador] = useState(0);
    const valorRef = useRef(0);


    return (
        <>
        <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">

            <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">Uso useRef</h1>
        <h3>useRef se utiliza para guardar un valor persistente que NO provoca un render al cambiar.</h3>
        <h3>El valor se mantiene entre renders y recién se refleja en la UI cuando ocurre un render por otra causa.</h3>
        <div>
          <SyntaxHighlighter language="typescript" style={oneDark}>
            {codeString}
          </SyntaxHighlighter>
        </div>

            
            <div className="grid justify-center">
                <h1 className="text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2">
                    Contador (state): {contador}
                </h1>

                <h2 className="text-amber-100 bg-amber-400/20 p-2 rounded-2xl my-2">
                    Valor ref: {valorRef.current}
                </h2>

                <button
                    className="text-amber-100 cursor-pointer bg-amber-400/30 p-2 rounded-2xl my-2"
                    onClick={() => setContador(contador + 1)}
                    >
                    Incrementar Contador
                </button>

                <button
                    className="text-amber-100 cursor-pointer bg-amber-400/30 p-2 rounded-2xl my-2"
                    onClick={() => valorRef.current += 1}
                    >
                    Incrementar Ref
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
