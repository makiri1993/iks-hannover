import * as React from "react";
import type { HeadFC } from "gatsby";
import { HeroSlider } from "../components/HeroSlider/HeroSlider";
import { graphql } from "gatsby";
import { WelcomingIntro } from "../components/WelcomingIntro /WelcomingIntro";
import { Services } from "../components/Services/Services";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";
import { Slider } from "../components/Slider/Slider";

interface HomepageProps {
  data: {
    cms: {
      slides: {
        nodes: {
          slidesFields: {
            image: {
              sourceUrl: string;
            };
          };
        }[];
      };
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
    <main className="flex flex-col w-full items-center relative z-10">
      {/*<HeroSlider images={images} />*/}
      <Navigation />
      <Slider nodes={data.cms.slides.nodes} />
      {/*<HeroSlider slides={data.cms.slides} />*/}
      <WelcomingIntro page={data.cms.page} />
      <Services nodes={data.cms.iksServices.nodes} />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query MyQuery {
    cms {
      slides {
        nodes {
          slidesFields {
            image {
              sourceUrl
            }
          }
        }
      }

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
