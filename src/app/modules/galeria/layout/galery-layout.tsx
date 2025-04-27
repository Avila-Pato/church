// At the top of the file, ensure you have 'use client'
'use client';

import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Script from "next/script";

const FallbackLoading = () => (
  <div className="flex min-h-screen justify-center items-center">
    <p className="text-gray-100 font-medium">Cargando...</p>
  </div>
);

// Remove async keyword here
const FallbackError = () => (
  <div className="flex min-h-screen justify-center items-center">
    <p className="text-red-600">Algo ocurrió... Intenta de nuevo.</p>
  </div>
);

interface LayoutProps {
  children: React.ReactNode;
}

export const GalleryLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 overflow-y-auto">
        <Suspense fallback={<FallbackLoading />}>
          <ErrorBoundary FallbackComponent={FallbackError}>
          <Script
          src="https://upload-widget.cloudinary.com/global/all.js"
          strategy="beforeInteractive"
          onLoad={() => console.log("[Cloudinary] widget cargado")}
        />
            {children}
          </ErrorBoundary>
        </Suspense>
      </main>
    </div>
  );
};
