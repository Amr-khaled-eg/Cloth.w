import React from "react";
import NAV from "./components/NAV/NAV";
import Features from "./components/features/features";
import Footer from "./components/footer/footer";
import Products from "./features/products/Products";
import ProductPage from "./features/ProductPage/ProductPage";
import SingIn from "./features/sign in/SignIn";
import SignUp from "./features/sign up/SignUp";
import Cart from "./features/cart/Cart";
import Checkout from "./features/checkout/Checkout";
import Admin from "./features/admin/Admin";
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
const App = () => {
  const [user, setUser] = React.useState(guestUser);
  const history = useHistory();
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
  const signOut = () => {
    setUser(guestUser);
    window.sessionStorage.removeItem("token");
  };
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
            <Admin isSignedIn={user.isSignedIn} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
