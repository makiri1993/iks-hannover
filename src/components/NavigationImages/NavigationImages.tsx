import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const NavigationImages: React.FC = () => {
  return (
    <div className="flex flex-row left-0 top-4 md:top-0 items-center justify-between w-9/12 md:w-7/12 lg:w-6/12 xl:w-4/12 absolute z-20 ">
      <StaticImage
        src="../../images/logo_iks.png"
        alt={""}
        className="mr-4"
        style={{ width: "200px" }}
      />
      <StaticImage
        src="../../images/schriftzug.png"
        alt={""}
        className="ml-4"
        style={{ width: "700px" }}
      />
    </div>
  );
};
