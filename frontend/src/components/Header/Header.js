import React from "react";
import "./Header.css";
const Header = React.forwardRef(
  ({ children, color, size, className, ...props }, ref) => {
    if (size !== "lg" && size !== "md" && size !== "sm") {
      size = "md";
    }

    return (
      <h1
        ref={ref}
        style={{ color }}
        className={`${size} ${className ? className : ""}`}
        {...props}
      >
        {children}
      </h1>
    );
  }
);
export default Header;
