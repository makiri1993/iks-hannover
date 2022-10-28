import React from "react";
import { Link } from "gatsby";

interface NavElementProps {
  handleHover: () => void;
  handleRotating: (
    subTitles?: { title: string; path: string }[]
  ) => string | undefined;
  path: string;
  title: string;
  subTitles?: { title: string; path: string }[];
  index: number;
}

export const NavElement: React.FC<NavElementProps> = ({
  handleHover,
  handleRotating,
  path,
  title,
  subTitles,
  index,
}) => {
  return (
    <div
      className={`flex flex-row  justify-start items-center`}
      onMouseEnter={handleHover}
      key={index}
    >
      <div className={`${handleRotating(subTitles)}`}>|</div>
      <Link
        // onMouseOver={handleHover}
        to={path}
        className={`flex flex-row  justify-start items-center md:pl-6 py-6 `}
      >
        {title}
      </Link>
    </div>
  );
};
