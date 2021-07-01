import React from "react";
import "./checkoutItem.css";
import Header from "../Header/Header";
import FlexDiv from "../FlexDiv/FlexDiv";

const CheckoutItem = ({ item }) => {
  return (
    <FlexDiv className="checkout-product">
      <img
        className="checkout-product-img"
        src={"http://localhost:8080" + item.image}
      />
      <FlexDiv mode="csb" className="checkout-product-info">
        <Header size="sm">{item.name}</Header>
        <p>
          <span className="tab">Size</span>
          <span>{item.size}</span>
        </p>
        <p>
          <span className="tab">Qty</span>
          <span>{item.quantity}</span>
        </p>
      </FlexDiv>
    </FlexDiv>
  );
};
export default CheckoutItem;
