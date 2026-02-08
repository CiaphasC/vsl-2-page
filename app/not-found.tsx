import Link from "next/link"
import { FileQuestion } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 text-center dark:bg-zinc-900">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
        <FileQuestion className="h-8 w-8 text-zinc-500 dark:text-zinc-400" />
      </div>
      
      <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Página no encontrada
      </h2>
      
      <p className="mt-2 mb-8 max-w-md text-zinc-500 dark:text-zinc-400">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>

      <Button asChild>
        <Link href="/">
          Volver al inicio
        </Link>
      </Button>
    </div>
  )
}
