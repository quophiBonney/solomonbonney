"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import solomonbonney from "../../public/kofi.png";
import { Collapse } from "react-bootstrap";
const Aboutme = () => {
  const [open, setOpen] = useState(false);
  const [btnCaption, setBtnCaption] = useState("");
  useEffect(() => {
    if (open) {
      setBtnCaption("Hide more");
    } else {
      setBtnCaption("Read more");
    }
  }, [open]);
  return (
    <div
      className="container-fluid px-3"
      id="aboutme"
      style={{ overflow: "hidden" }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-5 text-black"
            data-aos="slide-right"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div className="flex-fill h-100 mt-5">
              <h2 className="h-2 project-title">About Me</h2>
              <p className="p">
                👋 Hi there! I am Solomon Kofi Bonney, an alumnus of IPMC
                College & Technology. 💪💻 As a hardworking and passionate
                software developer, I am dedicated to crafting exceptional
                projects that leave a lasting impression. 🚀✨ With a solid
                skill set in HTML, CSS, Bootstrap, Node.js, Javascript, Git &
                GitHub, React.js, Redux, PHP, MySQL, Vite.js, Firebase.
              </p>
              <button
                className="p btn btn-light text-black px-3 mb-2 me-3"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                {btnCaption}
              </button>
              <a
                href="/solomon_bonney_resume_cv.pdf"
                download={true}
                className="p text-decoration-none btn btn-secondary px-3 mb-2"
              >
                Download Resume
              </a>
              <Collapse in={open}>
                <p className="p">
                  I am committed to continuous learning and growth. Let us
                  embark on this journey together and create remarkable
                  experiences that push boundaries! 🌟✨ I am focused on
                  delivering exceptional results and working collaboratively
                  with any team to achieve our shared goals. 🤝🌟 Thank you for
                  visiting my portfolio. 🙏✨ I look forward to connecting with
                  you and exploring exciting opportunities together! 🚀🔥 Peace
                  out! ✌️😊
                </p>
              </Collapse>
            </div>
          </div>
          <div
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6"
            data-aos="slide-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div className="flex-fill h-100">
              <Image
                src={solomonbonney}
                alt="image of solomon bonney from Ghana"
                className="img-fluid w-100 mypic"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
