import React from "react";
import Input from "../../../components/input/input";
import SliderBtn from "../../../components/slider/sliderBtn";
import SliderContainer from "../../../components/slider/sliderContainer";
import Button from "../../../components/Button/Button";
import FlexDiv from "../../../components/FlexDiv/FlexDiv";
import Header from "../../../components/Header/Header";
import "./SignUpPage.css";

const SignUpPage = ({ onRegister, onChange, error }) => {
  //   const [user, setUser] = React.useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //     address: "",
  //     phone: "",
  //   });
  //   const history = useHistory();
  //   function changeHanler(e) {
  //     setUser((preuser) => ({ ...preuser, [e.target.name]: e.target.value }));
  //   }
  //   function submit() {
  //     const warnings = document.querySelector(".warnings");
  //     warnings.innerHTML = "";
  //     Object.keys(user).forEach((key) => {
  //       if (user[key] === "") {
  //         warnings.innerHTML += `<p class='warning'>* Fill the ${key} field </p>`;
  //         return;
  //       }
  //       if (key === "password") {
  //         if (user[key].length < 8) {
  //           warnings.innerHTML +=
  //             "<p class='warning'>* The password has to be bigger than 8 indexs </p>";
  //         }
  //       }
  //     });
  //     if (warnings.innerHTML !== "") {
  //       return;
  //     }
  //     // i will have to change the link in all the fetches
  //     fetch("http://localhost:8080/signUp", {
  //       method: "post",
  //       body: JSON.stringify(user),
  //       headers: { "Content-Type": "application/json" },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.success) {
  //           window.sessionStorage.setItem("token", data.content.token);
  //           fetch("http://localhost:8080/profile", {
  //             method: "get",
  //             headers: {
  //               "content-type": "application/json",
  //               authorization: data.content.token,
  //             },
  //           })
  //             .then((resp) => resp.json())
  //             .then((userData) => {
  //               if (userData.success) {
  //                 loadUser(userData.content);
  //                 history.push("/products");
  //               }
  //             })
  //             .catch(console.log);
  //         } else {
  //           warnings.innerHTML += `<p class='warning'>* ${data.content}</p>`;
  //         }
  //       });
  //   }

  return (
    <FlexDiv className="sign-up-container">
      <FlexDiv className="sign-up-btns" mode="csb">
        <Header size="md">Sign Up</Header>
        <SliderBtn>User info</SliderBtn>
        <SliderBtn>Location</SliderBtn>
        <SliderBtn>Phone</SliderBtn>
        <p className="warning">{error} </p>
        <Button onClick={onRegister}>Sign up</Button>
      </FlexDiv>
      <div className="slide">
        <SliderContainer hide={false}>
          <FlexDiv mode="csb" style={{ height: "80%" }}>
            <Header size="md">User Info</Header>
            <Input
              onChange={onChange}
              label="Username"
              name="name"
              type="text"
            />
            <Input
              onChange={onChange}
              label="Password"
              name="password"
              type="password"
            />
            <Input
              onChange={onChange}
              label="Email"
              name="email"
              type="email"
            />
            <Button>sing in with facebook</Button>
            <Button>sing in with gmail</Button>
          </FlexDiv>
        </SliderContainer>
        <SliderContainer hide={true}>
          <Header size="md">Location</Header>
          <Input
            onChange={onChange}
            label="Address"
            name="address"
            type="text"
          />
        </SliderContainer>
        <SliderContainer hide={true}>
          <Header size="md">Phone</Header>
          <Input onChange={onChange} label="Phone" name="phone" type="tel" />
        </SliderContainer>
      </div>
    </FlexDiv>
  );
};
export default SignUpPage;
