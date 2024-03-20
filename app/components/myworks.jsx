import React from "react";
import Slider from "react-slick";
import Sonobocard from "./sonobocard";
import YTubevideo from "./ytubevideo";
import PHLogistics from "./phlogistics";
import EmmlinkTech from "./emmlinktech";
import EmmlinkCCTV from "./emmlinkcctv";
import BuildBridge from "./buildbrige";
import Bosy from "./bosy";
import QuoteGenerator from "./quotegenerator";
import BTube from "./btube";
import SBInstitute from "./sbinstitute";
import BridgeSolar from "./bridgesolar";
import Keepak from "./keepak";
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
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="container-fluid" id="projects">
      <div className="container">
        <br />
        <h2 className="h-2 project-title">Projects</h2>
        <p className="p">Below are some of my projects completed and ongoing</p>
        <div className="row">
          <Slider {...settings}>
            <EmmlinkTech />
            <BuildBridge />
            <Bosy />
            <BTube />
            <EmmlinkCCTV />
            <BridgeSolar />
            <QuoteGenerator />
            <Keepak />
            <SBInstitute />
            <Sonobocard />
            <PHLogistics />
            <YTubevideo />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Myworks;
