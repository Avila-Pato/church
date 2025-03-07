"use client";
import categoryNames from "@/app/seeds/seed.categories";
import { FilterCarousel } from "@/components/filter-carousel";
import { Suspense } from "react";
import { useRouter } from "next/navigation";
import { ErrorBoundary } from "react-error-boundary";
import UploadForm from "@/app/pages/api/upload";

interface CategoriesSectionProps {
  categoryId?: string;
  onUploadSuccess: (imageUrl: string, uploadedCategory: string) => void; // Acepta dos argumento
}

export const CategoriesSection = ({ categoryId, onUploadSuccess }: CategoriesSectionProps) => {
  
  return (
    <Suspense fallback={<CategoriesSkeleton /> }>
      
          {/* Pasa onUploadSuccess a UploadForm */}
          <UploadForm categories={categoryNames} onUploadSuccess={onUploadSuccess} />
      
      <ErrorBoundary fallback={<div className="text-red-600 p-3">Algo esta fallando</div>}>
        <CategoriesSectionSuspense categoryId={categoryId} onUploadSuccess={onUploadSuccess} />
        
      </ErrorBoundary>
    </Suspense>
  );
};

const CategoriesSkeleton = () => {
  return <FilterCarousel isLoading data={[]} onSelect={() => {}} />;
};

export const CategoriesSectionSuspense = ({ categoryId }: CategoriesSectionProps) => {
  
  const router = useRouter();

  const data = categoryNames.map((category) => ({
    value: category.toLowerCase().replace(/\s+/g, "-"),
    label: category,
  }));
  

  const onSelect = (value: string | null) => {
    const url = new URL(window.location.href);
    if (value) {
      url.searchParams.set("categoryId", value);
    } else {
      url.searchParams.delete("categoryId");
    }
    router.push(url.toString());
  };
  

  return <FilterCarousel onSelect={onSelect} value={categoryId} data={data} />;
  
};

export default CategoriesSection;