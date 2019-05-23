import React from "react";
import Helmet from "react-helmet";
import Heading from "../components/heading/Heading";
import Text from "../components/text/Text";
import { graphql } from "gatsby";
import TextWithImg from "../components/imgText/TextWithImg";

interface PflegedienstData {
  siteData: {
    frontmatter: {
      title: string;
      text_top: string;
      slogan: string;
      text_bot: string;
      image?: object;
    };
  };
}

export default ({ data }: { data: PflegedienstData }) => {
  const { title, text_top, slogan, text_bot, image } = data.siteData.frontmatter;
  return (
    <>
      <Helmet
        title={"Pflegedienst - Interkultureller Pflegedienst Hannover"}
        meta={[
          {
            name: "description",
            content:
              "Informieren Sie sich über unser Angebot und überzeugen Sie sich von unserem Pfelgedienst. Hier finden Sie Informationen zu Pflegegeraden, Pflegedienstleistungen, medizinische Leistungen und Preise."
          }
        ]}
      />
      <div className="max-container">
        <div className="text-container">
          <div className="padding-heading">
            <Heading size={1} center green uppercase fontWeight={500}>
              {title}
            </Heading>
          </div>
          <TextWithImg image={image} textRight>{text_top}</TextWithImg>
          <Text>Vertrauen Sie unserem Motto:</Text>
          <Text preLine green>
            {slogan}
          </Text>
          <TextWithImg textLeft>{text_bot}</TextWithImg>
        </div>
      </div>
    </>
  );
};

export const query = graphql`
  {
    siteData: markdownRemark(
      frontmatter: { pageKey: { eq: "page_pflegedienst" } }
    ) {
      frontmatter {
        title
        text_top
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        slogan
        text_bot
      }
    }
  }
`;
