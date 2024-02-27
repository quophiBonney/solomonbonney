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
          <Testimonial />
          <Contact />
          <Faqs />
          <Footer />
        </>
      )}
    </>
  );
}
