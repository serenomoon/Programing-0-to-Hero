"use client"
import { useState, useEffect } from "react"

export default function fetchDatos() {
    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const [cargando, setCargando] = useState(true)

    type Usuario = {
        name: string
        email: string
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
                //Lo convierto a json para que los datos sean utilizables
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

    //  ? es si existe
    return (
        <div className="grid justify-center">
            <h1>Usuario: {usuario?.name}</h1>
            <p>Email: {usuario?.email}</p>
        </div>
    )
}