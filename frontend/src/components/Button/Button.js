import React from "react";
import "./Button.css";
const Button = React.forwardRef(({ children, className, ...props }, ref) => {
  const { size = "md", color = "#fff", bg = "#000", ...other } = props;
  const styles = {
    color,
    backgroundColor: bg,
  };
  const classN = className ? `${size}-btn ${className}` : `${size}-btn`;
  return (
    <button style={styles} className={"button " + classN} {...other} ref={ref}>
      {children}
    </button>
  );
});
export default Button;
