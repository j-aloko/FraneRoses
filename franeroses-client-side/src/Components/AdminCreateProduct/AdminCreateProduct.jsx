import "./AdminCreateProduct.css";
import React, { useState, useEffect, useCallback } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function AdminCreateProduct() {
  const [previewFiles, setPreviewFiles] = useState();
  const [files, setFiles] = useState([]);
  const [img, setImg] = useState([]);
  const [product, setProduct] = useState();

  //handle image preview

  var fileObj = [];
  var fileArray = [];

  const handlePreview = (e) => {
    fileObj.push(e.target.files);
    setFiles(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }
    setPreviewFiles(fileArray);
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

  // Create a new product

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

  /*const handleSelectSizes = useCallback(
    (e) => {
      let value = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setProduct({ ...product, [e.target.name]: value });
    },
    [product]
  );*/

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <div className="createNewProductWrapper">
      <h1 className="addProducts">Add New Product</h1>
      <form className="addProductsForm" onSubmit={handleSubmit}>
        <select
          className="productTitleSelection"
          name="title"
          id="title"
          onChange={handleInputs}
          required
        >
          <option>Select a product </option>
          <option value="Kingsbite 100g" className="productTitle">
            Kingsbite 100g
          </option>
          <option value="Kingsbite 50g" className="productTitle">
            Kingsbite 50g
          </option>
          <option value="Kingsbite 20g" className="productTitle">
            Kingsbite 20g
          </option>
          <option value="Akuafo-Bar 100g" className="productTitle">
            Akuafo Bar 100g
          </option>
          <option value="Akuafo-Bar 50g" className="productTitle">
            Akuafo Bar 50g
          </option>
          <option value="Akuafo-Bar 20g" className="productTitle">
            Akuafo Bar 20g
          </option>
          <option value="Oranco 100g" className="productTitle">
            Oranco 100g
          </option>
          <option value="Oranco 50g" className="productTitle">
            Oranco 50g
          </option>
          <option value="Oranco 20g" className="productTitle">
            Oranco 20g
          </option>
          <option value="TQ-Premium-Dark 90%" className="productTitle">
            TQ Premium Dark 90%
          </option>
          <option value="TQ-Premium-Dark 80%" className="productTitle">
            TQ Premium Dark 80%
          </option>
          <option value="TQ-Premium-Dark 70%" className="productTitle">
            TQ Premium Dark 70%
          </option>
          <option value="Pebbles" className="productTitle">
            Pebbles
          </option>
          <option value="Nutty-Chocs" className="productTitle">
            Nutty Chocs
          </option>
          <option value="Alltime-Regular" className="productTitle">
            Alltime Regular
          </option>
          <option value="Alltime-Low Sugar" className="productTitle">
            Alltime Low Sugar
          </option>
          <option value="Alltime-Coffee" className="productTitle">
            Alltime Coffee
          </option>
          <option value="Cocoa-Butter" className="productTitle">
            Cocoa Butter
          </option>
          <option value="Choco Delight " className="productTitle">
            Chocolate Delight
          </option>
          <option value="Choco Spread - Almond " className="productTitle">
            Chocolate Spread Almond
          </option>
          <option value="Choco Spread - Hazel Nut " className="productTitle">
            Chocolate Spread Hazle Nut
          </option>
          <option value="Choco Spread - Sugar Free " className="productTitle">
            Chocolate Spread Sugar Free
          </option>
        </select>
        <select
          className="addProductCategory"
          name="category"
          id="category"
          required
          onChange={handleInputs}
        >
          <option>Categories</option>
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
        <select
          className="addProductCategory"
          name="subCategory"
          id="subCategory"
          required
          onChange={handleInputs}
        >
          <option>Select a sub-category</option>
          <option value="Kingsbite" className="categoryItem">
            Kingsbite
          </option>
          <option value="Oranco" className="categoryItem">
            Oranco
          </option>
          <option value="Akuafo" className="categoryItem">
            Akuafo
          </option>
          <option value="TQ Premium Dark" className="categoryItem">
            TQ Premium Dark
          </option>
          <option value="Alltime" className="categoryItem">
            Alltime
          </option>
          <option value="Royale" className="categoryItem">
            Royale
          </option>
          <option value="Pebbles" className="categoryItem">
            Pebbles
          </option>
          <option value="Nutty Chocs" className="categoryItem">
            Nutty Chocs
          </option>
          <option value="Chocolate Spread" className="categoryItem">
            Chocolate Spread
          </option>
          <option value="Butter" className="categoryItem">
            Butter
          </option>
        </select>
        <textarea
          className="addProductDescription"
          placeholder="Add a description...."
          name="desc"
          id="desc"
          required
          onChange={handleInputs}
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
              required
              className="mediaFiles"
              onChange={handlePreview}
            />
          </div>
          <div className="myAddProducts">
            {previewFiles?.map((url, index) => (
              <img
                key={index}
                src={url}
                alt=""
                className="productImgsPreview"
              />
            ))}
          </div>
        </div>
        <div className="priceInputWrapper">
          <input
            type="number"
            className="priceInput"
            name="price"
            id="price"
            required
            placeholder="Current Price"
            onChange={handleInputs}
          />
          <input
            type="number"
            className="priceInput"
            placeholder="Previous Price"
            name="oldPrice"
            id="oldPrice"
            required
            onChange={handleInputs}
          />
        </div>
        <input
          type="text"
          className="costPerItem"
          placeholder="Cost of per Item"
          name="cost"
          id="cost"
          required
          onChange={handleInputs}
        />
        <input
          type="number"
          className="quantity"
          placeholder="Quantity in stock"
          name="qty"
          id="qty"
          required
          onChange={handleInputs}
        />
        <div className="create">
          <button className="createProductButton" type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}

export default React.memo(AdminCreateProduct);
