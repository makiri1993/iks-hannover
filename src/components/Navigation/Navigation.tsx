import React, { useState } from "react";
import { NavigationTiles } from "../../../data";
import { NavigationTile } from "../NavigationTile/NavigationTile";
import { NavigationButton } from "../NavigationButton/NavigationButton";
import { StaticImage } from "gatsby-plugin-image";
import { NavigationImages } from "../NavigationImages/NavigationImages";
export const Navigation: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    if (toggle) {
      setToggle(false);
    }
    if (!toggle) {
      setToggle(true);
    }
  };
  return (
    <div
      className="flex flex-col justify-center items-center fixed bg-white bg-opacity-80 z-30 w-full  text-white"
      style={{ height: "88.78px" }}
    >
      <div className="flex flex-row items-center justify-between bg-white bg-opacity-0 z-10 px-4 w-full">
        <NavigationImages />
        <NavigationButton toggle={toggle} handleToggle={handleToggle} />
      </div>
      <NavigationTile toggle={toggle} />
      {/*{toggle ? <NavigationTile toggle={toggle} /> : undefined}*/}
    </div>
  );
};
