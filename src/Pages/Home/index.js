import React from "react";
import Intro from "../../Components/Home/Intro";
import Navbar from "../../Components/Navbar";
import TopSection from "../../Components/Home/Topsection";
import Stats from "../../Components/Home/Topsection/stats";
import "./home.scss";
import Carousel from "../../Components/Home/Intro/carousel";
import Section1 from "../../Components/Home/Section1";
import Section2 from "../../Components/Home/Section2";
import Section3 from "../../Components/Home/Section3";
import Section4 from "../../Components/Home/Section4";
import Section5 from "../../Components/Home/Section5";
import Section6 from "../../Components/Home/Section6";
import NewsLetter from "../../Components/Home/NewsLetter";
import Gallery from "../../Components/Home/Gallery";
import Footer from "../../Components/Footer";

export default function Home() {
  return (
    <>
      <TopSection>
        <Navbar />
        <Carousel />
      </TopSection>
      <Stats />
      <Section1 />
      <Section2 />
      <Section3 />
      <Gallery />
      <Section4 />
      <Section5 />
      <Section6 />
      <NewsLetter />
      <Footer />
    </>
  );
}
