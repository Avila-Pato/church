"use client"
import { useState } from "react";
import Image from "next/image";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}

const LazyImage = ({ src, alt, width, height, className }: LazyImageProps) => {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      ref={targetRef}
        // imagen o un texto) excede los límites de su contenedor, esa parte sobrante será oculta.
      className={` ${className} overflow-hidden`} // Clases de Tailwind aplicadas al contenedor
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      {isIntersecting && (
        <Image
          src={src}
          alt={alt}
          width={width} // Se define manualmente el ancho
          height={height} // Se define manualmente la altura
          onLoadingComplete={() => setLoaded(true)}
        />
      )}
    </div>
  );
};

export default LazyImage;
