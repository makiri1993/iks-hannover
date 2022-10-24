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
  const handlingTitleColorAndRoute = (index: number, routeOrStyle: boolean) => {
    if (index === 0) {
      return routeOrStyle ? "/daycare" : "text-[#ee7917]";
    }
    if (index === 1) {
      return routeOrStyle ? "/intensiveCare" : "text-[#00933f]";
    }
    if (index === 2) {
      return routeOrStyle ? "/sharedFlats" : "text-[#009be1]";
    }
    if (index === 3) {
      return routeOrStyle ? "/ambulantCare" : "text-[#ee7917]";
    }
  };
  console.log(index);
  console.log();
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-6/12 lg:w-4/12 py-8">
      <a
        href={handlingTitleColorAndRoute(index, true)}
        className="flex flex-col items-center justify-center w-full"
      >
        <img className="rounded-full w-4/12" src={sourceUrl} />
      </a>
      <h2
        className={`items-center text-center text-3xl py-4 ${handlingTitleColorAndRoute(
          index,
          false
        )}`}
      >
        {title}
      </h2>
      <p className="items-center leading-6 text-sm text-[#545456] w-10/12 text-center whitespace-pre-line">
        {text}
      </p>
    </div>
  );
};
