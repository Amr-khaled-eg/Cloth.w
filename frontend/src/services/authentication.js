import { jsonFetch } from "../utils/fetch";

const validateUser = (user) => {
  if (
    !user ||
    (user.email === "" &&
      user.password === "" &&
      user.name === "" &&
      user.address === "" &&
      user.phone === "")
  ) {
    throw new Error("Please fill all the feilds");
  }
  if (user.password.length < 8) {
    throw new Error("The password should be 8 or more indexes");
  }
};
const postUserTo = async (user, endpoint) => {
  validateUser(user);
  const userRes = await jsonFetch(endpoint, {
    method: "post",
    body: user,
  });
  if (!userRes.success) {
    throw new Error(userRes.content);
  }
  return userRes;
};
export const getUser = (user) => {
  return postUserTo(user, "/signIn");
};

export const addUser = (user) => {
  return postUserTo(user, "/signUp");
};

export const getProfile = async () => {
  const profileRes = await jsonFetch("/profile", {
    method: "get",
    headers: {
      authorization: window.sessionStorage.getItem("token"),
    },
  });
  if (!profileRes.success) {
    throw new Error(profileRes.content);
  }
  return profileRes;
};
