"use client";

import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PracticaAuthJWT() {

  /* =========================
     LOGIN Y JWT
  ========================= */

  const codeLogin = `
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Simulación de usuario en base de datos
  const user = {
    id: 1,
    email: "admin@mail.com",
    role: "admin"
  };

  // Validación básica
  if (email !== user.email || password !== "1234") {
    return res.status(401).json({ error: "Credenciales incorrectas" });
  }

  // Generación del JWT
  const token = jwt.sign(
    {
      id: user.id,
      role: user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});
`;

  const codeJWTMiddleware = `
const verificarToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // El token viene como: Bearer TOKEN
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token requerido" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Guardamos datos del usuario
    next();
  } catch (error) {
    res.status(403).json({ error: "Token inválido" });
  }
};
`;

  /* =========================
     ROLES
  ========================= */

  const codeRolesMiddleware = `
const soloAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Acceso denegado" });
  }

  next();
};
`;

  const codeProtectedRoute = `
app.get(
  "/admin",
  verificarToken,
  soloAdmin,
  (req, res) => {
    res.json({ mensaje: "Bienvenido admin" });
  }
);
`;

  /* =========================
     FRONTEND
  ========================= */

  const codeFrontendLogin = `
const login = async () => {
  const res = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "admin@mail.com",
      password: "1234"
    })
  });

  const data = await res.json();
  localStorage.setItem("token", data.token);
};
`;

  const codeFrontendRequest = `
const token = localStorage.getItem("token");

fetch("/admin", {
  headers: {
    Authorization: "Bearer " + token
  }
});
`;

  return (
    <>
      {/* INTRO */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl mb-5">
          Autenticación con JWT y Roles
        </h1>

        <h3>
          JWT (JSON Web Token) es una forma común de autenticación
          basada en tokens, usada en APIs modernas.
        </h3>

        <h3 className="mt-2">
          Permite identificar al usuario y controlar permisos
          sin usar sesiones en memoria.
        </h3>
      </div>

      {/* JWT */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">Login y generación del JWT</h2>

        <h3>
          En el login, el backend valida credenciales y genera un token.
        </h3>

        <h3 className="mt-2">
          El token contiene información del usuario (id, rol, etc).
        </h3>

        <SyntaxHighlighter language="javascript" style={oneDark}>
          {codeLogin}
        </SyntaxHighlighter>
      </div>

      {/* MIDDLEWARE TOKEN */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">Middleware de verificación</h2>

        <h3>
          Este middleware valida que el token exista y sea válido.
        </h3>

        <h3 className="mt-2">
          Si es correcto, se agrega el usuario a <b>req.user</b>.
        </h3>

        <SyntaxHighlighter language="javascript" style={oneDark}>
          {codeJWTMiddleware}
        </SyntaxHighlighter>
      </div>

      {/* ROLES */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">Control de roles</h2>

        <h3>
          Los roles permiten limitar qué puede hacer cada usuario.
        </h3>

        <h3 className="mt-2">
          Se usan middlewares adicionales según el rol requerido.
        </h3>

        <SyntaxHighlighter language="javascript" style={oneDark}>
          {codeRolesMiddleware}
        </SyntaxHighlighter>

        <h3 className="mt-4">
          Ruta protegida solo para administradores:
        </h3>

        <SyntaxHighlighter language="javascript" style={oneDark}>
          {codeProtectedRoute}
        </SyntaxHighlighter>
      </div>

      {/* FRONTEND */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">Uso desde el frontend</h2>

        <h3>
          El frontend guarda el token y lo envía en cada request protegida.
        </h3>

        <h3 className="mt-2">
          El backend decide si el usuario puede acceder o no.
        </h3>

        <h4 className="mt-4">Login</h4>
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {codeFrontendLogin}
        </SyntaxHighlighter>

        <h4 className="mt-4">Request protegida</h4>
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {codeFrontendRequest}
        </SyntaxHighlighter>
      </div>

      {/* CONCEPTOS */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">Conceptos importantes</h2>

        <ul className="list-disc ml-5">
          <li>JWT identifica al usuario</li>
          <li>Los roles controlan permisos</li>
          <li>Los middlewares protegen rutas</li>
          <li>El backend siempre valida el acceso</li>
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
