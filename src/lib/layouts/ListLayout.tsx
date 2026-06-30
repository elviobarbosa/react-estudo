import React from "react";

export type ListLayoutProps = {
    children: React.ReactNode
}

export const ListLayout: React.FC<ListLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <div className="w-full max-w-sm bg-background p-8 rounded-xl shadow-lg border border-border">
        {children}
      </div>
    </div>
  )
}