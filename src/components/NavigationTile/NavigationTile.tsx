import React, { useRef, useState } from "react";
import { NavigationTiles } from "../../../data";
import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { NavElement } from "../NavElement/NavElement";

interface NavigationTileProps {
  toggle: boolean;
}

export const NavigationTile: React.FC<NavigationTileProps> = ({ toggle }) => {
  const [border, setBorder] = useState(false);
  return (
    <div
      className={`flex flex-col items-start text-[#fcfcfc]  font-semibold justify-start w-full md:w-6/12 sm:w-6/12 p-4 transition-all bg-[#ee7917] fixed right-0 z-30 duration-1000 ease-in-out ${
        toggle ? "translate-x-0  " : "translate-x-full "
      }`}
      style={{ top: "118px", height: toggle ? " 1000px" : "0px" }}
    >
      {NavigationTiles.map((element, index) => (
        <div className="w-full">
          <NavElement
            path={element.path}
            title={element.title}
            subTitles={element.subTitles}
            index={index}
            border={border}
            setBorder={setBorder}
          />
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
