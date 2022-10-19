import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout/Layout";

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
      <h2>{data.cms.page.title}</h2>
      <div className="flex items-center justify-center flex-wrap w-8/12">
        {data.cms.magazines.nodes.map((image, index) => (
          <div
            className="flex flex-col items-center w-4/12 py-4 px-4"
            key={index}
          >
            <img
              style={{ height: "250px" }}
              className="w-9/12"
              src={image.pressefields.image.sourceUrl}
            />
            <div className="flex flex-col justify-end items-center w-full h-12 text-[#fcfcfc] bg-[#ee7917]">
              {image.title}
            </div>
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
