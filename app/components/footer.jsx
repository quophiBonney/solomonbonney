import React from "react";
import Link from "next/link";
import {
  BsFacebook,
  BsWhatsapp,
  BsYoutube,
  BsLinkedin,
  BsTiktok,
  BsGithub,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="container footer-background space-out">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <p className="fs-5 fw-bold">Solomon Kofi Bonney</p>
          <div className="mb-3">
            <Link
              href="https://wwww.facebook.com"
              className="text-light text-decoration-none"
              title="facebook"
            >
              <BsFacebook size={20} className="" />
            </Link>
            <Link
              href="https://wa.me/+233596840018"
              className="text-light mx-3 text-decoration-none"
              title="whatsapp"
            >
              <BsWhatsapp size={20} className="" />
            </Link>
            <Link
              href="https://linkedin.com/in/solomon-bonney-7911a8220"
              className="text-light text-decoration-none"
              title="linkedin"
            >
              <BsLinkedin size={20} className="" />
            </Link>
            <Link
              href="https://wwww.github.com/quophiBonney"
              className="text-light text-decoration-none mx-3"
              title="github"
            >
              <BsGithub size={20} className="" />
            </Link>
            <Link
              href="https://wwww.youtube.com/programming-with-bonney"
              className="text-light text-decoration-none"
              title="youtube"
            >
              <BsYoutube size={30} className="" />
            </Link>
          </div>
          <p className="p">Copyright &copy; 2022- 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
