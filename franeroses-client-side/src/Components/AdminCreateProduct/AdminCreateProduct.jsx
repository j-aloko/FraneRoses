import "./AdminCreateProduct.css";
import React, { useState, useEffect, useCallback } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axiosInstance from "./../../axios";

function AdminCreateProduct() {
  const [previewFiles, setPreviewFiles] = useState();
  const [files, setFiles] = useState([]);
  const [img, setImg] = useState([]);
  const [product, setProduct] = useState({});

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

  const handleSelectSizes = useCallback(
    (e) => {
      let value = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setProduct({ ...product, [e.target.name]: value });
    },
    [product]
  );
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const res = await axiosInstance.post("products", product);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    [product]
  );

  return (
    <div className="createNewProductWrapper">
      <h1 className="addProducts">Add New Product</h1>
      <form className="addProductsForm" encType="multipart/form-data">
        <label htmlFor="productName" className="CreateProductSelectLabels">
          Select Product
        </label>
        <select
          className="productTitleSelection"
          name="title"
          id="title"
          onChange={handleInputs}
        >
          <option>Product name</option>
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
          Select Category
        </label>
        <select
          className="addProductCategory"
          name="category"
          id="category"
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
        <label htmlFor="sizes" className="CreateProductSelectLabels">
          Select Sizes Available
        </label>
        <select
          className="addProductSize"
          name="size"
          id="size"
          multiple
          onChange={handleSelectSizes}
        >
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
          name="desc"
          id="desc"
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
        <div className="pricing">
          <input
            type="number"
            placeholder="Price"
            name="price"
            id="price"
            className="priceInput"
            onChange={handleInputs}
          />
          <input
            type="number"
            placeholder="Compare at price"
            className="priceInput"
            name="oldPrice"
            id="oldPrice"
            onChange={handleInputs}
          />
        </div>
        <input
          type="number"
          className="costPerItem"
          placeholder="Average cost per product"
          name="cost"
          id="cost"
          onChange={handleInputs}
        />
        <input
          type="number"
          className="quantity"
          name="quantity"
          id="quantity"
          placeholder="Quantity"
          onChange={handleInputs}
        />
        <button className="createProductButton" onClick={handleSubmit}>
          Publish
        </button>
      </form>
    </div>
  );
}

export default React.memo(AdminCreateProduct);
