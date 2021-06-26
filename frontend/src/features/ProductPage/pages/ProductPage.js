import React from "react";
import Header from "../../../components/Header/Header";
import Button from "../../../components/Button/Button";
import FlexDiv from "../../../components/FlexDiv/FlexDiv";
import "./productPage.css";
const ProductPage = ({ product, onSizeChange, addToCart }) => {
  const ChangeImg = (n) => {
    let images = document.querySelectorAll(".img-preview");
    let imagesBtns = document.querySelectorAll(".img-btn");
    imagesBtns[n].style.opacity = ".7";
    images[n].style.opacity = "1";
    images.forEach((img, i) => {
      if (i === n) {
        return;
      } else {
        img.style.opacity = "0";
        imagesBtns[i].style.opacity = 1;
      }
    });
  };

  const handleSize = (e) => {
    e.target.classList.add("chosen-size");
    document.querySelectorAll(".size").forEach((size) => {
      if (!(size.textContent === e.target.textContent)) {
        size.classList.remove("chosen-size");
      }
    });
    onSizeChange(e.target.innerHTML);
  };
  return (
    <FlexDiv className="product-page">
      <div className="product-img-preview">
        {product.images.map((img, i) => {
          return (
            <img
              key={i}
              className="img-preview"
              src={"http://localhost:8080" + img}
              alt="product image"
            />
          );
        })}
      </div>
      <FlexDiv mode="c" className="product-imgs">
        {product.images.map((img, i) => {
          return (
            <img
              key={i}
              className="img-btn"
              src={"http://localhost:8080" + img}
              alt="product image"
              onClick={() => {
                ChangeImg(i);
              }}
            />
          );
        })}
      </FlexDiv>
      <FlexDiv mode="csa" className="product-info">
        <Header size="md"> ${product.price}</Header>
        <div className="description">
          <Header size="md">{product.name}</Header>
          <p>{product.discription}</p>
        </div>
        <p>Color:{product.color}</p>
        <div>
          <p>Size:</p>
          {product.sizes.map((s, i) => {
            return (
              <span className="size" onClick={handleSize} key={i}>
                {s}
              </span>
            );
          })}
        </div>
        <Button onClick={addToCart}>Add To Cart</Button>
      </FlexDiv>
    </FlexDiv>
  );
};
export default ProductPage;
