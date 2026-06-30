import React from 'react'
import { ProductFilter } from '../components/ProductFilter'

export const ProductList = () => {
  return (
    <>
    <ProductFilter />
    <div>
      <h2 className="text-xl font-bold">Lista de Produtos</h2>
      <p>Em breve: Tabela de produtos do DummyJSON!</p>
    </div>
    </>
  )
}
