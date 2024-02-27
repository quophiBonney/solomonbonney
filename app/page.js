"use client";
import { useState, useEffect } from "react";
import Aboutme from "./components/aboutme";
import Hero from "./components/hero";
import Preloader from "./components/preloader";
import Navigation from "./components/navbar";
import Footer from "./components/footer";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Faqs from "./components/faqs";
import Testimonial from "./components/testimonial";
import Myworks from "./components/myworks";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navigation />
          <Hero />
          <Aboutme />
          <Skills />
          <Myworks />
          <Testimonial />
          <Contact />
          <Faqs />
          <Footer />
        </>
      )}
    </>
  );
}
