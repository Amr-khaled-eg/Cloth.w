import React from "react";
import "./FlexDiv.css";
const modes = {
  r: "flex",
  rc: "flex-c",
  rsa: "flex-sa",
  rsb: "flex-sb",
  c: "flex-col",
  cc: "flex-col-c",
  csa: "flex-col-sa",
  csb: "flex-col-sb",
};
const FlexDiv = ({ className, children, mode = "r", ...props }) => {
  const classN = className
    ? `flex ${modes[mode]} ${className}`
    : `flex ${modes[mode]}`;
  return (
    <div className={classN} {...props}>
      {children}
    </div>
  );
};
export default FlexDiv;
