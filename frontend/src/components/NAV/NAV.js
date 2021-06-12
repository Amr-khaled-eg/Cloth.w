import React from "react";
import { Link } from "react-router-dom";
import search from "./icons/search.svg";
import cart from "./icons/cart.svg";
import account from "./icons/account.svg";
import "./NAV.css";
function NAV({ user, signOut }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <h1 className="logo">Cloth.w</h1>
      </Link>

      <ul className="links">
        <li>
          <Link to="/products">Men</Link>
        </li>
        <li>
          <Link to="/products">Women</Link>
        </li>
        <li>
          <Link to="/products">Kids</Link>
        </li>
        <li className="links2">
          <ul className="little-links">
            <li>
              <img className="icon" src={search} alt="search" />
            </li>
            <li>
              <Link to="/cart">
                <img className="icon2" src={cart} alt="search" />
              </Link>
            </li>
            <li>
              <img
                className="icon2"
                src={account}
                alt="search"
                onClick={() => {
                  document
                    .querySelector(".account-stuff")
                    .classList.toggle("open-account-stuff");
                }}
              />
              <div className="account-stuff">
                {user.isSignedIn ? (
                  <a onClick={signOut}>Sign Out</a>
                ) : (
                  <Link to="/signIn">Sign in</Link>
                )}
                <Link to="/account">Account</Link>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NAV;
