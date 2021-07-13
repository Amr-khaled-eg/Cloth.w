import React from "react";
import {
  ProductContainer,
  ProductImgsContainer,
  ProductImg1,
  ProductImg2,
  ProductName,
  ProductDescription,
  ProductPrice,
} from "./product.styles";
function Product(props) {
  return (
    <ProductContainer to={`/products/${props.name}`}>
      <div>
        <ProductImgsContainer>
          <ProductImg1
            src={"http://localhost:8080" + props.images[1]}
            alt={props.name}
          />
          <ProductImg2
            src={"http://localhost:8080" + props.images[0]}
            alt={props.name}
          />
        </ProductImgsContainer>
        <ProductName>{props.name}</ProductName>
        <ProductDescription>{props.description}</ProductDescription>
        <ProductPrice>{props.price + "$"}</ProductPrice>
      </div>
    </ProductContainer>
  );
}
export default Product;
