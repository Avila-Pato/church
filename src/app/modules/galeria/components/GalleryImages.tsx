
import LazyImage from "@/components/LazyImage";
import React from "react";

interface ImageGalleryProps {
  images: string[]; // Recibe las imágenes como prop
}

const ImageGallery =  ({ images }: ImageGalleryProps) => {
  return (
    <div className="image-gallery">
      {images.map((src, index) => (
        <div key={index} className="image-item">
          
          <LazyImage
            width={400}
            height={400}
            src={src}
            alt={`Imagen ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
