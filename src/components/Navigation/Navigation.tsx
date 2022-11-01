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
  console.log(toggle);
  return (
    <div
      className="flex flex-col justify-start items-center fixed bg-white z-30 w-full px-4 text-white"
      style={{ height: "120px" }}
    >
      <div
        className="flex flex-row items-center justify-between bg-white opacity-80 z-10 w-full"
        style={{ height: "110px" }}
      >
        <NavigationImages />
        <NavigationButton toggle={toggle} handleToggle={handleToggle} />
      </div>
      <NavigationTile toggle={toggle} />
      {/*{toggle ? <NavigationTile toggle={toggle} /> : undefined}*/}
    </div>
  );
};
