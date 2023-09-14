import React from "react";

import CaseSlider from "./CaseSlider";
import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./Case.css";

const Case = () => {
  const slides = [
    { url: `${images.welcome}`, title: "case1" },
    { url: `${images.welcome}`, title: "case2" },
    { url: `${images.welcome}`, title: "case3" },
    { url: `${images.welcome}`, title: "case4" },
    { url: `${images.welcome}`, title: "case5" },
  ];
  console.log(slides[0].url)

  return (
    <div className="app__case flex__center section__padding" id="menu">
      <div className="app__case-title">
        <SubHeading title="we make our clients satisefy" />
        <h1 className="headtext__cormorant">Case Summry</h1>
      </div>
      {/* ---------------- */}
      <div>
        
      <div className='slider-container'>
        <CaseSlider slides={slides} />
      </div>

     </div>
      {/* -------------- */}
    </div>
  );
};

export default Case;
