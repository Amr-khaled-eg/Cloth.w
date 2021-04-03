import NAV from "./components/NAV/NAV";
import Features from "./containers/features";
import Footer from "./components/footer/footer";
import Products from "./containers/products/products";
import ProductPage from "./components/prouctPage/productPage";
import Upload from "./components/upload/upload";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <NAV />
        <Switch>
          <Route path="/" exact>
            <Features />
            <Footer />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:name">
            <ProductPage />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
