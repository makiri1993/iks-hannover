import React from "react";
import { graphql } from "gatsby";
import { AmbulantCareContent } from "../components/AmbulantCareContent/AmbulantCareContent";
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
      <AmbulantCareContent
        content={dataVariable.uppercontent}
        imageSourceUrl={dataVariable.upperimage.sourceUrl}
        className="flex flex-row-reverse  whitespace-pre-line items-center justify-center pb-8"
      />
      <AmbulantCareContent
        content={dataVariable.lowercontent}
        imageSourceUrl={dataVariable.lowerimage.sourceUrl}
        className="flex flex-row items-center  whitespace-pre-line justify-center pt-8"
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
