import React from "react";
import jssvg from "../../public/javascript.svg";
import bootstrapsvg from "../../public/bootstrap-svg.svg";
import reactsvg from "../../public/react-svg.svg";
import csssvg from "../../public/css-svg.svg";
import vitesvg from "../../public/vite-svg.svg";
import Image from "next/image";
const Experience = () => {
  return (
    <div className="container-fluid shadow experience">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-light d-flex align-items-center text-center">
            <h1 className="fs-1 fw-bold me-2">3+</h1>
            <p className="p text-uppercase">YEARS OF EXPERIENCE</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 flex-fill h-100 d-flex py-2 text-light align-items-center text-center">
            <h1 className="fs-1 fw-bold me-2">15+</h1>
            <p className="p text-uppercase">PROJECTS COMPLETED</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 flex-fill h-100 d-flex py-2">
            <Image
              src={csssvg}
              alt="an svg for css"
              className="img-fluid tech-used m-2"
            />
            <Image
              src={vitesvg}
              alt="an svg for vite"
              className="img-fluid tech-used m-2"
            />
            <Image
              src={bootstrapsvg}
              alt="an svg for bootstrap"
              className="img-fluid tech-used m-2"
            />
            <Image
              src={reactsvg}
              alt="an svg for react"
              className="img-fluid tech-used m-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;