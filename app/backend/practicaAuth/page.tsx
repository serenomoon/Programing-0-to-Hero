"use client";

import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PracticaAuth() {


  const codeNextAuthConfig = `
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (
          credentials.email === "admin@test.com" &&
          credentials.password === "1234"
        ) {
          return {
            id: "1",
            name: "Admin",
            email: "admin@test.com",
          };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
`;

  const codeLoginPage = `
"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <>
      <input onChange={e => setEmail(e.target.value)} />
      <input type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </>
  );
}
`;

  const codeProtectedPage = `
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return <h1>Dashboard privado</h1>;
}
`;

  const codeJwtLogin = `
import jwt from "jsonwebtoken";

export function login(req, res) {
  const { email, password } = req.body;

  if (email === "admin@test.com" && password === "1234") {
    const token = jwt.sign(
      { id: 1, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } else {
    res.status(401).json({ error: "Credenciales inválidas" });
  }
}
`;

  const codeJwtMiddleware = `
export function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({ error: "No autorizado" });
  }

  const token = auth.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: "Token inválido" });
  }
}
`;

  return (
    <>
      {/* INTRODUCCIÓN */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl mb-5">
          Autenticación y rutas protegidas
        </h1>

        <h3>
          La autenticación permite identificar al usuario y decidir
          qué partes de la aplicación puede usar.
        </h3>

        <ul className="list-disc ml-6 mt-2">
          <li>Evita accesos no autorizados</li>
          <li>Mantiene sesiones activas</li>
          <li>Protege rutas sensibles</li>
        </ul>
      </div>

      {/* NEXTAUTH */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h3>NextAuth (recomendado en Next.js)</h3>

        <p>
          NextAuth maneja sesiones, cookies y JWT automáticamente.
          Se integra directamente con el sistema de rutas de Next.
        </p>

        <ul className="list-disc ml-6 mt-2">
          <li>No gestionás tokens manualmente</li>
          <li>Las sesiones persisten al recargar</li>
          <li>Ideal para proyectos reales</li>
        </ul>

        <h4 className="mt-4">Configuración básica</h4>
        <SyntaxHighlighter language="typescript" style={oneDark}>
          {codeNextAuthConfig}
        </SyntaxHighlighter>
      </div>

      {/* LOGIN */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h3>Login con NextAuth</h3>

        <p>
          El login se realiza llamando a <b>signIn</b>.
          NextAuth valida las credenciales y crea la sesión.
        </p>

        <SyntaxHighlighter language="typescript" style={oneDark}>
          {codeLoginPage}
        </SyntaxHighlighter>
      </div>

      {/* RUTA PROTEGIDA */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h3>Protección de rutas</h3>

        <p>
          Antes de renderizar la página, verificamos si existe una sesión.
          Si no existe, redirigimos al login.
        </p>

        <SyntaxHighlighter language="typescript" style={oneDark}>
          {codeProtectedPage}
        </SyntaxHighlighter>
      </div>

      {/* JWT */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h3>JWT manual (alternativa)</h3>

        <p>
          Con JWT manual, el desarrollador controla todo:
          creación del token, almacenamiento y validación.
        </p>

        <ul className="list-disc ml-6 mt-2">
          <li>Más control</li>
          <li>Más código</li>
          <li>Más responsabilidad</li>
        </ul>

        <h4 className="mt-4">Login con JWT</h4>
        <SyntaxHighlighter language="typescript" style={oneDark}>
          {codeJwtLogin}
        </SyntaxHighlighter>

        <h4 className="mt-4">Middleware de protección</h4>
        <SyntaxHighlighter language="typescript" style={oneDark}>
          {codeJwtMiddleware}
        </SyntaxHighlighter>
      </div>

      {/* CONCEPTOS */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h3>Conceptos importantes</h3>
        <ul className="list-disc ml-6">
          <li>NextAuth simplifica la autenticación</li>
          <li>JWT manual requiere más control</li>
          <li>Las rutas protegidas validan sesión antes de renderizar</li>
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
