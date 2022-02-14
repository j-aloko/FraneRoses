import "./AdminCreateProduct.css";
import React, { useState, useEffect, useCallback } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axiosInstance from "./../../axios";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

function AdminCreateProduct() {
  const [previewFiles, setPreviewFiles] = useState();
  const [files, setFiles] = useState([]);
  const [img, setImg] = useState([]);
  const [product, setProduct] = useState({});
  const [displayVariant, setDisplayVariant] = useState(false);
  const [displayVariant2, setDisplayVariant2] = useState(false);
  const [displayVariant3, setDisplayVariant3] = useState(false);
  const [displayVariant4, setDisplayVariant4] = useState(false);
  const [displayVariant5, setDisplayVariant5] = useState(false);
  const [variant, setVariant] = useState([]);
  const [productInfo, setProductInfo] = useState({});

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

  const handleProductInfo = (e) => {
    const value = e.target.value;
    setProductInfo((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVariant((prev) => [...prev, productInfo]);
    setProduct((prev) => ({ ...prev, variant: variant }));

    /*try {
        const res = await axiosInstance.post("products", product);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }*/
  };

  //displaying multiple variant option

  const handleVariant = (type) => {
    if (type === 1) {
      setDisplayVariant(!displayVariant);
    } else if (type === 2) {
      setDisplayVariant2(!displayVariant2);
      setVariant((prev) => [...prev, productInfo]);
    } else if (type === 3) {
      setDisplayVariant3(!displayVariant3);
      setVariant((prev) => [...prev, productInfo]);
    } else if (type === 4) {
      setDisplayVariant4(!displayVariant4);
      setVariant((prev) => [...prev, productInfo]);
    } else {
      setDisplayVariant5(!displayVariant5);
      setVariant((prev) => [...prev, productInfo]);
    }
  };

  console.log(variant);
  console.log(product);

  //Scroll window into view when any of the variants are displayed
  useEffect(() => {
    if (
      displayVariant ||
      displayVariant2 ||
      displayVariant3 ||
      displayVariant4 ||
      displayVariant5
    ) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [
    displayVariant,
    displayVariant2,
    displayVariant3,
    displayVariant4,
    displayVariant5,
  ]);

  //Removing variants

  const RemoveVariant = (type) => {
    if (type === 1) {
      setDisplayVariant(!displayVariant);
    } else if (type === 2) {
      setDisplayVariant2(!displayVariant2);
    } else if (type === 3) {
      setDisplayVariant3(!displayVariant3);
    } else if (type === 4) {
      setDisplayVariant4(!displayVariant4);
    } else {
      setDisplayVariant5(!displayVariant5);
    }
  };

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
          <option value="50g-Carton">50g Carton</option>
          <option value="20g-Carton">20g Carton</option>
          <option value="500g-Carton">500g Carton</option>
          <option value="400g-Carton">400g Carton</option>
          <option value="20kg-Bag">20kg Bag</option>
          <option value="350g-Carton">350g Carton</option>
          <option value="300g-Carton">300g Carton</option>
        </select>
        <label htmlFor="volumes" className="CreateProductSelectLabels">
          Select Volume
        </label>
        <select
          className="addVolumes"
          name="volumes"
          id="volumes"
          multiple
          onChange={handleSelectSizes}
        >
          <option value="Carton">Carton</option>
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
        <div className="productVariantsWrapper">
          <h3 className="productVariantsTitle">Variants</h3>
          {displayVariant ? (
            <div className="deleteVariant" onClick={() => RemoveVariant(1)}>
              <DeleteIcon style={{ marginRight: "20px" }} />
              <span className="addVariantDesc">Remove variant</span>
            </div>
          ) : (
            <div className="addVariant" onClick={() => handleVariant(1)}>
              <AddIcon style={{ marginRight: "20px" }} />
              <span className="addVariantDesc">Add a variant</span>
            </div>
          )}
          <div
            className={
              displayVariant ? "productVariants show" : "productVariants"
            }
          >
            <select
              className="variantName"
              name="name"
              id="name"
              onChange={handleProductInfo}
            >
              <option>Choose variant</option>
              <option value="100g-Carton">100g </option>
              <option value="50g-Carton">50g </option>
              <option value="20g-Carton">20g </option>
              <option value="500g-Carton">500g </option>
              <option value="400g-Carton">400g </option>
              <option value="20kg-Bag">20kg Bag</option>
              <option value="350g-Carton">350g </option>
              <option value="300g-Carton">300g </option>
            </select>
            <input
              type="number"
              placeholder="Price"
              name="price"
              id="price"
              className="priceInput"
              onChange={handleProductInfo}
            />
            <input
              type="number"
              placeholder="Compare at price"
              className="priceInput"
              name="oldPrice"
              id="oldPrice"
              onChange={handleProductInfo}
            />
            <input
              type="number"
              className="costPerItem"
              placeholder="Average cost per product"
              name="cost"
              id="cost"
              onChange={handleProductInfo}
            />
            <input
              type="number"
              className="quantity"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              onChange={handleProductInfo}
            />
            <hr className="variantHorizontalLine" />
          </div>
          {displayVariant2 ? (
            <div className="deleteVariant" onClick={() => RemoveVariant(2)}>
              <DeleteIcon style={{ marginRight: "20px" }} />
              <span className="addVariantDesc">Remove variant</span>
            </div>
          ) : (
            <div
              className={displayVariant ? "addVariant2 show" : "addVariant2"}
              onClick={() => handleVariant(2)}
            >
              <AddIcon style={{ marginRight: "20px" }} />
              <span className="addVariantDesc">Add another variant</span>
            </div>
          )}
          <div
            className={
              displayVariant2 ? "productVariants2 show" : "productVariants2"
            }
          >
            <select
              className="variantName"
              name="name"
              id="name"
              onChange={handleProductInfo}
            >
              <option>Choose variant</option>
              <option value="100g-Carton">100g </option>
              <option value="50g-Carton">50g </option>
              <option value="20g-Carton">20g </option>
              <option value="500g-Carton">500g </option>
              <option value="400g-Carton">400g </option>
              <option value="20kg-Bag">20kg Bag</option>
              <option value="350g-Carton">350g </option>
              <option value="300g-Carton">300g </option>
            </select>
            <input
              type="number"
              placeholder="Price"
              name="price"
              id="price"
              className="priceInput"
              onChange={handleProductInfo}
            />
            <input
              type="number"
              placeholder="Compare at price"
              className="priceInput"
              name="oldPrice"
              id="oldPrice"
              onChange={handleProductInfo}
            />
            <input
              type="number"
              className="costPerItem"
              placeholder="Average cost per product"
              name="cost"
              id="cost"
              onChange={handleProductInfo}
            />
            <input
              type="number"
              className="quantity"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              onChange={handleProductInfo}
            />
            <hr className="variantHorizontalLine" />
          </div>
          {displayVariant3 ? (
            <div className="deleteVariant" onClick={() => RemoveVariant(3)}>
              <DeleteIcon style={{ marginRight: "20px" }} />
              <span className="addVariantDesc">Remove variant</span>
            </div>
          ) : (
            <div
              className={displayVariant2 ? "addVariant3 show" : "addVariant3"}
              onClick={() => handleVariant(3)}
            >
              <AddIcon style={{ marginRight: "20px" }} />
              <span className="addVariantDesc">Add another variant</span>
            </div>
          )}
          <div
            className={
              displayVariant3 ? "productVariants3 show" : "productVariants3"
            }
          >
            <select
              className="variantName"
              name="name"
              id="name"
              onChange={handleProductInfo}
            >
              <option>Choose variant</option>
              <option value="100g-Carton">100g </option>
              <option value="50g-Carton">50g </option>
              <option value="20g-Carton">20g </option>
              <option value="500g-Carton">500g </option>
              <option value="400g-Carton">400g </option>
              <option value="20kg-Bag">20kg Bag</option>
              <option value="350g-Carton">350g </option>
              <option value="300g-Carton">300g </option>
            </select>
            <input
              type="number"
              placeholder="Price"
              name="price"
              id="price"
              className="priceInput"
              onChange={handleProductInfo}
            />
            <input
              type="number"
              placeholder="Compare at price"
              className="priceInput"
              name="oldPrice"
              id="oldPrice"
              onChange={handleProductInfo}
            />
            <input
              type="number"
              className="costPerItem"
              placeholder="Average cost per product"
              name="cost"
              id="cost"
              onChange={handleProductInfo}
            />
            <input
              type="number"
              className="quantity"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              onChange={handleProductInfo}
            />
            <hr className="variantHorizontalLine" />
          </div>
          {displayVariant4 ? (
            <div className="deleteVariant" onClick={() => RemoveVariant(4)}>
              <DeleteIcon style={{ marginRight: "20px" }} />
              <span className="addVariantDesc">Remove variant</span>
            </div>
          ) : (
            <div
              className={displayVariant3 ? "addVariant4 show" : "addVariant4"}
              onClick={() => handleVariant(4)}
            >
              <AddIcon style={{ marginRight: "20px" }} />
              <span className="addVariantDesc">Add another variant</span>
            </div>
          )}
          <div
            className={
              displayVariant4 ? "productVariants4 show" : "productVariants4"
            }
          >
            <select
              className="variantName"
              name="name"
              id="name"
              onChange={handleProductInfo}
            >
              <option>Choose variant</option>
              <option value="100g-Carton">100g </option>
              <option value="50g-Carton">50g </option>
              <option value="20g-Carton">20g </option>
              <option value="500g-Carton">500g </option>
              <option value="400g-Carton">400g </option>
              <option value="20kg-Bag">20kg Bag</option>
              <option value="350g-Carton">350g </option>
              <option value="300g-Carton">300g </option>
            </select>
            <input
              type="number"
              placeholder="Price"
              name="price"
              id="price"
              className="priceInput"
              onChange={handleProductInfo}
            />
            <input
              type="number"
              placeholder="Compare at price"
              className="priceInput"
              name="oldPrice"
              id="oldPrice"
              onChange={handleProductInfo}
            />
            <input
              type="number"
              className="costPerItem"
              placeholder="Average cost per product"
              name="cost"
              id="cost"
              onChange={handleProductInfo}
            />
            <input
              type="number"
              className="quantity"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              onChange={handleProductInfo}
            />
            <hr className="variantHorizontalLine" />
          </div>
          {displayVariant5 ? (
            <div className="deleteVariant" onClick={() => RemoveVariant(5)}>
              <DeleteIcon style={{ marginRight: "20px" }} />
              <span className="addVariantDesc">Remove variant</span>
            </div>
          ) : (
            <div
              className={displayVariant4 ? "addVariant5 show" : "addVariant5"}
              onClick={() => handleVariant(5)}
            >
              <AddIcon style={{ marginRight: "20px" }} />
              <span className="addVariantDesc">Add another variant</span>
            </div>
          )}
          <div
            className={
              displayVariant5 ? "productVariants5 show" : "productVariants5"
            }
          >
            <select
              className="variantName"
              name="name"
              id="name"
              onChange={handleProductInfo}
            >
              <option>Choose variant</option>
              <option value="100g-Carton">100g </option>
              <option value="50g-Carton">50g </option>
              <option value="20g-Carton">20g </option>
              <option value="500g-Carton">500g </option>
              <option value="400g-Carton">400g </option>
              <option value="20kg-Bag">20kg Bag</option>
              <option value="350g-Carton">350g </option>
              <option value="300g-Carton">300g </option>
            </select>
            <input
              type="number"
              placeholder="Price"
              name="price"
              id="price"
              className="priceInput"
              onChange={handleProductInfo}
            />
            <input
              type="number"
              placeholder="Compare at price"
              className="priceInput"
              name="oldPrice"
              id="oldPrice"
              onChange={handleProductInfo}
            />
            <input
              type="number"
              className="costPerItem"
              placeholder="Average cost per product"
              name="cost"
              id="cost"
              onChange={handleProductInfo}
            />
            <input
              type="number"
              className="quantity"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              onChange={handleProductInfo}
            />
            <hr className="variantHorizontalLine" />
          </div>
        </div>
        <button className="createProductButton" onClick={handleSubmit}>
          Publish
        </button>
      </form>
    </div>
  );
}

export default React.memo(AdminCreateProduct);
