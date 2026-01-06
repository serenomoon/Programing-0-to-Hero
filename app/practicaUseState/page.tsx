"use client"

import Link from "next/link";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PracticaUseState() {

  const codeString = `

    export default function PracticaUseState() {

    const [contador, setContador] = useState(0);
    
    const incrementarContador = () => {
      setContador(contador + 1)
    }

    return (
      <div className="grid justify-center py-5 bg-black">
        <div className="flex justify-center">
          <div className="cursor-pointer bg-amber-400/30 p-2 rounded-2xl" onClick={() => incrementarContador()}>
            <h1 className="text-amber-100">Clickea el contador: {contador}</h1>
          </div>
          <div className="flex justify-center">
            <Link className="ml-2 bg-amber-400/30 p-2 rounded-2xl" href={"/"}>Volver</Link>
          </div>
        </div>
      </div>
    );
  }
  `

    const codeString2 = `

    export default function PracticaUseState() {

    const [contador, setContador] = useState(0);
    
    const incrementarContador = () => {
      //Si uso esto, al quere hacer multiples setState me va a sumar solo 1:
      // setContador(contador + 1)
      // setContador(contador + 1)

      //Conviene hacerlo asi:
      setContador(contador => contador + 1)
      setContador(contador => contador + 1)
    }

    return (
      <div className="grid justify-center py-5 bg-black">
        <div className="flex justify-center">
          <div className="cursor-pointer bg-amber-400/30 p-2 rounded-2xl" onClick={() => incrementarContador()}>
            <h1 className="text-amber-100">Clickea el contador: {contador}</h1>
          </div>
          <div className="flex justify-center">
            <Link className="ml-2 bg-amber-400/30 p-2 rounded-2xl" href={"/"}>Volver</Link>
          </div>
        </div>
      </div>
    );
  }
  `

  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1)
  }

  const incrementarContador2 = () => {
    setContador(contador => contador + 1)
    setContador(contador => contador + 1)
  }

  return (
    <>
      {/* USO STATE */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">Uso useState</h1>
        <h3>useState se utiliza para guardar un estado que, al cambiar, provoca un nuevo render del componente.</h3>
        <h3>En cada render, React vuelve a evaluar el estado y actualiza la interfaz según su valor.</h3>
        <div>
          <SyntaxHighlighter language="typescript" style={oneDark}>
            {codeString}
          </SyntaxHighlighter>
        </div>

        <div className="grid justify-center">
          <div className="cursor-pointer bg-amber-400/30 p-2 rounded-2xl" onClick={() => incrementarContador()}>
            <h1 className="text-amber-100">Clickea el contador: {contador}</h1>
          </div>
        </div>
      </div>

      {/* STATE MULTIPLE */}
      <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
        <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">Modificando el useState</h1>
        <h3>Si queremos utilizar el state mas de una vez a la vez, tenemos que tener en cuenta lo siguiente.</h3>
        <div>
          <SyntaxHighlighter language="typescript" style={oneDark}>
            {codeString2}
          </SyntaxHighlighter>
        </div>

        <div className="grid justify-center">
          <div className="cursor-pointer bg-amber-400/30 p-2 rounded-2xl" onClick={() => incrementarContador2()}>
            <h1 className="text-amber-100">Clickea el contador: {contador}</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2 mb-4">
          <Link className="ml-2 bg-amber-400/30 p-2 rounded-2xl text-amber-100" href={"/"}>Volver</Link>
      </div>
    </>
  );
}

