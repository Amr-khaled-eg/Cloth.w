import React from "react";
import "./sliderBtn.css";
const SliderBtn = (props) => {
  let index = null;
  const showSlide = (e) => {
    index = [...e.target.parentElement.children].indexOf(e.target);
    const slidersContaniners = document.querySelectorAll(".slider-container");
    const slidersBtns = document.querySelectorAll(".line");
    slidersContaniners.forEach((input, i) => {
      if (i === index - 1) {
        input.classList.add("show");
        input.classList.remove("hide");
        slidersBtns[i].classList.remove("hide-line");
      } else {
        input.classList.add("hide");
        input.classList.remove("show");
        slidersBtns[i].classList.add("hide-line");
      }
    });
  };
  return (
    <p className="slider-btn" onClick={showSlide}>
      {props.children}
      <span className={index === 1 ? "line" : "line hide-line"}></span>
    </p>
  );
};
export default SliderBtn;
