import {useContext, useState, useEffect} from "react";

import Context from "../../context/context";
import CaseSlider from "./CaseSlider";
import { SubHeading } from "../../components";
import { data } from "../../constants";
import "./Case.css";

const Case = () => {
  const context = useContext(Context)
  const { caseSummaryText } = data;
  const [parentWidth, setParentWidth] = useState(500);

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 650) {
        setParentWidth(280);
      } else {
        setParentWidth(500);
      }
    };
    updateWidth();

    window.addEventListener("resize", updateWidth);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div className="app__case flex__center section__padding" id="case">
      <div className="app__case-title">
        <SubHeading title={context.isEnglish? "we make our clients satisefy" : '我们的宗旨就是客户满意'} />
        <h1 className="headtext__cormorant">{context.isEnglish ? 'Case Summry' : '成功案例'}</h1>
      </div>
    
      <div className='slider-container'>
        <CaseSlider slides={caseSummaryText} parentWidth={parentWidth} />
      </div>


    </div>
  );
};

export default Case;
