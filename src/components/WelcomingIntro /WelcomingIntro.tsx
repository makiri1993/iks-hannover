import React from "react";
import { Heading } from "../Heading/Heading";
import { PageTitle } from "../PageTitle/PageTitle";
import { StaticImage } from "gatsby-plugin-image";

interface HomepageProps {
  page: {
    homepageintro: {
      welcomingheading: string;
      welcomingsubheading: string;
      welcomingtext: string;
      imagejasmin: {
        sourceUrl: string;
      };
      imagegalina: {
        sourceUrl: string;
      };
      rolejasmin: string;
      rolegalina: string;
      signimagejasmin: {
        sourceUrl: string;
      };
      signimagegalina: {
        sourceUrl: string;
      };
    };
  };
}

export const WelcomingIntro: React.FC<HomepageProps> = ({ page }) => {
  const GraphqlData = page.homepageintro;
  return (
    <div className="flex flex-col z-20 pt-16 items-center w-full">
      <PageTitle paddingBottom={2} paddingTop="pt-14">
        {" "}
        {GraphqlData.welcomingheading}
      </PageTitle>
      <Heading
        center={true}
        fontWeight={500}
        size={"xl"}
        color={"#ee7917"}
        classname="pb-4 leading-5 w-9/12 "
      >
        {GraphqlData.welcomingsubheading}
      </Heading>
      <p className="items-center leading-6 text-sm text-[#545456] w-10/12 text-center whitespace-pre-line">
        {GraphqlData.welcomingtext}
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col  items-center py-8">
          <img className="w-7/12" src={GraphqlData.imagejasmin.sourceUrl} />
          <span className="text-[#ee7917] text-2xl py-3">
            Jasmin Arbabian-Vogel
          </span>

          <span>{GraphqlData.rolejasmin}</span>
          <img
            className="w-5/12 mt-4"
            src={GraphqlData.signimagejasmin.sourceUrl}
            alt="Profile picture Jasmin "
          />
        </div>
        <div className="flex flex-col items-center py-8">
          <img className="w-7/12" src={GraphqlData.imagegalina.sourceUrl} />
          <span className="text-[#ee7917] text-2xl py-3">Galina Fiksmann</span>
          <span>{GraphqlData.rolegalina}</span>
          <img
            className="w-5/12 mt-4"
            src={GraphqlData.signimagegalina.sourceUrl}
            alt="Profile picture Galina"
          />
        </div>
      </div>
    </div>
  );
};
