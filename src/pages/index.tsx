import * as React from "react";
import type { HeadFC } from "gatsby";
import { HeroSlider } from "../components/HeroSlider/HeroSlider";

const IndexPage = () => {
  return (
    <main style={{ width: "100%", backgroundColor: "black" }}>
      <HeroSlider />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
