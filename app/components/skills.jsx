import React from "react";
import Image from "next/image";
import htmlsvg from "../../public/html-svg.svg";
import csssvg from "../../public/css-svg.svg";
import javascriptsvg from "../../public/javascript.svg";
import jquerysvg from "../../public/jquery-svgrepo-com.svg";
import bootstrapsvg from "../../public/bootstrap-svg.svg";
import phpsvg from "../../public/php-svgrepo-com.svg";
import mysqlsvg from "../../public/mysql-svg.svg";
import reactnativesvg from "../../public/react-native-svg.svg";
import reactsvg from "../../public/react-svg.svg";
import reduxsvg from "../../public/redux-svg.svg";
import firebasesvg from "../../public/firebase-svg.svg";
import wordpresssvg from "../../public/wordpress-svgrepo-com.svg";
const Skills = () => {
  return (
    <div className="container mt-5" id="skills">
      <h2 className="h-2">My Skills</h2>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
          <div className="card shadow px-3 skill-card text-center">
            <div className="m-2 mypic">
              <Image
                src={htmlsvg}
                className="img-fluid"
                alt="an svg for HTML"
              />
              <h4 className="h-4 text-light ">HTML5</h4>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
          <div className="card shadow px-3 skill-card text-center">
            <div className="m-2 mypic">
              <Image src={csssvg} className="img-fluid" alt="an svg for CSS" />
              <h4 className="h-4 text-light ">CSS3</h4>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
          <div className="card shadow px-3 skill-card text-center">
            <div className="m-2 mypic">
              <Image
                src={javascriptsvg}
                className="img-fluid"
                alt="an svg for JavaScript"
              />
              <h4 className="h-4 text-light ">JavaScript</h4>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
          <div className="card shadow px-3 skill-card text-center">
            <div className="m-2 mypic">
              <Image
                src={jquerysvg}
                className="img-fluid"
                alt="an svg for jquery"
              />
              <h4 className="h-4 text-light ">JQuery</h4>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
          <div className="card shadow px-3 skill-card text-center">
            <div className="m-2 mypic">
              <Image
                src={bootstrapsvg}
                className="img-fluid"
                alt="an svg for Bootstrap"
              />
              <h4 className="h-4 text-light ">Bootstrap</h4>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
          <div className="card shadow px-3 skill-card text-center">
            <div className="m-2 mypic">
              <Image src={phpsvg} className="img-fluid" alt="an svg for PHP" />
              <h4 className="h-4 text-light ">PHP</h4>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
          <div className="card shadow px-3 skill-card text-center">
            <div className="m-2">
              <Image
                src={reactsvg}
                className="img-fluid react"
                alt="an svg for ReactJs"
              />
              <h4 className="h-4 text-light ">ReactJs</h4>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
          <div className="card shadow px-3 skill-card text-center">
            <div className="m-2 mypic">
              <Image
                src={reduxsvg}
                className="img-fluid"
                alt="an svg for Redux"
              />
              <h4 className="h-4 text-light ">Redux</h4>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
          <div className="card shadow px-3 skill-card text-center">
            <div className="m-2">
              <Image
                src={reactnativesvg}
                className="img-fluid  react"
                alt="an svg for React Native"
              />
              <h4 className="h-4 text-light ">React Native</h4>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
          <div className="card shadow px-3 skill-card text-center">
            <div className="m-2 mypic">
              <Image
                src={mysqlsvg}
                className="img-fluid"
                alt="an svg for MySQL"
              />
              <h4 className="h-4 text-light ">MySQL</h4>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
          <div className="card shadow px-3 skill-card text-center">
            <div className="m-2 mypic">
              <Image
                src={wordpresssvg}
                className="img-fluid"
                alt="an svg for WordPress"
              />
              <h4 className="h-4 text-light ">WordPress</h4>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-4">
          <div className="card shadow px-3 skill-card text-center">
            <div className="m-2 mypic">
              <Image
                src={firebasesvg}
                className="img-fluid"
                alt="an svg for Firebase"
              />
              <h4 className="h-4 text-light ">Firebase</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
