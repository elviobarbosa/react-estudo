import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold tracking-tight text-primary">React + Tailwind + Shadcn UI</h1>
      <p className="text-muted-foreground">Setup complete! Start building your awesome project.</p>
      <div className="flex gap-4">
        <Button>Default Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </div>
  )
}

export default App
