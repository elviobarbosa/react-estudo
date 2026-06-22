import { Button } from "@/components/ui/button"
import { MainLayout } from "@/lib/layouts/Main/MainLayout"
import { LoginScreen } from "./features/auth/containers/LoginScreen";
import { AuthLayout } from "./lib/layouts/Auth/AuthLayout";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <AuthLayout>
        <LoginScreen />
      </AuthLayout>
    )
  }
  
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold">Painel de Controle</h1>
      <p className="mt-4 text-muted-foreground">
        Esta é a área central da tela. Tudo que for colocado dentro das tags
        do AuthenticatedLayout vai aparecer aqui, substituindo o "children".
      </p>

    </MainLayout>
  )
}

export default App
