import { MainLayout } from "@/lib/layouts/Main/MainLayout"
import { LoginScreen } from "./features/auth/containers/LoginScreen";
import { AuthLayout } from "@/lib/layouts/Auth/AuthLayout";
import { useAuthStore } from "./store/authStore";
import { useQuery } from "@tanstack/react-query";
import { api } from "./features/auth/services/api";

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);

  const {data: userData, isLoading} = useQuery({
    queryKey: ["perfil-usuario"],
    queryFn: async () => {
      const response = await api.get("/auth/me");
      return response.data;
    },
    enabled: isAuthenticated
  })

  if (!isAuthenticated) {
    return (
      <AuthLayout>
        <LoginScreen />
      </AuthLayout>
    )
  }
  
  return (
    <MainLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Painel de Controle</h1>
        <button
          onClick={logout}
          className="bg-destructive text-destructive-foreground px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-destructive/90 transition-colors"
        >
          Sair
        </button>
      </div>

    </MainLayout>
  )
}

export default App
