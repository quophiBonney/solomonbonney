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
      "Hi, I'm Bonney ...👋",
      "A Front-end Developer...💻",
      "A Back-end Developer...🚀",
      "A Content Writer...📚",
      "I Aim At Client's Satisfaction...😊",
      "I Bridge Design & Code...🎯",
    ],
    loop: true,
  });
  return (
    <div className="container-fluid hero-section" id="hero">
      <div className="vh-100 justify-content-center align-items-center row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 text-center">
          <p className="p mb-3">
            Join Me As We Make The World Beautiful Through Seamless Projects
          </p>
          <h1 className="h-1 mb-3">
            {text}
            <Cursor />
          </h1>
          <p className="p">
            I am a software developer specialized in building unique and
            brilliant websites and mobile apps to meet the expectations of
            clients, employers and users. I am focused on building responsive
            front-end applications while consistently learning back-end
            technologies and its architecture.
          </p>
          <div className="mt-4">
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
              href="https://linkedin.com/in/solomon-bonney-7921"
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
