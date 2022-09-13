import React from "react";

interface HeroSliderProps {
  images: string[];
}

const handleIndex = (index: number) => {
  if (index === 0) {
    return "";
  }
};

export const HeroSlider: React.FC<HeroSliderProps> = ({ images }) => {
  return (
    <div className="flex w-full justify-center items-center overflow-hidden overflow-x-visible">
      {/*<Img fluid={images} />*/}
      {images.map((sourceUrl, index) => (
        <img className="w-full mx-2" key={index} src={sourceUrl} />
      ))}
    </div>
  );
};
