import React from "react";
import SliderBtn from "../slider/sliderBtn";
import SliderContainer from "../slider/sliderContainer";
import Upload from "../upload/upload";
import Orders from "../orders/orders";
import AdminProduct from "../adminProduct/adminProduct";
import Products from "../../containers/products/products";
import "./adminDashboard.css";
const AdminDashboard = () => {
  return (
    <div className="sign-up-container flex">
      <div className="sign-up-btns flex-col">
        <h2>Admin</h2>
        <SliderBtn>Manage Products</SliderBtn>
        <SliderBtn>Orders</SliderBtn>
        <SliderBtn>Upload</SliderBtn>
        <div className="warnings"> </div>
      </div>
      <div className="comps">
        <SliderContainer>
          <Products Component={AdminProduct} />
        </SliderContainer>
        <SliderContainer hide={true}>
          <Orders />
        </SliderContainer>
        <SliderContainer hide={true}>
          <Upload></Upload>
        </SliderContainer>
      </div>
    </div>
  );
};
export default AdminDashboard;
