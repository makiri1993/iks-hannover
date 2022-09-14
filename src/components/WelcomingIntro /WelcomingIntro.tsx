import React from "react";

interface HomepageProps {
  data: {
    cms: {
      page: {
        homepageintro: {
          welcomingheading: string;
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
  return <div>{data.cms.page.homepageintro.welcomingheading}</div>;
};
