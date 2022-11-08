import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import { PageTitle } from "../components/PageTitle/PageTitle";

interface dataSecurityProps {
  data: {
    cms: {
      page: {
        title: string;
        content: string;
      };
    };
  };
}

export const dataSecurity: React.FC<dataSecurityProps> = ({ data }) => {
  return (
    <Layout classname="flex flex-col items-center w-full">
      <PageTitle>{data.cms.page.title}</PageTitle>
      <div
        className="w-7/12 whitespace-pre-line data"
        dangerouslySetInnerHTML={{ __html: data.cms.page.content }}
      />
    </Layout>
  );
};

export default dataSecurity;
export const query = graphql`
  {
    cms {
      page(id: "/datenschutz", idType: URI) {
        title
        content
      }
    }
  }
`;
