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
    <div className="flex flex-col z-20 pt-48 items-center w-full">
      {/*<Heading*/}
      {/*  size={"3xl"}*/}
      {/*  uppercase={true}*/}
      {/*  center={true}*/}
      {/*  color={"#ee7917"}*/}
      {/*  fontWeight={600}*/}
      {/*  classname="pb-4"*/}
      {/*>*/}
      {/*  {GraphqlData.welcomingheading}*/}
      {/*</Heading>*/}
      <PageTitle> {GraphqlData.welcomingheading}</PageTitle>
      <Heading
        center={true}
        fontWeight={500}
        size={"xl"}
        color={"#ee7917"}
        classname="pb-4 leading-5"
      >
        {GraphqlData.welcomingsubheading}
      </Heading>
      <p className="items-center leading-6 text-sm text-[#545456] w-10/12 text-center whitespace-pre-line">
        {GraphqlData.welcomingtext}
      </p>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center py-8">
          <img className="w-7/12" src={GraphqlData.imagejasmin.sourceUrl} />
          <span>{GraphqlData.rolejasmin}</span>
          <img
            className="w-7/12 "
            src={GraphqlData.signimagejasmin.sourceUrl}
            alt={""}
          />
        </div>
        <div className="flex flex-col items-center py-8">
          <img className="w-7/12" src={GraphqlData.imagegalina.sourceUrl} />
          <span>{GraphqlData.rolegalina}</span>
          <img
            className="w-7/12 "
            src={GraphqlData.signimagegalina.sourceUrl}
            alt={""}
          />
        </div>
      </div>
    </div>
  );
};
