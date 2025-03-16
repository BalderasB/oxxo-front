import { heroui, HeroUIProvider } from "@heroui/react";
import React from "react";

export default function Providers({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <HeroUIProvider>{children}</HeroUIProvider>
}