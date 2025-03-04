import { CalendarioLayout } from "../modules/calendario/layout/calendario-layouts";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <CalendarioLayout>{children}</CalendarioLayout>;
};

export default Layout;