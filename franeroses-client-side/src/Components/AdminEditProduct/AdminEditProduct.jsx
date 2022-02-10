import "./AdminEditProduct.css";
import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function AdminEditProduct() {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState("/assets/100g.jpg");

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
    <div className="editProductWrapper">
      <div className="editProductTop">
        <div className="editProductProfile">
          <img src="/assets/100g.jpg" alt="" className="editProductImg" />
          <div className="editProductName">Kingsbite</div>
        </div>
        <div className="editProductInfo">
          <div className="editProductInfoItem">
            <span className="editProductLineItem">Sales:</span>
            <span className="editProductLineItem2">569</span>
          </div>
          <div className="editProductInfoItem">
            <span className="editProductLineItem">Active:</span>
            <span className="editProductLineItem2">Yes</span>
          </div>
          <div className="editProductInfoItem">
            <span className="editProductLineItem">In stock:</span>
            <span className="editProductLineItem2">Yes</span>
          </div>
        </div>
      </div>
      <div className="editProductDown">
        <div className="editProductDownLeft">
          <form className="editProductForms">
            <textarea
              type="text"
              className="editProductInput"
              name="description"
              placeholder="Update product description...."
            ></textarea>
            <div className="editProductPrice">
              <input
                type="number"
                className="editPriceItem"
                placeholder="Update current price...."
              />
              <input
                type="number"
                className="editPriceItem"
                placeholder="Update old price...."
              />
            </div>
            <input
              type="number"
              className="updateCostPerProduct"
              placeholder="Update average cost per prod..."
            />
            <input
              type="number"
              className="editProductQuantity"
              placeholder="Update quantity"
            />
            <label htmlFor="sizes" className="CreateProductSelectLabels">
              Update Sizes Available
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
            <div className="editProductFormInputs">
              <label htmlFor="instock">In stock</label>
              <select className="editProductSelectItem">
                <option value="in stock">Yes</option>
                <option value="out of stock">No</option>
              </select>
            </div>
            <div className="editProductFormInputs">
              <label htmlFor="active">Active</label>
              <select className="editProductSelectItem">
                <option value="active">Yes</option>
                <option value="passive">No</option>
              </select>
            </div>
          </form>
        </div>
        <div className="editProductDownRight">
          <div className="editProductRightUpload">
            <img src={preview} alt="" className="editProductRightImg" />
            <div className="uploadUpdateImgs">
              <label htmlFor="file">
                <CloudUploadIcon style={{ color: "blue", cursor: "pointer" }} />
              </label>
              <input
                type="file"
                id="file"
                name="files"
                accept=".jpg, .jpeg, .png"
                multiple
                className="uploadEditedProductInput"
                onChange={handlePreview}
              />
            </div>
          </div>
          <div className="updateImgsPreview">
            {file?.map((url, index) => (
              <img
                key={index}
                src={url}
                alt=""
                className="EditImgsPreview"
                onClick={() => setPreview(url)}
              />
            ))}
          </div>
          <button className="updateProductButton">Update</button>
        </div>
      </div>
    </div>
  );
}

export default AdminEditProduct;
