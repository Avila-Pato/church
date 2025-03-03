import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface LayoutProps {
    children: React.ReactNode;
  }
  
  export const GalleryLayout = ({ children }: LayoutProps) => {
    return (
      // <SidebarProvider>
      <div className="flex min-h-screen">
      <main className="flex-1 overflow-y-auto">
        <Suspense fallback={<p className=" ">Cargando..</p>}>
          <ErrorBoundary fallback={<p>Error..</p>}>
            {children}
          </ErrorBoundary>
        </Suspense>
      </main>
    </div>
    )
  };
  