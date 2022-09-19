import React, { ReactNode } from "react";

interface HeadingProps {
  size: "lg" | "xl" | "2xl" | "3xl" | "4xl";
  uppercase?: boolean;
  fontWeight?: 400 | 500 | 600 | 700 | 800 | 900;
  center?: boolean;
  color: string;
  classname?: string;
  children: ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  size,
  fontWeight,
  uppercase,
  center,
  color,
  classname,
  children,
}) => {
  return (
    // <div
    //   className={`text-orange-600 ${size} ${color} ${fontWeight} ${uppercase}${
    //     center ? "text-center" : ""
    //   }`}
    // >
    <h2
      className={` ${classname} text-${size} text-[${color}]  ${
        uppercase ? "uppercase" : ""
      } ${center ? "text-center" : ""} `}
      style={{ fontWeight: fontWeight }}
    >
      {children}
    </h2>
    // </div>
  );
};
