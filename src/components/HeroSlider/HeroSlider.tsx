import React from "react";

interface HeroSliderProps {
  images: string[];
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ images }) => {
  return (
    <div
      className="Hero"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      {/*<Img fluid={images} />*/}
      {images.map((sourceUrl, index) => (
        <img key={index} src={sourceUrl} />
      ))}
    </div>
  );
};
