import "./AdminEditProduct.css";
import React, { useState, useEffect, useCallback } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function AdminEditProduct() {
  const [files, setFiles] = useState();
  const [img, setImg] = useState([]);
  const [product, setProduct] = useState();
  const [preview, setPreview] = useState("/assets/100g.jpg");

  //handle image preview

  var fileObj = [];
  var fileArray = [];

  const handlePreview = (e) => {
    fileObj.push(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }
    setFiles(fileArray);
  };

  //handle upload to cloudinary

  const url = "https://api.cloudinary.com/v1_1/demo/image/upload";

  useEffect(() => {
    const formData = new FormData();
    if (files) {
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        formData.append("file", file);
        formData.append("upload_preset", "docs_upload_example_us_preset");
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setImg((prev) => [...prev, data?.url]);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }, [files]);

  useEffect(() => {
    setProduct((prev) => ({ ...prev, img: img }));
  }, [img]);

  const handleInputs = useCallback(
    (e) => {
      const value = e.target.value;
      setProduct({ ...product, [e.target.name]: value });
    },
    [product]
  );

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
              name="desc"
              id="desc"
              onChange={handleInputs}
              placeholder="Update product description...."
            ></textarea>
            <div className="editProductPrice">
              <input
                type="number"
                className="editPriceItem"
                name="price"
                id="price"
                onChange={handleInputs}
                placeholder="Update current price...."
              />
              <input
                type="number"
                className="editPriceItem"
                name="oldPrice"
                id="oldPrice"
                onChange={handleInputs}
                placeholder="Update old price...."
              />
            </div>
            <input
              type="number"
              className="updateCostPerProduct"
              name="cost"
              id="cost"
              onChange={handleInputs}
              placeholder="Update average cost per prod..."
            />
            <input
              type="number"
              className="editProductQuantity"
              name="qty"
              id="qty"
              onChange={handleInputs}
              placeholder="Update quantity"
            />
            <div className="editProductFormInputs">
              <label htmlFor="instock">In stock</label>
              <select
                className="editProductSelectItem"
                onChange={handleInputs}
                name="inStock"
                id="inStock"
              >
                <option>Update stock status</option>
                <option value="in stock">Yes</option>
                <option value="out of stock">No</option>
              </select>
            </div>
            <div className="editProductFormInputs">
              <label htmlFor="active">Active</label>
              <select
                className="editProductSelectItem"
                onChange={handleInputs}
                name="status"
                id="status"
              >
                <option>Update active status</option>
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
                id="files"
                name="files"
                accept=".jpg, .jpeg, .png"
                multiple
                className="uploadEditedProductInput"
                onChange={handlePreview}
              />
            </div>
          </div>
          <div className="updateImgsPreview">
            {files?.map((url, index) => (
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

export default React.memo(AdminEditProduct);
