import React from "react";
import Input from "../../../components/input/input";
import Header from "../../../components/Header/Header";
import "./CheckoutPage.css";

const CheckoutPage = ({
  items,
  submitOrder,
  getTotalPrice,
  onChange,
  user,
}) => {
  const readOnly = user.isSignedIn ? { readOnly: true } : {};
  return (
    <div className="checkout">
      <Header> Checkout</Header>
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
                  <Header size="sm">{item.name}</Header>
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
            <span className="tab">Product: {getTotalPrice(items)}$</span>
            <span className="tab">+</span>
            <span className="tab">Delivery: 10$</span>
            <span className="tab">=</span>
            <span className="tab">Total: {getTotalPrice(items) + 10}$</span>
          </p>
          <button onClick={submitOrder}>Confirm</button>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
