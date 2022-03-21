import "./AdminEditProduct.css";
import React, { useState, useEffect, useCallback, useContext } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { productsContext } from "./../../Context-Api/Products/Context";
import { updateProducts } from "../../ApiCalls/Products";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowDownwardTwoToneIcon from "@mui/icons-material/ArrowDownwardTwoTone";
import ArrowUpwardTwoToneIcon from "@mui/icons-material/ArrowUpwardTwoTone";
import axiosInstance from "./../../axios";

function AdminEditProduct() {
  const [files, setFiles] = useState([]);
  const [item, setItem] = useState({});
  const [img, setImg] = useState([]);
  const [update, setUpdate] = useState();
  const [preview, setPreview] = useState();
  const { products, dispatch } = useContext(productsContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [sales, setSales] = useState([]);
  const [monthlySales, setMonthlySales] = useState({});
  const [prevMonthsSales, setPrevMonthsSales] = useState({});

  //handle image preview

  var fileObj = [];
  var fileArray = [];

  const handlePreview = (e) => {
    fileObj.push(e.target.files);
    setFiles(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }
    setPreview(fileArray);
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
    if (img.length >= 1) {
      setUpdate((prev) => ({ ...prev, img: img }));
    }
  }, [img]);

  const handleInputs = useCallback(
    (e) => {
      const value = e.target.value;
      setUpdate({ ...update, [e.target.name]: value });
    },
    [update]
  );

  //get single product when this component mounts

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    setItem(products?.find((product) => product?._id === path));
  }, [products, path]);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateProducts(dispatch, path, update);
      setError(false);
      setSuccess(true);
      setLoading(false);
      navigate("/admin-products");
    } catch {
      setError(true);
    }
  };

  //get monthly sales of this Item

  const todaysMonth = new Date().getMonth() + 1;

  const prevMonth = new Date().getMonth();

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await axiosInstance.get(`order/income?pid=${path}`);
        setSales(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getIncome();
  }, [path]);

  //get current month sales
  useEffect(() => {
    setMonthlySales(sales?.find((s) => s?._id === todaysMonth));
  }, [sales, todaysMonth]);

  //get prev Months sales

  useEffect(() => {
    setPrevMonthsSales(sales?.find((s) => s?._id === prevMonth));
  }, [sales, prevMonth]);

  return (
    <div className="editProductWrapper">
      <Link className="link" to="/new-product">
        <div className="createNew">
          <button className="createProduct">Create</button>
        </div>
      </Link>
      <div className="editProductTop">
        <div className="editProductProfile">
          <img
            src={item?.img && item?.img[0]}
            alt="product"
            className="editProductImg"
          />
          <div className="editProductName">{item?.title}</div>
        </div>
        <div className="editProductInfo">
          <span className="monthlyStats">Monthly Stats</span>
          <span className="lastMonth">Compared to last Month</span>
          <div className="editProductInfoItem">
            <span className="editProductLineItem">Sales:</span>
            <span className="editProductLineItem2">
              {monthlySales?.total || 0}
            </span>
            <div className="comparedToLastMonth">
              {(monthlySales?.total ? monthlySales?.total : 0) >
                (prevMonthsSales?.total ? prevMonthsSales?.total : 0) && (
                <ArrowUpwardTwoToneIcon style={{ color: "green" }} />
              )}
              {(monthlySales?.total ? monthlySales?.total : 0) <
                (prevMonthsSales?.total ? prevMonthsSales?.total : 0) && (
                <ArrowDownwardTwoToneIcon style={{ color: "red" }} />
              )}
              <span className="diffenceFigure">
                {prevMonthsSales?.total
                  ? Math.round(
                      ((((monthlySales?.total ? monthlySales?.total : 0) -
                        prevMonthsSales?.total) /
                        prevMonthsSales?.total) *
                        (100 / 100) +
                        Number.EPSILON) *
                        100
                    ) / 100
                  : null}
              </span>
            </div>
          </div>
          <div className="editProductInfoItem">
            <span className="editProductLineItem">Active:</span>
            <span className="editProductLineItem2">
              {item?.status === "active" ? "Yes" : "No"}
            </span>
          </div>
          <div className="editProductInfoItem">
            <span className="editProductLineItem">In stock:</span>
            <span className="editProductLineItem2">
              {item?.qty > 0 ? "Yes" : "No"}
            </span>
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
              className="editProductQuantity"
              name="qty"
              id="qty"
              onChange={handleInputs}
              placeholder="Update quantity"
            />
            <input
              type="number"
              className="updateCostPerProduct"
              name="cost"
              id="cost"
              onChange={handleInputs}
              placeholder="Update cost per quantity"
            />
            <div className="editProductFormInputs">
              <select
                className="editProductSelectItem"
                onChange={handleInputs}
                name="status"
                id="status"
              >
                <option>Update product status</option>
                <option value="active">Active</option>
                <option value="passive">Passive</option>
              </select>
            </div>
          </form>
        </div>
        <div className="editProductDownRight">
          <div className="editProductRightUpload">
            <img
              src={(preview && preview) || (item?.img && item?.img[0])}
              alt="product"
              className="editProductRightImg"
            />
            <div className="uploadUpdateImgs">
              <label htmlFor="files">
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
            {preview?.map((url, index) => (
              <img key={index} src={url} alt="" className="EditImgsPreview" />
            ))}
          </div>
          <button className="updateProductButton" onClick={updateProduct}>
            {loading ? (
              <CircularProgress
                size={15}
                color="success"
                style={{ backgroundColor: "transparent" }}
              />
            ) : (
              "Update"
            )}
          </button>
          {success && (
            <span className="upload-success">Updated successfully</span>
          )}
          {error && <span className="upload-error">update Failed</span>}
        </div>
      </div>
    </div>
  );
}

export default React.memo(AdminEditProduct);
