import React from "react";
import NAV from "./components/NAV/NAV";
import Features from "./containers/features/features";
import Footer from "./components/footer/footer";
import Products from "./containers/products/products";
import ProductPage from "./components/prouctPage/productPage";
import Upload from "./components/upload/upload";
import SingIn from "./components/signIn/signIn";
import SignUp from "./components/signUp/signUp";
import Cart from "./components/cart/cart";
import Checkout from "./containers/checkout/checkout";
import AdminWraper from "./components/adminWraper/adminWraper";
import AdminDashboard from "./components/adminDashboard/adminDashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
const guestUser = {
  name: "",
  email: "",
  address: "",
  phone: "",
  isSignedIn: false,
};
function App() {
  const [user, setUser] = React.useState(guestUser);
  React.useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    if (!token) {
      return;
    }
    fetch("http://localhost:8080/signIn", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          fetch(`http://localhost:8080/profile`, {
            method: "get",
            headers: {
              "content-type": "application/json",
              authorization: token,
            },
          })
            .then((resp) => resp.json())
            .then((user) => {
              if (user.success) {
                loadUser(user.content);
                // history.push("/products");
              } else {
                console.log(user.content);
              }
            })
            .catch(console.log);
        } else {
          // i should log the user out and he will sign in again
          console.log(data.content);
        }
      })
      .catch(console.log);
  }, []);
  function loadUser(user) {
    setUser({
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone,
      isSignedIn: true,
    });
  }
  function signOut() {
    setUser(guestUser);
    window.sessionStorage.removeItem("token");
  }
  return (
    <div className="app">
      <Router>
        <NAV user={user} signOut={signOut} />
        <Switch>
          <Route path="/" exact>
            <Features />
            <Footer />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:name">
            <ProductPage isSignedIn={user.isSignedIn} />
          </Route>
          {/* <Route path="/upload">
            <Upload />
          </Route> */}
          <Route path="/signIn">
            <SingIn loadUser={loadUser} />
          </Route>
          <Route path="/signUp">
            <SignUp loadUser={loadUser} />
          </Route>
          <Route path="/cart" exact>
            <Cart isSignedIn={user.isSignedIn} />
          </Route>
          <Route path="/cart/checkout">
            <Checkout user={user} setUser={setUser} />
          </Route>
          <Route path="/admin">
            <AdminWraper isSignedIn={user.isSignedIn}>
              <AdminDashboard />
            </AdminWraper>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
