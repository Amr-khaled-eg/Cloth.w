import React from "react";
import FlexDiv from "../FlexDiv/FlexDiv";
import Button from "../Button/Button";
import "./CartItem.css";
const CartItem = ({ item, onItemRemove, updateQuantity }) => {
  return (
    <FlexDiv mode="rsb" className="item">
      {/* <div
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
      </FlexDiv> */}
      <div className="cart-item-info-pt1">
        <img
          src={"http://localhost:8080" + item.image}
          className="cart-item-img"
        />
        <FlexDiv mode="csb" className="cart-item-info-pt1-content">
          <p className="cart-item-name">{item.name}</p>
          <p> {item.color}</p>
          <FlexDiv>
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
          </FlexDiv>
        </FlexDiv>
      </div>
      <FlexDiv mode="csb" className="cart-item-info-pt2">
        <p>{item.price}$</p>
        <p className="cart-item-size">{item.size}</p>
        <div
          className="remove"
          onClick={() => {
            onItemRemove(item);
          }}
        >
          &#10005;
        </div>
      </FlexDiv>
    </FlexDiv>
  );
};
export default CartItem;
