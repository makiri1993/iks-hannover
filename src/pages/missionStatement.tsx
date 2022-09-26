import React from "react";
import { graphql } from "gatsby";
import { Navigation } from "../components/Navigation/Navigation";

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
    <div className="flex flex-col items-center w-full">
      <Navigation />
      <h1 className="text-3xl mb-4 text-left items-center text-[#ee7917]">
        {dataVariable.page.title}
      </h1>
      <div className="w-11/12 px-8">
        {dataVariable.leitbilderElements.nodes.map((elements, index) => (
          <div key={index} className="my-6 w-full">
            <h3 className="text-[#ee7917] font-medium text-2xl">
              {handlingContent(index)}
            </h3>
            <div className="text-[#ee7917] text-xl">{elements.title}</div>
            <div>{elements.leitbilderElementsFields.text}</div>
            <ul
              className="list-disc ml-9"
              dangerouslySetInnerHTML={{ __html: elements.content }}
            />
          </div>
        ))}
      </div>
    </div>
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
