import React from "react";
import "./product.css";
import { Link } from "react-router-dom";

function Product(props) {
  console.log(props);
  return (
    <Link to={`/products/${props.name}`}>
      <div className="product">
        <div className="product-imgs-container">
          <img
            className="product-img product-img2"
            src={"http://localhost:8080" + props.images[1]}
            alt={props.name}
          />
          <img
            className="product-img product-img1 "
            src={"http://localhost:8080" + props.images[0]}
            alt={props.name}
          />
        </div>

        <h3 className="product-name">{props.name}</h3>
        <p className="product-discription">{props.discription}</p>
        <p className="product-price">{props.price + "$"}</p>
      </div>
    </Link>
  );
}
export default Product;
