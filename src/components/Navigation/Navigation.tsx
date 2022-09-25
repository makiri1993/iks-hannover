import React, { useState } from "react";
import { NavigationTiles } from "../../../data";
import { NavigationTile } from "../NavigationTile/NavigationTile";
import { NavigationButton } from "../NavigationButton/NavigationButton";
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
    <div className="flex flex-col bg-white relative  w-full text-white">
      <div className="flex flex-row justify-between">
        <div className="flex justify-between w-2/12">
          <img
            className="w-2/12 rounded-full"
            src="https://via.placeholder.com/150"
          />
          <img
            className="w-2/12 rounded-full"
            src="https://via.placeholder.com/150"
          />
        </div>
        <button onClick={handleToggle}>
          <NavigationButton />
        </button>
      </div>
      {toggle ? <NavigationTile toggle={toggle} /> : undefined}
    </div>
  );
};
