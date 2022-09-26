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
      className={`flex flex-col absolute bg-orange-400 z-40 transition duration-100 right-0 ml-96 top-12 ${
        toggle ? "w-4/12" : "w-4/12"
      }`}
    >
      {NavigationTiles.map((element, index) => (
        <div className="">
          <Link to={element.path} className="pl-8 py-2" key={index}>
            -- {element.title}
          </Link>
          <div className="f">
            {element.subTitles?.map((title, subTitleIndex) => (
              <Link className="pl-16 py-2" key={index} to={title.path}>
                {title.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
