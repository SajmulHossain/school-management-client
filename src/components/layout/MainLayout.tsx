import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface IProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
