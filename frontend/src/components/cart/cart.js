import React from "react";
import "./cart.css";
const Cart = ({ isSignedIn }) => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    // there is a little bug here i will see it if i have stuff in the cart as a guest then i sign in and get the stuff in the account's cart
    if (isSignedIn) {
      fetch("http://localhost:8080/cart", {
        headers: { authorization: window.sessionStorage.getItem("token") },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setItems(data.content.cart);
          } else {
            // i need to change that alert
            alert("there was a server error");
          }
        });
    } else {
      let itemsInStorage = localStorage.getItem("cart");
      if (itemsInStorage) {
        setItems(JSON.parse(itemsInStorage));
      } else {
        setItems([]);
      }
    }
  }, [isSignedIn]);
  const removeObjFromArr = (cart, item) => {
    let newArr = [];
    for (let i = 0; i < cart.length; i++) {
      if (!(cart[i].name === item.name && cart[i].size === item.size)) {
        newArr.push(cart[i]);
      }
    }
    return newArr;
  };
  const removeFromGuestCart = (item) => {
    let newArr = removeObjFromArr(items, { name: item.name, size: item.size });
    localStorage.setItem("cart", JSON.stringify(newArr));
    setItems(newArr);
  };
  const removeFromUserCart = (itemName) => {
    fetch("http://localhost:8080/cart", {
      method: "delete",
      body: JSON.stringify({ name: itemName }),
      headers: {
        "Content-Type": "application/json",
        authorization: window.sessionStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          let newArr = removeObjFromArr(items, itemName);
          setItems(newArr);
        } else {
          console.error("server error");
        }
      });
  };
  const removeFromCart = (item) => {
    if (isSignedIn) {
      removeFromUserCart(item.name);
    } else {
      removeFromGuestCart(item);
    }
  };
  return (
    <div className="cart">
      <h2>Cart</h2>
      {items.map((item, i) => {
        return (
          <div className="item" key={i}>
            <div
              className="remove"
              onClick={() => {
                removeFromCart(item);
              }}
            >
              &#10005;
            </div>
            <img
              className="item-img"
              src={"http://localhost:8080" + item.image}
            />
            <div className="item-info-container">
              <div className="item-info">
                <p>{item.name}</p>
                <p>Size</p>
                <p>Color</p>
              </div>
              <div className="item-info">
                <p>{item.price * item.quantity}$</p>
                <p>{item.size}</p>
                <p>{item.color}</p>
              </div>
              <div className="quantity-container">
                <div className="quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => {
                      for (let i = 0; i < items.length; i++) {
                        if (items[i].name === item.name) {
                          const newArr = Array.from(items);
                          if (newArr[i].quantity === 1) {
                            return;
                          }
                          newArr[i].quantity += -1;
                          setItems(newArr);
                          localStorage.setItem("cart", JSON.stringify(newArr));
                        }
                      }
                    }}
                  >
                    -
                  </button>
                  <p className="quantity-num">{item.quantity}</p>
                  <button
                    className="quantity-btn"
                    onClick={() => {
                      for (let i = 0; i < items.length; i++) {
                        if (items[i].name === item.name) {
                          const newArr = Array.from(items);
                          newArr[i].quantity += 1;
                          setItems(newArr);
                          localStorage.setItem("cart", JSON.stringify(newArr));
                        }
                      }
                      // updateQuantity(localStorage.setItem, items, item.name, 1);
                    }}
                  >
                    +
                  </button>
                </div>
                <button className="checkout">Checkout</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
