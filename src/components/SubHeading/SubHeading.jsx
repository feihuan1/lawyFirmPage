import React from "react";
import './SubHeading.css'

const SubHeading = ({title}) => (
  <div style={{ marginTop: "1rem" }}>
    <p className="p__cormorant" style={{fontSize:'14px'}}>{title}</p>
    <div className="under-line" />
  
  </div>
);

export default SubHeading;
