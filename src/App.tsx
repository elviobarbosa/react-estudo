import { Button } from "@/components/ui/button"
import { MainLayout } from "@/lib/layouts/Main/MainLayout"

function App() {
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
