import * as React from "react";
import type { HeadFC } from "gatsby";
import { HeroSlider } from "../components/HeroSlider/HeroSlider";
import { graphql } from "gatsby";
import { WelcomingIntro } from "../components/WelcomingIntro /WelcomingIntro";
import { Services } from "../components/Services/Services";
import { Navigation } from "../components/Navigation/Navigation";

interface HomepageProps {
  data: {
    cms: {
      iksServices: {
        nodes: {
          title: string;
          servicesFields: {
            serviceicon: {
              sourceUrl: string;
            };
            servicetext: string;
          };
        }[];
      };
      page: {
        homepageintro: {
          welcomingheading: string;
          welcomingsubheading: string;
          welcomingtext: string;
          imagejasmin: {
            sourceUrl: string;
          };
          imagegalina: {
            sourceUrl: string;
          };
        };
      };
    };
  };
}

const IndexPage: React.FC<HomepageProps> = ({ data }) => {
  return (
    <main className="flex flex-col items-center">
      {/*<HeroSlider images={images} />*/}
      <Navigation />
      <img className="w-full" src="https://via.placeholder.com/150" />
      <WelcomingIntro page={data.cms.page} />
      <Services nodes={data.cms.iksServices.nodes} />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query MyQuery {
    cms {
      iksServices {
        nodes {
          title
          servicesFields {
            serviceicon {
              sourceUrl
            }
            servicetext
          }
        }
      }
      page(id: "homepageiks", idType: URI) {
        homepageintro {
          welcomingheading
          welcomingsubheading
          welcomingtext
          imagejasmin {
            sourceUrl
          }
          imagegalina {
            sourceUrl
          }
        }
      }
    }
  }
`;
