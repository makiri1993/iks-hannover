import React from "react";
import { graphql } from "gatsby";
import { Navigation } from "../components/Navigation/Navigation";
import { Layout } from "../components/Layout/Layout";
import {
  GatsbyImage,
  generateImageData,
  getImage,
  StaticImage,
} from "gatsby-plugin-image";
import { getGatsbyImageResolver } from "gatsby-plugin-image/graphql-utils";
import { PageTitle } from "../components/PageTitle/PageTitle";

interface teamProps {
  data: {
    cms: {
      page: {
        title: string;
        teamFields: {
          image: {
            sourceUrl: string;
          };
        };
      };
      employee: {
        nodes: {
          title: string;
          employeeFields: {
            image: {
              sourceUrl: string;
            };
            role: string;
            email: string;
          };
        }[];
      };
    };
  };
}

export const team: React.FC<teamProps> = ({ data }) => {
  return (
    <Layout classname="flex flex-col items-center w-full">
      <PageTitle>{data.cms.page.title}</PageTitle>
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-full flex-wrap">
        {data.cms.employee.nodes.map((elements, index) => (
          <div className="flex flex-col text-blue-900 justify-center text-center items-center md:flex-wrap pb-4 md:w-6/12 lg:w-4/12 2xl:w-3/12">
            <div className="rounded-full">
              <img
                className="circle-image"
                src={elements.employeeFields.image.sourceUrl}
              />
            </div>
            <h2 className="w-full text-lg font-semibold text-[#ee7917] pb-2">
              {elements.title}
            </h2>
            <div className="flex flex-col text-base items-center leading-4">
              <span className="w-full text-sm whitespace-pre-line text-center">
                {elements.employeeFields.role}
              </span>
              <span className="w-full text-[#ee7917] text-sm text-center">
                {/*{elements.employeeFields.email}*/}
                <a href={"mailto:" + elements.employeeFields.email}>
                  {elements.employeeFields.email}
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
      <img
        className="w-10/12 pt-8 mb-11"
        src={data.cms.page.teamFields.image.sourceUrl}
      />
    </Layout>
  );
};

export default team;

export const query = graphql`
  {
    cms {
      page(id: "/unser-team", idType: URI) {
        title
        teamFields {
          image {
            sourceUrl
          }
        }
      }
      employee(where: { orderby: { field: DATE, order: ASC } }) {
        nodes {
          employeeFields {
            image {
              sourceUrl
            }
            role
            email
          }
          title
        }
      }
    }
  }
`;
