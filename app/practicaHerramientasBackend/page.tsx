"use client"

import Link from "next/link";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PracticaHerramientasBackend() {

    const [log, setLog] = useState<string[]>([]);

    const agregarLog = (texto: string) => {
        setLog(prev => [...prev, texto]);
    };

    /* ===== SIMULACIÓN DEL SERVIDOR ===== */
    /*
        Esta simulación representa lo que ocurre
        cuando levantamos un servidor Express real
        con herramientas comunes de desarrollo.
    */

    const iniciarServidor = () => {
        agregarLog("Servidor Express iniciado");
        agregarLog("dotenv: variables de entorno cargadas");
        agregarLog("cors: permisos de acceso configurados");
        agregarLog("nodemon: escuchando cambios en archivos");
        agregarLog("Servidor listo para recibir requests");
    };

    /* ===== CÓDIGOS DE EJEMPLO ===== */

    const codeNodemon = `
npm install nodemon --save-dev

// package.json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
`;

    const codeDotenvEnv = `
PORT=3000
`;

    const codeDotenv = `
require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('Servidor corriendo en puerto ' + PORT);
});
`;

    const codeCors = `
const cors = require('cors');

app.use(cors());
`;

    return (
        <>
            {/* INTRODUCCIÓN */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl mb-5">
                    Herramientas básicas del backend
                </h1>

                <h3>
                    Además de Express, un backend real necesita herramientas
                    que faciliten el desarrollo y eviten problemas comunes.
                </h3>

                <ul className="list-disc ml-6 mt-2">
                    <li>Automatizan tareas repetitivas.</li>
                    <li>Separan configuración del código.</li>
                    <li>Permiten conectar frontend y backend sin bloqueos.</li>
                </ul>
            </div>

            {/* SIMULACIÓN */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Simulación del inicio del servidor:</h3>

                <div className="flex justify-center mt-4">
                    <button
                        className="bg-amber-400/30 p-2 rounded-2xl text-amber-100"
                        onClick={iniciarServidor}
                    >
                        Iniciar servidor
                    </button>
                </div>

                <div className="mt-4 bg-black/40 p-3 rounded-xl min-h-35">
                    <h4 className="text-amber-100">Log del servidor:</h4>
                    {log.map((item, index) => (
                        <p key={index} className="text-green-300 text-sm">
                            {item}
                        </p>
                    ))}
                </div>
            </div>

            {/* NODEMON */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>nodemon</h3>

                <p>
                    nodemon es una herramienta de desarrollo que reinicia
                    automáticamente el servidor cuando detecta cambios en el código.
                </p>

                <ul className="list-disc ml-6 mt-2">
                    <li>Evita detener y volver a ejecutar el servidor.</li>
                    <li>Mejora mucho la velocidad de desarrollo.</li>
                    <li>No se usa en producción.</li>
                </ul>

                <SyntaxHighlighter language="json" style={oneDark}>
                    {codeNodemon}
                </SyntaxHighlighter>
            </div>

            {/* DOTENV */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>dotenv</h3>

                <p>
                    dotenv permite usar variables de entorno para guardar
                    configuraciones que no deben estar hardcodeadas.
                </p>

                <ul className="list-disc ml-6 mt-2">
                    <li>Puertos, tokens y claves.</li>
                    <li>Valores que cambian según el entorno.</li>
                    <li>Mayor seguridad y orden.</li>
                </ul>

                <h4 className="mt-4">Archivo .env</h4>
                <SyntaxHighlighter language="bash" style={oneDark}>
                    {codeDotenvEnv}
                </SyntaxHighlighter>

                <h4 className="mt-4">Uso en Express</h4>
                <SyntaxHighlighter language="javascript" style={oneDark}>
                    {codeDotenv}
                </SyntaxHighlighter>
            </div>

            {/* CORS */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>CORS</h3>

                <p>
                    CORS controla desde qué orígenes se pueden hacer requests
                    al backend desde el navegador.
                </p>

                <ul className="list-disc ml-6 mt-2">
                    <li>Evita bloqueos del navegador.</li>
                    <li>Necesario cuando frontend y backend están separados.</li>
                    <li>Se configura antes de los endpoints.</li>
                </ul>

                <SyntaxHighlighter language="javascript" style={oneDark}>
                    {codeCors}
                </SyntaxHighlighter>
            </div>

            {/* CONCEPTOS CLAVE */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Conceptos importantes:</h3>
                <ul className="list-disc ml-6">
                    <li>nodemon acelera el desarrollo.</li>
                    <li>dotenv separa configuración del código.</li>
                    <li>cors permite la comunicación con el frontend.</li>
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
