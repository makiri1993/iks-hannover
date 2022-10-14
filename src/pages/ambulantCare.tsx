import React from "react";
import { graphql } from "gatsby";
import { ContentImageManager } from "../components/ContentImageMangager/ContentImageManager";
import { Navigation } from "../components/Navigation/Navigation";
import { Layout } from "../components/Layout/Layout";

interface ambulantCareProps {
  data: {
    cms: {
      page: {
        title: string;
        ambulantFields: {
          uppercontent: string;
          upperimage: {
            sourceUrl: string;
          };
          lowercontent: string;
          lowerimage: {
            sourceUrl: string;
          };
        };
      };
    };
  };
}

export const ambulantCare: React.FC<ambulantCareProps> = ({ data }) => {
  const dataVariable = data.cms.page.ambulantFields;
  return (
    <Layout classname="flex flex-col items-center w-full">
      <h1 className="text-3xl mb-4 items-center">{data.cms.page.title}</h1>
      <ContentImageManager
        content={dataVariable.uppercontent}
        imageSourceUrl={dataVariable.upperimage.sourceUrl}
        className={
          "flex flex-col-reverse md:flex-row-reverse items-center md:justify-center w-full p-12"
        }
        styleContent="w-full whitespace-pre-line text-sm leading-6 text-[#545456]"
        styleImage="w-8/12 md:w-10/12 pt-12 md:pt-0 items-center justify-center"
        styleContentContainer="w-full w-8/12 md:w-5/12"
        styleImageContainer="flex flex-col items-center justify-center mb-11"
      />
      <ContentImageManager
        content={dataVariable.lowercontent}
        imageSourceUrl={dataVariable.lowerimage.sourceUrl}
        className={
          "flex flex-col-reverse md:flex-row items-center md:justify-center w-full p-12"
        }
        styleContent="w-full whitespace-pre-line text-sm text-[#545456]"
        styleImage="w-8/12 md:w-10/12 pt-12 md:pt-0 items-center justify-center"
        styleContentContainer="w-full w-8/12 md:w-5/12"
        styleImageContainer="flex flex-col items-center justify-center mb-11"
      />
    </Layout>
  );
};

export default ambulantCare;

export const query = graphql`
  {
    cms {
      page(id: "/ambulante-pflege", idType: URI) {
        title
        ambulantFields {
          uppercontent
          upperimage {
            sourceUrl
          }
          lowercontent
          lowerimage {
            sourceUrl
          }
        }
      }
    }
  }
`;
