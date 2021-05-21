import React from "react";
import { useParams } from "react-router-dom";
import "./productPage.css";
function ProductPage() {
  const [product, setProduct] = React.useState({
    name: "",
    discription: "",
    price: null,
    category: "",
    stock: null,
    sizes: [],
    color: "",
    images: [],
  });
  let params = useParams();
  React.useEffect(async () => {
    const res = await fetch(`http://localhost:8080/products/${params.name}`);
    const data = await res.json();
    setProduct(data);
  }, []);

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
  console.log(product);

  return (
    <div className="product-page">
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
      <div className="product-imgs">
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
      </div>
      <div className="product-info">
        <h3>$ {product.price}</h3>
        <div className="description">
          <h3>{product.name}</h3>
          <p>{product.discription}</p>
        </div>
        <p>Color:{product.color}</p>
        <div>
          <p>Size:</p>
          {product.sizes.map((s, i) => {
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
