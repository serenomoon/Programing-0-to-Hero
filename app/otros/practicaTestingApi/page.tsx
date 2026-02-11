"use client"

import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PracticaTestingAPI() {

  const installCode = `
# Instalar dependencias

npm install --save-dev jest ts-jest @types/jest supertest @types/supertest
`;

  const basicApiCode = `
/*
Ejemplo de API simple (Express)
*/

import express from "express";

const app = express();
app.use(express.json());

const users = [
  { id: 1, name: "Juan" },
  { id: 2, name: "Ana" }
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  res.json(user);
});

export default app;
`;

  const basicTestCode = `
/*
Test básico con Jest + Supertest
*/

import request from "supertest";
import app from "../app";

describe("GET /users", () => {

  it("debería devolver todos los usuarios", async () => {
    const response = await request(app).get("/users");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
    expect(response.body[0]).toHaveProperty("name");
  });

});
`;

  const paramTestCode = `
/*
Test con parámetro dinámico
*/

describe("GET /users/:id", () => {

  it("debería devolver un usuario existente", async () => {
    const response = await request(app).get("/users/1");

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Juan");
  });

  it("debería devolver 404 si no existe", async () => {
    const response = await request(app).get("/users/999");

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Usuario no encontrado");
  });

});
`;

  const postApiCode = `
/*
Endpoint POST
*/

app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Nombre requerido" });
  }

  const newUser = {
    id: users.length + 1,
    name
  };

  users.push(newUser);
  res.status(201).json(newUser);
});
`;

  const postTestCode = `
/*
Test para POST
*/

describe("POST /users", () => {

  it("debería crear un usuario correctamente", async () => {
    const response = await request(app)
      .post("/users")
      .send({ name: "Carlos" });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe("Carlos");
  });

  it("debería fallar si no se envía nombre", async () => {
    const response = await request(app)
      .post("/users")
      .send({});

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Nombre requerido");
  });

});
`;

  return (
    <>
      {/* INTRO */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl mb-5">
          Testing de API con Jest + Supertest
        </h1>

        <h3>
          Cuando testeamos una API no probamos botones ni UI.
          Probamos endpoints HTTP completos.
        </h3>

        <h3>
          Supertest permite simular requests reales (GET, POST, etc)
          sin levantar el servidor.
        </h3>
      </div>

      {/* INSTALACION */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">
          Instalación
        </h2>

        <SyntaxHighlighter language="bash" style={oneDark}>
          {installCode}
        </SyntaxHighlighter>
      </div>

      {/* API BASE */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">
          API base a testear
        </h2>

        <h3>
          Esta es una API simple con Express que vamos a probar.
        </h3>

        <SyntaxHighlighter language="typescript" style={oneDark}>
          {basicApiCode}
        </SyntaxHighlighter>
      </div>

      {/* TEST BASICO */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">
          Test GET básico
        </h2>

        <h3>
          Supertest hace una request real contra la app y Jest verifica el resultado.
        </h3>

        <SyntaxHighlighter language="typescript" style={oneDark}>
          {basicTestCode}
        </SyntaxHighlighter>
      </div>

      {/* TEST PARAM */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">
          Test con parámetros y errores
        </h2>

        <h3>
          Siempre es importante testear tanto el caso exitoso como el caso de error.
        </h3>

        <SyntaxHighlighter language="typescript" style={oneDark}>
          {paramTestCode}
        </SyntaxHighlighter>
      </div>

      {/* POST */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">
          Testeando POST
        </h2>

        <h3>
          También podemos probar envío de datos con .send()
        </h3>

        <SyntaxHighlighter language="typescript" style={oneDark}>
          {postApiCode}
        </SyntaxHighlighter>

        <SyntaxHighlighter language="typescript" style={oneDark}>
          {postTestCode}
        </SyntaxHighlighter>
      </div>

      {/* CONCLUSION */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">
          Qué estamos testeando realmente
        </h2>

        <h3>
          ✔ Status codes  
          ✔ Body de respuesta  
          ✔ Validaciones  
          ✔ Manejo de errores  
          ✔ Comportamiento real del endpoint
        </h3>

        <h3>
          Esto es testing de integración, no unit testing.
        </h3>
      </div>

      <div className="flex justify-center mt-4 mb-6">
        <Link
          className="bg-amber-400/30 p-2 rounded-2xl text-amber-100"
          href="/"
        >
          Volver
        </Link>
      </div>
    </>
  );
}
