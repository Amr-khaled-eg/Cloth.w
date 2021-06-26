import React from "react";
import List from "../../components/List/List";
import Product from "../../components/product/product";
import { getProducts } from "../../services/products";
const Products = ({ header = "", ListItem = Product }) => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(async () => {
    try {
      let productsRes = await getProducts();
      setProducts(productsRes);
    } catch (e) {
      console.error(e);
    }
    //
  }, []);
  return <List data={products} header={header} ListItem={ListItem} />;
};
export default Products;
