import Image from "next/image";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useState, useEffect } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number | string;
}

const LazyImage = ({ src, alt, className, width, height = "", ...props }: LazyImageProps) => {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (isIntersecting && !loaded) {
      setLoaded(true); // Set loaded when the image enters the viewport
    }
  }, [isIntersecting, loaded]);

  return (
    <div ref={targetRef} className={`relative overflow-hidden ${className}`}>
      {/* Mostrar el placeholder mientras la imagen está en proceso de carga */}
      {(!loaded || !isIntersecting) && (
        <div className="absolute inset-0 bg-gray-500 animate-pulse rounded-xl"></div>
      )}

      {/* Mostrar la imagen solo cuando esté dentro del viewport y cargada */}
      {loaded && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={typeof height === "string" ? parseInt(height, 10) || undefined : height}
          fill={!width && !height} // Si no se especifican dimensiones, usa fill
          className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)} // Establecer 'loaded' cuando la imagen se haya cargado
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
