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
  return (
    <div>
      <h2 className="w-full text-center">
        {data.cms.page.homepageintro.welcomingheading}
      </h2>
      <p>{data.cms.page.homepageintro.welcomingtext}</p>
      <div>
        <img src={data.cms.page.homepageintro.imagejasmin.sourceUrl} />
        <img src={data.cms.page.homepageintro.imagegalina.sourceUrl} />
      </div>
    </div>
  );
};
