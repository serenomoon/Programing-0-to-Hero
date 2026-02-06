"use client"

import Link from "next/link";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PracticaExpress() {

    const [serverOn, setServerOn] = useState(false);
    const [response, setResponse] = useState<string | null>(null);

    const levantarServidor = () => {
        setServerOn(true);
        setResponse("Servidor funcionando");
    };

    const obtenerProductos = () => {
        setResponse(JSON.stringify([
            { id: 1, nombre: "Producto A" },
            { id: 2, nombre: "Producto B" }
        ], null, 2));
    };

    const codeServer = `
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

app.get('/products', (req, res) => {
  res.json([
    { id: 1, nombre: 'Producto A' },
    { id: 2, nombre: 'Producto B' }
  ]);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
`;

    return (
        <>
            {/* EXPRESS */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">
                    Servidor básico con Express
                </h1>

                <h3>Express permite crear un servidor HTTP con Node.js:</h3>
                <ul className="list-disc ml-6">
                    <li>Escucha requests del cliente.</li>
                    <li>Procesa la información.</li>
                    <li>Devuelve una respuesta (texto o JSON).</li>
                </ul>

                <div className="mt-4">
                    <SyntaxHighlighter language="javascript" style={oneDark}>
                        {codeServer}
                    </SyntaxHighlighter>
                </div>
            </div>

            {/* FLUJO REQUEST / RESPONSE */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Flujo Request → Response:</h3>
                <ul className="list-disc ml-6">
                    <li>El frontend hace una request HTTP.</li>
                    <li>Express recibe la request.</li>
                    <li>El servidor responde con datos.</li>
                </ul>

                <div className="flex gap-4 justify-center mt-4">
                    <button
                        className="bg-amber-400/30 p-2 rounded-2xl text-amber-100"
                        onClick={levantarServidor}
                    >
                        Levantar servidor
                    </button>

                    <button
                        className={`bg-amber-400/30 p-2 rounded-2xl text-amber-100 ${!serverOn && "opacity-40 cursor-not-allowed"}`}
                        disabled={!serverOn}
                        onClick={obtenerProductos}
                    >
                        GET /products
                    </button>
                </div>

                <div className="mt-4 bg-black/40 p-3 rounded-xl min-h-20">
                    <h4 className="text-amber-100">Respuesta del servidor:</h4>
                    <pre className="text-sm text-green-300 whitespace-pre-wrap">
                        {response ?? "—"}
                    </pre>
                </div>
            </div>

            {/* CONCEPTOS CLAVE */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Conceptos clave que se entienden acá:</h3>
                <ul className="list-disc ml-6">
                    <li>Express no renderiza HTML, devuelve datos.</li>
                    <li>Las rutas definen qué responde el servidor.</li>
                    <li>El frontend consume la API.</li>
                    <li>La comunicación es por HTTP.</li>
                </ul>
            </div>

            <div className="flex justify-center mt-2 mb-4">
                <Link className="ml-2 bg-amber-400/30 p-2 rounded-2xl text-amber-100" href={"/"}>
                    Volver
                </Link>
            </div>
        </>
    );
}
