import { Skeleton } from "@/components/ui/skeleton"

export default function SitterLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-6 w-24" />
          </div>
          <div className="hidden md:flex gap-6">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-9 w-16 rounded-md" />
            <Skeleton className="h-9 w-16 rounded-md" />
          </div>
        </div>
      </header>
      <div className="relative h-64 md:h-80 w-full">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonna sinistra - Profilo */}
          <div className="md:col-span-1">
            <div className="relative -mt-20 mb-6">
              <Skeleton className="h-32 w-32 rounded-full" />
            </div>

            <div className="space-y-6">
              <div>
                <Skeleton className="h-8 w-48 mb-2" />
                <Skeleton className="h-4 w-32 mb-2" />
                <div className="flex items-center mt-2 gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Skeleton key={i} className="h-4 w-4" />
                  ))}
                  <Skeleton className="h-4 w-16 ml-2" />
                </div>
              </div>

              <Skeleton className="h-40 w-full rounded-lg" />

              <div>
                <Skeleton className="h-6 w-32 mb-2" />
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-6 w-20 rounded-full" />
                  ))}
                </div>
              </div>

              <div>
                <Skeleton className="h-6 w-32 mb-2" />
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-6 w-16 rounded-full" />
                  ))}
                </div>
              </div>

              <div>
                <Skeleton className="h-6 w-32 mb-2" />
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <div key={i} className="flex justify-between">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  ))}
                </div>
              </div>

              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          </div>

          {/* Colonna destra - Contenuto principale */}
          <div className="md:col-span-2">
            <div className="mb-8">
              <div className="w-full grid grid-cols-3 gap-2">
                <Skeleton className="h-10 w-full rounded-md" />
                <Skeleton className="h-10 w-full rounded-md" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Skeleton className="h-8 w-32 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </div>

              <div>
                <Skeleton className="h-7 w-40 mb-3" />
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="flex-1">
                        <Skeleton className="h-5 w-40 mb-1" />
                        <Skeleton className="h-4 w-60" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Skeleton className="h-7 w-40 mb-3" />
                <ul className="space-y-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li key={i} className="flex items-start">
                      <Skeleton className="h-5 w-5 rounded-full mr-2 mt-1" />
                      <Skeleton className="h-4 w-full" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Skeleton className="h-32 w-full rounded-lg" />
                <Skeleton className="h-32 w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Skeleton className="h-8 w-64 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-80 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
