import React, { useState, useEffect } from "react";
import SlideActive from "./SlideActive";
import SlideData from "./SlideData";

const len = SlideData.length - 1;

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
////////using setTimeout to slide next img to specific millisecs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div>
      <SlideActive activeIndex={activeIndex} sliderImge={SlideData} />
    </div>
  );
};

export default Slider;
