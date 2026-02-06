import { use } from "react";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// En App Router, params puede ser una Promise
type Params = Promise<{ id: string }>;

export default function Product({ params }: { params: Params }) {
    // use() resuelve la Promise y suspende el render si aún no está lista
    const { id } = use(params);

    const codeString1 = `
import { use } from "react";
`;

    const codeString2 = `
const { id } = use(params);
`;

    const codeString3 = `
const resolvedParams = await params;
const { id } = resolvedParams;
`;

    const codeString4 = `
import { use } from "react";

type Params = Promise<{ id: string }>;

export default function Product({ params }: { params: Params }) {
    const { id } = use(params);

    return (
        <div className="grid justify-center">
            <h1 className="text-amber-100">Web con id: {id}</h1>
        </div>
    );
}
`;

    return (
        <>
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl my-2 mb-5">
                    Navegación con parámetro
                </h1>

                <h3>
                    <code>use()</code> NO es un hook como <code>useState</code>.
                </h3>

                <SyntaxHighlighter language="typescript" style={oneDark}>
                    {codeString1}
                </SyntaxHighlighter>

                <h3>Es una función especial de React 18 que sirve para:</h3>
                <ul className="list-disc ml-6">
                    <li>Resolver Promises</li>
                    <li>Leer recursos async</li>
                    <li>Suspender el render automáticamente</li>
                </ul>

                <p className="mt-2 text-sm text-gray-300">
                    ⚠️ Solo puede usarse en <strong>Server Components</strong>. No funciona en Client Components.
                </p>
            </div>

            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>
                    <code>use(promise)</code>:
                </h3>

                <SyntaxHighlighter language="typescript" style={oneDark}>
                    {codeString2}
                </SyntaxHighlighter>

                <ul className="list-disc ml-6">
                    <li>Espera a que la Promise se resuelva</li>
                    <li>Pausa el render</li>
                    <li>Devuelve el valor final</li>
                </ul>
            </div>

            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Equivalente conceptual a:</h3>

                <SyntaxHighlighter language="typescript" style={oneDark}>
                    {codeString3}
                </SyntaxHighlighter>
            </div>

            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Ejemplo completo:</h3>

                <SyntaxHighlighter language="typescript" style={oneDark}>
                    {codeString4}
                </SyntaxHighlighter>
            </div>

            {/* Resultado final */}
            <div className="grid justify-center">
                <h1 className="text-amber-100 text-xl">
                    Web con id: {id}
                </h1>
            </div>

            <div className="flex justify-center mt-2 mb-4">
                <Link
                    className="ml-2 bg-amber-400/30 p-2 rounded-2xl text-amber-100"
                    href="/"
                >
                    Volver
                </Link>
            </div>
        </>
    );
}
