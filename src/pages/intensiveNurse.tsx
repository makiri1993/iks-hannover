import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import { PageTitle } from "../components/PageTitle/PageTitle";

interface intensiveNurseProps {
  data: {
    cms: {
      page: {
        title: string;
        content: string;
      };
    };
  };
}

export const intensiveNurse: React.FC<intensiveNurseProps> = ({ data }) => {
  return (
    <Layout classname="flex flex-col items-center w-full">
      <PageTitle>{data.cms.page.title}</PageTitle>
      <div
        className="job w-9/12 lg:w-7/12"
        dangerouslySetInnerHTML={{ __html: data.cms.page.content }}
      />
    </Layout>
  );
};

export default intensiveNurse;

export const query = graphql`
  {
    cms {
      page(
        id: "/exam-pflegefachkraft-m-w-d-schwerpunkt-intensivpflege"
        idType: URI
      ) {
        title
        content
      }
    }
  }
`;
