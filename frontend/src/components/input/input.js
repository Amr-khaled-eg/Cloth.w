import React from "react";
import "./input.css";

const Input = (prop) => {
  function focusHanlder(e) {
    let l = e.target.previousElementSibling;
    if (e.target.value === "") {
      l.classList.toggle("label-up");
    }
  }
  let props = { ...prop };
  let className =
    props.className === undefined ? "input" : "input " + props.className;
  let label = props.label;
  delete props.label;
  delete props.className;
  return (
    <div className="input-div">
      <label className="input-label">{label}</label>
      <input
        autoComplete="off"
        className={className}
        onBlur={focusHanlder}
        onFocus={focusHanlder}
        {...props}
      />
    </div>
  );
};
export default Input;
