import { Button, Input } from "@heroui/react";
import Link from "next/link";

export default function SignupPage() {
    return (
        <div className="bg-orange-500 p-6 rounded-md w-80 mx-auto text-white">
            <p className="text-2xl my-4 font-semibold text-center">Registrarse</p>

            <div className="flex flex-col gap-4">
                <Input label="Email" type="email" isRequired={true} size="sm" />
                <Input label="Contraseña" type="password" isRequired={true} size="sm" />
                <Input label="repetir Contraseña" type="password" isRequired={true} size="sm" />
                
                <Button color="primary" className="w-full">Registrarse</Button>
                
                <p className="text-center text-sm">
                    ¿Ya tienes cuenta?{" "}
                    <Link href="/login" className="text-blue-200 hover:underline">
    Inicia sesión
</Link>
                </p>
            </div>
        </div>
    );
}
