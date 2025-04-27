"use client";
import categoryNames from "@/app/seeds/seed.categories";
import { FilterCarousel } from "@/components/filter-carousel";
import { Suspense } from "react";
import { useRouter } from "next/navigation";
import { ErrorBoundary } from "react-error-boundary";
import UploadFormCloud from "@/app/pages/apiUplaod/UploadForm";


interface CategoriesSectionProps {
  categoryId?: string;
  onUploadSuccess: (imageUrl: string, uploadedCategory: string) => void;
}

export const CategoriesSection = ({ categoryId, onUploadSuccess }: CategoriesSectionProps) => {
  return (
    <Suspense fallback={<CategoriesSkeleton />}>
      <UploadFormCloud categories={categoryNames} onUploadSuccess={onUploadSuccess} />
      <ErrorBoundary fallback={<div className="text-red-600 p-3">Algo está fallando</div>}>
        <CategoriesSectionSuspense categoryId={categoryId} onUploadSuccess={onUploadSuccess} />
      </ErrorBoundary>
    </Suspense>
  );
};

const CategoriesSkeleton = () => {
  return <FilterCarousel isLoading data={[]} onSelect={() => {}} />;
};

export const CategoriesSectionSuspense = ({ categoryId}: CategoriesSectionProps) => {
  const router = useRouter();

  // Mapear las categorías para el FilterCarousel
  const data = categoryNames.map((category) => ({
    value: category, // Usar el valor original de la categoría
    label: category,
  }));

  // Función para actualizar la URL al seleccionar una categoría
  const onSelect = (value: string | null) => {
    const url = new URL(window.location.href);
    if (value) {
      url.searchParams.set("categoryId", value); // Usar el valor original de la categoría
    } else {
      url.searchParams.delete("categoryId");
    }
    router.push(url.toString());
  };

  return (
    <FilterCarousel
      onSelect={onSelect}
      value={categoryId || null} // Usar el categoryId directamente
      data={data}
    />
  );
};

export default CategoriesSection;