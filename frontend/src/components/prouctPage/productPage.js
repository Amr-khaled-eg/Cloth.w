import React from "react";
import "./productPage.css";
function ProductPage() {
  let product = {
    name: "dress",
    description: "H&M dress with blend",
    price: 20,
    imgs: ["/photo3.jpg", "/photo3.jpg", "/photo3.jpg"],
    color: "black",
    size: ["S", "M", "L"],
  };
  function ChangeImg(n) {
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
  }

  return (
    <div className="product-page">
      <div className="product-img-preview">
        {product.imgs.map((img, i) => {
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
      <div className="product-imgs">
        {product.imgs.map((img, i) => {
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
      </div>
      <div className="product-info">
        <h3>$ {product.price}</h3>
        <div className="description">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <p>Color:{product.color}</p>
        <div>
          <p>Size:</p>
          {product.size.map((s, i) => {
            return (
              <span className="size" key={i}>
                {s}
              </span>
            );
          })}
        </div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}
export default ProductPage;
