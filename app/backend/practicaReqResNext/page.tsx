"use client"

import Link from "next/link";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PracticaReqResNext() {

    const [log, setLog] = useState<string[]>([]);

    const agregarLog = (texto: string) => {
        setLog(prev => [...prev, texto]);
    };

    /* ===== SIMULACIÓN DE MIDDLEWARE ===== */

    const middleware = () => {
        agregarLog("Middleware: request recibida");
        controlador();
    };

    const controlador = () => {
        agregarLog("Controlador: procesando request");
        respuesta();
    };

    const respuesta = () => {
        agregarLog("Response: enviando respuesta al cliente");
    };

    /* ===== CÓDIGO EXPRESS ===== */

    const codeReqResNext = `
app.use((req, res, next) => {
  console.log('Request recibida');
  next();
});

app.get('/products', (req, res) => {
  res.json({ mensaje: 'Listado de productos' });
});
`;

    const codeReqResNext2 = `
    const [log, setLog] = useState([]);

    const agregarLog = (texto) => {
        setLog(prev => [...prev, texto]);
    };

    /* ===== SIMULACIÓN DE MIDDLEWARE ===== */

    const middleware = () => {
        agregarLog("Middleware: request recibida");
        controlador();
    };

    const controlador = () => {
        agregarLog("Controlador: procesando request");
        respuesta();
    };

    const respuesta = () => {
        agregarLog("Response: enviando respuesta al cliente");
    };
`;

    const codeReqResNext3 = `
    app.get('/products', (req, res) => {
        res.json({ mensaje: 'OK' });
    });
`;

    const codeReqResNext4 = `
    app.use((req, res, next) => {
        console.log('Request recibida');
        next();
    });
`;

    return (
        <>
            {/* REQ RES NEXT */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl mb-5">
                    Uso de req, res y next()
                </h1>

                <h3>En Express, cada request pasa por funciones encadenadas:</h3>
                <ul className="list-disc ml-6">
                    <li><b>req</b> contiene la información de la request.</li>
                    <li><b>res</b> se usa para enviar la respuesta.</li>
                    <li><b>next()</b> pasa la ejecución a la siguiente función.</li>
                </ul>
            </div>

            {/* SIMULACIÓN */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Simulación del flujo:</h3>

                <SyntaxHighlighter language="javascript" style={oneDark}>
                    {codeReqResNext}
                </SyntaxHighlighter>

                <SyntaxHighlighter language="javascript" style={oneDark}>
                    {codeReqResNext2}
                </SyntaxHighlighter>

                <div className="flex justify-center mt-4">
                    <button
                        className="bg-amber-400/30 p-2 rounded-2xl text-amber-100"
                        onClick={middleware}
                    >
                        Hacer request
                    </button>
                </div>

                <div className="mt-4 bg-black/40 p-3 rounded-xl min-h-[100px]">
                    <h4 className="text-amber-100">Ejecución:</h4>
                    {log.map((item, index) => (
                        <p key={index} className="text-green-300 text-sm">
                            {item}
                        </p>
                    ))}
                </div>
            </div>

            {/* CONCEPTOS CLAVE */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Conceptos importantes:</h3>
                <ul className="list-disc ml-6">
                    <li>Un middleware puede modificar <b>req</b>.</li>
                    <li>Si no se llama a <b>next()</b>, la request se detiene.</li>
                    <li>Solo una función debe enviar la respuesta.</li>
                </ul>



            </div>



            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl mb-5">
                    Cuando next()
                </h1>
                <h3>next() no es obligatorio:</h3>

                <h3>Se utiliza únicamente cuando una función no envía una respuesta y necesita continuar</h3>
                <h3>la ejecución hacia el siguiente middleware o controlador.</h3>

                <br></br>

                <h3>Cuando <b>NO</b> lo usamos:</h3>
                <ul className="list-disc ml-6">
                    <li>La request termina.</li>
                    <li>No hay nada más que ejecutar.</li>
                    <li>Llamar a next() sería incorrecto.</li>
                </ul>


                <SyntaxHighlighter language="javascript" style={oneDark}>
                    {codeReqResNext3}
                </SyntaxHighlighter>

                <br></br>
                <h3>Cuando <b>Si</b> va next():</h3>
                <ul className="list-disc ml-6">
                    <li>No manda respuesta.</li>
                    <li>Solo registra info.</li>
                    <li>Pasa la ejecución al siguiente paso.</li>
                </ul>


                <SyntaxHighlighter language="javascript" style={oneDark}>
                    {codeReqResNext4}
                </SyntaxHighlighter>
            </div>


            <div className="flex justify-center mt-2 mb-4">
                <Link className="bg-amber-400/30 p-2 rounded-2xl text-amber-100" href="/">
                    Volver
                </Link>
            </div>
        </>
    );
}
