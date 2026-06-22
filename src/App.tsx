import { MainLayout } from "@/lib/layouts/Main/MainLayout"
import { LoginScreen } from "./features/auth/containers/LoginScreen";
import { AuthLayout } from "@/lib/layouts/Auth/AuthLayout";
import { useAuthStore } from "./store/authStore";

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

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
