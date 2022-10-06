import React from "react";
import { graphql } from "gatsby";
import { Navigation } from "../components/Navigation/Navigation";

interface engagementPartnerProps {
  data: {
    cms: {
      page: {
        title: string;
        engagementFields: {
          engagementcontent: string;
          partnerheading: string;
          partnercontent: string;
        };
      };
      partners: {
        nodes: {
          partnerFields: {
            image: {
              sourceUrl: string;
            };
          };
        }[];
      };
    };
  };
}

export const enagementPartner: React.FC<engagementPartnerProps> = ({
  data,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Navigation />
      <h1 className="text-3xl mb-4 items-center">{data.cms.page.title}</h1>
      <p>{data.cms.page.engagementFields.engagementcontent}</p>
      <div className="flex flex-row w-9/12">
        {data.cms.partners.nodes.map((image, index) => (
          <div className={"flex flex-row"}>
            <img src={image.partnerFields.image.sourceUrl} />
          </div>
        ))}
      </div>
      <h1 className="text-3xl mb-4 items-center">
        {data.cms.page.engagementFields.partnerheading}
      </h1>
      <p>{data.cms.page.engagementFields.partnercontent}</p>
    </div>
  );
};

export default enagementPartner;

export const query = graphql`
  {
    cms {
      page(id: "/engagement", idType: URI) {
        engagementFields {
          engagementcontent
          partnerheading
          partnercontent
        }
        title
      }
      partners {
        nodes {
          partnerFields {
            image {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
