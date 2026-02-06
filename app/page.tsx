"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeWrapper from "./components/ThemeWrapper";
import { CambiarFondo } from "./components/CambiarFondo";
import { ContadorZustand } from "./components/ContadorZustand";

export default function Home() {

  const navega = "parametro"

  return(
    <>
      <ContadorZustand />
      <CambiarFondo />
      <div className="grid justify-center">
        <ol>
          {/* <a></a> lo utilizo si es para una pagina que me lleva al exterior de la web xq recarga toda la web*/}
          {/* <li><a href="/practicaUseState">useState</a></li> */}
          {/* Para este caso utilizo Link */}
          <li><Link href="/fundamentos/practicaUseState">useState</Link></li>
          <li><Link href="/fundamentos/practicaUseRef">useRef</Link></li>
          <li><Link href="/fundamentos/practicaUseEffect">useEffect</Link></li>
          <li><Link href="/fundamentos/renderizadoLista">Renderizado listas</Link></li>
          <li><Link href="/fundamentos/renderizadoFormulario">Renderizado formulario</Link></li>

          {/* Links dinamico */}
          <li><Link href={`/otros/navegacion/${navega}`}>Navegacion con parametro</Link></li>

          <li><Link href="/otros/fetchDatos">Fetch de datos</Link></li>
          <li><Link href="/otros/fetchAxiosDatos">Fetch de datos con Axios</Link></li>
          <li><Link href="/fundamentos/jsx_VDOM">JSX y Virtual DOM</Link></li>

          <li><Link href="/backend/practicaExpress">Servidor Basico con Express</Link></li>
          <li><Link href="/backend/practicaEndPoints">CRUD / EndPoints</Link></li>
          <li><Link href="/backend/practicaReqResNext">req, res y next()</Link></li>
          <li><Link href="/backend/practicaConexionDB">Conexion a DB</Link></li>
          <li><Link href="/backend/practicaHerramientasBackend">Herramientas Backend</Link></li>
          <li><Link href="/fundamentos/practicaOptimizacionRenders">Optimizacion de Renders</Link></li>
          <li><Link href="/estado-global/practicaEstadoGlobal">Estado Global</Link></li>
        </ol>
      </div>
    </>
  )
  
}
