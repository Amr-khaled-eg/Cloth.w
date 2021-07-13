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
  center: "center",
};
const FlexDiv = React.forwardRef(
  ({ className, children, mode = "r", ...props }, ref) => {
    const classN = className
      ? `flex ${mode !== "r" && modes[mode]} ${className}`
      : `flex ${modes[mode]}`;
    return (
      <div ref={ref} className={classN} {...props}>
        {children}
      </div>
    );
  }
);
export default FlexDiv;
