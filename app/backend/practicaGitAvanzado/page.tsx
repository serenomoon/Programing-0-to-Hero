"use client";

import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function GitAvanzadoPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-5">

      <h1 className="text-3xl font-bold">
        Uso avanzado de Git y ramas
      </h1>

      <p>
        En proyectos reales no alcanza con hacer <code>git add</code> y <code>git commit</code>.
        Necesitamos trabajar con ramas, colaborar en equipo, resolver conflictos,
        mantener un historial limpio y manejar entornos.
      </p>

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold">1️⃣ Flujo básico con ramas</h2>

      <p>
        Nunca se trabaja directamente sobre <code>main</code>. Lo correcto es:
      </p>

      <ul className="list-disc ml-6 space-y-2">
        <li>Crear una rama para cada feature</li>
        <li>Hacer commits pequeños y descriptivos</li>
        <li>Mergear cuando esté lista</li>
      </ul>

      <SyntaxHighlighter language="bash" style={oneDark}>
{`# Crear una nueva rama
git checkout -b feature/login

# Hacer cambios
git add .
git commit -m "feat: formulario de login con validaciones"

# Volver a main
git checkout main

# Merge
git merge feature/login`}
      </SyntaxHighlighter>

      <p>
        ✔ Ventaja: aislás cambios y evitás romper producción.
      </p>

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-10">2️⃣ Estrategias de ramas</h2>

      <h3 className="text-xl font-semibold">Git Flow (clásico)</h3>

      <ul className="list-disc ml-6 space-y-2">
        <li><strong>main</strong> → producción</li>
        <li><strong>develop</strong> → desarrollo</li>
        <li><strong>feature/*</strong> → nuevas funcionalidades</li>
        <li><strong>hotfix/*</strong> → arreglos urgentes</li>
      </ul>

      <SyntaxHighlighter language="bash" style={oneDark}>
{`# Crear feature desde develop
git checkout develop
git checkout -b feature/pago-mercadopago`}
      </SyntaxHighlighter>

      <p>
        ✔ Ideal para proyectos grandes.
      </p>

      <h3 className="text-xl font-semibold">Trunk Based (moderno)</h3>

      <p>
        Todos trabajan cerca de <code>main</code> con ramas pequeñas y cortas.
        Se mergea rápido usando Pull Requests.
      </p>

      ✔ Ideal para equipos ágiles y CI/CD continuo.

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-10">3️⃣ Rebase vs Merge</h2>

      <h3 className="text-xl font-semibold">Merge</h3>

      <SyntaxHighlighter language="bash" style={oneDark}>
{`git checkout main
git merge feature/login`}
      </SyntaxHighlighter>

      ✔ Mantiene historial real  
      ❌ Crea commits extra de merge  

      <h3 className="text-xl font-semibold pt-5">Rebase</h3>

      <SyntaxHighlighter language="bash" style={oneDark}>
{`git checkout feature/login
git rebase main`}
      </SyntaxHighlighter>

      ✔ Historial limpio y lineal  
      ❌ Más delicado (no usar en ramas compartidas)

      📌 Regla práctica:
      <ul className="list-disc ml-6">
        <li>Merge → ramas compartidas</li>
        <li>Rebase → trabajo local</li>
      </ul>

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-10">4️⃣ Resolución de conflictos</h2>

      Cuando dos personas modifican la misma línea:

      <SyntaxHighlighter language="bash" style={oneDark}>
{`<<<<<<< HEAD
console.log("Hola mundo")
=======
console.log("Hola Saulo")
>>>>>>> feature/saludo`}
      </SyntaxHighlighter>

      ✔ Editás manualmente  
      ✔ Eliminás las marcas  
      ✔ Luego:

      <SyntaxHighlighter language="bash" style={oneDark}>
{`git add .
git commit`}
      </SyntaxHighlighter>

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-10">5️⃣ Cherry-pick</h2>

      Traer un commit específico de otra rama:

      <SyntaxHighlighter language="bash" style={oneDark}>
{`git cherry-pick 34adf89`}
      </SyntaxHighlighter>

      ✔ Útil para hotfixes sin mergear todo.

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-10">6️⃣ Stash</h2>

      Guardar cambios temporales:

      <SyntaxHighlighter language="bash" style={oneDark}>
{`git stash
git stash pop`}
      </SyntaxHighlighter>

      ✔ Ideal si necesitás cambiar de rama sin commitear.

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-10">7️⃣ Hooks y buenas prácticas</h2>

      <p>
        Podés usar <code>husky</code> para correr tests antes de cada commit.
      </p>

      <SyntaxHighlighter language="bash" style={oneDark}>
{`npm install husky --save-dev`}
      </SyntaxHighlighter>

      Ejemplo: evitar commits si fallan los tests.

      ✔ Mejora calidad del código.

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-10">8️⃣ Conventional Commits</h2>

      Formato recomendado:

      <SyntaxHighlighter language="bash" style={oneDark}>
{`feat: agrega autenticación JWT
fix: corrige bug en middleware
refactor: mejora estructura del service
docs: actualiza README`}
      </SyntaxHighlighter>

      ✔ Permite generar changelogs automáticos  
      ✔ Mejora claridad del historial  

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-10">9️⃣ Pull Requests (PR)</h2>

      Flujo profesional:

      <ul className="list-disc ml-6 space-y-2">
        <li>Push de rama</li>
        <li>Crear Pull Request</li>
        <li>Code Review</li>
        <li>CI pasa tests</li>
        <li>Merge</li>
      </ul>

      ✔ Nunca mergear sin revisión en equipos.

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-10">🔟 Git en producción</h2>

      Nunca hacer:

      <SyntaxHighlighter language="bash" style={oneDark}>
{`git push --force`}
      </SyntaxHighlighter>

      en ramas compartidas.

      Usar:

      <SyntaxHighlighter language="bash" style={oneDark}>
{`git push --force-with-lease`}
      </SyntaxHighlighter>

      ✔ Más seguro.

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-15">📌 Resumen profesional</h2>

      <ul className="list-disc ml-6 space-y-2">
        <li>Trabajar siempre con ramas</li>
        <li>No tocar main directamente</li>
        <li>Commits pequeños y claros</li>
        <li>Usar PR + Code Review</li>
        <li>Preferir rebase para trabajo local</li>
        <li>No usar force push sin cuidado</li>
      </ul>

      <div className="flex justify-center mt-2 mb-4">
        <Link className="bg-amber-400/30 p-2 rounded-2xl text-amber-100" href="/">
          Volver
        </Link>
      </div>

    </div>
  );
}
