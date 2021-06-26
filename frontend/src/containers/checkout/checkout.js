import React from "react";
import Input from "../../components/input/input";
import "./checkout.css";

const Checkout = ({ user, setUser }) => {
  const [items, setItems] = React.useState([]);
  //   const [guestUserInfo, setGuestUserInfo] = React.useState({
  //     name: "",
  //     address: "",
  //     phone: "",
  //     email: "",
  //   });
  const onChange = (e) => {
    setUser((preuser) => ({
      ...preuser,
      [e.target.name]: e.target.value,
    }));
  };
  const getProducts = (arr) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name) {
        res.push({
          name: arr[i].name,
          size: arr[i].size,
          quantity: arr[i].quantity,
        });
      }
    }
    return res;
  };
  const getTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price;
    }
    return total;
  };
  const emptyGuestCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setItems([]);
  };
  const emptyUserCart = () => {
    fetch("http://localhost:8080/cart/all", {
      method: "delete",
      headers: {
        authorization: window.sessionStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setItems([]);
        } else {
          console.error("server error");
        }
      });
  };
  const emptyCart = () => {
    if (user.isSignedIn) {
      emptyUserCart();
    } else {
      emptyGuestCart();
    }
  };
  React.useEffect(() => {
    if (user.isSignedIn) {
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
      const cart = JSON.parse(localStorage.getItem("cart"));
      setItems(cart);
    }
  }, [user.isSignedIn]);
  const submitOrder = () => {
    if (!(user.name || user.address || user.phone)) {
      alert("please fill the required inputs for the order");
    } else {
      const order = {
        products: getProducts(items),
        userInfo: {
          name: user.name,
          address: user.address,
          phone: user.phone,
          email: user.email,
        },
        date: new Date().toLocaleString(),
      };
      const token = user.isSignedIn
        ? { authorization: window.sessionStorage.getItem("token") }
        : {};
      fetch("http://localhost:8080/orders", {
        method: "post",
        body: JSON.stringify(order),
        headers: {
          "Content-Type": "application/json",
          ...token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            emptyCart();
          } else {
            console.log(data.content);
          }
        });
    }
  };
  const readOnly = user.isSignedIn ? { readOnly: true } : {};
  return (
    <div className="checkout">
      <h2> Checkout</h2>
      <div className="checkout-container">
        <div className="checkout-products">
          {items.map((item, i) => {
            return (
              <div className="checkout-product" key={i}>
                <img
                  className="checkout-product-img"
                  src={"http://localhost:8080" + item.image}
                />
                <div className="checkout-product-info">
                  <h3>{item.name}</h3>
                  <p>
                    <span className="tab">Size</span>
                    <span>{item.size}</span>
                  </p>
                  <p>
                    <span className="tab">Qty</span>
                    <span>{item.quantity}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="user-info">
          <Input
            label="name"
            type="text"
            className="user-info-feild"
            name="name"
            onChange={onChange}
            value={user.name}
            {...readOnly}
          />
          <Input
            label="address"
            type="text"
            className="user-info-feild"
            name="address"
            onChange={onChange}
            value={user.address}
          />
          <Input
            label="phone"
            type="text"
            className="user-info-feild"
            name="phone"
            onChange={onChange}
            value={user.phone}
          />
          <Input
            label="email"
            type="text"
            className="user-info-feild"
            name="email"
            onChange={onChange}
            value={user.email}
            {...readOnly}
          />
        </div>
        <div className="checkout-last">
          <p>
            <span className="tab">Product: {getTotalPrice()}$</span>
            <span className="tab">+</span>
            <span className="tab">Delivery: 10$</span>
            <span className="tab">=</span>
            <span className="tab">Total: {getTotalPrice() + 10}$</span>
          </p>
          <button onClick={submitOrder}>Confirm</button>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
