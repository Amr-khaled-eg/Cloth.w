import React from "react";
import FlexDiv from "../FlexDiv/FlexDiv";
import Button from "../Button/Button";
import "./CartItem.css";
const CartItem = ({ item, onItemRemove, updateQuantity }) => {
  return (
    <FlexDiv className="item">
      <div
        className="remove"
        onClick={() => {
          onItemRemove(item);
        }}
      >
        &#10005;
      </div>
      <img className="item-img" src={"http://localhost:8080" + item.image} />
      <FlexDiv className="item-info-container">
        <FlexDiv mode="csa" className="item-info">
          <p>{item.name}</p>
          <p>Size</p>
          <p>Color</p>
        </FlexDiv>
        <FlexDiv mode="csa" className="item-info">
          <p>{item.price * item.quantity}$</p>
          <p>{item.size}</p>
          <p>{item.color}</p>
        </FlexDiv>
        <div className="quantity-container">
          <div className="quantity">
            <Button
              className="quantity-btn"
              onClick={() =>
                updateQuantity(-1, { name: item.name, size: item.size })
              }
            >
              -
            </Button>
            <p className="quantity-num">{item.quantity}</p>
            <Button
              className="quantity-btn"
              onClick={() =>
                updateQuantity(1, { name: item.name, size: item.size })
              }
            >
              +
            </Button>
          </div>
          <button className="checkout">Checkout</button>
        </div>
      </FlexDiv>
    </FlexDiv>
  );
};
export default CartItem;
