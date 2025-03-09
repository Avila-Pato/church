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

  // Función para obtener las imágenes desde Firestore
  useEffect(() => {
    const fetchImagesFromFirestore = async (categoryId?: string) => {
      try {
        const formattedCategory = categoryId
          ? categoryNames.find((cat) => 
              cat.toLowerCase() === categoryId.toLowerCase() // Comparación directa
            )
          : undefined;

        console.log("Categoría transformada antes de hacer la petición:", formattedCategory);

        // 🔴 Limpiar imágenes antes de hacer la nueva petición
        setImages([]);

        const url = formattedCategory
          ? `/api/images?categoryId=${encodeURIComponent(formattedCategory)}`
          : "/api/images"; // Si no hay categoría, trae todas las imágenes

        const response = await fetch(url);
        const data = await response.json();
        const firestoreImages = data.map((image: { url: string }) => image.url);

        // ✅ Actualiza el estado con las nuevas imágenes
        setImages(firestoreImages);
      } catch (error) {
        console.error("Error fetching images from Firestore:", error);
      }
    };

    fetchImagesFromFirestore(categoryId);
  }, [categoryId]); // 🔥 Se ejecuta cada vez que cambia la categoría

  console.log("Category ID recibido:", categoryId);

  // Función que se ejecutará cuando la imagen se suba correctamente
  const handleUploadSuccess = (imageUrl: string, uploadedCategory: string) => {
    // Solo agrega la nueva imagen al estado si no hay una categoría seleccionada o si coincide con la categoría actual
    if (!categoryId || categoryId === uploadedCategory.toLowerCase()) {
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