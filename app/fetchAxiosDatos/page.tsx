"use client"
import axios from 'axios'
import { useState, useEffect } from "react"

export default function FetchAxiosDatos() {
    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState("")

    type Usuario = {
        name: string
        email: string
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
                setUsuario(response.data) //no hace falta un .json, ya viene parseado
            } catch (err ) {
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
        <div className="grid justify-center">
            <h1>Usuario: {usuario?.name}</h1>
            <p>Email: {usuario?.email}</p>
        </div>
    )
}