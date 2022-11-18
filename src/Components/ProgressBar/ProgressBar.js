import React from "react";
import styled from "./ProgressBar.module.scss";
import Marquee from "react-fast-marquee";

const ProgressBar = ({ auto }) => {
  return (
    <div className={styled.animation_bar_1} style={{ width: auto }}>
      <Marquee speed={100} direction={"right"} gradientColor={"none"}>
        <span></span>
      </Marquee>
    </div>
  );
};

export default ProgressBar;
