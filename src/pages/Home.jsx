import React from "react";
import HeaderImg from "../components/HeaderImg";
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
