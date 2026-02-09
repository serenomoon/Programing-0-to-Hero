"use client";

import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PracticaTesting() {

  /* =========================
     EJEMPLOS JEST (LÓGICA)
  ========================= */

  const jestFuncion = `
export function sumar(a: number, b: number) {
  return a + b;
}
`;

  const jestTestFuncion = `
import { sumar } from "./sumar";

describe("Función sumar", () => {

  test("suma dos números correctamente", () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test("permite números negativos", () => {
    expect(sumar(-2, 1)).toBe(-1);
  });

});
`;

  const jestFuncionCondicional = `
export function puedeLoguear(edad: number) {
  return edad >= 18;
}
`;

  const jestTestCondicional = `
import { puedeLoguear } from "./puedeLoguear";

describe("Validación de login por edad", () => {

  test("permite acceso si es mayor de edad", () => {
    expect(puedeLoguear(20)).toBe(true);
  });

  test("deniega acceso si es menor de edad", () => {
    expect(puedeLoguear(16)).toBe(false);
  });

});
`;

  /* =========================
     EJEMPLOS RTL (COMPONENTES)
  ========================= */

  const componenteContador = `
import { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}
`;

  const testContador = `
import { render, screen, fireEvent } from "@testing-library/react";
import Contador from "./Contador";

describe("Componente Contador", () => {

  test("renderiza el contador inicial", () => {
    render(<Contador />);
    expect(screen.getByText("Contador: 0")).toBeInTheDocument();
  });

  test("incrementa el contador al hacer click", () => {
    render(<Contador />);

    const boton = screen.getByText("Incrementar");
    fireEvent.click(boton);

    expect(screen.getByText("Contador: 1")).toBeInTheDocument();
  });

});
`;

  const componenteLogin = `
import { useState } from "react";

export default function Login() {
  const [mensaje, setMensaje] = useState("");

  const handleLogin = () => {
    setMensaje("Login correcto");
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}
`;

  const testLogin = `
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Componente Login", () => {

  test("no muestra mensaje inicialmente", () => {
    render(<Login />);
    expect(screen.queryByText("Login correcto")).toBeNull();
  });

  test("muestra mensaje luego del click", () => {
    render(<Login />);

    fireEvent.click(screen.getByText("Login"));
    expect(screen.getByText("Login correcto")).toBeInTheDocument();
  });

});
`;

  return (
    <>
      {/* INTRO */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl mb-5">
          Testing con Jest y React Testing Library
        </h1>

        <h3>
          El testing automatizado permite verificar que nuestra aplicación funciona correctamente
          sin depender de pruebas manuales.
        </h3>

        <h3 className="mt-2">
          En React y Next, normalmente se combinan dos herramientas:
        </h3>

        <ul className="list-disc ml-5 mt-2">
          <li><b>Jest</b>: testea lógica y controla los tests</li>
          <li><b>React Testing Library</b>: testea componentes desde el punto de vista del usuario</li>
        </ul>
      </div>

      {/* JEST */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">Jest – Testing de lógica</h2>

        <h3>
          Jest se usa para testear funciones puras, validaciones y reglas de negocio.
        </h3>

        <h3 className="mt-2">
          Ejemplo de función:
        </h3>

        <SyntaxHighlighter language="ts" style={oneDark}>
          {jestFuncion}
        </SyntaxHighlighter>

        <h3 className="mt-3">Test:</h3>

        <SyntaxHighlighter language="ts" style={oneDark}>
          {jestTestFuncion}
        </SyntaxHighlighter>

        <h3 className="mt-3">
          Otro ejemplo con lógica condicional:
        </h3>

        <SyntaxHighlighter language="ts" style={oneDark}>
          {jestFuncionCondicional}
        </SyntaxHighlighter>

        <SyntaxHighlighter language="ts" style={oneDark}>
          {jestTestCondicional}
        </SyntaxHighlighter>
      </div>

      {/* RTL */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">
          React Testing Library – Testing de componentes
        </h2>

        <h3>
          RTL no testea estados internos, sino lo que el usuario ve e interactúa.
        </h3>

        <h3 className="mt-3">Componente Contador:</h3>

        <SyntaxHighlighter language="tsx" style={oneDark}>
          {componenteContador}
        </SyntaxHighlighter>

        <h3 className="mt-3">Test del contador:</h3>

        <SyntaxHighlighter language="ts" style={oneDark}>
          {testContador}
        </SyntaxHighlighter>

        <h3 className="mt-3">Ejemplo de Login:</h3>

        <SyntaxHighlighter language="tsx" style={oneDark}>
          {componenteLogin}
        </SyntaxHighlighter>

        <h3 className="mt-3">Test del Login:</h3>

        <SyntaxHighlighter language="ts" style={oneDark}>
          {testLogin}
        </SyntaxHighlighter>
      </div>

      {/* CONCEPTO FINAL */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h2 className="text-xl text-amber-100 mb-3">Idea clave</h2>

        <ul className="list-disc ml-5">
          <li>Jest valida lógica y reglas</li>
          <li>RTL valida experiencia de usuario</li>
          <li>Testeamos comportamiento, no implementación</li>
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
