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

const GaleryView = ({ categoryId }: GaleryProps) => {
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchImagesFromFirestore = useCallback(async (categoryId?: string) => {
    setIsLoading(true);
    try {
      const formattedCategory = categoryId
        ? categoryNames.find((cat) => 
            cat.toLowerCase() === categoryId.toLowerCase()
          )
        : undefined;

      const url = formattedCategory
        ? `/api/images?categoryId=${encodeURIComponent(formattedCategory)}`
        : "/api/images";

      const response = await fetch(url);
      const data = await response.json();
      const firestoreImages = data.map((image: { url: string }) => image.url);
      setImages(firestoreImages);
    } catch (error) {
      console.error("Error fetching images from Firestore:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImagesFromFirestore(categoryId);
  }, [categoryId, fetchImagesFromFirestore]);

  const handleUploadSuccess = useCallback((imageUrl: string, uploadedCategory: string) => {
    if (!categoryId || categoryId === uploadedCategory.toLowerCase()) {
      setImages((prevImages) => [...prevImages, imageUrl]);
    }
  }, [categoryId]);

  const fetchNextPage = async () => {
    if (isFetchingNextPage || !hasNextPage) return;
    setIsFetchingNextPage(true);
    setTimeout(() => {
      setHasNextPage(false);
      setIsFetchingNextPage(false);
    }, 1000);
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center text-white" ><Spinner /></div>;
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