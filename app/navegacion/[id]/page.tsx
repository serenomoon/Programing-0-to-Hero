import { use } from "react";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type Params = Promise<{ id: string }>

export default function Product({ params }: { params: Params }) {
    
    const { id } = use(params);
    
    const codeString1 = `
    import { use } from "react";

    type Params = Promise<{ id }>

    export default function Product({ params }: { params: Params }) {
        
        const { id } = use(params);

        return (
            <div className="grid justify-center">
                <h1 className="text-amber-100">Web con id: {id}</h1>
            </div>
        )
    }
    `;

    const codeString2 = `
    import { use } from "react";
    `;

    return (
        <div className="grid justify-center">
            <h1 className="text-amber-100">Web con id: {id}</h1>
        </div>
    )
}