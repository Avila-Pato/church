

interface LayoutProps {
    children: React.ReactNode;
  }
  
  export const AboutLayout = ({ children }: LayoutProps) => {
    return (
      // <SidebarProvider>
          <div className="flex min-h-screen ">
            <main className="flex-1 overflow-y-auto ">{children}</main>
          </div>
    );
  };
  