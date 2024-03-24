import React from "react";
import phlogistics from "../../public/phlogistics.png";
import { BsArrowRight, BsEye } from "react-icons/bs";
import nextjssvg from "../../public/nextjs-fill-svgrepo-com.svg";
import bootstrapsvg from "../../public/bootstrap-svg.svg";
import reactsvg from "../../public/react-svg.svg";
import csssvg from "../../public/css-svg.svg";
import Image from "next/image";
import Link from "next/link";
const PHLogistics = () => {
  return (
    <div className="col-12">
      <div className="card shadow border-0 project-card">
        <Image src={phlogistics} alt="" className="img-fluid card-img-top" />
        <div className="px-3 mt-3">
          <h5 className="h-4 fw-bold text-uppercase text-black">
            PH Logistics Ghana
          </h5>
          <div className="px-1 d-flex">
            <Image
              src={csssvg}
              alt="an svg for css"
              className="img-fluid tech-used m-2"
            />
            <Image
              src={nextjssvg}
              alt="an svg for next js"
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
            <Image
              src={nextjssvg}
              alt="svg for javascript"
              className="img-fluid tech-used m-2"
            />
          </div>
          <Link
            href="https://www.phlogistics.org"
            className="btn btn-primary text-light text-decoration-none mt-3 mb-4 w-100"
            target="_blank"
          >
            View Demo <BsEye />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PHLogistics;
