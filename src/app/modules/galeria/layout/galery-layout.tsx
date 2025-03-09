"use client"
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface LayoutProps {
  children: React.ReactNode;
}

const FallbackLoading =  () => (
  <div className="flex min-h-screen justify-center items-center">
    <p className="text-gray-100 font-medium">Cargando...</p>
  </div>
);

const FallbackError = async () => (
  <div className="flex min-h-screen justify-center items-center">
    <p className="text-red-600">Algo ocurrió... Intenta de nuevo.</p>
  </div>
);

export const GalleryLayout =  ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 overflow-y-auto">
        <Suspense fallback={<FallbackLoading />}>
          <ErrorBoundary FallbackComponent={FallbackError}>
            {children}
          </ErrorBoundary>
        </Suspense>
      </main>
    </div>
  );
};
