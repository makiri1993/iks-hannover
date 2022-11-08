import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

interface SliderProps {
  nodes: {
    slidesFields: {
      image: {
        sourceUrl: string;
      };
    };
  }[];
}

export const Slider: React.FC<SliderProps> = ({ nodes }) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlide(slide + 1);
      if (slide === nodes.length - 1) {
        setSlide(0);
      }
      timer;
    }, 5000);
    console.log(slide);
  }, [slide]);

  return (
    <div
      className="flex flex-row z-10 relative justify-center w-full overflow-hidden"
      style={{ top: "89px" }}
    >
      <div className=" z-10 w-full" style={{ minHeight: "260px" }}>
        <img
          style={{ minHeight: "260px" }}
          className="w-full"
          src={nodes[slide].slidesFields.image.sourceUrl}
        />
      </div>
    </div>
  );
};
