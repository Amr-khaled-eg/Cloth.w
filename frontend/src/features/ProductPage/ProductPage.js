import React from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/products";
import ProductPagePage from "./pages/ProductPage";
import { addToGuestCart, addToUserCart } from "../../services/cart";
const ProductPage = ({ isSignedIn }) => {
  const [product, setProduct] = React.useState({
    name: "",
    discription: "",
    price: null,
    category: "",
    stock: null,
    sizes: [],
    color: "",
    images: [],
  });
  const [productSpecification, setproductSpecification] = React.useState({
    size: "",
    quantity: 1,
  });
  const onSizeChange = (size) =>
    setproductSpecification((prev) => ({ ...prev, size }));
  const addToCart = () => {
    if (!productSpecification.size) {
      alert("please choose a size");
      return;
    }
    const item = {
      size: productSpecification.size,
      quantity: productSpecification.quantity,
      image: product.images[0],
      name: product.name,
      price: product.price,
      color: product.color,
    };
    isSignedIn ? addToUserCart(item) : addToGuestCart(item);
  };
  let params = useParams();
  React.useEffect(async () => {
    try {
      const data = await getProduct(params.name);
      setProduct(data);
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <ProductPagePage
      product={product}
      addToCart={addToCart}
      onSizeChange={onSizeChange}
    />
  );
};
export default ProductPage;
