import React from "react";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
  classname?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, classname }) => {
  return (
    <div
      className={`flex flex-col items-center relative w-full ${classname}`}
      // style={{ height: innerHeight }}
    >
      <Navigation />
      <div
        className="flex flex-col relative items-center w-full"
        style={{ top: "110px" }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};
