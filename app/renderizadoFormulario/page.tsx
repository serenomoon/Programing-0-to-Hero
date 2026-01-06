"use client"

import Link from "next/link";
import { useState, FormEvent } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function RenderizadoFormulario() {

    const formulario1 = `
    export default function RenderizadoFormulario() {

    const [nombre, setNombre] = useState("");

    const manejarSubmit = (e) => {
        e.preventDefault()
        alert('nombre enviado: $ {nombre}');
    }

    `;

    const formulario2 = `
    
    return(
        <>
            <div className="grid justify-center">
                <h1>Formulario</h1>
                <form onSubmit={manejarSubmit}>
                    <input 
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="bg-white rounded-2xl text-black px-1 mr-2"
                        />
                    <button className="cursor-pointer" type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}

    `;

    const [nombre, setNombre] = useState<string>("");

    //FormEvent para formularios
    // ChangeEvent<HTMLInputElement> para inputs
    // MouseEvent para clicks
    const manejarSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(`nombre enviado: ${nombre}`);
    }

    return (
        <>
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">Renderizado de Formulario</h1>
                <h3>e.preventDefault() se usa para cancelar la acción por defecto del evento.</h3>
                <h3>En un formulario, evita que el navegador recargue la página al hacer submit y permite manejar el envío desde React.</h3>
                <div>
                    <SyntaxHighlighter language="typescript" style={oneDark}>
                        {formulario1}
                    </SyntaxHighlighter>
                </div>
            </div>

            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>onChange se ejecuta cada vez que cambia el valor de un input.</h3>
                <h3>Se usa para leer el valor actual y guardarlo en el estado.</h3>
                <div>
                    <SyntaxHighlighter language="typescript" style={oneDark}>
                        {formulario2}
                    </SyntaxHighlighter>
                </div>
            </div>

            <div className="flex justify-center">
                <h1 className="pr-5">Formulario:</h1>
                <form onSubmit={manejarSubmit}>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="bg-white rounded-2xl text-black px-1 mr-4"
                    />
                    <button className="cursor-pointer border px-1 border-white hover:bg-white hover:text-black" type="submit">Enviar</button>
                </form>
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
    )
}