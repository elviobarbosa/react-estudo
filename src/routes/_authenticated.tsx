import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { MainLayout } from '@/lib/layouts/Main/MainLayout'
import { useAuthStore } from '@/store/authStore'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: () => {
    const isAuthenticated = useAuthStore.getState().isAuthenticated
    if (!isAuthenticated) {
      throw redirect({
        to: '/login',
      })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}
