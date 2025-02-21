import { AboutLayout } from "../modules/about/layout/about-layout";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <AboutLayout>{children}</AboutLayout>;
};

export default Layout;