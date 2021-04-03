import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
function Product({ name, price, img }) {
  return (
    <Link to={`/products/${name}`}>
      <div className="product">
        <div className="product-overlay"></div>
        <img
          className="product-img"
          src={"http://localhost:8080" + img}
          alt={name}
        ></img>
        <p className="product-price">{price + "$"}</p>
        <h3 className="product-name">{name}</h3>
        <button className="product-button">Add To Cart</button>
      </div>
    </Link>
  );
}
export default Product;
