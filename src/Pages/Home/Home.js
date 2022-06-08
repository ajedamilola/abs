import React from "react";
import Intro from "../../Components/Intro";
import Navbar from "../../Components/Navbar";
import TopSection from "../../Components/Topsection";
import Stats from "../../Components/Topsection/stats";
import "./home.scss";

export default function Home() {
  return (
    <>
      <TopSection>
        <Navbar />
        <Intro />
      </TopSection>
        <Stats />
    </>
  );
}
