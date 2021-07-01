import React from "react";
import "./upload.css";
import Input from "../input/input";
import FlexDiv from "../FlexDiv/FlexDiv";
import Header from "../Header/Header";
import { uploadProduct } from "../../services/products";
const makeImgFromImage = (image) => {
  const img = document.createElement("img");
  img.src = URL.createObjectURL(image);
  img.classList.add("preview-img");
  return img;
};
const onFileChange = (e) => {
  const father = e.target.parentElement;
  const grandFather = father.parentElement;
  father.style.display = "none";
  grandFather.append(makeImgFromImage(e.target.files[0]));
};
const onDragLeave = (e) => {
  e.target.classList.remove("active");
};
const onDragOver = (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("upload-image")) {
    return;
  }
  e.target.classList.add("active");
};
const handleDrop = (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("upload-image")) {
    return;
  }
  e.target.files = null;
  const files = e.dataTransfer.files;
  e.target.children[e.target.children.length - 1].files = files;
  e.target.style.display = "none";
  e.target.parentElement.append(makeImgFromImage(files[0]));
};
const Upload = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = document.querySelector(".upload-container");
    const formdata = new FormData();
    formdata.append("name", form.title.value);
    formdata.append("description", form.description.value);
    formdata.append("price", form.price.value);
    formdata.append("category", form.category.value);
    formdata.append("stock", form.stock.value);
    formdata.append("color", form.color.value);
    formdata.append("keywords", form.keywords.value);
    document.querySelectorAll("input[type=checkbox]").forEach((input) => {
      if (input.checked) {
        formdata.append("sizes", input.name);
      }
    });
    let imgs = Array.from(form.images);
    for (let i = 0; i < imgs.length; i++) {
      if (!imgs[i].files[0]) {
        alert("Please Choose 3 images");
        return;
      }
      formdata.append("images", imgs[i].files[0]);
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
      <FlexDiv mode="rsb">
        <div>
          <Header size="md">Image 1</Header>
          <div
            className="upload-image flex-center"
            onDrop={handleDrop}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
          >
            <Header size="sm" className="drag-header">
              Drag And Drop
            </Header>
            <label htmlFor="image1" className="browse-style">
              browse
            </label>
            <input
              onChange={onFileChange}
              name="images"
              type="file"
              id="image1"
            />
          </div>
        </div>
        <div>
          <Header size="md">Image 2</Header>
          <div
            className="upload-image flex-center"
            onDrop={handleDrop}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
          >
            <Header size="sm" className="drag-header">
              Drag And Drop
            </Header>
            <label htmlFor="image2" className="browse-style">
              browse
            </label>
            <input
              onChange={onFileChange}
              name="images"
              type="file"
              id="image2"
            />
          </div>
        </div>
        <div>
          <Header size="md">Image 3</Header>
          <div
            className="upload-image flex-center"
            onDrop={handleDrop}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
          >
            <Header size="sm" className="drag-header">
              Drag And Drop
            </Header>
            <label htmlFor="image3" className="browse-style">
              browse
            </label>
            <input
              onChange={onFileChange}
              name="images"
              type="file"
              id="image3"
            />
          </div>
        </div>
      </FlexDiv>

      <FlexDiv className="upload-info">
        <FlexDiv mode="c" className="first">
          <Input
            type="text"
            name="title"
            className="normal-input"
            label="Product Title"
            required
          />
          <Input
            type="text"
            name="color"
            className="normal-input"
            label="Product Color"
            required
          />
          <Input
            type="number"
            name="stock"
            className="normal-input"
            label="Stock"
            required
          />
          <Input
            type="number"
            name="price"
            className="normal-input"
            label="Price"
            required
          />
        </FlexDiv>
        <div className="sec">
          <label>discription</label>
          <textarea
            className="discription normal-input"
            name="description"
          ></textarea>
          <Input
            type="text"
            name="keywords"
            className="normal-input"
            label="Keywords"
            required
          />
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
      </FlexDiv>
      <button type="submit" className="sub-btn">
        submit
      </button>
    </form>
  );
};
export default Upload;
