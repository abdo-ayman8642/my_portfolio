import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "./carousel-slider.css";
const CarouselSlider = (props) => {
  return (
    <CCarousel controls indicators>
      {props.projects.map(function (item, index) {
        return (
          <CCarouselItem style={{ height: "50rem" }}>
            <CImage
              className="d-block w-50 "
              style={{ margin: "0 auto" }}
              src={item.image}
              alt={`slide ${index}`}
            />
          </CCarouselItem>
        );
      })}
    </CCarousel>
  );
};

export default CarouselSlider;
