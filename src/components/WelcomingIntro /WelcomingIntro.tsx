import React from "react";
import { Heading } from "../Heading/Heading";

interface HomepageProps {
  data: {
    cms: {
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
        };
      };
    };
  };
}

export const WelcomingIntro: React.FC<HomepageProps> = ({ data }) => {
  const GraphqlData = data.cms.page.homepageintro;
  return (
    <div className="flex flex-col items-center w-full">
      {/*<h1 className="w-full text-center text-orange-600 uppercase font-">*/}
      {/*  {data.cms.page.homepageintro.welcomingheading}*/}
      {/*</h1>*/}
      <Heading
        size={"2xl"}
        uppercase={true}
        center={true}
        color={"#ee7917"}
        fontWeight={600}
        classname="pb-4"
      >
        {GraphqlData.welcomingheading}
      </Heading>
      <Heading size={"xl"} color={"#ee7917"} classname="pb-4">
        {GraphqlData.welcomingsubheading}
      </Heading>
      <p className=" w-9/12 text-center whitespace-pre-line">
        {GraphqlData.welcomingtext}
      </p>
      <div>
        <img src={GraphqlData.imagejasmin.sourceUrl} />
        <img src={GraphqlData.imagegalina.sourceUrl} />
      </div>
    </div>
  );
};
