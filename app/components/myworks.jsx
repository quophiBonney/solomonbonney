import React from "react";
import Slider from "react-slick";
import Sonobocard from "./sonobocard";
import QuoteGenerator from "./quotegenerator";
import YTubevideo from "./ytubevideo";
import PHLogistics from "./phlogistics";
import EmmlinkTech from "./emmlinktech";
import EmmlinkCCTV from "./emmlinkcctv";
const Myworks = () => {
  const settings = {
    dots: true,
    infinite: false,
    initialSlide: 0,
    slidesToShow: 3,
    swipeToSlide: true,
    speed: 500,
    padding: "50px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container space-out" id="projects">
      <h2 className="h-2">Projects</h2>
      <div className="row">
        <Slider {...settings}>
          <>
            <EmmlinkCCTV />
          </>
          <>
            <EmmlinkTech />
          </>
          <>
            <Sonobocard />
          </>
          <>
            <QuoteGenerator />
          </>
          <>
            <PHLogistics />
          </>
          <>
            <YTubevideo />
          </>
          <>
            <QuoteGenerator />
          </>
        </Slider>
      </div>
    </div>
  );
};

export default Myworks;
