"use client"
import Link from "next/link";
import { useState } from "react";
import { useCounterStore } from "@/app/estado-global/store/counterStore";

export default function Home() {

  const navega = "parametro"
  const count = useCounterStore(state => state.count);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return(
    <>
      <div className="grid justify-center mt-5">
        <ol className="space-y-3 text-amber-100 flex justify-between space-x-2 py-4">

          {/* FUNDAMENTOS */}
          <li>
            <button
              onClick={() => toggleMenu("fundamentos")}
              className="w-full text-left bg-amber-400/30 p-2 rounded-xl cursor-pointer"
            >
              📘 Fundamentos
            </button>

            {openMenu === "fundamentos" && (
              <ul className="ml-5 mt-2 space-y-1">
                <li><Link href="/fundamentos/practicaUseState">useState</Link></li>
                <li><Link href="/fundamentos/practicaUseRef">useRef</Link></li>
                <li><Link href="/fundamentos/practicaUseEffect">useEffect</Link></li>
                <li><Link href="/fundamentos/renderizadoLista">Renderizado de listas</Link></li>
                <li><Link href="/fundamentos/renderizadoFormulario">Renderizado de formulario</Link></li>
                <li><Link href="/fundamentos/jsx_VDOM">JSX y Virtual DOM</Link></li>
                <li><Link href="/fundamentos/practicaOptimizacionRenders">Optimización de renders</Link></li>
                <li><Link href="/fundamentos/practicaRenderizadosNext">Renderizados en Next</Link></li>
                <li><Link href="/fundamentos/practicaPerformanceSEO">Performance SEO</Link></li>
                <li><Link href="/fundamentos/practicaArquitecturaCapas">Arquitectura por Capas</Link></li>
              </ul>
            )}
          </li>


          {/* BACKEND */}
          <li>
            <button
              onClick={() => toggleMenu("backend")}
              className="w-full text-left bg-amber-400/30 p-2 rounded-xl cursor-pointer"
            >
              🛠 Backend
            </button>

            {openMenu === "backend" && (
              <ul className="ml-5 mt-2 space-y-1">
                <li><Link href="/backend/practicaExpress">Servidor con Express</Link></li>
                <li><Link href="/backend/practicaEndPoints">CRUD / Endpoints</Link></li>
                <li><Link href="/backend/practicaReqResNext">req, res y next()</Link></li>
                <li><Link href="/backend/practicaConexionDB">Conexión a DB</Link></li>
                <li><Link href="/backend/practicaHerramientasBackend">Herramientas Backend</Link></li>
                <li><Link href="/backend/practicaAuth">NextAuth + JWT</Link></li>
                <li><Link href="/backend/practicaAuthJWT">Autenticacion JWT y Roles</Link></li>
              </ul>
            )}
          </li>

          {/* ESTADO GLOBAL */}
          <li>
            <button
              onClick={() => toggleMenu("estado")}
              className="w-full text-left bg-amber-400/30 p-2 rounded-xl cursor-pointer"
            >
              🌐 Estado global
            </button>

            {openMenu === "estado" && (
              <ul className="ml-5 mt-2 space-y-1">
                <li>
                  <Link href="/estado-global/practicaEstadoGlobal">
                    Estado global (Context / Zustand)
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* OTROS */}
          <li>
            <button
              onClick={() => toggleMenu("otros")}
              className="w-full text-left bg-amber-400/30 p-2 rounded-xl cursor-pointer"
            >
              🧩 Otros
            </button>

            {openMenu === "otros" && (
              <ul className="ml-5 mt-2 space-y-1">
                <li>
                  <Link href={`/otros/navegacion/${navega}`}>
                    Navegación con parámetro
                  </Link>
                </li>
                <li><Link href="/otros/fetchDatos">Fetch de datos</Link></li>
                <li><Link href="/otros/fetchAxiosDatos">Fetch con Axios</Link></li>
                <li><Link href="/otros/practicaTesting">Testing</Link></li>
              </ul>
            )}
          </li>
        </ol>
      </div>

      <div>
            <h1>Contador global: {count}</h1>
      </div>
    </>
  )
  
}
