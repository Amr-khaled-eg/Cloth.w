import React from "react";
import { emptyUserCart, getCart } from "../../services/cart";
import { uploadOrder } from "../../services/orders";
import CheckoutPage from "./pages/CheckoutPage";
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
const getTotalPrice = (items) => {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
};
const Checkout = ({ user, setUser }) => {
  const [items, setItems] = React.useState([]);
  const onChange = (e) => {
    setUser((preuser) => ({
      ...preuser,
      [e.target.name]: e.target.value,
    }));
  };
  const emptyCart = () => {
    user.isSignedIn
      ? emptyUserCart()
      : localStorage.setItem("cart", JSON.stringify([]));
    setItems([]);
  };
  React.useEffect(async () => {
    const cart = user.isSignedIn
      ? await getCart()
      : JSON.parse(localStorage.getItem("cart"));
    cart && setItems(cart);
  }, [user.isSignedIn]);
  const submitOrder = async () => {
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
      };
      try {
        await uploadOrder(order);
        setItems([]);
        emptyCart();
      } catch (e) {
        console.error(e);
      }
    }
  };
  return (
    <CheckoutPage
      submitOrder={submitOrder}
      getTotalPrice={getTotalPrice}
      onChange={onChange}
      items={items}
      user={user}
    />
  );
};
export default Checkout;
