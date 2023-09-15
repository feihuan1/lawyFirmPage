import {useContext} from "react";

import Context from "../../context/context";
import CaseSlider from "./CaseSlider";
import { SubHeading } from "../../components";
import { data } from "../../constants";
import "./Case.css";

const Case = () => {
  const context = useContext(Context)

  const { caseSummaryText } = data;

  return (
    <div className="app__case flex__center section__padding" id="menu">
      <div className="app__case-title">
        <SubHeading title={context.isEnglish? "we make our clients satisefy" : '我们的宗旨就是客户满意'} />
        <h1 className="headtext__cormorant">{context.isEnglish ? 'Case Summry' : '成功案例'}</h1>
      </div>
    
      <div className='slider-container'>
        <CaseSlider slides={caseSummaryText} parentWidth={500} />
  
      </div>


    </div>
  );
};

export default Case;
