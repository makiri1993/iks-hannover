import React from "react";
import { graphql } from "gatsby";
import { Navigation } from "../components/Navigation/Navigation";
import { ContentImageManager } from "../components/ContentImageMangager/ContentImageManager";
import { Layout } from "../components/Layout/Layout";

interface intensiveCareProps {
  data: {
    cms: {
      page: {
        title: string;
        content: string;
        intensivpflegeFields: {
          textcontent: string;
          image: {
            sourceUrl: string;
          };
        };
      };
    };
  };
}

export const intensiveCare: React.FC<intensiveCareProps> = ({ data }) => {
  return (
    <Layout classname="flex flex-col items-center w-full">
      <h1 className="text-3xl mb-4 items-center">{data.cms.page.title}</h1>
      <ContentImageManager
        content={data.cms.page.intensivpflegeFields.textcontent}
        imageSourceUrl={data.cms.page.intensivpflegeFields.image.sourceUrl}
        className={
          "flex flex-col-reverse md:flex-row-reverse items-center md:justify-center w-full p-12"
        }
        styleContent="w-full whitespace-pre-line text-sm leading-6 text-[#545456]"
        styleImage="w-8/12 md:w-10/12 pt-12 md:pt-0 items-center justify-center"
        styleContentContainer="w-full w-8/12 md:w-5/12"
        styleImageContainer="flex flex-col items-center justify-center mb-11"
      />
      <ul
        className="list-disc ml-9"
        dangerouslySetInnerHTML={{ __html: data.cms.page.content }}
      />
    </Layout>
  );
};

export default intensiveCare;

export const query = graphql`
  {
    cms {
      page(id: "/ausserklinische-intensivpflege", idType: URI) {
        title
        content
        intensivpflegeFields {
          textcontent
          image {
            sourceUrl
          }
        }
      }
    }
  }
`;
