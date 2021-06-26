import React from "react";
import SliderBtn from "../slider/sliderBtn";
import SliderContainer from "../slider/sliderContainer";
import Upload from "../upload/upload";
import Orders from "../../features/orders/orders";
import AdminProduct from "../adminProduct/adminProduct";
import Products from "../../features/products/Products";
import Header from "../../components/Header/Header";
import FlexDiv from "../FlexDiv/FlexDiv";
import "./adminDashboard.css";
const AdminDashboard = () => {
  return (
    <FlexDiv className="sign-up-container">
      <FlexDiv mode="c" className="sign-up-btns">
        <Header>Admin</Header>
        <SliderBtn>Manage Products</SliderBtn>
        <SliderBtn>Orders</SliderBtn>
        <SliderBtn>Upload</SliderBtn>
      </FlexDiv>
      <div className="comps">
        <SliderContainer>
          <Products ListItem={AdminProduct} />
        </SliderContainer>
        <SliderContainer hide={true}>
          <Orders />
        </SliderContainer>
        <SliderContainer hide={true}>
          <Upload></Upload>
        </SliderContainer>
      </div>
    </FlexDiv>
  );
};
export default AdminDashboard;
