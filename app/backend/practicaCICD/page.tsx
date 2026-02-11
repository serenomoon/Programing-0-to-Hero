"use client";

import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";


export default function CICDPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-5">

      <h1 className="text-3xl font-bold">
        CI/CD Básico – GitHub Actions y Pipelines
      </h1>

      <p>
        CI/CD significa:
      </p>

      <ul className="list-disc ml-6 space-y-2">
        <li><strong>CI</strong> → Continuous Integration</li>
        <li><strong>CD</strong> → Continuous Delivery / Deployment</li>
      </ul>

      <p>
        La idea es automatizar procesos como:
      </p>

      <ul className="list-disc ml-6 space-y-2">
        <li>Instalar dependencias</li>
        <li>Correr tests</li>
        <li>Hacer build</li>
        <li>Deploy automático</li>
      </ul>

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-10">1️⃣ ¿Qué es Continuous Integration?</h2>

      <p>
        Cada vez que alguien hace push:
      </p>

      <ul className="list-disc ml-6">
        <li>Se ejecutan tests automáticamente</li>
        <li>Se valida que el proyecto compile</li>
        <li>Se detectan errores antes del merge</li>
      </ul>

      ✔ Evita romper producción  
      ✔ Mejora calidad del código  

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-10">2️⃣ ¿Qué es Continuous Deployment?</h2>

      <p>
        Si todo sale bien:
      </p>

      <ul className="list-disc ml-6">
        <li>Se hace deploy automático</li>
        <li>No hay intervención manual</li>
      </ul>

      Ejemplo:
      - Push a main → se deploya a Vercel automáticamente

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-10">3️⃣ ¿Qué es un pipeline?</h2>

      Un pipeline es una secuencia de pasos automatizados.

      Ejemplo real:

      <SyntaxHighlighter language="yaml" style={oneDark}>
{`name: CI Pipeline

on:
  push:
    branches:
      - main
      - develop

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Clonar repositorio
        uses: actions/checkout@v4

      - name: Instalar Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Instalar dependencias
        run: npm install

      - name: Ejecutar tests
        run: npm run test

      - name: Build del proyecto
        run: npm run build`}
      </SyntaxHighlighter>

      📌 Esto se guarda en:

      ```
      .github/workflows/ci.yml
      ```

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-10">4️⃣ Pipeline con Next.js</h2>

      Ejemplo específico para Next:

      <SyntaxHighlighter language="yaml" style={oneDark}>
{`name: Next CI

on:
  pull_request:
    branches: [main]

jobs:
  next-build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - run: npm install
      - run: npm run lint
      - run: npm run build`}
      </SyntaxHighlighter>

      ✔ Valida el PR antes de mergearlo  
      ✔ Evita que entren errores a main  

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-10">5️⃣ Deploy automático a Vercel</h2>

      Si conectás tu repo a Vercel:

      ✔ Cada push a main → deploy automático  
      ✔ Cada PR → preview deploy  

      No necesitás configurar nada extra.

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-10">6️⃣ Deploy automático a Railway</h2>

      Railway detecta automáticamente:

      - Dockerfile  
      - package.json  
      - Puerto  

      También se puede usar variables de entorno:

      ```
      DATABASE_URL=postgres://...
      JWT_SECRET=supersecret
      ```

      Nunca subir secretos al repo.

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-10">7️⃣ Variables de entorno en GitHub Actions</h2>

      En GitHub:

      Settings → Secrets → Actions → New repository secret

      Luego en el pipeline:

      <SyntaxHighlighter language="yaml" style={oneDark}>
{`env:
  JWT_SECRET: \${{ secrets.JWT_SECRET }}`}
      </SyntaxHighlighter>

      ✔ Seguro  
      ✔ No expone datos sensibles  

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-10">8️⃣ Workflow profesional típico</h2>

      Flujo real en empresa:

      1. Crear rama feature  
      2. Push  
      3. CI corre tests  
      4. Pull Request  
      5. Code Review  
      6. Merge  
      7. Deploy automático  

      ✔ Todo automatizado  
      ✔ Sin subir archivos manualmente  

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-10">9️⃣ Ejemplo completo CI + Deploy</h2>

      <SyntaxHighlighter language="yaml" style={oneDark}>
{`name: Full Pipeline

on:
  push:
    branches: [main]

jobs:
  test-build-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - run: npm install
      - run: npm run test
      - run: npm run build

      # Ejemplo deploy manual (si usás Docker)
      - name: Build Docker
        run: docker build -t myapp .`}
      </SyntaxHighlighter>

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-10">🔟 Diferencia CI vs CD resumido</h2>

      <div className="bg-gray-800 p-4 rounded-xl">
        <p><strong>CI</strong> → Testea y valida código automáticamente</p>
        <p><strong>CD</strong> → Despliega automáticamente si todo está bien</p>
      </div>

      {/* ========================================================= */}
      <h2 className="text-2xl font-semibold pt-10">📌 Buenas prácticas</h2>

      <ul className="list-disc ml-6 space-y-2">
        <li>No hacer deploy sin tests</li>
        <li>No guardar secretos en el repo</li>
        <li>Usar PR obligatorios</li>
        <li>Bloquear push directo a main</li>
        <li>Agregar lint en CI</li>
      </ul>

      <div className="flex justify-center mt-2 mb-4">
        <Link className="bg-amber-400/30 p-2 rounded-2xl text-amber-100" href="/">
          Volver
        </Link>
      </div>

    </div>
  );
}
