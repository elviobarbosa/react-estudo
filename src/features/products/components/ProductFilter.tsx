import { Input } from "@/components/ui/input";
import { Button } from "@base-ui/react/button";
import React from "react";

export type ProductFilterProps = {
  children: React.ReactNode
}

export const ProductFilter: React.FC<ProductFilterProps> = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <form>
          <Input type="search" placeholder="Search a product..." />
          <select>
            <option value="">Todas as categorias</option>
            <option value="">Eletrônicos</option>
            <option value="">Moda</option>
            <option value="">Casa</option>
            <option value="">Alimentos</option>
          </select>
          <Button type="submit">Search</Button>
        </form>
      </div>
    </div>
  )
}