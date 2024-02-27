import React from "react";
import Slider from "react-slick";
import Sonobocard from "./sonobocard";
import QuoteGenerator from "./quotegenerator";
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      <Slider className="row" {...settings}>
        <div className="col-12 flex-fill h-100 ">
          <Sonobocard />
        </div>
        <div className="col-12 flex-fill h-100 ">
          <QuoteGenerator />
        </div>
        <div className="col-12 flex-fill h-100 ">
          <Sonobocard />
        </div>
        <div className="col-12 flex-fill h-100 ">
          <QuoteGenerator />
        </div>
      </Slider>
    </div>
  );
};

export default Myworks;
