import * as React from "react";
import type { HeadFC } from "gatsby";
import { HeroSlider } from "../components/HeroSlider/HeroSlider";

const IndexPage = () => {
  const images: string[] = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  return (
    <main style={{ width: "100%", backgroundColor: "black" }}>
      <HeroSlider images={images} />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
