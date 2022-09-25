import React from "react";
import { NavigationTiles } from "../../../data";

interface NavigationTileProps {
  toggle: boolean;
}

export const NavigationTile: React.FC<NavigationTileProps> = ({ toggle }) => {
  return (
    <div
      className={`flex flex-col absolute bg-orange-400 z-40 transition duration-100 right-0 ml-96 top-12 ${
        toggle ? "w-4/12" : "w-4/12"
      }`}
    >
      {NavigationTiles.map((element, index) => (
        <div className="">
          <div className="pl-8 py-2" key={index}>
            -- {element.title}
          </div>
          <div className="f">
            {element.subTitles?.map((title, subTitleIndex) => (
              <div className="pl-16 py-2" key={index}>
                {title.title}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
