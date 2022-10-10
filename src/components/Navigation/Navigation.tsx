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
      className="flex flex-col bg-white relative z-0 w-full text-white"
      style={{ height: "100px" }}
    >
      <div className="flex flex-row justify-between overflow-hidden z-10 w-full">
        <NavigationImages />
        <button className="right-0 absolute z-30" onClick={handleToggle}>
          <NavigationButton />
        </button>
        <NavigationTile toggle={toggle} />
      </div>
      {/*{toggle ? <NavigationTile toggle={toggle} /> : undefined}*/}
    </div>
  );
};
