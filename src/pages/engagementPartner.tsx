import React from "react";
import { graphql } from "gatsby";
import { Navigation } from "../components/Navigation/Navigation";
import { Layout } from "../components/Layout/Layout";
import { PageTitle } from "../components/PageTitle/PageTitle";

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
    <Layout classname="flex flex-col items-center w-full">
      <PageTitle>{data.cms.page.title}</PageTitle>
      <p className="whitespace-pre-line w-7/12 pb-8">
        {data.cms.page.engagementFields.engagementcontent}
      </p>
      <div className="flex flex-row justify-center flex-wrap w-7/12 flex-wrap">
        {data.cms.partners.nodes.map((image, index) => (
          <>
            <img
              className="w-6/12 md:w-4/12 lg:w-2/12 mx-2"
              src={image.partnerFields.image.sourceUrl}
            />
            {index === 10 ? (
              <div className="flex flex-col items-center w-full py-8">
                <PageTitle>
                  {data.cms.page.engagementFields.partnerheading}
                </PageTitle>
                <p className="whitespace-pre-line w-full">
                  {data.cms.page.engagementFields.partnercontent}
                </p>
              </div>
            ) : (
              ""
            )}
          </>
        ))}
      </div>
    </Layout>
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
      partners(where: { orderby: { field: DATE, order: ASC } }, first: 20) {
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
