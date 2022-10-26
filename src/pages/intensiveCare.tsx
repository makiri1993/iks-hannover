import React from "react";
import { graphql } from "gatsby";
import { Navigation } from "../components/Navigation/Navigation";
import { ContentImageManager } from "../components/ContentImageMangager/ContentImageManager";
import { Layout } from "../components/Layout/Layout";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { MailcontactLink } from "../components/MailContactLink/MailContactLink";

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
  return (
    <Layout classname="flex flex-col items-center w-full">
      <PageTitle>{data.cms.page.title}</PageTitle>
      <ContentImageManager
        content={data.cms.page.intensivpflegeFields.textcontent}
        imageSourceUrl={data.cms.page.intensivpflegeFields.image.sourceUrl}
        className={
          "flex flex-col-reverse md:flex-row-reverse items-center md:justify-center w-full p-12"
        }
        styleContent="w-full whitespace-pre-line text-sm leading-6 text-[#545456]"
        styleContentContainer="w-full md:w-4/12"
        styleImage="w-10/12 md:w-8/12 lg:w-6/12 pt-12 md:pt-0 items-center justify-center"
        styleImageContainer="flex flex-col w-full md:w-9/12 lg:w-5/12 items-center lg:items-end lg:mr-8 justify-center mb-11"
      />
      <div className="mb-20 pl-4 md:pl-16">
        <div
          className="intensiveCare"
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
