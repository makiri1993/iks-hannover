import React, { useState } from "react";
import { NavigationTiles } from "../../../data";
import { Link, navigate } from "gatsby";

interface NavigationTileProps {
  toggle: boolean;
}

export const NavigationTile: React.FC<NavigationTileProps> = ({ toggle }) => {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    if (!hover) {
      setHover(true);
    }
    if (hover) {
      setHover(false);
    }
  };
  return (
    <div
      className={`flex flex-col items-end justify-start w-7/12 sm:w-6/12 p-4 transition-all bg-[#ee7917] fixed right-0 z-30 duration-1000 ease-in-out ${
        toggle ? "translate-x-0  " : "translate-x-full "
      }`}
      style={{ top: "97px", height: toggle ? " 800px" : "0px" }}
    >
      {NavigationTiles.map((element, index) => (
        <div className="w-full justify-start">
          <Link
            onMouseOver={handleHover}
            to={element.path}
            className="flex flex-row justify-start items-center pl-6 py-6"
            key={index}
          >
            <div
              className={`bg-white w-4 mr-2 ${hover ? "rotate-90" : ""}`}
              style={{ height: "2px" }}
            />{" "}
            {element.title}
          </Link>
          <div className="flex flex-col items-start">
            {element.subTitles?.map((title, subTitleIndex) => (
              <Link className="pl-16 py-2" key={subTitleIndex} to={title.path}>
                {title.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
      <div className="flex flex-col items-start w-full">
        <Link to={"/impressum"}>impressum </Link>
        <Link to={"/dataSecurity"}>Datenschutz </Link>
      </div>
    </div>
  );
};
