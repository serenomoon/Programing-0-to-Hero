"use client"

import Link from "next/link";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PracticaEndPoints() {

    const [products, setProducts] = useState([
        { id: 1, nombre: "Producto A" },
        { id: 2, nombre: "Producto B" }
    ]);

    const [response, setResponse] = useState("—");

    /* ===== SIMULACIÓN DE ENDPOINTS ===== */

    const getProducts = () => {
        setResponse(JSON.stringify(products, null, 2));
    };

    const postProduct = () => {
        const newProduct = {
            id: products.length + 1,
            nombre: "Producto Nuevo"
        };

        const newList = products;
        newList.push(newProduct);

        setProducts([...newList]);
        setResponse("Producto creado");
    };

    const putProduct = () => {
        const newList = products;

        for (let i = 0; i < newList.length; i++) {
            if (newList[i].id === 1) {
                newList[i].nombre = "Producto A (editado)";
            }
        }

        setProducts([...newList]);
        setResponse("Producto actualizado");
    };

    const deleteProduct = () => {
        const newList = products;

        for (let i = 0; i < newList.length; i++) {
            if (newList[i].id === 2) {
                newList.splice(i, 1);
                break;
            }
        }

        setProducts([...newList]);
        setResponse("Producto eliminado");
    };

    /* ===== CÓDIGO EXPRESS ===== */

    const codeCRUD = `
app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/products/:id', (req, res) => {
  const id = req.params.id;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      products[i] = req.body;
    }
  }

  res.json(req.body);
});

app.delete('/products/:id', (req, res) => {
  const id = req.params.id;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      products.splice(i, 1);
    }
  }

  res.status(204).send();
});
`;

    return (
        <>
            {/* CRUD */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h1 className="text-center text-2xl text-amber-100 bg-amber-400/30 p-2 rounded-2xl mb-5">
                    Endpoints CRUD
                </h1>

                <h3>CRUD define operaciones básicas sobre datos:</h3>
                <ul className="list-disc ml-6">
                    <li>GET → obtener datos</li>
                    <li>POST → crear datos</li>
                    <li>PUT → modificar datos</li>
                    <li>DELETE → eliminar datos</li>
                </ul>

                <SyntaxHighlighter language="javascript" style={oneDark}>
                    {codeCRUD}
                </SyntaxHighlighter>
            </div>

            {/* SIMULACIÓN */}
            <div className="grid justify-center m-5 py-5 bg-gray-900/60 rounded-2xl text-left">
                <h3>Simulación de requests:</h3>

                <div className="flex gap-3 justify-center mt-4">
                    <button
                        className="bg-amber-400/30 p-2 rounded-2xl text-amber-100"
                        onClick={getProducts}
                    >
                        GET /products
                    </button>

                    <button
                        className="bg-amber-400/30 p-2 rounded-2xl text-amber-100"
                        onClick={postProduct}
                    >
                        POST /products
                    </button>

                    <button
                        className="bg-amber-400/30 p-2 rounded-2xl text-amber-100"
                        onClick={putProduct}
                    >
                        PUT /products/1
                    </button>

                    <button
                        className="bg-red-400/30 p-2 rounded-2xl text-red-200"
                        onClick={deleteProduct}
                    >
                        DELETE /products/2
                    </button>
                </div>

                <div className="mt-4 bg-black/40 p-3 rounded-xl">
                    <h4 className="text-amber-100">Respuesta del servidor:</h4>
                    <pre className="text-sm text-green-300">
                        {response}
                    </pre>
                </div>

                <div className="mt-4">
                    <h4 className="text-amber-100">Datos actuales:</h4>
                    <pre className="text-sm text-blue-300">
                        {JSON.stringify(products, null, 2)}
                    </pre>
                </div>
            </div>

            <div className="flex justify-center mt-2 mb-4">
                <Link className="bg-amber-400/30 p-2 rounded-2xl text-amber-100" href="/">
                    Volver
                </Link>
            </div>
        </>
    );
}
