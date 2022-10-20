import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout/Layout";

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
    <Layout>
      <h2>{data.cms.page.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: data.cms.page.content }} />
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
