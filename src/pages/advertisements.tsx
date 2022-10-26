import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import { AdvertisementLink } from "../components/AdvertisementLink/AdvertisementLink";
interface advertisementsProps {
  data: {
    cms: {
      joboffers: {
        nodes: {
          title: string;
          content: string;
          jobFields: {
            content: string;
          };
        }[];
      };
    };
  };
}

export const advertisements: React.FC<advertisementsProps> = ({ data }) => {
  return (
    <Layout classname="flex flex-col items-center">
      <h1 className="text-3xl mb-4 text-left items-center text-[#ee7917]">
        Stellenangebot
      </h1>
      {data.cms.joboffers.nodes.map((elements, index) => (
        <div className="flex flex-col items-center w-10/12">
          {index === 1 || index === 2 ? (
            <div>
              <h2 className="text-2xl font-medium text-[#ee7917] py-4">
                {elements.title}
              </h2>
              <div className="text-sm text-[#545456] leading-7">
                {elements.jobFields.content}
              </div>
            </div>
          ) : (
            <div />
          )}
          {index === 0 || index === 1 ? (
            <AdvertisementLink path={""} />
          ) : // <AdvertisementLink />
          undefined}
        </div>
      ))}
    </Layout>
  );
};

export default advertisements;
export const query = graphql`
  {
    cms {
      page(id: "/jobs", idType: URI) {
        title
        jobsFields {
          text
          image {
            sourceUrl
          }
        }
      }
      joboffers(where: { orderby: { field: DATE, order: ASC } }) {
        nodes {
          title
          content
          jobFields {
            content
          }
        }
      }
    }
  }
`;
