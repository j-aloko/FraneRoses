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
        <select className="productTitleSelection">
          <option className="productTitle">Choose a Title </option>
          <option value="Kingsbite" className="productTitle">
            Kingsbite
          </option>
          <option value="TQ Premium Dark" className="productTitle">
            TQ Premium Dark
          </option>
          <option value="Akuafo Bar" className="productTitle">
            Akuafo Bar
          </option>
          <option value="Oranco" className="productTitle">
            Oranco
          </option>
          <option value="Pebbles" className="productTitle">
            Pebbles
          </option>
          <option value="Nutty Chocs" className="productTitle">
            Nutty Chocs
          </option>
          <option value="Alltime" className="productTitle">
            Alltime
          </option>
          <option value="Cocoa Butter" className="productTitle">
            Cocoa Butter
          </option>
          <option value="Chocolate Spread" className="productTitle">
            Chocolate Spread
          </option>
        </select>
        <select className="addProductCategory">
          <option>Choose a Category</option>
          <option value="CHOCOLATE BARS" className="categoryItem">
            Chocolate Bars
          </option>
          <option value="CHOCOLATE DRAGEE" className="categoryItem">
            Chocolate Dragee
          </option>
          <option value="DRINKING CHOCOLATE" className="categoryItem">
            Drinking Chocolate
          </option>
          <option value="CHOCO SPREAD / BUTTER" className="categoryItem">
            Choco Spread / Butter
          </option>
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
          <input type="text" placeholder="Price" className="priceInput" />
          <input
            type="text"
            placeholder="Compare at price"
            className="priceInput"
          />
        </div>
        <input
          type="text"
          className="costPerItem"
          placeholder="Cost per Item"
        />
        <input type="number" className="quantity" placeholder="Quantity" />
        <button className="createProductButton">Publish</button>
      </form>
    </div>
  );
}

export default AdminCreateProduct;
