import React from "react";
const sizes = {
  sm: {
    padding: ".7rem 2.1rem",
    fontSize: ".9rem",
  },
  md: {
    padding: "1rem 3rem",
    fontSize: "1rem",
  },
  lg: {
    padding: "2rem 6rem",
    fontSize: "1.5rem",
  },
  wide: {
    padding: "1rem 4rem",
    fontSize: "1rem",
  },
};
const Button = React.forwardRef(({ children, ...props }, ref) => {
  const { size = "md", color = "#fff", bg = "#000", ...other } = props;
  const styles = {
    ...sizes[size],
    fontFamily: "elsie, serif",
    borderRadius: "3px",
    color,
    backgroundColor: bg,
    border: "none",
    outline: "none",
    cursor: "pointer",
  };
  return (
    <button style={styles} {...other} ref={ref}>
      {children}
    </button>
  );
});
export default Button;
