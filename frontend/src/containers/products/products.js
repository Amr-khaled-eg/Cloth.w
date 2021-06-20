import React from "react";
import "./products.css";
function Products({ Component }) {
  const [products, setProducts] = React.useState([]);
  React.useEffect(async () => {
    let res = await fetch("http://localhost:8080/products");
    let data = await res.json();
    setProducts(data);
  }, []);
  return (
    <div className="products">
      <h2 className="products-heading">Products</h2>
      <div className="grid">
        {products.map((product, i) => {
          return <Component {...product} key={i} />;
        })}
      </div>
    </div>
  );
}
export default Products;
