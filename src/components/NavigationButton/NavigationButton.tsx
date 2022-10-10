import React, { MouseEventHandler } from "react";

export const NavigationButton: React.FC = ({}) => {
  return (
    <div className="flex flex-col items-center relative z-40 p-4">
      <div className="h-1 w-6 bg-[#ee7917]" />
      <div className="my-1 h-1 w-6 bg-[#ee7917]" />
      <div className="h-1 w-6 bg-[#ee7917]" />
    </div>
  );
};
