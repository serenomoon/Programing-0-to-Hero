"use client"

import Link from "next/link";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function jsx_VDOM() {


    const [isLogged, setIsLogged] = useState(false);
    const [count, setCount] = useState(0);

    const loguear = () => {
        setIsLogged(!isLogged);
    }

    const codeString = `

    const nombre = "Saulo";

    return (
      <h1>Hola {nombre}</h1>
    );
  }
  `

    const codeString2 = `

    const [isLogged, setIsLogged] = useState(false);

    const loguear = () => {
        setIsLogged(!isLogged);
    }

    <div>
        <div onClick={() => loguear()}>
            {
            isLogged ?
                <h1>Desloguear</h1> 
                :
                <h1>Loguear</h1> 
            }
        </div>
    </div>

    <div>
        {isLogged ? <h1>Esta logueado</h1> : <h1>No esta logueado</h1>}
    </div>
  `

    const codeString3 = `

    const [count, setCount] = useState(0);

    <div className="grid justify-center">
        <h1>Contador</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>
            Sumar
        </button>
    </div>
  `

    const nombre = "Saulo";

    return (
        <>
            {/* JSX */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">JSX</h1>
                <h3>JSX no es HTML, es "azúcar sintáctico para JavaScript":</h3>
                <ul className="list-disc ml-6">
                    <li>JSX se transforma en React.createElement, podemos usar JS real dentro del JSX.</li>
                    <li>JSX devuelve objetos, no nodos del DOM; renderiza expresiones, no statements.</li>
                    <li>En cada render, React vuelve a evaluar el estado y actualiza la interfaz según su valor.</li>
                </ul>
                <div>
                    <SyntaxHighlighter language="typescript" style={oneDark}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>

                <div className="grid justify-center">
                    <h1>Hola {nombre}</h1>
                </div>
            </div>

            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Entendemos que:</h3>
                <ul className="list-disc ml-6">
                    <li>{ } permite evaluar expresiones.</li>
                    <li>No podemos usar if, for, etc directamente.</li>
                    <li>Usamos ternarios, &&, .map().</li>
                </ul>
                <div>
                    <SyntaxHighlighter language="typescript" style={oneDark}>
                        {codeString2}
                    </SyntaxHighlighter>
                </div>

                <div className="grid justify-center">
                    <div className="cursor-pointer bg-amber-400/30 p-2 rounded-2xl" onClick={() => loguear()}>
                        {isLogged ?
                            <h1 className="text-amber-100">Desloguear</h1> :
                            <h1 className="text-amber-100">Loguear</h1>
                        }
                    </div>
                </div>
            </div>

            <div className="grid justify-center">
                {isLogged ? <h1>Esta logueado</h1> : <h1>No esta logueado</h1>}
            </div>


            {/* Virtual DOM */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">Virtual DOM</h1>
                <h3>React no modifica el DOM directamente:</h3>
                <ul className="list-disc ml-6">
                    <li>Crea una representación en memoria (Virtual DOM).</li>
                    <li>Compara el DOM anterior con el nuevo (diffing).</li>
                    <li>Actualiza solo lo que cambió.</li>
                </ul>
                <h3>“Cuando cambia el estado, React no vuelve a dibujar todo, solo lo que realmente cambió”</h3>
                <div>
                    <SyntaxHighlighter language="typescript" style={oneDark}>
                        {codeString3}
                    </SyntaxHighlighter>
                </div>

                <div className="grid justify-center">
                    <h1>Contador</h1>
                    <p className="m-auto">{count}</p>
                    <button className="p-1 border-amber-100 border-2 cursor-pointer" onClick={() => setCount(count + 1)}>
                    Sumar
                    </button>
                </div>
            </div>

            <div className="flex justify-center mt-2 mb-4">
                <Link className="ml-2 bg-amber-400/30 p-2 rounded-2xl text-amber-100" href={"/"}>Volver</Link>
            </div>
        </>
    );
}

