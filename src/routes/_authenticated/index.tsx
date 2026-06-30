import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useAuthStore } from '@/store/authStore'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/features/auth/services/api'

export const Route = createFileRoute('/_authenticated/')({
  component: RouteComponent,
})

function RouteComponent() {
  const logoutStore = useAuthStore((state) => state.logout)
  const navigate = useNavigate()
  
  const handleLogout = () => {
    logoutStore()
    navigate({ to: '/login' })
  }
  
  const { data: userData, isLoading } = useQuery({
    queryKey: ['perfil-usuario'],
    queryFn: async () => {
      const response = await api.get('/auth/me')
      return response.data
    },
  })

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Painel de Controle</h1>
        <button
          onClick={handleLogout}
          className="bg-destructive text-destructive-foreground px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-destructive/90 transition-colors"
        >
          Sair
        </button>
      </div>

      <div className="mt-8 p-6 bg-card rounded-lg border border-border shadow-sm">
        {isLoading ? (
          <p className="text-muted-foreground animate-pulse">Autenticando dados da sessão...</p>
        ) : (
          <div>
            <h2 className="text-lg font-bold text-primary mb-4">
              ✅ Dados Seguros Vindo da API
            </h2>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                Nome: <strong className="text-foreground">{userData?.firstName} {userData?.lastName}</strong>
              </p>
              <p className="text-muted-foreground">
                E-mail: <strong className="text-foreground">{userData?.email}</strong>
              </p>
              <p className="text-muted-foreground">
                Cargo: <strong className="text-foreground">{userData?.company?.title}</strong>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
