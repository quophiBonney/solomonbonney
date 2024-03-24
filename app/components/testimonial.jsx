import React from "react";
import AwesomeSlider from "react-awesome-slider";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
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
              <AwesomeSlider
                organicArrows={false}
                autoplay={true}
                className="my-slider"
              >
                <div
                  className="px-3 text-center mt-3 mb-3 text-light"
                  width={100}
                >
                  <p className="p text-black">
                    <BiSolidQuoteLeft size={40} className="me-3" />
                    Working with <strong>Solomon Bonney</strong> has been an
                    absolute pleasure. As a professional software developer and
                    content writer, he brings a rare blend of technical
                    expertise and creative flair to every project.
                    <BiSolidQuoteRight size={40} className="mx-3" />
                  </p>
                  <h4 className="h-4 mt-3 fw-bold text-black">
                    Mr Emmanuel - Founder, Emmlink Technology
                  </h4>
                </div>
                <div className="px-3 text-center mt-3 mb-3" width={100}>
                  <p className="p text-black">
                    <BiSolidQuoteLeft size={40} className="me-3" />
                    <strong>Solomon Bonney</strong> consistently goes above and
                    beyond to understand project requirements, communicate
                    effectively, and produce results that exceed expectations.
                    <BiSolidQuoteRight size={40} className="mx-3" />
                  </p>
                  <h4 className="h-4 mt-3 fw-bold text-black">
                    Mr Joshua - Director, PH Logistics
                  </h4>
                </div>
                <div className="px-3 text-center mt-3 mb-3" width={100}>
                  <p className="p text-black">
                    <BiSolidQuoteLeft size={40} className="me-3" />
                    <strong>Solomon Bonney&#8217;s</strong> proficiency in
                    coding languages and their knack for crafting captivating
                    content make them a rare find in today&#8217;s competitive
                    landscape
                    <BiSolidQuoteRight size={40} className="mx-3" />
                  </p>
                  <h4 className="h-4 mt-3 fw-bold text-black">
                    Mr James - Backend Developer, BuildBridge
                  </h4>
                </div>
                <div className="px-3 text-center mt-3 mb-3" width={100}>
                  <p className="p text-black">
                    <BiSolidQuoteLeft size={40} className="me-3" />
                    <strong>Solomon Bonney&#8217;s</strong> writing skills bring
                    clarity and engagement to every piece of content he produce.
                    He is a consummate professional who approaches each task
                    with dedication, innovation, and a keen eye for detail.
                    <BiSolidQuoteRight size={40} className="mx-3" />
                  </p>
                  <h4 className="h-4 mt-3 fw-bold text-black">
                    Mr Frank - Founder, Paradise Realty
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
