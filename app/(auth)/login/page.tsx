"use client";
import Link from "next/link"
import { Input, Button } from "@heroui/react"
import axios from "axios";
import { API_URL } from "@/constants";

export default function LoginPage() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
    
        const email = formData.get("userEmail");
        const password = formData.get("userPassword");
    
        try {
            const response = await axios.post(`${API_URL}/login`, {
                email,
                password
            });

            console.log("Login exitoso:", response.data);
            // Aquí puedes hacer redirección o guardar tokens, etc.
        } catch (error) {
            console.error("Error en login:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-orange-500 p-6 rounded-md w-80 mx-auto text-white">
            <p className="text-2xl my-4 font-semibold text-center">Inicia Sesión</p>

            <div className="flex flex-col gap-4">
                <Input label="Email" name="userEmail" type="email" isRequired={true} size="sm" />
                <Input label="Contraseña" name="userPassword" type="password" isRequired={true} size="sm" />

                <Button type="submit" color="primary" className="w-full">Iniciar Sesión</Button>

                <p className="text-center text-sm">
                    ¿No tienes cuenta?
                    <Link href="/signup" className="text-blue-200 hover:underline ml-1">
                        Regístras
                    </Link>
                </p>
            </div>
        </form>
    );
}
