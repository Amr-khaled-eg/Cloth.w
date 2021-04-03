import React from "react";
import { Link } from "react-router-dom";
import "./NAV.css";
function NAV({ links }) {
  function mouseEnter(e) {
    document.querySelector(".more").classList.add("expand");
  }
  function mouseLeave(e) {
    document.querySelector(".more").classList.remove("expand");
  }
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <h1 className="logo">Cloth.w</h1>
      </Link>

      {links ? (
        <ul className="links">
          {links.map((link) => {
            return (
              <li onMouseEnter={mouseEnter}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="links">
          <li onMouseEnter={mouseEnter}>
            <Link to="/products">women</Link>
          </li>
          <li onMouseEnter={mouseEnter}>
            <Link to="/as">women</Link>
          </li>
          <li onMouseEnter={mouseEnter}>
            <Link to="/fasd">women</Link>
          </li>
          <li className="links2">
            <ul className="little-links">
              <li>
                <Link to="/products/women">women</Link>
              </li>
              <li>
                <Link to="/products/women">women</Link>
              </li>
              <li>
                <Link to="/products/women">women</Link>
              </li>
            </ul>
          </li>
        </ul>
      )}

      <div className="more" onMouseLeave={mouseLeave}>
        <h1>helloooo</h1>
      </div>
    </nav>
  );
}

export default NAV;
