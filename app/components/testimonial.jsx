import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/fall-animation/fall-animation.scss";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import Image from "next/image";
import mypic from "../../public/mypic.webp";
const testimonial = () => {
  return (
    <>
      <div className="container space-out" id="testimonial">
        <h2 className="h-2">Testimonial</h2>
        <div className="row">
          <div className="col-12 mb-5">
            <AwesomeSlider
              cssModule={AwesomeSliderStyles}
              organicArrows={false}
              className="my-slider"
            >
              <div className="px-3 text-center mt-3 mb-3" width={100}>
                <p className="p">
                  <BiSolidQuoteLeft size={40} className="me-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, laudantium. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quo, dolorum. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                  <BiSolidQuoteRight size={40} className="mx-2" />
                </p>
                <Image
                  className="img-fluid testimonial-img"
                  src={mypic}
                  alt="Emmlink Technology"
                />
                <h4 className="h-4 mt-3 fw-bold">Emmlink Technology</h4>
              </div>
              <div className="px-3 text-center mt-3 mb-3" width={100}>
                <p className="p">
                  <BiSolidQuoteLeft size={40} className="me-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, laudantium. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quo, dolorum. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                  <BiSolidQuoteRight size={40} className="mx-2" />
                </p>
                <Image
                  className="img-fluid testimonial-img"
                  src={mypic}
                  alt="Emmlink Technology"
                />
                <h4 className="h-4 mt-3 fw-bold">PH Logistics</h4>
              </div>
              <div className="px-3 text-center mt-3 mb-3" width={100}>
                <p className="p">
                  <BiSolidQuoteLeft size={40} className="me-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, laudantium. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quo, dolorum. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                  <BiSolidQuoteRight size={40} className="mx-2" />
                </p>
                <Image
                  className="img-fluid testimonial-img"
                  src={mypic}
                  alt="Emmlink Technology"
                />
                <h4 className="h-4 mt-3 fw-bold">BuildBridge</h4>
              </div>
              <div className="px-3 text-center mt-3 mb-3" width={100}>
                <p className="p">
                  <BiSolidQuoteLeft size={40} className="me-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, laudantium. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quo, dolorum. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                  <BiSolidQuoteRight size={40} className="mx-2" />
                </p>
                <Image
                  className="img-fluid testimonial-img"
                  src={mypic}
                  alt="Emmlink Technology"
                />
                <h4 className="h-4 mt-3 fw-bold">Paradise Realty</h4>
              </div>
            </AwesomeSlider>
          </div>
        </div>
      </div>
    </>
  );
};

export default testimonial;
