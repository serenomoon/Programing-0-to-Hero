
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function RenderizadoLista() {

    const codeStringMap1 = `
    const lista = ["Carlos", "Juan", "Rita", "Camila"]
    `
    const codeStringMap2 = `
    return (
        <div className="grid justify-center">
            <h1>Uso de .map</h1>
                {lista.map((lis, i) => {
                    return (
                        <h2 key={i}>Nombre: {lis} - Numero indice: {i} </h2>
                    )
                })}
        </div>
    )
    `
    const codeStringMap3 = `
        return (
            <div className="grid justify-center">
                <h1>Uso de .map</h1>
                    {lista.map((lis, i) => (
                        <h2 key={i}>Nombre: {lis} - Numero indice: {i} </h2>
                    ))}
            </div>
        )
    `

    const codeStringMapFilter = `
    return(
        <div className="grid justify-center py-5">
            <h1 
                className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2"
            >
                Uso de .map pero con filter
            </h1>
        
            {lista
                .filter(nombre => nombre.startsWith("C")) // Filtra los que empiezan con "C"
                .map((nombre, i) => (
                    <h2 key={i}>Nombre con C: {nombre}</h2>
                ))
            }
        </div>
    )
    `

    const codeStringMapReduce = `
    const lista = ["Carlos", "Juan", "Rita", "Camila"]

    const cantidad = lista.reduce((acc, nombre) => {
        if (nombre.length > 4) acc++; //Acumulador si el nombre tiene menos de 4 letras
        return acc;
    }, 0); //Valor inicial
    `

    const codeStringMapFlat = `
    const personas = [
        { nombre: "Carlos", apodos: ["Carlitos", "Charlie"] },
        { nombre: "Rita", apodos: ["Ritita"] },
        { nombre: "Juan", apodos: ["Juani", "Juancho"] },
    ];

    retur(
        <div className="grid justify-center">
            {personas.flatMap((persona, i) =>
                persona.apodos.map((apodo, j) => (
                    <h2 key={'$ {i}-$ {j}'}> //Cambiar comillas ' por las a 45° y borrar espacio $ {}
                        {persona.nombre} también conocido como {apodo}
                    </h2>
                ))
            )}
        </div>
    )
    `

    //para el map
    const lista = ["Carlos", "Juan", "Rita", "Camila"]

    //para el reduce
    const cantidad = lista.reduce((acc, nombre) => {
        if (nombre.length > 4) acc++; //Acumulador si el nombre tiene menos de 4 letras
        return acc;
    }, 0); //Valor inicial

    //para el flatMap
    const personas = [
        { nombre: "Carlos", apodos: ["Carlitos", "Charlie"] },
        { nombre: "Rita", apodos: ["Ritita"] },
        { nombre: "Juan", apodos: ["Juani", "Juancho"] },
    ];

    return (
        <>
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">Renderizado de listas</h1>
                <h3>Tenemos un array de nombres:</h3>
                <SyntaxHighlighter language="typescript" style={oneDark}>
                    {codeStringMap1}
                </SyntaxHighlighter>
            </div>

            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2">Uso de .map</h1>
                
                
                <div className="py-3">
                <h3>Lo recorremos (usando return).</h3>
                    <SyntaxHighlighter language="typescript" style={oneDark}>
                        {codeStringMap2}
                    </SyntaxHighlighter>
                </div>
                
                <div className="py-3">
                <h3>Lo recorremos (sin return).</h3>
                    <SyntaxHighlighter language="typescript" style={oneDark}>
                        {codeStringMap3}
                    </SyntaxHighlighter>
                </div>

                <div className="grid justify-center text-center">
                    <h3 className="text-amber-100 bg-amber-400/30 rounded-2xl my-2">Muestra:</h3>
                    {lista.map((lis, i) => (
                        <h2 className="text-justify [text-align-last:justify]" key={i}>Nombre: {lis} - Numero indice: {i} </h2>
                    ))}
                </div>
            </div>

            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2">Uso de .map pero con filter</h1>
                <h3>Usamos .filter para filtrar, en este caso, los que empiezan con C.</h3>
                <div>
                    <SyntaxHighlighter language="typescript" style={oneDark}>
                        {codeStringMapFilter}
                    </SyntaxHighlighter>
                </div>
                <div className="grid justify-center text-center">
                    <h3 className="text-amber-100 bg-amber-400/30 rounded-2xl my-2">Muestra:</h3>
                    {lista
                    .filter(nombre => nombre.startsWith("C"))
                    .map((nombre, i) => (
                        <h2 className="text-justify [text-align-last:justify]" key={i}>Nombre con C: {nombre}</h2>
                    ))}
                </div>
            </div>

            {/* Devuelve un solo valor en base a los q analizo */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2">Uso de .map pero con reduce</h1>
                <h3>Filtramos y lo guardamos en una constante.</h3>
                <h3>Devuelve un solo valor en base a los q analizo.</h3>
                <div>
                    <SyntaxHighlighter language="typescript" style={oneDark}>
                        {codeStringMapReduce}
                    </SyntaxHighlighter>
                </div>
                <div className="grid justify-center text-center">
                    <h3 className="text-amber-100 bg-amber-400/30 rounded-2xl my-2">Muestra:</h3>
                    <h2>Cantidad de nombres con mas de 4 letras: {cantidad}</h2>
                </div>
            </div>
            <br></br>


            {/* Elimina un nivel de anidacion */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2">Uso de .map pero con flatMap</h1>
                <h3>Elimina un nivel de anidacion.</h3>
                <div>
                    <SyntaxHighlighter language="typescript" style={oneDark}>
                        {codeStringMapFlat}
                    </SyntaxHighlighter>
                </div>
                <div className="grid justify-center text-center">
                    <h3 className="text-amber-100 bg-amber-400/30 rounded-2xl my-2">Muestra:</h3>
                    {personas.flatMap((persona, i) =>
                    persona.apodos.map((apodo, j) => (
                        <h2 key={`${i}-${j}`} className="text-justify [text-align-last:justify]">
                            {persona.nombre} también conocido como {apodo}
                        </h2>
                    ))
                )}
                </div>
            </div>
            <div className="flex justify-center mt-2 mb-4">
                <Link className="ml-2 bg-amber-400/30 p-2 rounded-2xl text-amber-100" href={"/"}>Volver</Link>
            </div>
        </>
    )

}