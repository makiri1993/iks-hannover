import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const NavigationImages: React.FC = () => {
  return (
    <div className="flex flex-row left-0 top-4 md:top-0 items-center w-9/12 md:w-5/12 lg:w-4/12 xl:w-4/12 z-20 ">
      <StaticImage
        src="../../images/logo_iks.png"
        alt={""}
        className="md:w-24 w-20 p-4 mr-2 md:mr-8"
        imgClassName=" z-50 p-4 w-full"
      />
      <StaticImage
        src="../../images/schriftzug.png"
        alt={""}
        className="w-72 mt-2"
        imgClassName="z-50 w-full"
      />
    </div>
  );
};
