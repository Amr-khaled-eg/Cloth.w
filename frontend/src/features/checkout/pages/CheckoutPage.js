import React from "react";
import Input from "../../../components/input/input";
import Header from "../../../components/Header/Header";
import CheckoutItem from "../../../components/checkoutItem/checkoutItem";
import Button from "../../../components/Button/Button";
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
          {items.map((item, i) => (
            <CheckoutItem item={item} key={i} />
          ))}
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
          <Button onClick={submitOrder}>Confirm</Button>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
