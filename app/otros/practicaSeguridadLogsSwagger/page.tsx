"use client"

import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PracticaSeguridadLogsSwagger() {

  /* ===================== CÓDIGOS ===================== */

  const codeMorgan = `
const morgan = require('morgan');

app.use(morgan('dev'));
`;

  const codeCustomLogger = `
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next();
});
`;

  const codeHelmet = `
const helmet = require('helmet');

app.use(helmet());
`;

  const codeRateLimit = `
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máximo 100 requests por IP
  message: 'Demasiadas peticiones, intenta más tarde.'
});

app.use(limiter);
`;

  const codeSwaggerSetup = `
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Mi App',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
`;

  const codeSwaggerRoute = `
/**
 * @swagger
 * /products:
 *   get:
 *     summary: Obtiene lista de productos
 *     responses:
 *       200:
 *         description: Lista de productos
 */
app.get('/products', (req, res) => {
  res.json([{ id: 1, name: 'Producto 1' }]);
});
`;

  return (
    <>
      {/* INTRO */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl mb-5">
          Logs, Seguridad y Documentación en Express
        </h1>

        <h3>
          Un backend profesional no solo responde requests.
          También:
        </h3>

        <ul className="list-disc ml-6 mt-2">
          <li>Registra actividad (logs).</li>
          <li>Se protege contra ataques básicos.</li>
          <li>Documenta sus endpoints.</li>
        </ul>
      </div>

      {/* LOGS */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-200 mb-3">1️⃣ Logs</h2>

        <h3>
          Los logs permiten registrar qué está ocurriendo en el servidor.
        </h3>

        <ul className="list-disc ml-6 mt-2">
          <li>Requests recibidas.</li>
          <li>Errores.</li>
          <li>Tiempo de respuesta.</li>
        </ul>

        <h4 className="mt-4">Morgan (logger automático)</h4>

        <SyntaxHighlighter language="javascript" style={oneDark}>
          {codeMorgan}
        </SyntaxHighlighter>

        <h4 className="mt-4">Logger manual básico</h4>

        <SyntaxHighlighter language="javascript" style={oneDark}>
          {codeCustomLogger}
        </SyntaxHighlighter>

        <h3 className="mt-3">
          En producción se suelen usar herramientas más avanzadas como Winston o Pino.
        </h3>
      </div>

      {/* SEGURIDAD */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-200 mb-3">2️⃣ Seguridad básica</h2>

        <h3>
          Express por defecto no incluye protección.
          Necesitamos agregar middlewares.
        </h3>

        <h4 className="mt-4">Helmet</h4>

        <h3>
          Helmet agrega headers HTTP de seguridad automáticamente.
        </h3>

        <SyntaxHighlighter language="javascript" style={oneDark}>
          {codeHelmet}
        </SyntaxHighlighter>

        <h4 className="mt-4">Rate Limit</h4>

        <h3>
          Limita la cantidad de requests por IP para evitar ataques
          de fuerza bruta o spam.
        </h3>

        <SyntaxHighlighter language="javascript" style={oneDark}>
          {codeRateLimit}
        </SyntaxHighlighter>

        <h3 className="mt-3">
          Estos middlewares deben configurarse antes de los endpoints.
        </h3>
      </div>

      {/* SWAGGER */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-200 mb-3">3️⃣ Documentación con Swagger</h2>

        <h3>
          Swagger permite generar documentación interactiva
          para probar la API desde el navegador.
        </h3>

        <h4 className="mt-4">Configuración básica</h4>

        <SyntaxHighlighter language="javascript" style={oneDark}>
          {codeSwaggerSetup}
        </SyntaxHighlighter>

        <h4 className="mt-4">Documentar un endpoint</h4>

        <SyntaxHighlighter language="javascript" style={oneDark}>
          {codeSwaggerRoute}
        </SyntaxHighlighter>

        <h3 className="mt-3">
          Luego accedemos a:
        </h3>

        <SyntaxHighlighter language="bash" style={oneDark}>
{`http://localhost:3000/docs`}
        </SyntaxHighlighter>

        <h3 className="mt-3">
          Desde ahí podemos:
        </h3>

        <ul className="list-disc ml-6">
          <li>Ver endpoints.</li>
          <li>Probar requests.</li>
          <li>Ver modelos de datos.</li>
        </ul>
      </div>

      {/* CONCEPTOS CLAVE */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h3>Conceptos importantes:</h3>
        <ul className="list-disc ml-6">
          <li>Logs permiten monitoreo y debugging.</li>
          <li>Helmet protege con headers HTTP.</li>
          <li>Rate-limit evita abuso de API.</li>
          <li>Swagger documenta y facilita pruebas.</li>
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
