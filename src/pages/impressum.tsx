import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import { PageTitle } from "../components/PageTitle/PageTitle";

interface impressumProps {
  data: {
    cms: {
      page: {
        title: string;
        content: string;
        impressumFields: {
          headinganfahrt: string;
          headinghaftung: string;
          contenthaftung: string;
          googleimage: {
            sourceUrl: string;
          };
        };
      };
    };
  };
}

export const impressum: React.FC<impressumProps> = ({ data }) => {
  const dataVariable = data.cms.page;

  return (
    <Layout classname="flex flex-col items-center w-full">
      <PageTitle>{dataVariable.impressumFields.headinganfahrt}</PageTitle>
      <img src={dataVariable.impressumFields.googleimage.sourceUrl} />
      <h2 className="text-3xl mb-4 items-center">{dataVariable.title}</h2>
      <div
        className="text-center text-[#545456] impressum whitespace-pre-line"
        dangerouslySetInnerHTML={{ __html: dataVariable.content }}
      />
      <h2 className="text-3xl mb-4 items-center">
        {dataVariable.impressumFields.headinghaftung}
      </h2>
      <p className="text-center text-[#545456] w-9/12">
        {dataVariable.impressumFields.contenthaftung}
      </p>
    </Layout>
  );
};

export default impressum;
export const query = graphql`
  {
    cms {
      page(id: "/impressum", idType: URI) {
        title
        content
        impressumFields {
          headinganfahrt
          headinghaftung
          contenthaftung
          googleimage {
            sourceUrl
          }
        }
      }
    }
  }
`;
