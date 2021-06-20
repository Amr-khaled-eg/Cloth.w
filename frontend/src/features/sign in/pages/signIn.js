import React from "react";
import Input from "../../../components/input/input";
import { Link } from "react-router-dom";
import "./signIn.css";
import signImg from "./signIn.jpg";
import Button from "../../../components/Button/Button";
import FlexDiv from "../../../components/FlexDiv/FlexDiv";
import Header from "../../../components/Header/Header";
const SignInPage = ({ onChange, onLogin, error }) => {
  // function submit() {
  //   const warnings = document.querySelector(".warnings");
  //   warnings.innerHTML = "";
  //   if (!user.email) {
  //     warnings.innerHTML += "<p class='warning'>* Fill the username field </p>";
  //   }
  //   if (!user.password) {
  //     warnings.innerHTML += "<p class='warning'>* Fill the password field </p>";
  //   }
  //   if (warnings.innerHTML !== "") {
  //     return;
  //   } else {

  //   }
  // }
  return (
    <FlexDiv mode="rc">
      <FlexDiv className="sign">
        <FlexDiv className="input-container">
          <Header>Sign In</Header>
          <Button>sing in with facebook</Button>
          <Button>sing in with gmail</Button>
          <Input onChange={onChange} type="email" label="Email" name="email" />
          <Input
            onChange={onChange}
            type="password"
            label="Password"
            name="password"
          />
          <Link to="/signUp" className="sign-up-link">
            Do Not Have An Account? Sign Up
          </Link>
          <p className="warning">{error}</p>
          <Button onClick={onLogin}>Sign in</Button>
        </FlexDiv>
        <img src={signImg} alt="man image" className="sign-img" />
      </FlexDiv>
    </FlexDiv>
  );
};
export default SignInPage;
