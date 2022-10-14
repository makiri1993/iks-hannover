import React from "react";
import { graphql } from "gatsby";
import { ContentImageManager } from "../components/ContentImageMangager/ContentImageManager";
import { Navigation } from "../components/Navigation/Navigation";
import { Layout } from "../components/Layout/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { html } from "gatsby/dist/redux/reducers";

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
  const handlingImagesBetweenMapping = (index: number, className: string) => {
    if (index === 2) {
      return (
        <div className="w-9/12 sm:w-full item-center sm:item-start py-4">
          <StaticImage
            className={className}
            src={
              "/Users/leonkireew/Code/techstudio-iks-Hannover/techstudio-iks-hannover/src/images/geldsack.png"
            }
            alt={""}
          />
        </div>
      );
    }
    if (index === 3) {
      return (
        <div className="w-9/12 rounded-full sm:w-full item-center sm:item-start py-4">
          <StaticImage
            className={className}
            src={
              "/Users/leonkireew/Code/techstudio-iks-Hannover/techstudio-iks-hannover/src/images/stetoskop.png"
            }
            alt={""}
          />
        </div>
      );
    }
  };
  return (
    <Layout classname="flex flex-col items-center w-full">
      <h1 className="text-3xl mb-4 text-left items-center text-[#ee7917]">
        {data.cms.page.title}
      </h1>
      <ContentImageManager
        content={data.cms.page.jobsFields.text}
        imageSourceUrl={data.cms.page.jobsFields.image.sourceUrl}
        className={"flex flex-col items-center whitespace-pre-line w-9/12"}
        styleImage="w-full sm:w-3/12 item-center sm:item-start"
        styleImageContainer="w-9/12 sm:w-full item-center sm:item-start py-4"
        styleContent="text-sm text-[#545456] leading-7"
      />
      {data.cms.joboffers.nodes.map((elements, index) => (
        <div className="flex flex-col items-start py-4 w-9/12">
          {handlingImagesBetweenMapping(
            index,
            "w-full rounded-full sm:w-3/12 item-center sm:item-start pb-8 py-4"
          )}
          <h2 className="text-lg font-medium text-[#ee7917] py-4">
            {elements.title}
          </h2>
          <ul
            className="text-sm text-[#545456] leading-7"
            dangerouslySetInnerHTML={{ __html: elements.content }}
          />
        </div>
      ))}
    </Layout>
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
