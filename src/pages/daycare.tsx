import React from "react";
import { Navigation } from "../components/Navigation/Navigation";
import { ContentImageManager } from "../components/ContentImageMangager/ContentImageManager";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import { PageTitle } from "../components/PageTitle/PageTitle";

interface daycareProps {
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

export const daycare: React.FC<daycareProps> = ({ data }) => {
  const dataVariable = data.cms.page.ambulantFields;
  return (
    <Layout classname="flex flex-col items-center w-full">
      <PageTitle>{data.cms.page.title}</PageTitle>
      <ContentImageManager
        content={dataVariable.uppercontent}
        imageSourceUrl={dataVariable.upperimage.sourceUrl}
        className={
          "flex flex-col-reverse md:flex-row-reverse items-center md:items-start md:justify-center w-full p-12"
        }
        styleContent="w-full whitespace-pre-line text-sm leading-6 text-[#545456]"
        styleContentContainer="item-start w-10/12 md:w-5/12"
        styleImage="w-full md:pt-0 items-center justify-center"
        styleImageContainer="flex flex-col items-center justify-center mb-11 pr-8 w-11/12 md:w-3/12"
      />
      <ContentImageManager
        content={dataVariable.lowercontent}
        imageSourceUrl={dataVariable.lowerimage.sourceUrl}
        className={
          "flex flex-col-reverse md:flex-row items-center md:items-start md:justify-center w-full p-12"
        }
        styleContent="w-full whitespace-pre-line text-sm text-[#545456]"
        styleContentContainer="w-10/12 md:w-5/12"
        styleImage="w-full  md:pt-0 items-center justify-center"
        styleImageContainer="flex flex-col items-start justify-center w-11/12 md:w-3/12 pl-8 mb-11"
      />
    </Layout>
  );
};

export default daycare;

export const query = graphql`
  {
    cms {
      page(id: "/tagespflege", idType: URI) {
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
