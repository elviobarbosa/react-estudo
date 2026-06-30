import { createFileRoute } from '@tanstack/react-router'
import { AuthLayout } from '@/lib/layouts/Auth/AuthLayout'
import { LoginScreen } from '@/features/auth/containers/LoginScreen'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <AuthLayout>
      <LoginScreen />
    </AuthLayout>
  )
}
