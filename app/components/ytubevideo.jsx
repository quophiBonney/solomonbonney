import React from "react";
import ytube from "../../public/youtube.png";
import { BsArrowRight, BsEye } from "react-icons/bs";
import jssvg from "../../public/javascript.svg";
import bootstrapsvg from "../../public/bootstrap-svg.svg";
import reactsvg from "../../public/react-svg.svg";
import githubsvg from "../../public/github-142-svgrepo-com.svg";
import csssvg from "../../public/css-svg.svg";
import vitesvg from "../../public/vite-svg.svg";
import Image from "next/image";
import Link from "next/link";
const YTubevideo = () => {
  return (
    <div className="col-12">
      <div className="card shadow border-0 project-card">
        <Image src={ytube} alt="" className="img-fluid card-img-top" />
        <div className="px-2 mt-3">
          <h5 className="h-4 fw-bold text-uppercase text-black">
            Youtube Video Fetcher
          </h5>
          <div className="d-flex">
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
          <Link
            href="https://youtube-video.github.io"
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

export default YTubevideo;
