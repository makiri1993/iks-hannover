import * as React from "react";
import type { HeadFC } from "gatsby";
import { HeroSlider } from "../components/HeroSlider/HeroSlider";
import { graphql } from "gatsby";

const IndexPage = () => {
  const images: string[] = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  return (
    <main className="flex flex-col items-center">
      <HeroSlider images={images} />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query Index {
    cms {
     }
  }
`;
