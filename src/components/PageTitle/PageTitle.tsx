import React, { ReactNode } from "react";

interface PageTitleProps {
  children: React.ReactNode;
  paddingBottom?: number;
  paddingTop?: string;
  color?: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({
  children,
  paddingBottom = 25,
  color = "#ee7917",
  paddingTop = "pt-10",
}) => {
  return (
    <h1
      style={{ paddingBottom: paddingBottom }}
      className={`text-center ${paddingTop}  text-3xl text-[${color}] font-medium uppercase mb-4 items-center`}
    >
      {children}
    </h1>
  );
};
