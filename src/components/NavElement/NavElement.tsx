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
}

export const NavElement: React.FC<NavElementProps> = ({
  path,
  title,
  subTitles,
  index,
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
      return undefinedOrNot ? "-rotate-90" : "";
    }
    if (true) {
      return "-rotate-90";
    }
  };
  return (
    <div
      className={`flex flex-col md:pl-28  justify-start items-start`}
      onMouseEnter={handleHover1}
      onMouseLeave={handleHover2}
      key={index}
    >
      <div className="flex flex-row items-center border-r-8 justify-start">
        <div
          className={`flex flex-row ${handleRotating(
            false,
            subTitles
          )} nav-dropdown-toggle ${
            hover ? "" : handleRotating(true, subTitles)
          }`}
          style={{ fontSize: "24px" }}
        >
          |
        </div>
        <Link
          activeClassName="active-page"
          aria-current={"page"}
          // onMouseOver={handleHover}
          to={path}
          className={`flex flex-row  justify-start items-center md:pl-6 py-6 `}
        >
          {title}
        </Link>
      </div>
      {subTitles?.map((title, subTitleIndex) =>
        index === 1 ? (
          <div className="flex flex-row md:pl-16 py-4 w-full">
            {handleSmallNavigationImages(subTitleIndex)}
            <Link className="pl-2 py-2" key={subTitleIndex} to={title.path}>
              {title.title}
            </Link>
          </div>
        ) : (
          <Link className="md:pl-16 py-2" key={subTitleIndex} to={title.path}>
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
        className=""
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
