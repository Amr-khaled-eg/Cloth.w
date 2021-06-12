import React from "react";
import "./sliderContainer.css";
const SliderConainer = (props) => {
  const classname = props.hide
    ? "slider-container hide"
    : "slider-container show";
  return <div className={classname}>{props.children}</div>;
};
export default SliderConainer;
