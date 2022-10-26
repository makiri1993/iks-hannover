import React from "react";
import { Heading } from "../components/Heading/Heading";
import { graphql } from "gatsby";
import { Navigation } from "../components/Navigation/Navigation";
import { Layout } from "../components/Layout/Layout";
import { ContentImageManager } from "../components/ContentImageMangager/ContentImageManager";
import { PageTitle } from "../components/PageTitle/PageTitle";

interface OurNursingServiceProps {
  data: {
    cms: {
      page: {
        title: string;
        content: string;
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
    <Layout classname="flex flex-col items-center">
      <PageTitle>{data.cms.page.title}</PageTitle>
      <ContentImageManager
        content={data.cms.page.PflegedienstFields.intro}
        imageSourceUrl={data.cms.page.PflegedienstFields.image.sourceUrl}
        className={
          "flex flex-col-reverse md:flex-row-reverse items-center md:justify-center w-full p-12"
        }
        styleContentContainer="w-full md:w-5/12"
        styleContent="w-full whitespace-pre-line text-sm text-[#545456]"
        styleImage="w-11/12 mb-4 md:mb-0 md:w-10/12 pt-12 md:pt-0 items-center justify-center"
        styleImageContainer="flex flex-col items-center justify-center md:mb-11"
      />
      <div
        className="w-full md:w-9/12 nursing whitespace-pre-line px-4"
        dangerouslySetInnerHTML={{
          __html: data.cms.page.content,
        }}
      />
    </Layout>
  );
};
export default OurNursingService;

export const query = graphql`
  {
    cms {
      page(id: "unser-pflegedienst", idType: URI) {
        title
        content
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
