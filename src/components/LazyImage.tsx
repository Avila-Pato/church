import Image from "next/image";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage = ({ src, alt, className = "", ...props }: LazyImageProps) => {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  return (
    <div ref={targetRef} className={`relative overflow-hidden ${className}`}>
      {isIntersecting && (
        <Image
          src={src}
          alt={alt}
          fill // Hace que la imagen llene el contenedor se peude usar esta opcion o
          // modificarla con with and height en la home sua eso y en ministerios se usa el fill 
          className="object-cover " // Ajusta la imagen sin deformarla
          {...props}
         
        />
      )}
    </div>
  );
};

export default LazyImage;
