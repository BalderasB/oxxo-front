export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="es">
        <body className="bg-orange-100 flex items-center justify-center min-h-screen">
          {children}
        </body>
      </html>
    );
  }
  