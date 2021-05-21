import React from "react";
import "./brightDiv.css";
function BrightDiv(props) {
  let className = "blured-div " + props.className;
  return (
    <div className={className}>
      <div className="the-blur"></div>
      {props.children}
    </div>
  );
}
export default BrightDiv;
