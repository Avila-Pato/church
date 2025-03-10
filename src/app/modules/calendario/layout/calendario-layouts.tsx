import { AuthContextProvider } from "@/app/context/AuthContext";


interface LayoutProps {
    children: React.ReactNode;
  }
  
  export const CalendarioLayout = ({ children }: LayoutProps) => {
    return (
      // <SidebarProvider>
          <div className="flex min-h-screen ">
            <main className="flex-1 overflow-y-auto ">
            <AuthContextProvider>
              {children}
            </AuthContextProvider>
              </main>
          </div>
    );
  };
  