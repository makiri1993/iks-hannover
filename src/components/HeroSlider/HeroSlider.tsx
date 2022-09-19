import React from "react";
import BackgroundSlider from "react-background-slider";
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
      <BackgroundSlider images={[images[1], images[2]]} />
    </div>
  );
};
