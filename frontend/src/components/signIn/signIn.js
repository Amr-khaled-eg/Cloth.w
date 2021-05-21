import React from "react";
import Input from "../input/input";
import { Link, useHistory } from "react-router-dom";
import "./signIn.css";
import signImg from "./signIn.jpg";
function SignIn({ loadUser }) {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  function changeHanler(e) {
    setUser((preuser) => ({ ...preuser, [e.target.name]: e.target.value }));
  }
  function submit() {
    const warnings = document.querySelector(".warnings");
    warnings.innerHTML = "";
    if (!user.email) {
      warnings.innerHTML += "<p class='warning'>* Fill the username field </p>";
    }
    if (!user.password) {
      warnings.innerHTML += "<p class='warning'>* Fill the password field </p>";
    }
    if (warnings.innerHTML !== "") {
      return;
    } else {
      fetch("http://localhost:8080/signIn", {
        method: "post",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            window.sessionStorage.setItem("token", data.content.token);
            fetch(`http://localhost:8080/profile/${data.content.id}`, {
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
                } else {
                  console.log(userData.content);
                }
              })
              .catch(console.log);
          } else {
            warnings.innerHTML = `<p class='warning'>* ${data.content}</p>`;
          }
        })
        .catch(console.log);
    }
  }
  return (
    <div className="sign-container flex">
      <div className="sign flex">
        <div className="input-container flex">
          <h2>Sing In</h2>
          <button>sing in with facebook</button>
          <button>sing in with gmail</button>
          <Input
            onChange={changeHanler}
            type="email"
            label="Email"
            name="email"
          />
          <Input
            onChange={changeHanler}
            type="password"
            label="Password"
            name="password"
          />
          <Link to="/signUp" className="sign-up-link">
            {" "}
            Do Not Have An Account? Sign Up
          </Link>
          <div className="warnings"></div>
          <button onClick={submit}> SignIn</button>
        </div>
        <img src={signImg} alt="man image" className="sign-img" />
      </div>
    </div>
  );
}
export default SignIn;
