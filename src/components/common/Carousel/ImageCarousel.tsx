import React, { ReactChild } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Style from "./ImageCarousel.module.css";
import "./CarouselBase.css";

export const ImageCarousel = (props: React.PropsWithChildren<{}>) => {
  const carouselProps = {
    showArrows: true,
    showStatus: false,
    infiniteLoop: true,
    renderArrowNext: (clickHandler: any, hasNext: boolean) => {
      return (
        hasNext && (
          <button
            onClick={clickHandler}
            className={`${Style.arrowIcon} ${Style.arrowIconRight}`}
          >
            <i className={`fa fa-solid fa-chevron-right `}></i>
          </button>
        )
      );
    },
    renderArrowPrev: (clickHandler: any, hasNext: boolean) => {
      return (
        hasNext && (
          <button
            onClick={clickHandler}
            className={`${Style.arrowIcon}  ${Style.arrowIconLeft}`}
          >
            <i className={`fa fa-solid fa-chevron-left`}></i>
          </button>
        )
      );
    },
    renderIndicator: (
      clickHandler: any,
      isSelected: boolean,
      index: number
    ) => {
      return (
        <li
          onClick={clickHandler}
          className={`${Style.ind} ${isSelected ? Style.active : ""}`}
          key={index}
          role="button"
        ></li>
      );
    },
  };
  return (
    <Carousel {...carouselProps}>
      {React.Children.toArray(props.children) as ReactChild[]}
    </Carousel>
  );
};
