import { createFileRoute } from '@tanstack/react-router'
import { ProductList } from '@/features/products/containers/ProductList'

export const Route = createFileRoute('/_authenticated/products')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ProductList />
}
