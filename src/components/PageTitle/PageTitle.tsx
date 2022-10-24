import React, { ReactNode } from "react";

interface PageTitleProps {
  children: React.ReactNode;
}

export const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return (
    <h1 className="text-3xl text-[#ee7917] font-semibold uppercase mb-4 items-center">
      {children}
    </h1>
  );
};
