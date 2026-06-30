import React from "react";
import { LeftMenu } from "./LeftMenu";

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

           <LeftMenu />
       
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
