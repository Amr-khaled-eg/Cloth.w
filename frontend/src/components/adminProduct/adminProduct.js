import React from "react";
import "./adminProduct.css";
import Input from "../input/input";

const AdminProduct = (props) => {
  const [updateInfo, setUpdateInfo] = React.useState({
    price: props.price,
    stock: props.stock,
  });
  const handleChange = (e) => {
    setUpdateInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const updateProduct = (e) => {
    // in this function i will use alert
    // and i have to remove them later for better interface
    if (!(updateInfo.price || updateInfo.stock)) {
      alert("make sure you are filling the fiels");
    } else {
      fetch(`http://localhost:8080/products/${props.name}`, {
        method: "post",
        body: JSON.stringify(updateInfo),
        headers: {
          "Content-Type": "application/json",
          authorization: window.sessionStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.content);
        });
    }
  };

  const removeProduct = (e) => {
    if (window.confirm(`Are you sure you want to delete [${props.name}]`)) {
      fetch(`http://localhost:8080/products/${props.name}`, {
        method: "delete",
        headers: {
          authorization: window.sessionStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((data) => alert(data.content));
    }
  };
  return (
    <div className="product">
      <div className="product-imgs-container">
        <img
          className="admin-product-image"
          src={"http://localhost:8080" + props.images[0]}
          alt={props.name}
        />
      </div>
      <div className="product-info-admin">
        <div className="product-info-admin-1">
          <h3 className="product-name">{props.name}</h3>
          <p className="product-discription">{props.discription}</p>
          <Input
            type="number"
            name="price"
            value={updateInfo.price}
            className="admin-input"
            label="Price"
            onChange={handleChange}
          />
        </div>
        <div className="product-info-admin-1">
          <Input
            type="number"
            name="stock"
            value={updateInfo.stock}
            className="admin-input upabit"
            label="Stock"
            onChange={handleChange}
          />
          <button className="confirm-update" onClick={updateProduct}>
            Confirm
          </button>
        </div>
      </div>
      <div className="remove2" onClick={removeProduct}>
        &#10005;
      </div>
    </div>
  );
};
export default AdminProduct;
