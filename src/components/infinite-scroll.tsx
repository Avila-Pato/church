import { useEffect } from "react";
import { Button } from "./ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface InfiniteScrollProps {
  isManual?: boolean;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

export const InfiniteScroll = ({
  isManual = false,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: InfiniteScrollProps) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: "100px",
  });

  useEffect(() => {
    if (isIntersecting && hasNextPage && !isFetchingNextPage && !isManual) {
      fetchNextPage();
    }
  }, [
    isIntersecting,
    hasNextPage,
    isFetchingNextPage,
    isManual,
    fetchNextPage,
  ]);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div ref={targetRef} className="h-1"></div>

      {/* Mostrar el botón solo si no es manual o si se prefiere el scroll manual */}
      {!isManual && hasNextPage && (
        <Button
          variant="secondary"
          disabled={isFetchingNextPage || !hasNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Cargando..." : "Espere..."}
        </Button>
      )}

      {/* Mensaje cuando no hay más contenido */}
      {!hasNextPage && (
        <p className="text-2xl text-white p-2 bg-slate-400 rounded-xl font-semibold text-muted-foreground">
          Ha alcanzado el final de la fotos
        </p>
      )}
    </div>
  );
};
