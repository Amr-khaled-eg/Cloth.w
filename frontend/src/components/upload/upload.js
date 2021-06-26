import React from "react";
import "./upload.css";
import Input from "../input/input";
import { uploadProduct } from "../../services/products";
const Upload = () => {
  function handleDragOver(event) {
    event.preventDefault();
    document.querySelector(".upload-image").classList.add("active");
    const h1 = document.querySelector(".upload-image h1");
    h1.innerHTML = "";
    h1.append("Drop the images");
  }
  function handleDragLeave() {
    document.querySelector(".upload-image").classList.remove("active");
    const h1 = document.querySelector(".upload-image h1");
    h1.innerHTML = "";
    h1.append("Drag And Drop an image");
  }
  function handleDrop(event) {
    event.preventDefault();
    document.querySelector("#image").files = null;
    const h1 = document.querySelector(".upload-image h1");

    const files = event.dataTransfer.files;
    if (files.length !== 3) {
      h1.innerHTML = "";
      h1.append("You Shoule enter 3 images but you enterd " + files.length);
    } else {
      h1.innerHTML = "";
      h1.append("3 images are Choosen");
      document.querySelector("#image").files = files;
    }
    document.querySelector(".upload-image").classList.remove("active");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = document.querySelector(".upload-container");
    const formdata = new FormData();
    formdata.append("name", form.title.value);
    formdata.append("discription", form.discription.value);
    formdata.append("price", form.price.value);
    formdata.append("category", form.category.value);
    formdata.append("stock", form.stock.value);
    formdata.append("color", form.color.value);
    document.querySelectorAll("input[type=checkbox]").forEach((input) => {
      if (input.checked) {
        formdata.append("sizes", input.name);
      }
    });
    let imgs = Array.from(form.images.files);
    for (let i = 0; i < imgs.length; i++) {
      formdata.append("images", imgs[i]);
    }
    try {
      uploadProduct(formdata);
      alert("uploaded");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <form
      action="http://localhost:8080/products"
      method="POST"
      className="upload-container"
      onSubmit={handleSubmit}
    >
      <div
        className="upload-image flex-center"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <h1 className="drag-header">Drag And Drop an image</h1>
        <label htmlFor="image" className="browse-style">
          or upload
        </label>
        <input name="images" type="file" id="image" required multiple />
      </div>
      <div className="upload-info">
        <div className="first">
          <Input
            type="text"
            name="title"
            className="normal-input"
            label="Product Title"
          />
          <Input
            type="text"
            name="color"
            className="normal-input"
            label="Product Color"
          />
          <Input
            type="number"
            name="stock"
            className="normal-input"
            label="Stock"
          />
          <Input
            type="number"
            name="price"
            className="normal-input"
            label="Price"
          />
        </div>
        <div className="sec">
          <label>discription</label>
          <textarea
            className="discription normal-input"
            name="discription"
          ></textarea>
        </div>
        <div className="third">
          <label> Sizes</label>
          <div className="sizes">
            <span>xs</span>
            <span>s</span>
            <span>m</span>
            <span>l</span>
            <span>xl</span>
          </div>
          <div className="sizes">
            <input type="checkbox" value={true} name="xs" />
            <input type="checkbox" value={true} name="s" />
            <input type="checkbox" value={true} name="m" />
            <input type="checkbox" value={true} name="l" />
            <input type="checkbox" value={true} name="xl" />
          </div>
          <select name="category" className="category">
            <option value="women">Womem</option>
            <option value="men">Men</option>
            <option value="kids">Kids</option>
          </select>
        </div>
      </div>
      <button type="submit" className="sub-btn">
        submit
      </button>
    </form>
  );
};
export default Upload;
