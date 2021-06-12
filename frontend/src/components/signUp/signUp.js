import React from "react";
import Input from "../input/input";
import { useHistory } from "react-router-dom";
import SliderBtn from "../slider/sliderBtn";
import SliderContainer from "../slider/sliderContainer";
import "./signUp.css";

const SignUp = ({ loadUser }) => {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
  const history = useHistory();
  function changeHanler(e) {
    setUser((preuser) => ({ ...preuser, [e.target.name]: e.target.value }));
  }
  function submit() {
    const warnings = document.querySelector(".warnings");
    warnings.innerHTML = "";
    Object.keys(user).forEach((key) => {
      if (user[key] === "") {
        warnings.innerHTML += `<p class='warning'>* Fill the ${key} field </p>`;
        return;
      }
      if (key === "password") {
        if (user[key].length < 8) {
          warnings.innerHTML +=
            "<p class='warning'>* The password has to be bigger than 8 indexs </p>";
        }
      }
    });
    if (warnings.innerHTML !== "") {
      return;
    }
    // i will have to change the link in all the fetches
    fetch("http://localhost:8080/signUp", {
      method: "post",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          window.sessionStorage.setItem("token", data.content.token);
          fetch("http://localhost:8080/profile", {
            method: "get",
            headers: {
              "content-type": "application/json",
              authorization: data.content.token,
            },
          })
            .then((resp) => resp.json())
            .then((userData) => {
              if (userData.success) {
                loadUser(userData.content);
                history.push("/products");
              }
            })
            .catch(console.log);
        } else {
          warnings.innerHTML += `<p class='warning'>* ${data.content}</p>`;
        }
      });
  }
  const showSlide = (num) => {
    const inputsContaniners = document.querySelectorAll(".sign-up-inputs");
    inputsContaniners.forEach((input, i) => {
      if (i === num - 1) {
        input.classList.add("show");
        input.classList.remove("hide");
      } else {
        input.classList.add("hide");
        input.classList.remove("show");
      }
    });
  };
  return (
    <div className="sign-up-container flex">
      <div className="sign-up-btns flex-col">
        <h2>Sing Up</h2>
        <SliderBtn>User info</SliderBtn>
        <SliderBtn>Location</SliderBtn>
        <SliderBtn>Phone</SliderBtn>
        <div className="warnings"> </div>
        <button className="sign-up" onClick={submit}>
          Sign Up
        </button>
      </div>
      <div className="slide">
        <SliderContainer hide={false}>
          <h2>User Info</h2>
          <Input
            onChange={changeHanler}
            label="Username"
            name="name"
            type="text"
          />
          <Input
            onChange={changeHanler}
            label="Password"
            name="password"
            type="password"
          />
          <Input
            onChange={changeHanler}
            label="Email"
            name="email"
            type="email"
          />
          <button className="sign-up-with">sing in with facebook</button>
          <button className="sign-up-with">sing in with gmail</button>
        </SliderContainer>
        <SliderContainer hide={true}>
          <h2>Address</h2>
          <Input
            onChange={changeHanler}
            label="Address"
            name="address"
            type="text"
          />
        </SliderContainer>
        <SliderContainer hide={true}>
          <h2>Phone</h2>
          <Input
            onChange={changeHanler}
            label="Phone"
            name="phone"
            type="tel"
          />
        </SliderContainer>
      </div>
    </div>
  );
};
export default SignUp;
