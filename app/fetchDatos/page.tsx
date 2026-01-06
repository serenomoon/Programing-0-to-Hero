"use client"
import Link from "next/link";
import { useState, useEffect } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function fetchDatos() {
    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const [cargando, setCargando] = useState(true)

    type Usuario = {
        name: string
        email: string
    }

    const codeString = `

export default function fetchDatos() {
    const [usuario, setUsuario] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        // Se define la función async fetchData en un useEffect que solo se ejecuta 1 vez (por el [] al final)
        const fetchData = async () => {
            try {
                // Se hace el fetch a la API
                const response = await fetch('https://jsonplaceholder.typicode.com/users/1')

                //Lo convierto a json para que los datos sean utilizables
                const data = await response.json()

                // Se guarda el usuario en el estado (setUsuario)
                setUsuario(data)

            // Si hay un error, se captura en el catch
            } catch (error) {
                console.error("Error:", error)
            
            //En el finally se desactiva el estado de carga (setCargando(false))
            } finally {
                setCargando(false)
            }
        }

        // Se llama a fetchData() para ejecutar todo
        fetchData()
    }, [])


    //Renderizado condicional:
    if (cargando) return <div className="grid justify-center">Cargando...</div>

    return (
        <>
        <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">

                <h1>Usuario: {usuario?.name}</h1>
                <p>Email: {usuario?.email}</p>

            </div>
        </>
    )
}
  `

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
                const data = await response.json()
                setUsuario(data)
            } catch (error) {
                console.error("Error:", error)
            } finally {
                setCargando(false)
            }
        }
        fetchData()
    }, [])

    if (cargando) return <div className="grid justify-center">Cargando...</div>

    return (
        <>
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">Uso de fetchData</h1>
                <h3>fetchData se utiliza para obtener los datos desde una API, procesarlos y guardarlos en el estado del componente.</h3>
                <div>
                    <SyntaxHighlighter language="typescript" style={oneDark}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>

            </div>
            <div className="grid justify-center">
                <h1>Usuario: {usuario?.name}</h1>
                <p>Email: {usuario?.email}</p>
            </div>
            <div className="flex justify-center mt-2 mb-4">
                <Link className="ml-2 bg-amber-400/30 p-2 rounded-2xl text-amber-100" href={"/"}>Volver</Link>
            </div>
        </>
    )
}