

interface LayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: LayoutProps) => {
  return (
    // <SidebarProvider>
      <div className="w-full bg-red-400">
        {/* <StudioNavbar /> */}
        <div className="flex min-h-screen pt-[4rem]">
            {/* aqui puedes poner   <Sidebar  /> si deseas pero lo mio es una landing page por ende no creo nececitarlo  */}
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
  );
};
