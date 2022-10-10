import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

export const Slider: React.FC = () => {
  const [slide, setSlide] = useState(0);
  const imageArray: string[] = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/300",
  ];

  const handlingStyles = (index: number) => {
    if (index === 0) {
      return "absolute  w-full item-center";
    }
    if (index === 1) {
      return "absolute w-full  ";
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setSlide(+1);
    }, 100);
    timer;
    console.log(slide);
  }, []);

  const handlingSlides = () => {
    if (slide === 0) {
      return 0;
    }
    if (slide === 1) {
      return 1;
    }
    return 0;
  };

  return (
    <div
      className="flex flex-row justify-center w-full overflow-hidden"
      style={{ height: "400px" }}
    >
      <div className="relative w-full">
        <img
          // style={{ width: window.innerWidth }}
          // className={`${handlingStyles()}`}
          className="w-7/12"
          src={imageArray[handlingSlides()]}
        />
      </div>
    </div>
  );
};
