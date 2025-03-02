"use client"

import categoryNames from "@/app/seeds/seed.categories";
import { FilterCarousel } from "@/components/filter-carousel";
import { Suspense } from "react";
import { useRouter } from "next/navigation";         
import { ErrorBoundary } from "react-error-boundary";

interface CategoriesSectionProps {
    categoryId?: string;
  }

// Manejando carga de datos de manera asincrona suspense mostrar el componente categoriesSkeleton 
//Error boundry captura el componente de react de sus componentes hijos si falla en categoriessecttionsuspense Boundry lo atrapara mostrar em mensaje algo esta falllando 
export const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
    return (
      <Suspense fallback={<CategoriesSkeleton />}>
        <ErrorBoundary fallback={<div className="text-red-600 p-3">Algo esta fallando</div>}>
          <CategoriesSectionSuspense categoryId={categoryId} />
        </ErrorBoundary>
      </Suspense>
    );
  };

  const CategoriesSkeleton = () => {
    return <FilterCarousel isLoading data={[]} onSelect={() => {}} />;
  };

  export const CategoriesSectionSuspense = ({ categoryId }: CategoriesSectionProps) => {
    const router = useRouter();
  
    // Mapeamos los nombres de las categorías a un formato adecuado para el componente FilterCarousel
    const data = categoryNames.map((category) => ({

      value: category.toLowerCase().replace(/\s+/g, "-"), // Convierto los nombre s a formato slug 
    //   Convertir los nombres a formato slug significa transformar un nombre (o cualquier texto) en una cadena de caracteres que sea fácil de usar en URLs. 
      label: category,
    }));
  
    // Función de selección cuando el usuario seleccione 
    const onSelect = (value: string | null) => {
      const url = new URL(window.location.href);
    //  si el valor es seleccionado  este se vera en la url
      if (value) {
        url.searchParams.set("categoryId", value);
        // si el usuario sellecione undefined o null o una cadena vacia representaria el click "ALL"
        // haciendo que elimine el apremetro anterior seleccionado
      } else {
        url.searchParams.delete("categoryId");
      }
      // este codigo navega hacia la url modificada 
      // ademas la convierte en un to string  y router push cambia la url sin recargar la pagina..
      router.push(url.toString());
    };
  
    return <FilterCarousel onSelect={onSelect} value={categoryId} data={data} />;
    // onselect pasa por el prop filtercarousel manejando la logica cuando el usuario selecciona una seccion
    // value llega a caregoriessectionSupense identificando cada categoria selecionada
    // data es el arreglo que contiene los nombres de las categorias  
  };
 
export default CategoriesSectionProps;