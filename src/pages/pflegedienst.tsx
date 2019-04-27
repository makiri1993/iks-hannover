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
    };
  };
}

export default ({ data }: { data: PflegedienstData }) => {
  const { title, text_top, slogan, text_bot } = data.siteData.frontmatter;

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
          <TextWithImg textRight>{text_top}</TextWithImg>
          <TextWithImg textLeft>{text_top}</TextWithImg>
          <Text preLine>{text_top}</Text>
          <Text preLine green>
            {slogan}
          </Text>
          <Text preLine>{text_bot}</Text>
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
        slogan
        text_bot
      }
    }
  }
`;
