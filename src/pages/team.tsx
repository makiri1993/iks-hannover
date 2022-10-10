import React from "react";
import { graphql } from "gatsby";
import { Navigation } from "../components/Navigation/Navigation";
import { Layout } from "../components/Layout/Layout";

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
      <h1 className="text-3xl mb-4 items-center">{data.cms.page.title}</h1>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-row justify-center w-7/12 flex-wrap-reverse">
          {data.cms.employee.nodes.map((elements, index) => (
            <div className="flex flex-col text-center items-center flex-nowrap whitespace-nowrap w-4/12">
              <img
                className="rounded-full"
                src={elements.employeeFields.image.sourceUrl}
                width={250}
              />
              <h2 className="w-5/12">{elements.title}</h2>
              <span className="w-5/12">{elements.employeeFields.role}</span>
              <span className="w-5/12">{elements.employeeFields.email}</span>
            </div>
          ))}
        </div>
      </div>
      <img src={data.cms.page.teamFields.image.sourceUrl} />
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
      employee {
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
