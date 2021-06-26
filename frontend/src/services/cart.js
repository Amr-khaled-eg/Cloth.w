import { jsonFetch } from "../utils/fetch";
import { incluedsAnObject, removeObjFromArr } from "../utils/objects";
export const getCart = async () => {
  const cart = await jsonFetch("/cart", {
    headers: {
      authorization: sessionStorage.getItem("token"),
    },
  });
  if (!cart.success) {
    throw new Error(cart.content);
  }
  return cart.content.cart;
};
export const addToGuestCart = (item) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const itemIdx = incluedsAnObject(cart, { name: item.name, size: item.size });
  console.log(itemIdx);
  if (cart) {
    if (itemIdx !== -1 && cart[itemIdx].size === item.size) {
      cart[itemIdx].quantity += 1;
    } else {
      cart.push(item);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    localStorage.setItem("cart", JSON.stringify([item]));
  }
};
export const addToUserCart = async (item) => {
  const res = await jsonFetch("/cart", {
    method: "post",
    body: item,
    headers: {
      authorization: window.sessionStorage.getItem("token"),
    },
  });
  if (!res.success) {
    throw new Error(res.content);
  }
  return true;
};
export const removeFromGuestCart = (item) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  let newArr = removeObjFromArr(cart, { name: item.name, size: item.size });
  localStorage.setItem("cart", JSON.stringify(newArr));
  return newArr;
};
export const removeFromUserCart = async (item) => {
  const res = await jsonFetch("/cart", {
    method: "delete",
    body: { name: item.name, size: item.size },
    headers: {
      authorization: sessionStorage.getItem("token"),
    },
  });
  if (!res.success) {
    throw new Error(res.content);
  }
};
export const updateQuantity = (cart, item, num) => {
  if (num !== -1 && num !== 1) {
    return;
  }
  const newCart = Array.from(cart);
  for (let i = 0; i < newCart.length; i++) {
    if (newCart[i].name === item.name && newCart[i].size === item.size) {
      newCart[i].quantity += num;
      if (newCart[i].quantity < 1) {
        newCart[i].quantity += 1;
      }
      break;
    }
  }
  return newCart;
};
export const emptyUserCart = async () => {
  const res = await jsonFetch("/cart/all", {
    method: "delete",
    headers: {
      authorization: window.sessionStorage.getItem("token"),
    },
  });
  if (!res.success) {
    throw new Error(res.content);
  }
  return res.success;
};
