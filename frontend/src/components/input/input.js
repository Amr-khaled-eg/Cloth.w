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
    props.className === undefined
      ? "input-div"
      : "input-div " + props.className;
  let label = props.label;
  delete props.label;
  delete props.className;
  return (
    <div className={className}>
      <label
        className={
          props.value === undefined || props.value === ""
            ? "input-label"
            : "input-label label-up"
        }
      >
        {label}
      </label>
      <input
        autoComplete="off"
        className="input"
        onBlur={focusHanlder}
        onFocus={focusHanlder}
        {...props}
      />
    </div>
  );
};
export default Input;
