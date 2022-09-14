import * as React from "react";
import type { HeadFC } from "gatsby";
import { HeroSlider } from "../components/HeroSlider/HeroSlider";
import { graphql } from "gatsby";
import { WelcomingIntro } from "../components/WelcomingIntro /WelcomingIntro";

interface HomepageProps {
  data: {
    cms: {
      page: {
        homepageintro: {
          welcomingheading: string;
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
  const images: string[] = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  return (
    <main className="flex flex-col items-center">
      {/*<HeroSlider images={images} />*/}
      <WelcomingIntro data={data} />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query MyQuery {
    page(id: "homepageiks", idType: URI) {
      homepageintro {
        welcomingheading
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
`;
