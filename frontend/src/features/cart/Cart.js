import React from "react";
import CartPage from "./pages/CartPage";
import {
  getCart,
  removeFromUserCart,
  removeFromGuestCart,
  updateQuantity,
} from "../../services/cart";
import { removeObjFromArr } from "../../utils/objects";
const Cart = ({ isSignedIn }) => {
  const [items, setItems] = React.useState([]);
  React.useEffect(async () => {
    // there is a little bug here i will see it if i have stuff in the cart as a guest then i sign in and get the stuff in the account's cart
    try {
      const cart = isSignedIn
        ? await getCart()
        : JSON.parse(localStorage.getItem("cart"));
      console.log(cart);
      setItems(cart);
    } catch (e) {
      console.error(e);
    }
    // if (isSignedIn) {
    //   fetch("http://localhost:8080/cart", {
    //     headers: { authorization: window.sessionStorage.getItem("token") },
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       if (data.success) {
    //         setItems(data.content.cart);
    //       } else {
    //         // i need to change that alert
    //         alert("there was a server error");
    //       }
    //     });
    // } else {
    //   let itemsInStorage = localStorage.getItem("cart");
    //   if (itemsInStorage) {
    //     setItems(JSON.parse(itemsInStorage));
    //   } else {
    //     setItems([]);
    //   }
    // }
  }, [isSignedIn]);
  const removeItem = (item) => {
    if (isSignedIn) {
      removeFromUserCart(item);
      setItems(removeObjFromArr(items, item));
    } else {
      setItems(removeFromGuestCart(item));
    }
  };
  const onUpdateQuantity = (num, item) => {
    if (!isSignedIn) {
      const updatedCart = updateQuantity(
        JSON.parse(localStorage.getItem("cart")),
        item,
        num
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setItems(updatedCart);
    }
  };
  return (
    <CartPage
      onItemRemove={removeItem}
      cartItems={items}
      updateQuantity={onUpdateQuantity}
    />
  );
};
export default Cart;
