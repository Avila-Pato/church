// src/app/modules/galeria/views/GaleryView.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { CategoriesSection } from "../components/gallery-navbar";
import ImageGallery from "@/app/modules/galeria/components/GalleryImages";
import { InfiniteScroll } from "@/components/infinite-scroll";
import { Spinner } from "@/components/spinner";

interface GaleryProps {
  categoryId?: string; // puede ser slug o nombre
}

interface ImageRecord {
  url: string;
  category: string;
  createdAt?: { seconds: number; nanoseconds: number };
}

// Convierte nombre a slug
function toSlug(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w ]+/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// Determina el slug real a usar en la URL
function resolveSlug(input?: string): string {
  if (!input) return "";
  // Si ya contiene guiones y no tiene espacios, asumimos que es slug
  if (input.includes("-") && !input.includes(" ")) return input.toLowerCase();
  // En cualquier otro caso, lo convertimos
  return toSlug(input);
}

export default function GaleryView({ categoryId }: GaleryProps) {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);

  const fetchImages = useCallback(
    async (catInput?: string) => {
      setIsLoading(true);
      const slug = resolveSlug(catInput);
      const url = slug ? `/api/images?categoryId=${encodeURIComponent(slug)}` : "/api/images";
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(await res.text());
        const data = (await res.json()) as ImageRecord[];
        setImages(data.map((img) => img.url));
      } catch (error) {
        console.error("Error fetching images:", error);
        setImages([]);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // Carga inicial y cuando cambia categoryId
  useEffect(() => {
    fetchImages(categoryId);
  }, [categoryId, fetchImages]);

  // Al subir, recarga la categoría subida
  const handleUploadSuccess = useCallback(
    (_url: string, uploadedCategory: string) => {
      fetchImages(uploadedCategory);
    },
    [fetchImages]
  );

  const fetchNextPage = async () => {
    if (isFetchingNextPage || !hasNextPage) return;
    setIsFetchingNextPage(true);
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
      <CategoriesSection categoryId={categoryId} onUploadSuccess={handleUploadSuccess} />
      <ImageGallery images={images} />
      <InfiniteScroll
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </main>
  );
}
