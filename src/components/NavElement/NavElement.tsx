import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

interface NavElementProps {
  // handleHover: () => void;
  // handleRotating: (
  //   subTitles?: { title: string; path: string }[]
  // ) => string | undefined;
  path: string;
  title: string;
  subTitles?: { title: string; path: string }[];
  index: number;
  border: boolean;
  setBorder: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavElement: React.FC<NavElementProps> = ({
  path,
  title,
  subTitles,
  index,
  border,
  setBorder,
}) => {
  const [hover, setHover] = useState(false);
  const handleHover1 = () => {
    setHover(true);
  };
  const handleHover2 = () => {
    setHover(false);
  };
  const handleRotating = (
    undefinedOrNot: boolean,
    subTitles?: { title: string; path: string }[]
  ) => {
    if (subTitles !== undefined) {
      return undefinedOrNot ? (hover ? "" : "rotate-90 ") : "";
    }
    return hover ? "rotate-90 " : "rotate-90 ";
  };
  const handleEmptyRoute = (path: string) => {
    if (path === "") {
      return "";
    }
    return "pr-8 border-r-2";
  };
  return (
    <div
      className={`flex flex-col md:pl-28  justify-start items-start`}
      onMouseEnter={handleHover1}
      onMouseLeave={handleHover2}
      key={index}
    >
      <div className={`flex flex-row w-32  items-center justify-start`}>
        <div
          className={`flex flex-row  ${handleRotating(
            false,
            subTitles
          )} nav-dropdown-toggle transition-all duration-700 ease-in-out ${
            hover
              ? "transition-all duration-700 ease-in-out"
              : handleRotating(true, subTitles)
          }`}
          style={{ fontSize: "24px" }}
        >
          |
        </div>
        <Link
          activeClassName={`${handleEmptyRoute(path)}`}
          aria-current={"page"}
          to={path}
          className={`flex flex-row  justify-start items-center pl-6 md:py-6 md:py-0 `}
        >
          {title}
        </Link>
      </div>
      {subTitles?.map((title, subTitleIndex) =>
        index === 1 ? (
          <div className="flex flex-row pl-8 md:pl-16 py-4 w-full">
            {handleSmallNavigationImages(subTitleIndex)}
            <Link
              className="md:pl-2 py-2 "
              key={subTitleIndex}
              to={title.path}
              activeClassName={`${handleEmptyRoute(title.path)}`}
              aria-current={"page"}
              aria-label="Links to Service Pages and has the image Logo left to it"
            >
              {title.title}
            </Link>
          </div>
        ) : (
          <Link
            className="pl-8 md:pl-16 py-2 "
            key={subTitleIndex}
            to={title.path}
            activeClassName={`${handleEmptyRoute(title.path)}`}
            aria-current={"page"}
            aria-label="all other tiles of the Navigation"

          >
            {title.title}
          </Link>
        )
      )}
    </div>
  );
};
const handleSmallNavigationImages = (index: number) => {
  if (index === 0) {
    return (
      <StaticImage
        src={"../../images/Ambulante_Tagespflege_Icon copy.png"}
        alt={""}
        width={40}
        height={40}
      />
    );
  }
  if (index === 1) {
    return (
      <StaticImage
        src={"../../images/Wohngemeinschaften_Icon.png"}
        alt={""}
        width={40}
        height={40}
        className=""
      />
    );
  }
  if (index === 2) {
    return (
      <StaticImage
        src={"../../images/Außerklinische_Intensivepflege_Icon.png"}
        alt={""}
        width={40}
        height={40}
        className=""
      />
    );
  }
  if (index === 3) {
    return (
      <StaticImage
        src={"../../images/TagespflegeIcon.png"}
        alt={""}
        width={40}
        height={40}
        className=""
      />
    );
  }
};
