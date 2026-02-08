'use client'

import React from "react"
import Link from "next/link"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  React.useEffect(() => {
    // Aquí puedes registrar el error en un servicio de observabilidad como Sentry
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 text-center dark:bg-zinc-900">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
        <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
      </div>
      
      <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Algo salió mal
      </h2>
      
      <p className="mt-2 mb-8 max-w-sm text-zinc-500 dark:text-zinc-400">
        Lo sentimos, ha ocurrido un error inesperado al cargar la página.
      </p>

      <div className="flex gap-4">
        <Button asChild variant="outline">
          <Link href="/">Volver al inicio</Link>
        </Button>
        <Button onClick={reset}>
          Intentar de nuevo
        </Button>
      </div>
    </div>
  )
}
