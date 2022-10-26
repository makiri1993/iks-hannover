import React, { useState } from "react";
import { NavigationTiles } from "../../../data";
import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

interface NavigationTileProps {
  toggle: boolean;
}

export const NavigationTile: React.FC<NavigationTileProps> = ({ toggle }) => {
  // const [hover, setHover] = useState(false);
  // const handleHover = () => {
  //   if (!hover) {
  //     setHover(true);
  //   }
  //   if (hover) {
  //     setHover(false);
  //   }
  // };
  // const handleRotating = () => {
  //   if (hover) {
  //     return "rotate-90";
  //   }
  // };
  return (
    <div
      className={`flex flex-col items-end text-[#fcfcfc]  font-semibold justify-start w-full md:w-7/12 sm:w-6/12 p-4 transition-all bg-[#ee7917] fixed right-0 z-30 duration-1000 ease-in-out ${
        toggle ? "translate-x-0  " : "translate-x-full "
      }`}
      style={{ top: "118px", height: toggle ? " 1000px" : "0px" }}
    >
      {NavigationTiles.map((element, index) => (
        <div className=" md:pl-16 w-full justify-start">
          <Link
            // onMouseOver={handleHover}
            to={element.path}
            className={`flex flex-row hover:rotate-90 justify-start items-center md:pl-6 py-6 `}
          >
            <div
              className={`bg-white hover:rotate-90 w-4 mr-2 hover`}
              style={{ height: "2px" }}
            />
            {element.title}
          </Link>
          <div className="flex flex-col items-start">
            {element.subTitles?.map((title, subTitleIndex) =>
              index === 1 ? (
                <div className="flex flex-row md:pl-16 py-4 w-full">
                  {handleSmallNavigationImages(subTitleIndex)}
                  <Link
                    className="pl-2 py-2"
                    key={subTitleIndex}
                    to={title.path}
                  >
                    {title.title}
                  </Link>
                </div>
              ) : (
                <Link
                  className="md:pl-16 py-2"
                  key={subTitleIndex}
                  to={title.path}
                >
                  {title.title}
                </Link>
              )
            )}
          </div>
        </div>
      ))}
      <div className="flex flex-col items-start w-full">
        <a>
          <img src="" />
        </a>
        <Link to={"/impressum"}>impressum </Link>
        <Link to={"/dataSecurity"}>Datenschutz </Link>
      </div>
    </div>
  );
};
const handleSmallNavigationImages = (index: number) => {
  if (index === 0) {
    return (
      <StaticImage
        src={
          "../../images/Ambulante_Tagespflege_Icon copy.png"
        }
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
        src={
          "../../images/Wohngemeinschaften_Icon.png"
        }
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
        src={
          "../../images/Außerklinische_Intensivepflege_Icon.png"
        }
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
        src={
          "../../images/TagespflegeIcon.png"
        }
        alt={""}
        width={40}
        height={40}
        className=""
      />
    );
  }
};
