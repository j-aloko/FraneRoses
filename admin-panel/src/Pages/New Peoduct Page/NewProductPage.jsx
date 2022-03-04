import React from "react";
import "./NewProductPage.css";

function NewProductPage() {
  return (
    <div className="newProductPage">
      <h1 className="newProductTitle">New Product</h1>
      <div className="uploadContainer">
        <label htmlFor="file">Image</label>
        <input type="file" id="file" />
      </div>
      <form action="" className="uploadForm">
        <div className="uploadItem">
          <label>Name</label>
          <input type="text" placeholder="chocolate" />
        </div>
        <div className="uploadItem">
          <label>Stock</label>
          <input type="text" placeholder="125" />
        </div>
        <div className="uploadItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="createNewProduct">Create</button>
      </form>
    </div>
  );
}

export default NewProductPage;
