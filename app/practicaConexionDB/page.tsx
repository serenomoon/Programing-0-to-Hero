"use client"

import Link from "next/link";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PracticaConexionDB() {

    const [log, setLog] = useState<string[]>([]);

    const agregarLog = (texto: string) => {
        setLog(prev => [...prev, texto]);
    };

    /* ===== SIMULACIÓN DE CONEXIÓN ===== */

    const conectarDB = () => {
        agregarLog("Servidor iniciado");
        agregarLog("Intentando conectar a la base de datos...");
        conexionExitosa();
    };

    const conexionExitosa = () => {
        agregarLog("Conexión a la base de datos exitosa ✅");
        agregarLog("Servidor listo para recibir requests");
    };

    /* ===== CÓDIGO EXPRESS ===== */

    const codeMongo = `
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/miDB')
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch(() => {
    console.log('Error de conexión');
  });
`;

    const codeSQL = `
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'miDB'
});

connection.connect(() => {
  console.log('Conectado a MySQL');
});
`;

    return (
        <>
            {/* TÍTULO */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl mb-5">
                    Conexión básica a base de datos
                </h1>

                <h3>
                    Antes de atender requests, el servidor debe conectarse a la base de datos.
                </h3>

                <ul className="list-disc ml-6">
                    <li>La conexión se hace una sola vez.</li>
                    <li>Si falla, el servidor no debería continuar.</li>
                    <li>Luego se usan los datos en los endpoints.</li>
                </ul>
            </div>

            {/* SIMULACIÓN */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Simulación del servidor:</h3>

                <div className="flex justify-center mt-4">
                    <button
                        className="bg-amber-400/30 p-2 rounded-2xl text-amber-100"
                        onClick={conectarDB}
                    >
                        Iniciar servidor
                    </button>
                </div>

                <div className="mt-4 bg-black/40 p-3 rounded-xl min-h-[120px]">
                    <h4 className="text-amber-100">Log del servidor:</h4>
                    {log.map((item, index) => (
                        <p key={index} className="text-green-300 text-sm">
                            {item}
                        </p>
                    ))}
                </div>
            </div>

            {/* MONGO */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Ejemplo básico con MongoDB:</h3>

                <SyntaxHighlighter language="javascript" style={oneDark}>
                    {codeMongo}
                </SyntaxHighlighter>
            </div>

            {/* SQL */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Ejemplo básico con SQL (MySQL):</h3>

                <SyntaxHighlighter language="javascript" style={oneDark}>
                    {codeSQL}
                </SyntaxHighlighter>
            </div>

            {/* CONCEPTOS CLAVE */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Conceptos importantes:</h3>
                <ul className="list-disc ml-6">
                    <li>La conexión se hace al iniciar el servidor.</li>
                    <li>No depende de una request.</li>
                    <li>Los endpoints usan esa conexión ya creada.</li>
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
