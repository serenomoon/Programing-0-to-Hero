"use client"

import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PracticaArquitecturaCapas() {



  const codeEstructura = `
/*
════════════════════════════════════════════════════
📁 ESTRUCTURA DE CARPETAS (RECOMENDADA)
════════════════════════════════════════════════════

src/
 ├─ app/
 │   └─ api/
 │       └─ users/
 │           └─ route.ts        ← Controller
 ├─ services/
 │   └─ user.service.ts        ← Service
 ├─ repositories/
 │   └─ user.repository.ts     ← Repository
 └─ models/
     └─ user.model.ts          ← Tipos / Interfaces
*/
`;


  const controllerCode = `
/*
CONTROLLER
- Recibe la request HTTP
- Lee params, body, headers
- Llama al service
- Devuelve la response
*/

import { NextResponse } from "next/server";
import { userService } from "@/services/user.service";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      const user = await userService.getUserById(Number(id));
      return NextResponse.json(user);
    }

    const users = await userService.getUsers();
    return NextResponse.json(users);

  } catch (error) {
    return NextResponse.json(
      { message: "Usuario no encontrado" },
      { status: 404 }
    );
  }
}
`;

  const serviceCode = `
/*
SERVICE
- Contiene la lógica de negocio
- Aplica reglas y validaciones
- Usa repositories
*/

import { userRepository } from "@/repositories/user.repository";
import { User } from "@/models/user.model";

export const userService = {

  getUsers: async (): Promise<User[]> => {
    return await userRepository.getAll();
  },

  getUserById: async (id: number): Promise<User> => {
    const user = await userRepository.getById(id);

    // Regla de negocio
    if (!user) {
      throw new Error("Usuario no existe");
    }

    return user;
  }
};
`;

  const repositoryCode = `
/*
REPOSITORY
- Accede a los datos
- No tiene lógica de negocio
*/

import { User } from "@/models/user.model";

const users: User[] = [
  { id: 1, name: "Juan", email: "juan@mail.com", role: "admin" },
  { id: 2, name: "Ana", email: "ana@mail.com", role: "user" },
];

export const userRepository = {

  getAll: async (): Promise<User[]> => {
    return users;
  },

  getById: async (id: number): Promise<User | undefined> => {
    return users.find(user => user.id === id);
  }
};
`;

  const modelCode = `
/*
MODEL
- Define la estructura de datos
- Se reutiliza en todas las capas
*/

export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
}
`;

  return (
    <>
      {/* INTRO */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl mb-5">
          Arquitectura por Capas
        </h1>

        <h3>
          La arquitectura por capas separa responsabilidades para que el código
          sea más fácil de mantener, testear y escalar.
        </h3>

        <h3>
          Cada capa tiene un rol claro y no se mete en tareas que no le corresponden.
        </h3>
      </div>

      {/* ESTRUCTURA */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">Estructura por capas</h2>

        <h3>
          La app se divide en carpetas según responsabilidad.
        </h3>

        <SyntaxHighlighter language="bash" style={oneDark}>
          {codeEstructura}
        </SyntaxHighlighter>
      </div>

      {/* MODEL */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">
          Model (estructura de datos)
        </h2>

        <h3>
          El model define cómo es un dato. No contiene lógica, solo la forma que
          tiene la información.
        </h3>

        <SyntaxHighlighter language="typescript" style={oneDark}>
          {modelCode}
        </SyntaxHighlighter>
      </div>

      {/* REPOSITORY */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">
          Repository (acceso a datos)
        </h2>

        <h3>
          El repository se encarga únicamente de obtener o guardar datos.
          Puede ser una base de datos, una API externa o un array en memoria.
        </h3>

        <h3>
          No sabe nada de HTTP ni de reglas de negocio.
        </h3>

        <SyntaxHighlighter language="typescript" style={oneDark}>
          {repositoryCode}
        </SyntaxHighlighter>
      </div>

      {/* SERVICE */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">
          Service (lógica de negocio)
        </h2>

        <h3>
          El service es el cerebro de la aplicación. Decide qué hacer con los datos.
        </h3>

        <h3>
          Acá se validan reglas como: “si no existe el usuario, lanzar error”.
        </h3>

        <SyntaxHighlighter language="typescript" style={oneDark}>
          {serviceCode}
        </SyntaxHighlighter>
      </div>

      {/* CONTROLLER */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">
          Controller (HTTP / API)
        </h2>

        <h3>
          El controller conecta el mundo HTTP con la app.
        </h3>

        <h3>
          Recibe la request, llama al service y devuelve la respuesta.
        </h3>

        <SyntaxHighlighter language="typescript" style={oneDark}>
          {controllerCode}
        </SyntaxHighlighter>
      </div>

      {/* FLUJO */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">
          Flujo completo
        </h2>

        <h3>
          Request → Controller → Service → Repository → Datos
        </h3>

        <h3>
          Gracias a esta separación, cada parte es fácil de modificar sin romper las otras.
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
