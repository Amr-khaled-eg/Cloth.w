import React from "react";
import "./upload.css";
function Upload() {
  function handleDragOver(event) {
    event.preventDefault();
    document.querySelector(".upload-image").classList.add("active");
  }
  function handleDragLeave() {
    document.querySelector(".upload-image").classList.remove("active");
  }
  function handleDrop(event) {
    event.preventDefault();
    document.querySelector("#image").files = event.dataTransfer.files;
    document.querySelector(".upload-image").classList.remove("active");
    console.log(document.querySelector("#image").files);
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
    let imgs = Array.from(form.images.files);
    for (let i = 0; i < imgs.length; i++) {
      formdata.append("images", imgs[i]);
    }
    fetch("http://localhost:8080/products", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch(console.error);
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
        <h1>Drag And Drop an image</h1>
        <label htmlFor="image" className="browse-style">
          or upload
        </label>
        <input name="images" type="file" id="image" required multiple />
      </div>
      <div className="upload-info">
        <div className="first">
          <label>Product Title</label>
          <input type="text" name="title" className="normal-input" />
          <label>Product Color</label>
          <input type="text" name="color" className="normal-input" />
          <label>Stock</label>
          <input type="number" name="stock" className="normal-input" />
          <label>Price</label>
          <input type="number" name="price" className="normal-input" />
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
}
export default Upload;
