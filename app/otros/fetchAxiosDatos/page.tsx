"use client"
import Link from "next/link";
import axios from "axios"
import { useState, useEffect } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function FetchAxiosDatos() {
    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState("")

    type Usuario = {
        name: string
        email: string
    }

    const codeString = `

export default function FetchAxiosDatos() {
    const [usuario, setUsuario] = useState(null)
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        // Se define la función async fetchData en un useEffect que solo se ejecuta 1 vez (por el [] al final)
        const fetchData = async () => {
            try {
                // Se hace la petición a la API con axios
                const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')

                // Axios ya devuelve los datos parseados en response.data
                setUsuario(response.data)

            // Si ocurre un error, se valida si es un error de Axios
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    setError(err.message)
                } else {
                    setError("Error inesperado")
                }

            // En el finally se desactiva el estado de carga
            } finally {
                setCargando(false)
            }
        }

        // Se llama a fetchData() para ejecutar todo
        fetchData()
    }, [])


    // Renderizado condicional:
    if (cargando) return <div>Cargando...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div>
            <h1>Usuario: {usuario?.name}</h1>
            <p>Email: {usuario?.email}</p>
        </div>
    )
}
  `

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
                setUsuario(response.data)
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    setError(err.message)
                } else {
                    setError("Error inesperado")
                }
            } finally {
                setCargando(false)
            }
        }

        fetchData()
    }, [])

    if (cargando) return <div className="grid justify-center">Cargando...</div>
    if (error) return <div className="grid justify-center">Error: {error}</div>

    return (
        <>
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">
                    Uso de fetchData con Axios
                </h1>

                <h3>
                    fetchData se utiliza para obtener los datos desde una API usando Axios,
                    manejar errores y guardar la información en el estado del componente.
                </h3>

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
                <Link
                    className="ml-2 bg-amber-400/30 p-2 rounded-2xl text-amber-100"
                    href={"/"}
                >
                    Volver
                </Link>
            </div>
        </>
    )
}
