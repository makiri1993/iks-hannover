import React from "react";
import { graphql } from "gatsby";
import { AmbulantCareContent } from "../components/AmbulantCareContent/AmbulantCareContent";

interface JobsProps {
  data: {
    cms: {
      page: {
        title: string;
        jobsFields: {
          text: string;
          image: {
            sourceUrl: string;
          };
        };
      };
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

export const jobs: React.FC<JobsProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-3xl mb-4 text-left items-center text-[#ee7917]">
        {data.cms.page.title}
      </h1>
      <AmbulantCareContent
        content={data.cms.page.jobsFields.text}
        imageSourceUrl={data.cms.page.jobsFields.image.sourceUrl}
        className={"w-full"}
      />
      {data.cms.joboffers.nodes.map((elements, index) => (
        <div className="flex flex-col items-center py-4 w-9/12">
          <h2>{elements.title}</h2>
          <p>{elements.content}</p>
        </div>
      ))}
    </div>
  );
};

export default jobs;
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
