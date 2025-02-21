

interface LayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: LayoutProps) => {
  return (
    // <SidebarProvider>
        <div className="flex min-h-screen pt-[2rem] ">
          <main className="flex-1 overflow-y-auto ">{children}</main>
        </div>
  );
};
