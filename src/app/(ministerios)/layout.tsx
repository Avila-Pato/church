import { MinisteriesLayout } from "../modules/ministerios/layout/ministerio-layout";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <MinisteriesLayout>{children}</MinisteriesLayout>;
};

export default Layout;