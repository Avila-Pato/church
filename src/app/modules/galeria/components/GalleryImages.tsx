"use client";
import LazyImageObserver from "@/components/LazyImageObserver";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="image-gallery">
      {images.map((src, index) => (
        <div key={index} className="image-item">
          <LazyImageObserver
            src={src}
            alt={`Imagen ${index}`}
            width={400}
            height={400}
            priority={index === 0} // La primera imagen se carga inmediatamente
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;