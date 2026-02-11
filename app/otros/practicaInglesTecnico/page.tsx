    "use client"

import Link from "next/link";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PracticaInglesTecnico() {

  const codeString = `
// Ejemplo real leyendo documentación de useEffect

useEffect(() => {
  fetch("/api/products")
    .then(res => res.json())
    .then(data => setProducts(data))
}, [])

/*
En la documentación oficial dice:

"If you pass an empty dependency array, the effect will run only once after the initial render."

Traducción práctica:
Si pasás [] como dependencia,
el efecto se ejecuta UNA sola vez luego del primer render.
*/
`

  const codeString2 = `
// Ejemplo real leyendo error en inglés

try {
  const response = await fetch("/api/login")
} catch (error) {
  console.error(error)
}

/*
Error común:

"Unhandled promise rejection"

Significa:
Promesa no manejada correctamente.
Probablemente faltó un await o un catch.

Leer el error en inglés te permite resolverlo
sin depender de una traducción automática.
*/
`

  const [palabra, setPalabra] = useState("dependency")

  const cambiarPalabra = () => {
    setPalabra("callback")
  }

  return (
    <>
      {/* INTRODUCCION */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">
          Inglés Técnico y Lectura de Documentación
        </h1>

        <h3>
          El 90% de la documentación oficial de programación está en inglés.
        </h3>

        <h3>
          Frameworks, librerías, errores, issues de GitHub y StackOverflow están escritos en inglés.
        </h3>

        <h3>
          No es opcional: es una herramienta fundamental para crecer profesionalmente.
        </h3>
      </div>

      {/* POR QUE ES NECESARIO */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">
          ¿Por qué es necesario?
        </h1>

        <h3>✔ Entender documentación oficial (React, Next, Express, etc)</h3>
        <h3>✔ Interpretar mensajes de error</h3>
        <h3>✔ Leer código open source</h3>
        <h3>✔ Trabajar en equipos internacionales</h3>
        <h3>✔ Postularte a trabajos remotos</h3>

        <h3 className="mt-4">
          Ejemplo: la palabra actual es:
        </h3>

        <div className="grid justify-center mt-3">
          <div 
            className="cursor-pointer bg-amber-400/30 p-2 rounded-2xl"
            onClick={() => cambiarPalabra()}
          >
            <h1 className="text-amber-100">
              {palabra}
            </h1>
          </div>
        </div>

        <h3 className="mt-3">
          Muchas palabras técnicas no se traducen:
          dependency, hook, render, state, callback, promise.
        </h3>
      </div>

      {/* LEER DOCUMENTACION */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">
          Cómo leer documentación correctamente
        </h1>

        <h3>
          No se lee como un libro. Se busca información puntual.
        </h3>

        <h3>
          Paso recomendado:
        </h3>

        <h3>1️⃣ Leer el título y descripción general</h3>
        <h3>2️⃣ Mirar los ejemplos de código</h3>
        <h3>3️⃣ Leer notas importantes (Warning, Important)</h3>
        <h3>4️⃣ Recién después profundizar</h3>

        <div>
          <SyntaxHighlighter language="typescript" style={oneDark}>
            {codeString}
          </SyntaxHighlighter>
        </div>

        <h3>
          Entender una frase clave en inglés puede ahorrarte horas.
        </h3>
      </div>

      {/* ERRORES EN INGLES */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">
          Interpretar errores en inglés
        </h1>

        <h3>
          Los errores no son enemigos, son pistas.
        </h3>

        <div>
          <SyntaxHighlighter language="typescript" style={oneDark}>
            {codeString2}
          </SyntaxHighlighter>
        </div>

        <h3>
          Palabras comunes en errores:
        </h3>

        <h3>• Undefined → no está definido</h3>
        <h3>• Unexpected → inesperado</h3>
        <h3>• Missing → faltante</h3>
        <h3>• Invalid → inválido</h3>
        <h3>• Cannot read property → no puede leer propiedad</h3>
      </div>

      {/* BUENAS PRACTICAS */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">
          Buenas prácticas
        </h1>

        <h3>✔ No traducir todo automáticamente</h3>
        <h3>✔ Aprender vocabulario técnico clave</h3>
        <h3>✔ Leer código open source en GitHub</h3>
        <h3>✔ Ver documentación oficial antes que tutoriales</h3>
        <h3>✔ Buscar errores en Google en inglés</h3>

        <h3 className="mt-4">
          Ejemplo:
        </h3>

        <h3>
          ❌ "error promesa no manejada"
        </h3>

        <h3>
          ✔ "Unhandled promise rejection React"
        </h3>

        <h3>
          Buscar en inglés siempre devuelve mejores resultados.
        </h3>
      </div>

      {/* CIERRE */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">
          Conclusión
        </h1>

        <h3>
          El inglés técnico no es hablar fluido.
        </h3>

        <h3>
          Es entender lo suficiente para:
        </h3>

        <h3>• Leer documentación</h3>
        <h3>• Resolver errores</h3>
        <h3>• Investigar soluciones</h3>

        <h3 className="mt-4">
          Es una habilidad profesional obligatoria.
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
