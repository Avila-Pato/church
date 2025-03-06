"use client"
import { useState } from "react";
import { CategoriesSection } from "../components/gallery-navbar";
import ImageGallery from "@/app/modules/galeria/components/GalleryImages";
import { InfiniteScroll } from "@/components/infinite-scroll";

interface GaleryProps {
  categoryId?: string;
}

const GaleryView = ({ categoryId }: GaleryProps) => {
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);
  const [images, setImages] = useState<string[]>([]); // Este estado maneja las imágenes cargadas

  const fetchNextPage = async () => {
    if (isFetchingNextPage || !hasNextPage) return;

    setIsFetchingNextPage(true);
    // Simula la carga de imágenes
    setTimeout(() => {
      const newImages = [
        "/iglesia/7.jpg",
        "/iglesia/2.jpg",
        "/iglesia/4.jpg",
        "/iglesia/10.jpg",
        "/iglesia/3.jpg",
        "/iglesia/7.jpg",
        "/iglesia/8.jpg",
        "/iglesia/9.jpg",
        "/iglesia/3.jpg",
        "/iglesia/6.jpg",
        "/iglesia/8.jpg",
        "/iglesia/9.jpg",
        "/iglesia/3.jpg",
        "/iglesia/6.jpg",
        "/iglesia/7.jpg",
        "/iglesia/8.jpg",
        "/iglesia/9.jpg",
        "/iglesia/3.jpg",
        "/iglesia/6.jpg",
        "/iglesia/3.jpg",
        "/iglesia/7.jpg",
        "/iglesia/8.jpg",
        "/iglesia/9.jpg",
        "/iglesia/3.jpg",
        "/iglesia/6.jpg",
        "/iglesia/8.jpg",
        "/iglesia/9.jpg",
        "/iglesia/3.jpg",
        "/iglesia/6.jpg",
        "/iglesia/7.jpg",
        "/iglesia/7.jpg",
        "/iglesia/7.jpg",
        "/iglesia/5.jpg",
      ];
      setImages((prevImages) => [...prevImages, ...newImages]);
      setHasNextPage(false); 
      setIsFetchingNextPage(false);
    }, 1000); // fingue un delay de 1 s  para que carguen la img
  };

  return (
    <main className="min-h-screen my-20">
      <CategoriesSection categoryId={categoryId} />
      {/* Pasa las imágenes al componente ImageGallery como prop */}
      <ImageGallery images={images} />

      <InfiniteScroll
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </main>
  );
};

export default GaleryView;
