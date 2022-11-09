import React from "react";
import { graphql } from "gatsby";
import { Navigation } from "../components/Navigation/Navigation";
import { ContentImageManager } from "../components/ContentImageMangager/ContentImageManager";
import { Layout } from "../components/Layout/Layout";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { MailcontactLink } from "../components/MailContactLink/MailContactLink";
import { StaticImage } from "gatsby-plugin-image";
import imag from "../images/logo_baum.png";

interface intensiveCareProps {
  data: {
    cms: {
      page: {
        title: string;
        content: string;
        intensivpflegeFields: {
          textcontent: string;
          image: {
            sourceUrl: string;
          };
        };
      };
    };
  };
}

export const intensiveCare: React.FC<intensiveCareProps> = ({ data }) => {
  const image = "../../ima";
  return (
    <Layout classname="flex flex-col items-center w-full">
      <PageTitle paddingBottom={5} color={"#e53129"}>
        {data.cms.page.title}
      </PageTitle>
      <ContentImageManager
        content={data.cms.page.intensivpflegeFields.textcontent}
        imageSourceUrl={data.cms.page.intensivpflegeFields.image.sourceUrl}
        className={
          "flex flex-col-reverse md:flex-row-reverse items-center md:justify-center justify-around w-full p-8"
        }
        styleContent="w-full whitespace-pre-line text-sm leading-6 text-[#545456]"
        styleContentContainer="w-11/12 md:w-4/12"
        styleImage="w-9/12 md:w-8/12 lg:w-9/12  md:pt-0 items-center justify-center"
        styleImageContainer="flex flex-col w-full md:w-9/12 lg:w-4/12 items-center lg:items-center justify-center mb-11"
      />
      <div className="mb-20 pl-4 md:pl-16">
        <div
          className="intensiveCare "
          dangerouslySetInnerHTML={{ __html: data.cms.page.content }}
        />
        <a
          className="mt-12 text-sm text-[#ee7917]"
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://iks-hannover.de/static/IKS-AIWG-Flyer_ku_web-155a2399ff0db0bece0a55e91221c225.pdf"
          }
        >
          Unsern flyer finden sie hier
        </a>
        <div className="flex flex-col mt-8">
          <MailcontactLink
            name="Marion Hartmann"
            role="Leitung der Intensivpflege"
            email="hartman@iks-hannover.de"
          />{" "}
          <MailcontactLink
            name="Marco Schillaci"
            role="Fachliche Leitung"
            email="schillaci@iks-hannover.de"
          />
        </div>
        <div className="flex flex-col items-center z-50 pt-10 w-full ">
          <StaticImage
            className="items-center w-6/12"
            style={{ width: "200px", height: "170px" }}
            // src="../../images/logo_baum.png"
            src="../images/logo_baum.png"
            alt={""}
          />
          <StaticImage
            className="items-center z-50 w-72 sm:w-96"
            // style={{ width: "300px", height: "170px" }}
            // src="../../images/logo_baum.png"
            src="../images/schriftzug_Wohngemeinschaft.png"
            alt={""}
          />
        </div>
      </div>
    </Layout>
  );
};

export default intensiveCare;

export const query = graphql`
  {
    cms {
      page(id: "/ausserklinische-intensivpflege", idType: URI) {
        title
        content
        intensivpflegeFields {
          textcontent
          image {
            sourceUrl
          }
        }
      }
    }
  }
`;
