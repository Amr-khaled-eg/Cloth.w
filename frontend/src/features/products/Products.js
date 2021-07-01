import React from "react";
import List from "../../components/List/List";
import Product from "../../components/product/product";
import Search from "../../components/Search/Search";
import { getProducts, searchProducts } from "../../services/products";
import "./Products.css";

const Products = ({ header = "", ListItem = Product }) => {
  const [products, setProducts] = React.useState([]);
  const [searchKeywords, setSearchKeywords] = React.useState("");
  React.useEffect(async () => {
    try {
      const productsRes = await getProducts();
      setProducts(productsRes);
    } catch (e) {
      console.error(e);
    }
    //
  }, []);
  const onSearchChange = (e) => {
    setSearchKeywords(e.target.value);
  };
  const onSearch = async () => {
    if (searchKeywords === "" || searchKeywords === " ") return;
    try {
      const searchResult = await searchProducts(searchKeywords);
      setProducts(searchResult);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="products">
      <Search onChange={onSearchChange} onSearch={onSearch} />
      <List data={products} header={header} ListItem={ListItem} />
    </div>
  );
};
export default Products;
