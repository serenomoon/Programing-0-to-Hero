"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PracticaRenderizadosNext() {

  const ssrCode = `
export default async function Page() {
  const res = await fetch("https://api.example.com/data", {
    cache: "no-store"
  });
  const data = await res.json();

  return <div>{data.title}</div>;
}
`;

  const ssgCode = `
export default function Page() {
  return <h1>Pagina estatica</h1>;
}
`;

  const isrCode = `
export default async function Page() {
  const res = await fetch("https://api.example.com/posts", {
    next: { revalidate: 60 }
  });
  const data = await res.json();

  return <div>{data.title}</div>;
}
`;

  const csrCode = `
"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then(res => res.json())
      .then(setData);
  }, []);

  return <div>{data}</div>;
}
`;

  const [contador, setContador] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setContador(contador + 1);
    }, 1000);
  }, []);

  return (
    <>
      {/* INTRO */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl mb-5">
          SSR, SSG, ISR y CSR en Next.js
        </h1>

        <h3>
          Next.js permite renderizar páginas de distintas formas según
          <b> cuándo</b> se genera el HTML.
        </h3>
        <h3>
          Esto impacta directamente en rendimiento, SEO (Search Engine Optimization) y experiencia de usuario.
        </h3>
      </div>

      {/* SSR */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-2">SSR – Server Side Rendering</h2>

        <h3>
          En SSR, la página se genera <b>en el servidor en cada request</b>.
        </h3>
        <h3>
          Cada usuario recibe HTML nuevo con datos actualizados.
        </h3>
        <h3 className="mt-2">
          Ideal para dashboards, perfiles, datos privados.
        </h3>

        <SyntaxHighlighter language="typescript" style={oneDark}>
          {ssrCode}
        </SyntaxHighlighter>
      </div>

      {/* SSG */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-2">SSG – Static Site Generation</h2>

        <h3>
          En SSG, la página se genera <b>una sola vez en el build</b>.
        </h3>
        <h3>
          El HTML queda estático y se sirve igual a todos.
        </h3>
        <h3 className="mt-2">
          Ideal para landings, about, contenido que no cambia.
        </h3>

        <SyntaxHighlighter language="typescript" style={oneDark}>
          {ssgCode}
        </SyntaxHighlighter>
      </div>

      {/* ISR */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-2">ISR – Incremental Static Regeneration</h2>

        <h3>
          ISR combina SSG con actualización automática.
        </h3>
        <h3>
          La página se regenera cada cierto tiempo sin rebuild completo.
        </h3>
        <h3 className="mt-2">
          Ideal para blogs, productos, contenido que cambia pero no en tiempo real.
        </h3>

        <SyntaxHighlighter language="typescript" style={oneDark}>
          {isrCode}
        </SyntaxHighlighter>
      </div>

      {/* CSR */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-2">CSR – Client Side Rendering</h2>

        <h3>
          En CSR, el HTML se genera <b>en el navegador</b>.
        </h3>
        <h3>
          El servidor envía un HTML básico y React renderiza todo con JS.
        </h3>
        <h3 className="mt-2">
          Ideal para interacciones, formularios, estados locales.
        </h3>

        <SyntaxHighlighter language="typescript" style={oneDark}>
          {csrCode}
        </SyntaxHighlighter>

        <div className="grid justify-center mt-4">
          <div className="bg-amber-400/30 p-2 rounded-2xl">
            <h1 className="text-amber-100">
              Renderizado en el cliente (contador): {contador}
            </h1>
          </div>
        </div>
      </div>

      {/* CONCLUSION */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-2">Resumen mental</h2>
        <h3>✔ SSG → rápido, estático</h3>
        <h3>✔ ISR → rápido + actualizable</h3>
        <h3>✔ SSR → datos siempre frescos</h3>
        <h3>✔ CSR → máxima interacción</h3>
      </div>

      <div className="flex justify-center mt-2 mb-4">
        <Link
          className="bg-amber-400/30 p-2 rounded-2xl text-amber-100"
          href={"/"}
        >
          Volver
        </Link>
      </div>
    </>
  );
}
