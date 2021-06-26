import { jsonFetch } from "../utils/fetch";
export const isAdmin = async () => {
  const res = await jsonFetch("/admin", {
    headers: {
      authorization: sessionStorage.getItem("token"),
    },
  });
  return res.success;
};
