import React from "react";
import FlexDiv from "../../../components/FlexDiv/FlexDiv";
import CartItem from "../../../components/CartItem/CartItem";
import "./CartPage.css";
const Cart = ({ onItemRemove, cartItems, updateQuantity }) => {
  return (
    <FlexDiv mode="c" className="cart">
      <h2>Cart</h2>
      {cartItems.map((item, i) => (
        <CartItem
          key={i}
          item={item}
          onItemRemove={onItemRemove}
          updateQuantity={updateQuantity}
        />
      ))}
    </FlexDiv>
  );
};
export default Cart;
