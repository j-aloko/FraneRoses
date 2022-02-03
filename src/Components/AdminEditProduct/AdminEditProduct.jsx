import "./AdminEditProduct.css";
import React from "react";
import PublishIcon from "@mui/icons-material/Publish";

function AdminEditProduct() {
  return (
    <div className="editProductWrapper">
      <div className="editProductTop">
        <div className="editProductProfile">
          <img src="/assets/100g.jpg" alt="" className="editProductImg" />
          <div className="editProductName">Kingsbite 100g</div>
        </div>
        <div className="editProductInfo">
          <div className="editProductInfoItem">
            <span className="editProductLineItem">Id:</span>
            <span className="editProductLineItem2">
              23665665489993348996666
            </span>
          </div>
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
            <div className="editProductFormInputs">
              <label htmlFor="title">Product Name</label>
              <input
                type="text"
                className="editProductInput"
                name="title"
                placeholder="Kingsbite"
              />
            </div>
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
            <img
              src="/assets/100g.jpg"
              alt=""
              className="editProductRightImg"
            />
            <PublishIcon />
          </div>
          <button className="updateProductButton">Update</button>
        </div>
      </div>
    </div>
  );
}

export default AdminEditProduct;
