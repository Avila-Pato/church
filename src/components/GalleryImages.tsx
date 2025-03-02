import Image from "next/image";
import React from "react";

interface ImageGalleryProps {
  categoryId?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ }) => {
  const images = [
    "/iglesia/5.jpg",
    "/iglesia/3.jpg",
    "/iglesia/4.jpg",
    "/iglesia/6.jpg",
    "/iglesia/7.jpg",
    "/iglesia/1.jpg",
    "/iglesia/8.jpg",
    "/iglesia/9.jpg",
    "/iglesia/10.jpg",
    "/iglesia/2.jpg",
  ];

  return (
    // los estilos para las imagenes se manejan en el global.css
    <div className="image-gallery">
      {images.map((src, index) => (
        <div key={index} className="image-item">
          <Image
            width={400}
            height={400}
            src={src}
            loading="lazy"
            alt={`Imagen ${index + 1}  `  }
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;