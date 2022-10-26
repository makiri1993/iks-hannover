import React from "react";
import { FooterData } from "../../../data";

export const Footer: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center h-full w-full relative -bottom-8 mt-24 z-0 bg-[#ee7917]"
      // style={{ width: window.innerWidth }}
    >
      <div className="flex flex-col w-full items-center my-2 md:my-0 md:flex-row  md:justify-start py-4">
        {FooterData.map((elements, index) => (
          <div
            className="flex flex-col items-start w-7/12 my-4 md:my-0"
            key={index}
          >
            <h3 className="text-2xl pb-4">{elements.name}</h3>
            <div className="flex flex-col pb-4">
              <span>{elements.location}</span>
              <span>{elements.PLZ}</span>
            </div>
            <div className="flex flex-col pb-4">
              <span>{elements.phone}</span>
              <span>{elements.FAX}</span>
            </div>
            <img src="https://via.placeholder.com/150" />
          </div>
        ))}
      </div>
    </div>
  );
};
