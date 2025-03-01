import { GalleryLayout } from "../modules/galeria/layout/galery-layout";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <GalleryLayout>{children}</GalleryLayout>;
};

export default Layout;