'use client';

import { Suspense, useState, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Script from "next/script";

const FallbackLoading = () => (
  <div className="flex min-h-screen justify-center items-center">
    <p className="text-gray-100 font-medium">Cargando...</p>
  </div>
);

const FallbackError = () => (
  <div className="flex min-h-screen justify-center items-center">
    <p className="text-red-600">Algo ocurrió... Intenta de nuevo.</p>
  </div>
);

interface LayoutProps {
  children: React.ReactNode;
}

export const GalleryLayout = ({ children }: LayoutProps) => {
  const [isCloudinaryReady, setIsCloudinaryReady] = useState(false);

  // Verificar si Cloudinary está disponible después de cargar el script
  const checkCloudinary = () => {
    if (window.cloudinary && typeof window.cloudinary.createUploadWidget === 'function') {
      setIsCloudinaryReady(true);
    }
  };

  // Verificación periódica como fallback
  useEffect(() => {
    if (isCloudinaryReady) return;

    const interval = setInterval(() => {
      checkCloudinary();
    }, 500);

    return () => clearInterval(interval);
  }, [isCloudinaryReady]);

  return (
    <div className="flex min-h-screen">
      <Script
        src="https://widget.cloudinary.com/v2.0/global/all.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Cloudinary cargado correctamente.");
          // Solo configurar si las funciones existen
          if (window.cloudinary) {
            // No uses setCloudinaryConfig si no está disponible
            if (typeof window.cloudinary.setCloudinaryConfig === 'function') {
              window.cloudinary.setCloudinaryConfig({
                secure: true,
                cookiePolicy: 'single_host_origin',
                // Removed invalid property 'cloud_name'
              });
            }
            setIsCloudinaryReady(true);
          }
        }}
        onError={(e) => {
          console.error("Error loading Cloudinary:", e);
          setIsCloudinaryReady(false);
        }}
      />

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