import Link from "next/link"
import { Input, Button } from "@heroui/react"
export default function LoginPage(){
    return (
        <div className="bg-orange-500 p-6 rounded-md w-80 mx-auto text-white">
            <p className="text-2xl my-4 font-semibold text-center">Inicia Sesion</p>

            <div className="flex flex-col gap-4">
                <Input label="Email" type="email" isRequired={true} size="sm" />
                <Input label="Contraseña" type="password" isRequired={true} size="sm" />
                
                
                <Button color="primary" className="w-full">Registrarse</Button>
                
                <p className="text-center text-sm">
                    ¿No tienes cuenta?
                    <Link href="/signup" className="text-blue-200 hover:underline">
                        Registrate
                    </Link>
                </p>
            </div>
        </div>
    )
}