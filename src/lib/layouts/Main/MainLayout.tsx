import React from "react";

export type MainLayoutProps = {
    children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
      <div className="flex min-h-screen w-full bg-muted/40">

        <aside className="hidden w-64 flex-col border-r bg-background sm:flex">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px]">
            <span className="font-semibold">Meu Sistema</span>
          </div>
          <nav className="flex-1 overflow-auto py-4">
          <ul className="grid gap-1 px-2">
            <li>Menu 1</li>
            <li>Menu 2</li>
          </ul>
        </nav>
        </aside>

        <div className="flex flex-col flex-1">
        
        <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px]">
          <div className="flex-1">Busca...</div>
          <div>Perfil do Usuário</div>
        </header>
        
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
        
      </div>
      </div>
    )
}
