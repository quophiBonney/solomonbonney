import React from "react";
import AwesomeSlider from "react-awesome-slider";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import Image from "next/image";
import mypic from "../../public/mypic.webp";
const testimonial = () => {
  return (
    <>
      <div
        className="container-fluid space-out"
        id="testimonial"
        style={{ overflow: "hidden" }}
      >
        <div className="container">
          <h2 className="h-2 project-title">Testimonial</h2>
          <p className="p">
            Discover what my client and companies say about me
          </p>
          <div className="row">
            <div
              className="col-12 mb-5"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <AwesomeSlider organicArrows={false} className="my-slider">
                <div
                  className="px-3 text-center mt-3 mb-3 text-light"
                  width={100}
                >
                  <p className="p text-black">
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
                  <h4 className="h-4 mt-3 fw-bold text-black">
                    Emmlink Technology
                  </h4>
                </div>
                <div className="px-3 text-center mt-3 mb-3" width={100}>
                  <p className="p text-black">
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
                  <h4 className="h-4 mt-3 fw-bold text-black">PH Logistics</h4>
                </div>
                <div className="px-3 text-center mt-3 mb-3" width={100}>
                  <p className="p text-black">
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
                  <h4 className="h-4 mt-3 fw-bold text-black">BuildBridge</h4>
                </div>
                <div className="px-3 text-center mt-3 mb-3" width={100}>
                  <p className="p text-black">
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
                  <h4 className="h-4 mt-3 fw-bold text-black">
                    Paradise Realty
                  </h4>
                </div>
              </AwesomeSlider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default testimonial;
