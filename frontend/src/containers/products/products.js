import React from "react";
import Product from "../../components/product/product";

import "./products.css";
function Products() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(async () => {
    let res = await fetch("http://localhost:8080/products");
    let data = await res.json();
    setProducts(data);
  }, []);
  console.log(products);
  return (
    <div className="products">
      <h2 className="products-heading">Products</h2>
      {products.map((product, i) => {
        return <Product {...product} key={i} />;
      })}
    </div>
  );
}
export default Products;
