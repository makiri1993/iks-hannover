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
  );
};
