import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import { PageTitle } from "../components/PageTitle/PageTitle";

interface magazinesProps {
  data: {
    cms: {
      page: {
        title: string;
      };
      magazines: {
        nodes: {
          title: string;
          pressefields: {
            artikelheading: string;
            image: {
              sourceUrl: string;
            };
          };
        }[];
      };
    };
  };
}

export const magazines: React.FC<magazinesProps> = ({ data }) => {
  return (
    <Layout classname="flex flex-col items-center w-full">
      <PageTitle>{data.cms.page.title}</PageTitle>
      <div className="flex items-center justify-center flex-wrap w-full md:w-6/12">
        {data.cms.magazines.nodes.map((image, index) => (
          <div
            className="flex flex-col items-center w-8/12 md:w-6/12 py-4 px-4"
            key={index}
          >
            <img
              style={{ height: "250px" }}
              className="w-full"
              src={image.pressefields.image.sourceUrl}
            />
            <a
              target="_blank"
              href={image.pressefields.image.sourceUrl}
              className="flex flex-col justify-end items-center w-full h-12 text-[#fcfcfc] bg-[#ee7917]"
            >
              {image.title}
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default magazines;

export const query = graphql`
  {
    cms {
      page(id: "/presse", idType: URI) {
        title
      }
      magazines(first: 30) {
        nodes {
          pressefields {
            artikelheading
            image {
              sourceUrl
            }
          }
          title
        }
      }
    }
  }
`;
