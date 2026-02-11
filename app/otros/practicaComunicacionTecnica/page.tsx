"use client"

import Link from "next/link";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PracticaComunicacionTecnica() {

  const codeString = `
// Ejemplo de comentario poco claro

function calcular(a, b) {
  return a * b
}

/*
Problema:
- No sabemos qué representan a y b
- No sabemos el contexto
- No sabemos si es precio, cantidad, impuestos, etc
*/
`

  const codeString2 = `
// Ejemplo mejor documentado

/**
 * Calcula el precio total de un producto
 * @param precioUnitario number
 * @param cantidad number
 * @returns number precio total
 */
function calcularPrecioTotal(precioUnitario, cantidad) {
  return precioUnitario * cantidad
}
`

  const codeString3 = `# Proyecto E-commerce API

## Descripción
API REST para gestión de productos y autenticación con JWT.

## Tecnologías
- Node.js
- Express
- MongoDB
- JWT

## Instalación
npm install
npm run dev

## Variables de entorno
PORT=3000
MONGO_URL=...
JWT_SECRET=...
`

  const [mensaje, setMensaje] = useState("No documentado")

  const mejorarMensaje = () => {
    setMensaje("Documentación clara y profesional")
  }

  return (
    <>
      {/* INTRO */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">
          Comunicación y Documentación Técnica
        </h1>

        <h3>
          Programar no es solo escribir código.
        </h3>

        <h3>
          Es explicar lo que el código hace, por qué lo hace y cómo usarlo.
        </h3>

        <h3>
          Un desarrollador semi senior o senior se diferencia por cómo comunica.
        </h3>
      </div>

      {/* POR QUE ES IMPORTANTE */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">
          ¿Por qué es importante?
        </h1>

        <h3>✔ Permite que otros entiendan tu código</h3>
        <h3>✔ Reduce errores en equipo</h3>
        <h3>✔ Facilita mantenimiento futuro</h3>
        <h3>✔ Mejora revisiones de código (Code Review)</h3>

        <div className="grid justify-center mt-4">
          <div
            className="cursor-pointer bg-amber-400/30 p-2 rounded-2xl"
            onClick={() => mejorarMensaje()}
          >
            <h1 className="text-amber-100">
              Estado actual: {mensaje}
            </h1>
          </div>
        </div>
      </div>

      {/* COMENTARIOS EN CODIGO */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">
          Comentarios en el código
        </h1>

        <h3>
          No se comenta lo obvio. Se comenta lo importante.
        </h3>

        <div>
          <SyntaxHighlighter language="typescript" style={oneDark}>
            {codeString}
          </SyntaxHighlighter>
        </div>

        <h3 className="mt-4">
          Versión profesional:
        </h3>

        <div>
          <SyntaxHighlighter language="typescript" style={oneDark}>
            {codeString2}
          </SyntaxHighlighter>
        </div>

        <h3>
          La diferencia no es el código, es la claridad.
        </h3>
      </div>

      {/* DOCUMENTACION README */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">
          Documentación del proyecto (README)
        </h1>

        <h3>
          Todo proyecto profesional debe tener un README claro.
        </h3>

        <h3>
          Debe responder:
        </h3>

        <h3>• ¿Qué hace el proyecto?</h3>
        <h3>• ¿Cómo se instala?</h3>
        <h3>• ¿Qué tecnologías usa?</h3>
        <h3>• ¿Qué variables de entorno necesita?</h3>

        <div>
          <SyntaxHighlighter language="markdown" style={oneDark}>
            {codeString3}
          </SyntaxHighlighter>
        </div>
      </div>

      {/* COMUNICACION EN EQUIPO */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">
          Comunicación en equipo
        </h1>

        <h3>
          Un desarrollador profesional:
        </h3>

        <h3>✔ Explica decisiones técnicas</h3>
        <h3>✔ Justifica cambios en Pull Requests</h3>
        <h3>✔ Escribe mensajes de commit claros</h3>

        <h3 className="mt-4">
          Ejemplo de mal commit:
        </h3>

        <h3>❌ "arreglos"</h3>

        <h3 className="mt-3">
          Ejemplo profesional:
        </h3>

        <h3>✔ "Fix: corrige validación de login cuando password es null"</h3>

        <h3 className="mt-4">
          La claridad técnica evita malentendidos.
        </h3>
      </div>

      {/* CIERRE */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">
          Conclusión
        </h1>

        <h3>
          Código bueno + mala comunicación = proyecto difícil de mantener.
        </h3>

        <h3>
          Código bueno + buena documentación = proyecto profesional.
        </h3>

        <h3 className="mt-4">
          Comunicar bien es una habilidad técnica.
        </h3>
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
