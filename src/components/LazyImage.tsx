import Image from "next/image";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useState, useEffect } from "react";
import React from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number | string;
}

const LazyImage = React.memo(({ src, alt, className, width, height = "", ...props }: LazyImageProps) => {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (isIntersecting && !loaded) {
      const timer = setTimeout(() => setLoaded(true), 3000); // Espera 3 segundos antes de cargar la imagen
      return () => clearTimeout(timer);
    }
  }, [isIntersecting]); // Solo dependemos de isIntersecting

  return (
    <div ref={targetRef} className={`relative overflow-hidden ${className}`}>
      {/* Mostrar el placeholder mientras la imagen está en proceso de carga */}
      {(!loaded || !isIntersecting) && (
        <div className="absolute inset-0 bg-gray-500 animate-pulse rounded-xl"></div>
      )}

      {/* Mostrar la imagen solo cuando esté dentro del viewport y después del retraso */}
      {loaded && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={typeof height === "string" ? parseInt(height, 10) || undefined : height}
          fill={!width && !height} // Si no se especifican dimensiones, usa fill
          className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
});

export default LazyImage;
