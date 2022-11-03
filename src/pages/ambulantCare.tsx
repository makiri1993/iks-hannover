import React from "react";
import { graphql } from "gatsby";
import { ContentImageManager } from "../components/ContentImageMangager/ContentImageManager";
import { Navigation } from "../components/Navigation/Navigation";
import { Layout } from "../components/Layout/Layout";
import { PageTitle } from "../components/PageTitle/PageTitle";

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
      <PageTitle paddingBottom={0} color={"#00933f"}>
        {data.cms.page.title}
      </PageTitle>
      <ContentImageManager
        content={dataVariable.uppercontent}
        imageSourceUrl={dataVariable.upperimage.sourceUrl}
        className={
          "flex flex-col-reverse md:flex-row-reverse items-center md:justify-center w-full p-8"
        }
        styleContent="w-full whitespace-pre-line text-sm leading-6 text-[#545456]"
        styleContentContainer=" w-11/12 md:w-5/12"
        styleImage="w-9/12 md:w-10/12  md:pt-0 items-center justify-center"
        styleImageContainer="flex flex-col items-center justify-center mb-11"
      />
      <ContentImageManager
        content={dataVariable.lowercontent}
        imageSourceUrl={dataVariable.lowerimage.sourceUrl}
        className={
          "flex flex-col-reverse md:flex-row items-center md:justify-center w-full p-8"
        }
        styleContent="w-full whitespace-pre-line text-sm text-[#545456]"
        styleContentContainer="w-10/12 md:w-5/12"
        styleImage="w-9/12 md:w-10/12  md:pt-0 items-center justify-center"
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
