import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children?: ReactNode;
};

export function Layout({children}:Props) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
