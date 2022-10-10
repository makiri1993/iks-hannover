import React from "react";
import { NavigationTiles } from "../../../data";
import { Link, navigate } from "gatsby";

interface NavigationTileProps {
  toggle: boolean;
}

export const NavigationTile: React.FC<NavigationTileProps> = ({ toggle }) => {
  const handleClick = (path?: string) => {
    if (path === undefined) {
      return "";
    }

    navigate(path);
  };
  return (
    <div
      className={`flex flex-col items-end justify-start w-6/12 p-4 transition-all bg-[#ee7917] fixed right-0 z-10 duration-1000 ease-in-out ${
        toggle ? "translate-x-0 " : "translate-x-full "
      }`}
      style={{ top: "101px", height: "800px" }}
    >
      {NavigationTiles.map((element, index) => (
        <div className="w-full justify-start">
          <Link to={element.path} className="pl-6 py-6" key={index}>
            -- {element.title}
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
    </div>
  );
};
