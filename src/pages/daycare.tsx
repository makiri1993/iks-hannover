import React from "react";
import { Navigation } from "../components/Navigation/Navigation";
import { ContentImageManager } from "../components/ContentImageMangager/ContentImageManager";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout/Layout";

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
  return (
    // <div className="flex flex-col items-center w-full">
    <Layout classname="flex flex-col items-center w-full">
      {/*<Navigation />*/}
      <h1 className="text-3xl mb-4 items-center">{data.cms.page.title}</h1>
      <ContentImageManager
        content={data.cms.page.ambulantFields.uppercontent}
        imageSourceUrl={data.cms.page.ambulantFields.upperimage.sourceUrl}
        className="flex flex-row-reverse  whitespace-pre-line items-center justify-center pb-8"
      />
      <ContentImageManager
        content={data.cms.page.ambulantFields.lowercontent}
        imageSourceUrl={data.cms.page.ambulantFields.lowerimage.sourceUrl}
        className="flex flex-row items-center  whitespace-pre-line justify-center pt-8"
      />
    </Layout>
    // </div>
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
