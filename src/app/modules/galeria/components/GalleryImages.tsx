import Image from "next/image";
import React from "react";

interface ImageGalleryProps {
  images: string[]; // Recibe las imágenes como prop
}

const ImageGallery =  ({ images }: ImageGalleryProps) => {
  return (
    <div className="image-gallery">
      {images.map((src, index) => (
        <div key={index} className="image-item">
          <Image
            width={400}
            height={400}
            src={src}
            loading="lazy"
            alt={`Imagen ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
