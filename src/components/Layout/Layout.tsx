import React from "react";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
  classname?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, classname }) => {
  return (
    <div className={classname} style={{ width: window.innerWidth }}>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};
