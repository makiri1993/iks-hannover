import React, { MouseEventHandler, useState } from "react";

interface NavigationButtonProps {
  toggle: boolean;
  handleToggle: () => void;
}
export const NavigationButton: React.FC<NavigationButtonProps> = ({
  toggle,
  handleToggle,
}) => {
  const [transform, setTransform] = useState(0);
  return (
    // <div className="flex flex-col items-center relative z-40 p-4">
    //   <div className="h-1 w-6 bg-[#ee7917]" />
    //   <div className="my-1 h-1 w-6 bg-[#ee7917]" />
    //   <div className="h-1 w-6 bg-[#ee7917]" />
    // </div>
    // <button
    //   className={` absolute self-end right-0 top-0 w-full z-50 ${
    //     transform <= 50 ? "animation-burger" : null
    //   } ${toggle ? "w-12" : " w-12"}`}
    //   onClick={handleToggle}
    // >
    //   <span className={`burger`} />
    //   {toggle ? undefined : <span className="burger" />}
    //   <span className={`burger`} />
    // </button>
    <button
      className={` z-50 absolute transition-all duration-1000 ease-in-out top-4  right-20 ${
        toggle ? "" : ""
      }`}
      style={{ height: toggle ? "70px" : "20px" }}
      onClick={handleToggle}
      aria-label="Button zum Öffnen und Schließen der Navigation"
    >
      <span
        className={` transition-all duration-1000 ease-in-out ${
          toggle ? "spanTag absolute top-4" : "burger"
        }`}
      />
      <span className={`relative ${toggle ? "opacity-0" : "burger"}`} />
      <span
        className={` transition-all duration-1000 ease-in-out ${
          toggle ? "spanTag2 absolute top-12" : "burger"
        }`}
      />
    </button>
  );
};
