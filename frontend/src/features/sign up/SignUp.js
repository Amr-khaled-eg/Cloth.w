import React from "react";
import SignUpPage from "./pages/SignUpPage";
import { useHistory } from "react-router-dom";
import { addUser, getProfile } from "../../services/authentication";

const SignUp = ({ loadUser }) => {
  const history = useHistory();
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
  const [error, setError] = React.useState([]);
  const register = async () => {
    try {
      // i will get the user with the email and password then get the profile with the token that i get back from the backend
      const userRes = await addUser(user);
      window.sessionStorage.setItem("token", userRes.content.token);
      const profileRes = await getProfile();
      loadUser(profileRes.content);
      history.push("/products");
    } catch (e) {
      setError(e.message);
    }
  };
  const changeHanler = (e) => {
    setUser((preuser) => ({ ...preuser, [e.target.name]: e.target.value }));
  };
  return (
    <SignUpPage onRegister={register} onChange={changeHanler} error={error} />
  );
};
export default SignUp;
