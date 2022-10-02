import React from "react";
import "./styleModule.css";

///// slideACtive to slide images 
const SlideActive = ({ activeIndex, sliderImge }) => {
  return (
    <div>
      <section>
        {sliderImge.map((slide, index) => (
          <div
            key={index}
            className={index === activeIndex ? "image active" : "inactive"}
          >
            <img src={slide.image} alt="" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default SlideActive;
