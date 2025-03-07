"use client";
import { useState, useEffect } from "react";
import { CategoriesSection } from "../components/gallery-navbar";
import ImageGallery from "@/app/modules/galeria/components/GalleryImages";
import { InfiniteScroll } from "@/components/infinite-scroll";
import categoryNames from "@/app/seeds/seed.categories"; // Importa las categorías

interface GaleryProps {
  categoryId?: string;
}

const GaleryView = ({ categoryId }: GaleryProps) => {
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  // Imágenes de ejemplo (solo se muestran en la vista "all")
  const exampleImages = [
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
    "/iglesia/5.jpg",
  ];

  // Función para obtener las imágenes desde Firestore
  const fetchImagesFromFirestore = async (category?: string) => {
    try {
      // Transformar el categoryId de la URL al formato original
      const formattedCategory = category
        ? categoryNames.find((cat) => cat.toLowerCase().replace(/\s+/g, "-") === category)
        : undefined;

      const url = formattedCategory
        ? `/api/images?category=${encodeURIComponent(formattedCategory)}`
        : "/api/images";

      const response = await fetch(url);
      const data = await response.json();
      const firestoreImages = data.map((image: { url: string }) => image.url); // Extrae las URLs

      console.log("Categoría seleccionada:", formattedCategory);
      console.log("Imágenes de Firestore:", firestoreImages);

      // Si no hay categoría seleccionada, combina las imágenes de ejemplo con las de Firestore
      if (!formattedCategory) {
        setImages([...exampleImages, ...firestoreImages]);
      } else {
        // Si hay una categoría seleccionada, solo muestra las imágenes de Firestore
        setImages([...firestoreImages]);
      }
    } catch (error) {
      console.error("Error fetching images from Firestore:", error);
    }
  };

  // Obtener las imágenes de Firestore cuando el componente se monta o cambia la categoría
  useEffect(() => {
    fetchImagesFromFirestore(categoryId);
  }, [categoryId]);

  // Función que se ejecutará cuando la imagen se suba correctamente
  const handleUploadSuccess = (imageUrl: string, uploadedCategory: string) => {
    // Solo agrega la nueva imagen al estado si no hay una categoría seleccionada o si coincide con la categoría actual
    if (!categoryId || categoryId === uploadedCategory.toLowerCase().replace(/\s+/g, "-")) {
      setImages((prevImages) => [...prevImages, imageUrl]);
    }
  };

  const fetchNextPage = async () => {
    if (isFetchingNextPage || !hasNextPage) return;

    setIsFetchingNextPage(true);
    // Simula la carga de más imágenes (solo imágenes de Firestore, no de ejemplo)
    setTimeout(() => {
      setHasNextPage(false); // No hay más páginas para cargar
      setIsFetchingNextPage(false);
    }, 1000); // Simula un delay de 1 segundo
  };

  return (
    <main className="min-h-screen my-20">
      {/* Pasa handleUploadSuccess como prop a CategoriesSection */}
      <CategoriesSection
        categoryId={categoryId}
        onUploadSuccess={handleUploadSuccess}
      />
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