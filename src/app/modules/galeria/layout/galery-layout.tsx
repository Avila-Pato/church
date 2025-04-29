'use client';

import { Suspense, useState } from 'react';
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isCloudinaryReady, setIsCloudinaryReady] = useState(false);
  return (
    <div className="flex min-h-screen">
      <Script
          src="https://upload-widget.cloudinary.com/global/all.js"
          strategy="afterInteractive"
          type='text/javascript'
          onLoad={() => {
            console.log("[Cloudinary] widget cargado");
            setIsCloudinaryReady(true);
          }}
          onError={(e) => console.error("[Cloudinary] Error al cargar widget", e)}
        />

      <main className="flex-1 overflow-y-auto">
        {isCloudinaryReady ? (
        <Suspense fallback={<FallbackLoading />}>
          <ErrorBoundary FallbackComponent={FallbackError}>
            {children}
          </ErrorBoundary>
        </Suspense>
        ) : (
          <FallbackLoading />
        ) }
      </main>
    </div>
  );
};
