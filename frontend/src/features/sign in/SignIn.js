import React from "react";
import SignInPage from "./pages/signIn";
import { useHistory } from "react-router-dom";
import { getUser, getProfile } from "../../services/authentication";
const SignIn = ({ loadUser }) => {
  const history = useHistory();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState([]);
  const login = async () => {
    try {
      // i will get the user with the email and password then get the profile with the token that i get back from the backend
      const userRes = await getUser(user);
      window.sessionStorage.setItem("token", userRes.content.token);
      const profileRes = await getProfile();
      loadUser(profileRes.content);
      if (profileRes.content.role === "user") {
        history.push("/products");
      } else {
        history.push("/admin");
      }
    } catch (e) {
      setErrors(e.message);
    }
  };
  const changeHanler = (e) => {
    setUser((preuser) => ({ ...preuser, [e.target.name]: e.target.value }));
  };
  return <SignInPage onLogin={login} onChange={changeHanler} error={errors} />;
};
export default SignIn;
