

import { Link } from '@tanstack/react-router'
import type React from 'react'

export const LeftMenu: React.FC = () => {
    return (
      <nav className="flex-1 overflow-auto py-4">
        <ul className="grid gap-1 px-2">
          <li>
            <Link 
              to="/products"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              activeProps={{ className: "bg-muted text-primary" }}
              >Products</Link></li>
        </ul>
      </nav>
    )
  }