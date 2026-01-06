"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const navega = "parametro"
  return(
    <div className="grid justify-center">
      <ol>
        {/* <a></a> lo utilizo si es para una pagina que me lleva al exterior de la web xq recarga toda la web*/}
        {/* <li><a href="/practicaUseState">useState</a></li> */}
        {/* Para este caso utilizo Link */}
        <li><Link href="/practicaUseState">useState</Link></li>
        <li><Link href="/practicaUseRef">useRef</Link></li>
        <li><Link href="/practicaUseEffect">useEffect</Link></li>
        <li><Link href="/renderizadoLista">Renderizado listas</Link></li>
        <li><Link href="/renderizadoFormulario">Renderizado formulario</Link></li>

        {/* Links dinamico */}
        <li><Link href={`/navegacion/${navega}`}>Navegacion con parametro</Link></li>

        <li><Link href="/fetchDatos">Fetch de datos</Link></li>
        <li><Link href="/fetchAxiosDatos">Fetch de datos con Axios</Link></li>
      </ol>
    </div>
  )
  
}
