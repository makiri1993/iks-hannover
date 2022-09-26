import React from "react";
import { Heading } from "../components/Heading/Heading";
import { graphql } from "gatsby";
import { Navigation } from "../components/Navigation/Navigation";

interface OurNursingServiceProps {
  data: {
    cms: {
      page: {
        title: string;
        PflegedienstFields: {
          intro: string;
          image: {
            sourceUrl: string;
          };
          pflegedienstservices: string;
        };
      };
    };
  };
}

export const OurNursingService: React.FC<OurNursingServiceProps> = ({
  data,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Navigation />
      <h1 className="text-3xl mb-4 items-center">{data.cms.page.title}</h1>
      <div className="flex justify-between justify-center w-full p-12">
        <div className="flex flex-col items-center justify-center w-1/2 mb-11">
          <img
            className="w-9/12"
            src={data.cms.page.PflegedienstFields.image.sourceUrl}
          />
        </div>
        <div className="w-1/2">
          <p className="w-11/12 whitespace-pre-line text-sm text-[#545456]">
            {data.cms.page.PflegedienstFields.intro}
          </p>
        </div>
      </div>
      <p className="mt-12 whitespace-pre-line">
        {data.cms.page.PflegedienstFields.pflegedienstservices}
      </p>
    </div>
  );
};
export default OurNursingService;

export const query = graphql`
  {
    cms {
      page(id: "unser-pflegedienst", idType: URI) {
        title
        PflegedienstFields {
          intro
          image {
            sourceUrl
          }
          pflegedienstservices
        }
      }
    }
  }
`;
