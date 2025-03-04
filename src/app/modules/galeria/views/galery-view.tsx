"use client"
import { useState } from "react";
import { CategoriesSection } from "../components/gallery-navbar";
import ImageGallery from "@/app/modules/galeria/components/GalleryImages";
import { InfiniteScroll } from "@/components/infinite-scroll";

interface GaleryProps {
    categoryId?: string;
    ImageGallery?: string
  }

const GaleryView = ({categoryId, }: GaleryProps ) => {
    const [hasNextPage, setHasNextPage] = useState(true);
    const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);
    const [images, setImages] = useState<string[]>([]); // Aquí guardas las imágenes cargadas
  
    const fetchNextPage = async () => {
      if (isFetchingNextPage || !hasNextPage) return;
  
      setIsFetchingNextPage(true);
  
      // Aquí hace llamada a la  API o manejar la lógica para cargar más imágenes
      // Simulando una carga con un delay de 1 segundo
      setTimeout(() => {
        const newImages = [
          "/iglesia/11.jpg", 
          "/iglesia/12.jpg", 
          "/iglesia/13.jpg"
        ]; // Aquí agregas más imágenes
        setImages((prevImages) => [...prevImages, ...newImages]);
  
        setHasNextPage(false); // Por ejemplo, no hay más imágenes
        setIsFetchingNextPage(false);
      }, 1000);
    };
  
    return (
      <main className="min-h-screen my-20">
        <CategoriesSection categoryId={categoryId} />
        <ImageGallery images={images}  />
        
        {/* Agregamos InfiniteScroll aquí para manejar la carga infinita */}
        <InfiniteScroll
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          fetchNextPage={fetchNextPage}
        />
      </main>
    );
  };
  
 
export default GaleryView;