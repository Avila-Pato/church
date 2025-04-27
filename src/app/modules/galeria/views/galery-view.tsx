// src/app/modules/galeria/views/GaleryView.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { CategoriesSection } from "../components/gallery-navbar";
import ImageGallery from "@/app/modules/galeria/components/GalleryImages";
import { InfiniteScroll } from "@/components/infinite-scroll";
import categoryNames from "@/app/seeds/seed.categories";
import { Spinner } from "@/components/spinner";

interface GaleryProps {
  categoryId?: string;
}

interface ImageRecord {
  url: string;
  category: string;
  createdAt?: { seconds: number; nanoseconds: number };
}

const GaleryView = ({ categoryId }: GaleryProps) => {
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchImagesFromFirestore = useCallback(
    async (categoryId?: string) => {
      setIsLoading(true);
      try {
        // Normaliza categoría si viene por prop
        const formattedCategory = categoryId
          ? categoryNames.find(
              (cat) => cat.toLowerCase() === categoryId.toLowerCase()
            )
          : undefined;

        const url = formattedCategory
          ? `/api/images?categoryId=${encodeURIComponent(
              formattedCategory
            )}`
          : "/api/images";

        const res = await fetch(url);
        if (!res.ok) throw new Error("Error en la petición");

        // Aseguramos que venga un array
        const data = (await res.json()) as unknown;
        if (!Array.isArray(data)) {
          console.error("Respuesta inesperada de la API:", data);
          setImages([]);
          return;
        }

        // Mapea solo las URLs
        const firestoreImages = (data as ImageRecord[]).map(
          (img) => img.url
        );
        setImages(firestoreImages);
      } catch (error) {
        console.error("Error fetching images from Firestore:", error);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchImagesFromFirestore(categoryId);
  }, [categoryId, fetchImagesFromFirestore]);

  const handleUploadSuccess = useCallback(
    (imageUrl: string, uploadedCategory: string) => {
      // Solo añade si coincide con la categoría actual (o si no filtramos)
      if (
        !categoryId ||
        categoryId.toLowerCase() === uploadedCategory.toLowerCase()
      ) {
        setImages((prev) => [...prev, imageUrl]);
      }
    },
    [categoryId]
  );

  const fetchNextPage = async () => {
    if (isFetchingNextPage || !hasNextPage) return;
    setIsFetchingNextPage(true);
    // Simula carga adicional
    setTimeout(() => {
      setHasNextPage(false);
      setIsFetchingNextPage(false);
    }, 1000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <Spinner />
      </div>
    );
  }

  return (
    <main className="min-h-screen my-20">
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
