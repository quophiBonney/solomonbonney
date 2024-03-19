import React from "react";
import jssvg from "../../public/javascript.svg";
import reactsvg from "../../public/react-svg.svg";
import mongodbsvg from "../../public/mongodb-svgrepo-com.svg";
import nextjssvg from "../../public/nextjs-fill-svgrepo-com.svg";
import reduxsvg from "../../public/redux-svg.svg";
import Image from "next/image";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      whileInView={{ rotate: 360 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="container-fluid shadow experience"
    >
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-light d-flex align-items-center text-center mt-4">
            <h1 className="fs-1 fw-bold me-2">3+</h1>
            <p className="p text-uppercase">YEARS OF EXPERIENCE</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 flex-fill h-100 d-flex py-2 text-light align-items-center text-center mt-4">
            <h1 className="fs-1 fw-bold me-2">15+</h1>
            <p className="p text-uppercase">PROJECTS COMPLETED</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 flex-fill h-100 d-flex py-2 mb-4 mt-3">
            <Image
              src={jssvg}
              alt="an svg for javascript"
              className="img-fluid tech-used m-2"
            />
            <Image
              src={reactsvg}
              alt="an svg for react"
              className="img-fluid tech-used m-2"
            />
            <Image
              src={reduxsvg}
              alt="an svg for redux"
              className="img-fluid tech-used m-2"
            />
            <Image
              src={mongodbsvg}
              alt="an svg for mongodb"
              className="img-fluid tech-used m-2"
            />
            <Image
              src={nextjssvg}
              alt="an svg for nextjs"
              className="img-fluid tech-used m-2"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
