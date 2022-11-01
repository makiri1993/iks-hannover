import React, { MouseEventHandler, useState } from "react";

interface NavigationButtonProps {
  toggle: boolean;
  handleToggle: () => void;
}
export const NavigationButton: React.FC<NavigationButtonProps> = ({
  toggle,
  handleToggle,
}) => {
  const [state, setState] = useState({
    transform: 0,
    scrollHeight: 0,
    innerHeight: 0,
  });
  const handleTouch = (): void => {
    handleToggle();

    const { innerWidth, innerHeight } = window;
    const { transform, scrollHeight } = state;
    setState({ ...state, innerHeight: innerHeight - scrollHeight });

    transform > 50
      ? setState({ ...state, transform: innerWidth < 550 ? 0 : 50 })
      : setState({ ...state, transform: 100 });
  };
  return (
    <button
      className={`menu-button ${
        state.transform <= 50 ? (toggle ? "animation-burger" : "") : null
      }`}
      onClick={handleToggle}
      aria-label="Button zum Öffnen und Schließen der Navigation"
    >
      <span className={`burger`} />
      <span className={`burger`} />
      <span className={`burger`} />
    </button>
    // <button
    //   className={` z-50 absolute transition-all duration-1000 ease-in-out top-4  right-8 ${
    //     toggle ? "" : ""
    //   }`}
    //   style={{ height: toggle ? "70px" : "20px" }}
    //   onClick={handleToggle}
    //   aria-label="Button zum Öffnen und Schließen der Navigation"
    // >
    //   <span
    //     className={` transition-all duration-1000 ease-in-out ${
    //       toggle ? "spanTag absolute top-4 right-0" : "burger"
    //     }`}
    //   />
    //   <span className={`relative ${toggle ? "opacity-0" : "burger"}`} />
    //   <span
    //     className={` transition-all duration-1000 ease-in-out ${
    //       toggle ? "spanTag2 absolute top-12 right-0" : "burger"
    //     }`}
    //   />
    // </button>
  );
};
