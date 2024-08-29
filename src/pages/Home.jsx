import React from "react";
import HeaderImg from "../components/HeaderImg";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import MissionState from "../components/MissionState";
import SubHeaderInfo from "../components/SubHeaderInfo";

function Home() {
  return (
    <>
      <SubHeaderInfo />
      <HeaderImg />
      {/* <Stats /> */}
      <MissionState />
    </>
  );
}

export default Home;
