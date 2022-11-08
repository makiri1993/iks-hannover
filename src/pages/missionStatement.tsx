import React from "react";
import { graphql } from "gatsby";
import { Navigation } from "../components/Navigation/Navigation";
import { Layout } from "../components/Layout/Layout";
import { PageTitle } from "../components/PageTitle/PageTitle";

interface MissionStatementProps {
  data: {
    cms: {
      page: {
        title: string;
        leitbilderFields: {
          fuehrungsbild: string;
          pflegeleitbild: string;
          unternehmensbild: string;
        };
      };
      leitbilderElements: {
        nodes: {
          title: string;
          content: string;
          leitbilderElementsFields: {
            text: string;
          };
        }[];
      };
    };
  };
}

export const MissionStatement: React.FC<MissionStatementProps> = ({ data }) => {
  const dataVariable = data.cms;

  const handlingContent = (index: number) => {
    if (index === 0) {
      return dataVariable.page.leitbilderFields.pflegeleitbild;
    }
    if (index === 4) {
      return dataVariable.page.leitbilderFields.unternehmensbild;
    }
    if (index === 8) {
      return dataVariable.page.leitbilderFields.fuehrungsbild;
    }
  };
  return (
    <Layout classname="flex flex-col items-center w-full">
      <PageTitle>{dataVariable.page.title}</PageTitle>
      <div className="w-11/12 lg:w-7/12 px-8">
        {dataVariable.leitbilderElements.nodes.map((elements, index) => (
          <div key={index} className="my-6 w-full">
            <h3 className="text-[#ee7917] mb-4 font-medium text-3xl">
              {handlingContent(index)}
            </h3>
            <div className="text-[#ee7917] mb-4 text-base font-semibold">
              {elements.title}
            </div>
            <p className="items-center leading-6 text-sm text-[#545456] w-full text-left whitespace-pre-line">
              {elements.leitbilderElementsFields.text}
            </p>
            <ul
              className="mission"
              dangerouslySetInnerHTML={{ __html: elements.content }}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default MissionStatement;

export const query = graphql`
  {
    cms {
      page(id: "/leitbilder", idType: URI) {
        title
        leitbilderFields {
          fuehrungsbild
          pflegeleitbild
          unternehmensbild
        }
      }
      leitbilderElements(
        where: { orderby: { field: DATE, order: ASC } }
        last: 1017
      ) {
        nodes {
          title
          content
          leitbilderElementsFields {
            text
          }
        }
      }
    }
  }
`;
