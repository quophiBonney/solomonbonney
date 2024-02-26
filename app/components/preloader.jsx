import React from "react";
import Image from "next/image";
import loader from "../../public/loader.gif";
const Preloader = () => {
  return (
    <div className="container-fluid">
      <div className="row vh-100 bg-black justify-content-center align-items-center">
        <div className="col-12 text-center">
          <Image
            src={loader}
            className="img-fluid"
            alt="loading gif"
            width={70}
            height={70}
          />
          <div className="mt-3">
            <small>
              <strong>Solomon Bonney - Portfolio</strong>
            </small>
            <br />
            <small>Experienced Software Developer From Ghana</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
