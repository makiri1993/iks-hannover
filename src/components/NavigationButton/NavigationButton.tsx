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
    <button
      className={` absolute right-0 z-50 ${
        transform <= 50 ? "animation-burger" : null
      } ${toggle ? " w-24" : " w-24"}`}
      onClick={handleToggle}
    >
      <span className={`burger ${toggle ? "transform rotate-[405deg]" : ""}`} />
      {toggle ? undefined : <span className="burger" />}
      <span
        className={`burger ${toggle ? "transform rotate-[-405deg] h-44" : ""}`}
      />
    </button>
  );
};
