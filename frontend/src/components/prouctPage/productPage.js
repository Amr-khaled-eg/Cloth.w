import React from "react";
import { useParams } from "react-router-dom";
import "./productPage.css";
function ProductPage({ isSignedIn }) {
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
  const [productSpecification, setproductSpecification] = React.useState({
    size: "",
    quantity: 1,
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
  function incluedsAnObject(arr, name) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === name) {
        return true;
      }
    }
    return false;
  }
  function addToGuestCart(newItem) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      if (!incluedsAnObject(cart, product.name)) {
        cart.push(newItem);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([
          {
            size: productSpecification.size,
            quantity: productSpecification.quantity,
            image: product.images[0],
            name: product.name,
            price: product.price,
            color: product.color,
          },
        ])
      );
    }
  }
  function addToUserCart(newItem) {
    // then i will add the item to the cart in the DB
    // i am making this req to get the cart and check that
    // the product we are adding is not in the cart
    fetch("http://localhost:8080/cart", {
      method: "get",
      headers: {
        authorization: window.sessionStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          if (!incluedsAnObject(data.content.cart, newItem.name)) {
            fetch("http://localhost:8080/cart", {
              method: "post",
              body: JSON.stringify(newItem),
              headers: {
                "Content-Type": "application/json",
                authorization: window.sessionStorage.getItem("token"),
              },
            });
          }
        }
      });
  }
  function addToCart() {
    const newItem = {
      size: productSpecification.size,
      quantity: productSpecification.quantity,
      image: product.images[0],
      name: product.name,
      price: product.price,
      color: product.color,
    };
    if (isSignedIn) {
      // i should add it to the DB but i wil do that later when i set up the backend first
      addToUserCart(newItem);
    } else {
      // then he is a guest user and the cart will be stored in the local storage
      addToGuestCart(newItem);
    }
  }
  function handleSize(e) {
    e.target.classList.add("chosen-size");
    document.querySelectorAll(".size").forEach((size) => {
      if (!(size.textContent === e.target.textContent)) {
        size.classList.remove("chosen-size");
      }
    });
    setproductSpecification((prev) => {
      return { ...prev, size: e.target.innerHTML };
    });
  }
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
              <span className="size" onClick={handleSize} key={i}>
                {s}
              </span>
            );
          })}
        </div>
        <button onClick={addToCart}>Add To Cart</button>
      </div>
    </div>
  );
}
export default ProductPage;
