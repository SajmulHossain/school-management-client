import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
