"use client";

import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PracticaPerformanceSEO() {

  /* =========================
     EJEMPLOS DE PERFORMANCE
  ========================= */

  const codeImage = `
import Image from "next/image";

export default function EjemploImagen() {
  return (
    <Image
      src="/banner.jpg"
      alt="Imagen optimizada"
      width={600}
      height={300}
      priority
    />
  );
}
`;

  const codeDynamicImport = `
import dynamic from "next/dynamic";

// Este componente se carga SOLO cuando se necesita
const GraficoPesado = dynamic(() => import("./GraficoPesado"), {
  loading: () => <p>Cargando gráfico...</p>,
  ssr: false
});

export default function Page() {
  return <GraficoPesado />;
}
`;

  const codeMemo = `
import { useMemo } from "react";

export default function Lista({ items }) {

  // useMemo evita recalcular el filtro
  // en cada render si 'items' no cambia
  const itemsFiltrados = useMemo(() => {
    return items.filter(item => item.activo);
  }, [items]);

  return (
    <ul>
      {itemsFiltrados.map(i => (
        <li key={i.id}>{i.nombre}</li>
      ))}
    </ul>
  );
}
`;

  /* =========================
     EJEMPLOS SEO
  ========================= */

  const codeMetadata = `
export const metadata = {
  title: "Curso React y Next",
  description: "Aprendé React y Next paso a paso",
};
`;

  const codeHeadings = `
export default function Page() {
  return (
    <>
      <h1>Curso de React y Next</h1>
      <h2>Fundamentos</h2>
      <h2>Backend</h2>
    </>
  );
}
`;

  const codeServerComponent = `
// Server Component (por defecto)
export default async function Page() {
  const data = await fetch("https://api.ejemplo.com/posts").then(r => r.json());

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
`;

  return (
    <>
      {/* INTRO */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl mb-5">
          Optimización de Performance y SEO
        </h1>

        <h3>
          Performance y SEO (Search Engine Optimization) están directamente relacionados:
          una web rápida se posiciona mejor y ofrece mejor experiencia.
        </h3>

        <h3 className="mt-2">
          Next.js aporta muchas optimizaciones de base,
          pero es importante saber cómo usarlas correctamente.
        </h3>
      </div>

      {/* PERFORMANCE */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">Optimización de performance</h2>

        <h3>
          Performance significa que la aplicación cargue rápido,
          consuma pocos recursos y renderice solo lo necesario.
        </h3>

        <ul className="list-disc ml-5 mt-2">
          <li>Menos JavaScript innecesario</li>
          <li>Menos renders</li>
          <li>Carga progresiva</li>
        </ul>

        <h3 className="mt-4">
          📸 Imágenes optimizadas con next/image
        </h3>

        <h3>
          Next optimiza tamaño, formato y lazy loading automáticamente.
        </h3>

        <SyntaxHighlighter language="tsx" style={oneDark}>
          {codeImage}
        </SyntaxHighlighter>

        <h3 className="mt-4">
          📦 Carga dinámica de componentes pesados
        </h3>

        <h3>
          dynamic import evita cargar código que no se usa al inicio.
        </h3>

        <SyntaxHighlighter language="tsx" style={oneDark}>
          {codeDynamicImport}
        </SyntaxHighlighter>

        <h3 className="mt-4">
          🔁 Evitar cálculos innecesarios con useMemo
        </h3>

        <h3>
          useMemo mejora performance cuando hay cálculos costosos.
        </h3>

        <SyntaxHighlighter language="tsx" style={oneDark}>
          {codeMemo}
        </SyntaxHighlighter>
      </div>

      {/* SEO */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">SEO en Next.js</h2>

        <h3>
          SEO (Search Engine Optimization) es optimizar la web
          para que los buscadores la entiendan y la posicionen mejor.
        </h3>

        <ul className="list-disc ml-5 mt-2">
          <li>Contenido accesible</li>
          <li>HTML bien estructurado</li>
          <li>Renderizado del lado del servidor</li>
        </ul>

        <h3 className="mt-4">
          🧠 Metadata para buscadores
        </h3>

        <h3>
          title y description ayudan a Google a indexar la página.
        </h3>

        <SyntaxHighlighter language="ts" style={oneDark}>
          {codeMetadata}
        </SyntaxHighlighter>

        <h3 className="mt-4">
          🏷 Uso correcto de headings
        </h3>

        <h3>
          h1, h2, h3 dan jerarquía al contenido.
        </h3>

        <SyntaxHighlighter language="tsx" style={oneDark}>
          {codeHeadings}
        </SyntaxHighlighter>

        <h3 className="mt-4">
          🖥 Renderizado en servidor (SSR / SSG)
        </h3>

        <h3>
          Los Server Components generan HTML listo para el SEO.
        </h3>

        <SyntaxHighlighter language="tsx" style={oneDark}>
          {codeServerComponent}
        </SyntaxHighlighter>
      </div>

      {/* CONCEPTOS CLAVE */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">Conceptos clave</h2>

        <ul className="list-disc ml-5">
          <li>Performance mejora experiencia y SEO</li>
          <li>Next optimiza imágenes y código</li>
          <li>SSR y SSG son claves para buscadores</li>
        </ul>
      </div>

      {/* VOLVER */}
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
