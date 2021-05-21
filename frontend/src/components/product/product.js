import React from "react";
import "./product.css";
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <Link to={`/products/${props.name}`}>
      <div className="product">
        <img
          className="product-img img2"
          src={"http://localhost:8080" + props.images[1]}
          alt={props.name}
        />
        <img
          className="product-img img1"
          src={"http://localhost:8080" + props.images[0]}
          alt={props.name}
        />

        <p className="product-price">{props.price + "$"}</p>
        <h3 className="product-name">{props.name}</h3>
      </div>
    </Link>
  );
}
export default Product;
