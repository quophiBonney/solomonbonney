"use client";
import React from "react";
import {
  BsFacebook,
  BsWhatsapp,
  BsYoutube,
  BsLinkedin,
  BsTiktok,
  BsGithub,
} from "react-icons/bs";
import { Typewriter, Cursor } from "react-simple-typewriter";
import Link from "next/link";
const Hero = () => {
  const text = Typewriter({
    words: [
      "Front-end Developer..💻",
      "Back-end Developer..🚀",
      "Content Writer..📚",
      "Content Creator..👋",
    ],
    loop: true,
  });
  return (
    <div className="container-fluid px-3 hero-section">
      <div className="vh-100 justify-content-center align-items-center row">
        <div
          className="col-xs-12 col-sm-12 col-md-12 col-lg-10 text-center text-light space-out"
          style={{ overflow: "hidden" }}
        >
          <p className="p mb-3 animate__animated animate__rollIn mt-5">
            Hi👋, I am Solomon Kofi Bonney
          </p>
          <h1 className="h-1 mb-3 text-primaryanimate__animated animate__bounce">
            Ardent {text} <Cursor />
          </h1>
          <p className="p animate__animated animate__zoomInUp">
            I am a software developer specialized in building unique and
            brilliant websites and mobile apps to meet the expectations of
            clients, employers and users. I am focused on building responsive
            front-end applications while consistently learning back-end
            technologies and its architecture. I create, design, build and write
            innovative web solutions and content.
          </p>
          <div className="social-media-icons mt-4 mb-5">
            <Link
              href="https://wa.me/+233596840018"
              className="mx-3 text-decoration-none"
              title="whatsapp"
            >
              <BsWhatsapp size={23} className="" />
            </Link>
            <Link
              href="https://linkedin.com/in/solomon-bonney-7911a8220"
              className="text-decoration-none"
              title="linkedin"
            >
              <BsLinkedin size={22} className="" />
            </Link>
            <Link
              href="https://wwww.github.com/quophiBonney"
              className="text-decoration-none mx-3"
              title="github"
            >
              <BsGithub size={22} className="" />
            </Link>
            <Link
              href="https://wwww.youtube.com/programming-with-bonney"
              className="text-decoration-none"
              title="youtube"
            >
              <BsYoutube size={22} className="" />
            </Link>
            <Link
              href="https://wwww.tiktok.com/quophiclef"
              className="text-decoration-none mx-3"
              title="tiktok"
            >
              <BsTiktok size={22} className="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
