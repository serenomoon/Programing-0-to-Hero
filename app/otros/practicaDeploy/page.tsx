"use client"

import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PracticaDeploy() {

  /* ===================== CÓDIGOS ===================== */

  const codeEnv = `
NODE_ENV=development
PORT=3000
DATABASE_URL=mongodb://localhost:27017/miapp
JWT_SECRET=supersecreto
`;

  const codeDockerfile = `
# Imagen base oficial de Node
FROM node:18

# Carpeta dentro del contenedor
WORKDIR /app

# Copiamos package.json
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del proyecto
COPY . .

# Exponemos el puerto
EXPOSE 3000

# Comando para iniciar
CMD ["npm", "start"]
`;

  const codeDockerCompose = `
version: '3'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env
`;

  const codeRailway = `
# 1) Subir proyecto a GitHub
git init
git add .
git commit -m "Deploy inicial"
git push origin main

# 2) En Railway:
# - New Project
# - Deploy from GitHub
# - Seleccionar repo
`;

  const codeVercel = `
# Instalar CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
`;

  const codeNextBuild = `
# Next.js producción
npm run build
npm start
`;

  return (
    <>
      {/* INTRODUCCIÓN */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl mb-5">
          Deploy y configuración de entornos
        </h1>

        <h3>
          Deploy significa subir nuestra aplicación a un servidor para que
          otras personas puedan acceder desde internet.
        </h3>

        <h3 className="mt-3">
          En proyectos reales necesitamos:
        </h3>

        <ul className="list-disc ml-6 mt-2">
          <li>Separar entornos (development / production).</li>
          <li>Configurar variables seguras.</li>
          <li>Contenerizar con Docker (opcional pero profesional).</li>
          <li>Subir frontend y backend a plataformas cloud.</li>
        </ul>
      </div>

      {/* ENTORNOS */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-200 mb-3">1️⃣ Entornos (Environment)</h2>

        <h3>
          No es lo mismo desarrollar localmente que correr en producción.
        </h3>

        <ul className="list-disc ml-6 mt-2">
          <li>development → entorno local</li>
          <li>production → entorno real</li>
          <li>test → testing automatizado</li>
        </ul>

        <h4 className="mt-4">Archivo .env</h4>

        <SyntaxHighlighter language="bash" style={oneDark}>
          {codeEnv}
        </SyntaxHighlighter>

        <h3 className="mt-3">
          NODE_ENV permite cambiar comportamientos según el entorno.
        </h3>
      </div>

      {/* DOCKER */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-200 mb-3">2️⃣ Docker</h2>

        <h3>
          Docker permite empaquetar la app con todas sus dependencias.
          Así funciona igual en cualquier máquina.
        </h3>

        <h4 className="mt-4">Dockerfile</h4>

        <SyntaxHighlighter language="docker" style={oneDark}>
          {codeDockerfile}
        </SyntaxHighlighter>

        <h4 className="mt-4">docker-compose (opcional)</h4>

        <SyntaxHighlighter language="yaml" style={oneDark}>
          {codeDockerCompose}
        </SyntaxHighlighter>

        <h3 className="mt-3">
          Con esto podemos ejecutar:
        </h3>

        <SyntaxHighlighter language="bash" style={oneDark}>
{`docker build -t miapp .
docker run -p 3000:3000 miapp`}
        </SyntaxHighlighter>
      </div>

      {/* RAILWAY */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-200 mb-3">3️⃣ Deploy Backend en Railway</h2>

        <h3>
          Railway es una plataforma simple para deployar backend Node.
        </h3>

        <ul className="list-disc ml-6 mt-2">
          <li>Conecta con GitHub.</li>
          <li>Detecta Node automáticamente.</li>
          <li>Permite configurar variables de entorno.</li>
        </ul>

        <SyntaxHighlighter language="bash" style={oneDark}>
          {codeRailway}
        </SyntaxHighlighter>

        <h3 className="mt-3">
          En Railway configuramos:
        </h3>

        <ul className="list-disc ml-6">
          <li>Variables de entorno</li>
          <li>Puerto</li>
          <li>Base de datos (Mongo, PostgreSQL, etc.)</li>
        </ul>
      </div>

      {/* VERCEL */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-200 mb-3">4️⃣ Deploy Frontend en Vercel</h2>

        <h3>
          Vercel es ideal para Next.js porque:
        </h3>

        <ul className="list-disc ml-6 mt-2">
          <li>Optimiza SSR automáticamente.</li>
          <li>Soporta ISR.</li>
          <li>CDN global.</li>
        </ul>

        <SyntaxHighlighter language="bash" style={oneDark}>
          {codeVercel}
        </SyntaxHighlighter>

        <h4 className="mt-4">Build producción</h4>

        <SyntaxHighlighter language="bash" style={oneDark}>
          {codeNextBuild}
        </SyntaxHighlighter>
      </div>

      {/* FLUJO PROFESIONAL */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-200 mb-3">5️⃣ Flujo profesional completo</h2>

        <h3>Arquitectura típica:</h3>

        <ul className="list-disc ml-6 mt-2">
          <li>Frontend → Vercel</li>
          <li>Backend → Railway</li>
          <li>Base de datos → Mongo Atlas / Railway / Supabase</li>
          <li>Docker → opcional para entornos más complejos</li>
        </ul>

        <h3 className="mt-4">
          Flujo real:
        </h3>

        <ol className="list-decimal ml-6 mt-2">
          <li>Desarrollás local.</li>
          <li>Commit a GitHub.</li>
          <li>Railway y Vercel detectan cambios.</li>
          <li>Se genera build automático.</li>
          <li>App disponible online.</li>
        </ol>

        <h3 className="mt-4">
          Importante:
        </h3>

        <ul className="list-disc ml-6">
          <li>Nunca subir .env al repositorio.</li>
          <li>Configurar variables en la plataforma.</li>
          <li>Separar entorno dev y producción.</li>
        </ul>
      </div>

      {/* CONCLUSIÓN */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h3>Conceptos clave:</h3>
        <ul className="list-disc ml-6">
          <li>Deploy = subir app a internet.</li>
          <li>Docker estandariza entornos.</li>
          <li>Railway ideal para backend.</li>
          <li>Vercel ideal para Next.</li>
          <li>Variables de entorno son fundamentales.</li>
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
