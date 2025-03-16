import React from "react";
import Image from "next/image";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-orange-200 w-screen min-h-screen grid place-items-center">
            <div className="flex flex-col items-center text-center">
                {/* Logo de OXXO */}
                <div className="mb-6">
                    <Image src="/Oxxo_Logo.svg" alt="Logo de OXXO" width={200} height={100} />
                </div>
                
                {/* Contenedor del formulario */}
                <div className="bg-orange-500 p-6 rounded-lg shadow-md w-80">
                    <h2 className="text-white text-lg font-semibold mb-4">Registrarse en</h2>
                    <form>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Email*"
                                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Contraseña*"
                                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
                        >
                            Registrarse
                        </button>
                    </form>
                    <p className="text-white text-sm mt-4">
                        ¿Ya tienes una cuenta? <a href="#" className="underline">Inicia sesión</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
