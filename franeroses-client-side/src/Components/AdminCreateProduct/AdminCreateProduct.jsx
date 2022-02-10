import "./AdminCreateProduct.css";
import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function AdminCreateProduct() {
  const [file, setFile] = useState();

  //handle image preview

  var fileObj = [];
  var fileArray = [];

  const handlePreview = (e) => {
    fileObj.push(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }
    setFile(fileArray);
  };

  return (
    <div className="createNewProductWrapper">
      <h1 className="addProducts">Add New Product</h1>
      <form className="addProductsForm">
        <label htmlFor="productName" className="CreateProductSelectLabels">
          Select Product
        </label>
        <select
          className="productTitleSelection"
          name="productName"
          id="productName"
        >
          <option value="Kingsbite" className="productTitle">
            Kingsbite
          </option>
          <option value="TQ-Premium-Dark" className="productTitle">
            TQ Premium Dark
          </option>
          <option value="Akuafo-Bar" className="productTitle">
            Akuafo Bar
          </option>
          <option value="Oranco" className="productTitle">
            Oranco
          </option>
          <option value="Pebbles" className="productTitle">
            Pebbles
          </option>
          <option value="Nutty-Chocs" className="productTitle">
            Nutty Chocs
          </option>
          <option value="Alltime" className="productTitle">
            Alltime
          </option>
          <option value="Cocoa-Butter" className="productTitle">
            Cocoa Butter
          </option>
          <option value="Choco-Spread" className="productTitle">
            Chocolate Spread
          </option>
        </select>
        <label htmlFor="category" className="CreateProductSelectLabels">
          Select Category/Categories
        </label>
        <select
          className="addProductCategory"
          name="category"
          id="category"
          multiple
        >
          <option value="Chocolate-Bars" className="categoryItem">
            Chocolate Bars
          </option>
          <option value="Chocolate-Dragee" className="categoryItem">
            Chocolate Dragee
          </option>
          <option value="Drinking-Chocolate" className="categoryItem">
            Drinking Chocolate
          </option>
          <option value="Choco-Spread-Butter" className="categoryItem">
            Choco Spread / Butter
          </option>
        </select>
        <label htmlFor="sizes" className="CreateProductSelectLabels">
          Select Sizes Available
        </label>
        <select className="addProductSize" name="sizes" id="sizes" multiple>
          <option value="100g-Carton">100g Carton</option>
          <option value="100g-Chip-Box">100g Chip-Box</option>
          <option value="50g-Carton">50g Carton</option>
          <option value="50g-Chip-Box">50g Chip-Box</option>
          <option value="20g-Carton">20g Carton</option>
          <option value="20g-Chip-Box">20g Chip-Box</option>
          <option value="500g-Carton">500g Carton</option>
          <option value="500g-Container">500g Container</option>
          <option value="400g-Carton">400g Carton</option>
          <option value="400g-Jar">400g Jar</option>
          <option value="20kg-Bag">20kg Bag</option>
          <option value="350g-Carton">350g Carton</option>
          <option value="35og-Sachet">350g Sachet</option>
          <option value="300g-Carton">300g Carton</option>
          <option value="300g-Sachet">300g Sachet</option>
        </select>
        <textarea
          className="addProductDescription"
          placeholder="Add a description...."
        ></textarea>
        <div className="mediaFilesContainer">
          <div className="media">
            <label htmlFor="files">
              <div className="mediaFilesWrapper">
                <span className="mediaTitle">Upload images</span>
                <CloudUploadIcon style={{ color: "blue" }} />
              </div>
            </label>
            <input
              type="file"
              id="files"
              name="files"
              accept=".jpg, .jpeg, .png"
              multiple
              className="mediaFiles"
              onChange={handlePreview}
            />
          </div>
          <div className="myAddProducts">
            {file?.map((url, index) => (
              <img
                key={index}
                src={url}
                alt=""
                className="productImgsPreview"
              />
            ))}
          </div>
        </div>
        <div className="pricing">
          <input type="number" placeholder="Price" className="priceInput" />
          <input
            type="number"
            placeholder="Compare at price"
            className="priceInput"
          />
        </div>
        <input
          type="number"
          className="costPerItem"
          placeholder="Average cost per product"
        />
        <input type="number" className="quantity" placeholder="Quantity" />
        <button className="createProductButton">Publish</button>
      </form>
    </div>
  );
}

export default AdminCreateProduct;
