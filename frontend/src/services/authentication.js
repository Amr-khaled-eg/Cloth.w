import { jsonFetch } from "../utils/fetch";
const isUserInputValid = (user) => {
  if (!user) {
    return false;
  }
  return (
    user.email !== "" &&
    user.password !== "" &&
    user.password.length >= 8 &&
    user.name !== "" &&
    user.address !== "" &&
    user.phone !== ""
  );
};
export const getUser = async (user) => {
  if (!isUserInputValid(user)) {
    throw new Error("Please fill all the feilds");
  }
  // we will check if there is a token we will send if not we will send the body
  const userRes = await jsonFetch("/signIn", {
    method: "post",
    body: user,
  });
  if (!userRes.success) {
    throw new Error(userRes.content);
  }
  return userRes;
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
export const addUser = async (user) => {
  if (!isUserInputValid(user)) {
    throw new Error("Please fill all the feilds");
  }
  const userRes = await jsonFetch("/signUp", {
    method: "post",
    body: user,
  });

  if (!userRes.success) {
    throw new Error(userRes.content);
  }
  return userRes;
};
