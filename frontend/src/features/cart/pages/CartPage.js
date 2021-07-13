import React from "react";
import FlexDiv from "../../../components/FlexDiv/FlexDiv";
import CartItem from "../../../components/CartItem/CartItem";
import Button from "../../../components/Button/Button";
import "./CartPage.css";
const Cart = ({ onItemRemove, cartItems, updateQuantity }) => {
  return (
    <>
      <h2 className="cart-header">Cart</h2>
      <FlexDiv className="cart">
        {cartItems.map((item, i) => (
          <CartItem
            key={i}
            item={item}
            onItemRemove={onItemRemove}
            updateQuantity={updateQuantity}
          />
        ))}
      </FlexDiv>
      <div className="checkout">
        <Button> checkout</Button>
      </div>
    </>
  );
};
export default Cart;
