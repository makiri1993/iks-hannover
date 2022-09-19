import React from "react";
import { Heading } from "../Heading/Heading";

interface ServicesTileProps {
  index: number;
  title: string;
  sourceUrl: string;
  text: string;
}

export const ServicesTile: React.FC<ServicesTileProps> = ({
  index,
  text,
  title,
  sourceUrl,
}) => {
  const handlingTitleColor = (index: number) => {
    if (index === 0) {
      return "text-[#ee7917]";
    }
    if (index === 1) {
      return "text-[#00933f]";
    }
    if (index === 2) {
      return "text-[#009be1]";
    }
    if (index === 3) {
      return "text-[#ee7917]";
    }
  };
  console.log(index);
  console.log();
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-6/12 lg:w-4/12 py-8">
      <img className="rounded-full w-3/12" src={sourceUrl} />
      <h2
        className={`items-center text-center text-3xl py-4 ${handlingTitleColor(
          index
        )}`}
      >
        {title}
      </h2>
      <p className="w-7/12 text-center">{text}</p>
    </div>
  );
};
