import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

const LazyImageObserver = ({ src, alt, width, height, priority = false }: LazyImageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Deja de observar después de que la imagen es visible
        }
      },
      { threshold: 0.1 } // Ajusta el threshold según sea necesario
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      <Image
        width={width}
        height={height}
        src={src}
        alt={alt}
        priority={priority}
        style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.5s" }}
      />
    </div>
  );
};

export default LazyImageObserver;