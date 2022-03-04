import React from "react";
import "./SingleProductPage.css";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { productData } from "./../../Components/DummyData/DummyData";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";

function SingleProductPage() {
  return (
    <div className="singleProductPage">
      <div className="productAndButtonWrapper">
        <h2 className="productTitle">Product</h2>
        <Link to="/newProduct">
          <button className="createProduct">Create</button>
        </Link>
      </div>
      <div className="ChartAndProductInfo">
        <div className="chartContainer">
          <h3 className="chartTitle">Sales Performance</h3>
          <ResponsiveContainer width="100%" aspect={4 / 0.5}>
            <LineChart data={productData}>
              <XAxis dataKey="name" stroke="#5550bd" />
              <Tooltip />
              <Line type="monotone" dataKey="Sales" stroke="#5550bd" />
              <Line type="monotone" dataKey="Sales" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="productInfo">
          <div className="productProfile">
            <img
              src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg"
              alt=""
              className="productImage"
            />
            <span className="productTitle">Chocolate</span>
          </div>
          <div className="productDetailss">
            <div className="productId">
              <span className="id">id:</span>
              <span className="productAmount">123</span>
            </div>
            <div className="poductSales">
              <span className="sales">sales:</span>
              <span className="salesAmount">5123</span>
            </div>
            <div className="activeProduct">
              <span className="active">active:</span>
              <span className="statuss">yes</span>
            </div>
            <div className="productStock">
              <span className="inStock">in stock:</span>
              <span className="statusss">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="updateWrapper">
        <div className="updateInfo">
          <form action="" className="formContainer">
            <div className="productItem">
              <label>Product Name</label>
              <input type="text" placeholder="Chocolate" />
            </div>
            <div className="productItem">
              <label>In Stock</label>
              <select name="instock" id="instock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="productItem">
              <label>Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </form>
        </div>
        <div className="imageAndButtonWrapper">
          <div className="imageAndIcon">
            <img
              src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg"
              alt=""
              className="updateImage"
            />
            <label htmlFor="file">
              <PublishIcon className="publishIcon" />
            </label>
            <input type="file" id="file" style={{ display: "none" }} />
          </div>
          <button className="updateButton">Update</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
