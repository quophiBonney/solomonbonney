import React from "react";
import sonobo from "../../public/sonobo.png";
import { BsArrowRight, BsEye } from "react-icons/bs";
import jssvg from "../../public/javascript.svg";
import bootstrapsvg from "../../public/bootstrap-svg.svg";
import reactsvg from "../../public/react-svg.svg";
import githubsvg from "../../public/github-142-svgrepo-com.svg";
import csssvg from "../../public/css-svg.svg";
import vitesvg from "../../public/vite-svg.svg";
import Image from "next/image";
import Link from "next/link";
const Sonobocard = () => {
  return (
    <div className="card shadow border-0">
      <Image src={sonobo} alt="" className="img-fluid" />
      <div className="px-3 mt-3">
        <p className="h-4 fw-bold text-uppercase">SONOBO</p>
        <div className="px-2 d-flex">
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
        <p className="p px-2">
          This is a platform built to help Ghanaians know the charges on their
          mobile money withdrawals. Ghana introduced a new charge in the form of
          tax on all mobile money above &#8373;100 called e-levy. The
          introduction of this e-levy brought a lot of confusion so I decided to
          curb the situation. During the building of this project, I really came
          to understood the workings of framer motion, useEffect and useState
          hooks. I also got the chance to enrich my user interface skills.
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
  );
};

export default Sonobocard;
