import React from "react";
import Image from "next/image";
import htmlsvg from "../../public/html-svg.svg";
import csssvg from "../../public/css-svg.svg";
import javascriptsvg from "../../public/javascript.svg";
import nodejssvg from "../../public/nodejs-logo-svgrepo-com.svg";
import bootstrapsvg from "../../public/bootstrap-svg.svg";
import phpsvg from "../../public/php-svgrepo-com.svg";
import mysqlsvg from "../../public/mysql-svg.svg";
import reactnativesvg from "../../public/react-native-svg.svg";
import reactsvg from "../../public/react-svg.svg";
import reduxsvg from "../../public/redux-svg.svg";
import mongodbsvg from "../../public/mongodb-svgrepo-com.svg";
import wordpresssvg from "../../public/wordpress-svgrepo-com.svg";
import RotateAnimation from "../animation/rotate";
const Skills = () => {
  return (
    <>
      <RotateAnimation>
        <div className="container-fluid space-out" id="skills">
          <div className="container">
            <h2 className="h-2 project-title">My Skills</h2>
            <div className="row mb-5">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-5">
                <div className="card shadow px-3 skill-card text-center">
                  <div className="m-2 mypic mt-5">
                    <Image
                      src={htmlsvg}
                      className="img-fluid mb-4"
                      alt="an svg for HTML"
                    />
                    <h4 className="h-4 text-black">HTML5</h4>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                <div className="card shadow px-3 skill-card text-center">
                  <div className="m-2 mypic mt-5">
                    <Image
                      src={csssvg}
                      className="img-fluid mb-4"
                      alt="an svg for CSS"
                    />
                    <h4 className="h-4 text-black">CSS3</h4>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                <div className="card shadow px-3 skill-card text-center">
                  <div className="m-2 mypic mt-5">
                    <Image
                      src={javascriptsvg}
                      className="img-fluid mb-4"
                      alt="an svg for JavaScript"
                    />
                    <h4 className="h-4 text-black">JavaScript</h4>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                <div className="card shadow px-3 skill-card text-center">
                  <div className="m-2 mypic mt-5">
                    <Image
                      src={nodejssvg}
                      className="img-fluid mb-4"
                      alt="an svg for Node Js"
                    />
                    <h4 className="h-4 text-black">NodeJs</h4>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                <div className="card shadow px-3 skill-card text-center">
                  <div className="m-2 mypic mt-5">
                    <Image
                      src={bootstrapsvg}
                      className="img-fluid mb-4"
                      alt="an svg for Bootstrap"
                    />
                    <h4 className="h-4 text-black">Bootstrap</h4>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                <div className="card shadow px-3 skill-card text-center">
                  <div className="m-2 mypic mt-5">
                    <Image
                      src={phpsvg}
                      className="img-fluid mb-4"
                      alt="an svg for PHP"
                    />
                    <h4 className="h-4 text-black">PHP</h4>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                <div className="card shadow px-3 skill-card text-center">
                  <div className="m-2 mt-5 mypic">
                    <Image
                      src={reactsvg}
                      className="img-fluid react mb-4"
                      alt="an svg for ReactJs"
                    />
                    <h4 className="h-4 text-black">ReactJs</h4>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                <div className="card shadow px-3 skill-card text-center">
                  <div className="m-2 mypic mt-5">
                    <Image
                      src={reduxsvg}
                      className="img-fluid mb-4"
                      alt="an svg for Redux"
                    />
                    <h4 className="h-4 text-black">Redux</h4>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                <div className="card shadow px-3 skill-card text-center">
                  <div className="m-2 mt-5">
                    <Image
                      src={reactnativesvg}
                      className="img-fluid mb-4 react"
                      alt="an svg for React Native"
                    />
                    <h4 className="h-4 text-black">React Native</h4>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                <div className="card shadow px-3 skill-card text-center">
                  <div className="m-2 mypic mt-5">
                    <Image
                      src={mysqlsvg}
                      className="img-fluid mb-4"
                      alt="an svg for MySQL"
                    />
                    <h4 className="h-4 text-black">MySQL</h4>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                <div className="card shadow px-3 skill-card text-center">
                  <div className="m-2 mypic mt-5">
                    <Image
                      src={wordpresssvg}
                      className="img-fluid mb-4"
                      alt="an svg for WordPress"
                    />
                    <h4 className="h-4 text-black">WordPress</h4>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                <div className="card shadow px-3 skill-card text-center">
                  <div className="m-2 mypic mt-5">
                    <Image
                      src={mongodbsvg}
                      className="img-fluid mb-4"
                      alt="an svg for Mongodb"
                    />
                    <h4 className="h-4 text-black">MongoDB</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RotateAnimation>
    </>
  );
};

export default Skills;
