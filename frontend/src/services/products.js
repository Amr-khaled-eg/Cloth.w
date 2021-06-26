import { jsonFetch } from "../utils/fetch";
export const getProducts = async () => {
  const products = await jsonFetch("/products");
  if (!products.success) {
    throw new Error(products.content);
  }
  return products.content;
};
export const getProduct = async (name) => {
  const products = await jsonFetch(`/products/${name}`);
  if (!products.success) {
    throw new Error(products.content);
  }
  return products.content;
};
export const uploadProduct = async (product) => {
  // fetch("http://localhost:8080/products", {
  //   method: "POST",
  //   body: formdata,
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch(console.error);
  // i will not use json fetch because i will be sending a form data
  const res = await fetch("http://localhost:8080/products", {
    method: "POST",
    body: product,
    headers: {
      authorization: sessionStorage.getItem("token"),
    },
  });
  const resData = await res.json();
  if (!resData.success) {
    throw new Error(res.content);
  }
  return res.success;
};
