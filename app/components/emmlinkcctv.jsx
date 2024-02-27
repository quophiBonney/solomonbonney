import React from "react";
import emmlinkcctv from "../../public/emmlink-cctv.png";
import { BsArrowRight, BsEye } from "react-icons/bs";
import jssvg from "../../public/javascript.svg";
import bootstrapsvg from "../../public/bootstrap-svg.svg";
import reactsvg from "../../public/react-svg.svg";
import githubsvg from "../../public/github-142-svgrepo-com.svg";
import csssvg from "../../public/css-svg.svg";
import vitesvg from "../../public/vite-svg.svg";
import Image from "next/image";
import Link from "next/link";
const EmmlinkCCTV = () => {
  return (
    <div className="col-12">
      <div className="card shadow border-0 project-card">
        <Image src={emmlinkcctv} alt="" className="img-fluid card-img-top" />
        <div className="px-2 mt-3">
          <p className="h-4 fw-bold text-uppercase">Emmlink CCTV</p>
          <div className="px-1 d-flex">
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
            <Image
              src={jssvg}
              alt="svg for javascript"
              className="img-fluid tech-used m-2"
            />
          </div>
          <p className="p">
            This platform provides you with million of quotes that inspire you
            and also cause you to achieve greatness in whatever you do. It comes
            with friendly and awesome interface that you can easily find your
            way out. Join the few people that step out every day with new
            mindset, energy and positivity. Staying focused, consistent,
            discipline and motivated can really help you transform your life for
            years and you can do so by reading content to give you such things.
          </p>
          <Link
            href=""
            className="btn btn-primary text-light text-decoration-none mt-3 mb-4"
            target="_blank"
          >
            View Demo <BsEye />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmmlinkCCTV;
