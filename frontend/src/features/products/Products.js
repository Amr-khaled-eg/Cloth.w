import React from "react";
import List from "../../components/List/List";
import Product from "../../components/product/product";
import Search from "../../components/Search/Search";
import { getProducts, searchProducts } from "../../services/products";
import { useHistory } from "react-router";

const Products = ({ header = "", ListItem = Product }) => {
  const [products, setProducts] = React.useState([]);
  const [searchKeywords, setSearchKeywords] = React.useState("");
  const history = useHistory();
  React.useEffect(() => {
    (async () => {
      try {
        const productsRes = await getProducts();
        setProducts(productsRes);
      } catch (e) {
        console.error(e);
      }
    })();
    // this will listen for the route changes and everytime i change the  route in products i will trigger
    return history.listen(async (location, action) => {
      if (location.hash && location.hash.split("=")[1]) {
        const result = await searchProducts(location.hash.split("=")[1]);
        setProducts(result);
      } else {
        if (location.pathname === "/products") {
          const result = await getProducts();
          setProducts(result);
        }
      }
    });
  }, []);
  const onSearchChange = (e) => {
    setSearchKeywords(e.target.value);
  };
  const onSearch = async () => {
    // window.location.href = `http://localhost:3000/products#${searchKeywords}`;
    history.push(`/products/#query=${searchKeywords}`);
  };
  return (
    <div>
      <Search onChange={onSearchChange} onSearch={onSearch} />
      <List data={products} header={header} ListItem={ListItem} />
    </div>
  );
};
export default Products;
