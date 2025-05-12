import { Skeleton } from "@/components/ui/skeleton"

export default function CartLoading() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <Skeleton className="h-10 w-48 mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <Skeleton className="h-7 w-40" />
                <Skeleton className="h-9 w-32" />
              </div>

              {[1, 2, 3].map((item) => (
                <div key={item} className="flex gap-4 mb-6">
                  <Skeleton className="h-24 w-24 rounded-md flex-shrink-0" />
                  <div className="flex-grow space-y-2">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <div className="flex justify-between items-center mt-4">
                      <Skeleton className="h-8 w-24" />
                      <Skeleton className="h-8 w-20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Skeleton className="h-7 w-48 mb-4" />
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Skeleton className="h-4 w-4 rounded-full mr-2" />
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-6 w-16 ml-auto" />
              </div>
              <div className="flex items-center">
                <Skeleton className="h-4 w-4 rounded-full mr-2" />
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-6 w-16 ml-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <Skeleton className="h-7 w-40 mb-4" />

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-5 w-16" />
              </div>
              <div className="flex justify-between">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-5 w-16" />
              </div>
              <div className="h-px w-full bg-gray-200 my-2" />
              <div className="flex justify-between">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-20" />
              </div>
            </div>

            <Skeleton className="h-10 w-full mb-4" />
            <div className="flex justify-center">
              <Skeleton className="h-5 w-32" />
            </div>

            <div className="mt-6 pt-6 border-t">
              <Skeleton className="h-5 w-24 mb-2" />
              <div className="flex gap-2">
                <Skeleton className="h-8 w-12 rounded" />
                <Skeleton className="h-8 w-12 rounded" />
                <Skeleton className="h-8 w-12 rounded" />
                <Skeleton className="h-8 w-12 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
