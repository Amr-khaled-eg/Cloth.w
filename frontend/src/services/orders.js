import { jsonFetch } from "../utils/fetch";
export const getOrders = async () => {
  const res = await jsonFetch("/orders", {
    headers: { authorization: sessionStorage.getItem("token") },
  });
  if (!res.success) {
    throw new Error(res.content);
  }
  return res.content.orders;
};
export const uploadOrder = async (order) => {
  const token = window.sessionStorage.getItem("token");
  const auth = token ? { authorization: token } : {};
  const res = await jsonFetch("/orders", {
    method: "post",
    body: order,
    headers: {
      ...auth,
    },
  });
  if (!res.success) {
    throw new Error(res.content);
  }
  return res.success;
};
