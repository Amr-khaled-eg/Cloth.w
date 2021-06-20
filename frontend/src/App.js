import React from "react";
import NAV from "./components/NAV/NAV";
import Features from "./containers/features/features";
import Footer from "./components/footer/footer";
import Products from "./containers/products/products";
import ProductPage from "./components/prouctPage/productPage";
import Product from "./components/product/product";
import SingIn from "./features/sign in/SignIn";
import SignUp from "./features/sign up/SignUp";
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
import { getProfile } from "./services/authentication";
const guestUser = {
  name: "",
  email: "",
  address: "",
  phone: "",
  isSignedIn: false,
};
const getUser = async (loadUser) => {
  if (!window.sessionStorage.getItem("token")) {
    return;
  }
  try {
    const profileRes = await getProfile();
    loadUser(profileRes.content);
  } catch (e) {
    console.error(e);
  }
};
function App() {
  const [user, setUser] = React.useState(guestUser);
  React.useEffect(() => getUser(loadUser), []);
  const loadUser = (user) => {
    setUser({
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone,
      isSignedIn: true,
    });
  };
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
            <Products Component={Product} />
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
