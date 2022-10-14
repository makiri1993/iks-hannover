import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout/Layout";

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
    <Layout classname="flex flex-col items-center w-9/12 lg:w-7/12">
      <h1 className="text-3xl mb-4 text-left items-center text-[#ee7917]">
        {data.cms.page.title}
      </h1>
      <div
        className="job"
        dangerouslySetInnerHTML={{ __html: data.cms.page.content }}
      />
    </Layout>
  );
};

export default intensiveNurse;

export const query = graphql`
  {
    cms {
      page(id: "/exam-pflegefachkraft-m-w-d", idType: URI) {
        title
        content
      }
    }
  }
`;
