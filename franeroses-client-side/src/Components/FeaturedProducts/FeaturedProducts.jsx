import React, { useEffect, useState } from "react";
import "./FeaturedProducts.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useCallback, useContext } from "react";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import { renderProductsPage } from "./../../Context-Api/Pages/Actions";
import { productsContext } from "./../../Context-Api/Products/Context";
import { getAllProducts } from "../../ApiCalls/Products";

function FeaturedProducts() {
  const { dispatch } = useContext(PagesContext);
  const { products, dispatch: productDispatch } = useContext(productsContext);
  const [items, setItems] = useState([]);

  const RenderPages = useCallback(() => {
    dispatch(renderProductsPage());
  }, [dispatch]);

  //fetch random products when this component mounts

  useEffect(() => {
    getAllProducts(productDispatch);
  }, [productDispatch]);

  useEffect(() => {
    setItems(products?.sort(() => Math.random() - Math.random()).slice(0, 4));
  }, [products]);

  return (
    <div className="featuredProductsContainer">
      <h1 className="featuredProductsTitle">Featured Products</h1>
      <div className="featuredProductsWrapper">
        {items?.map((item) => (
          <div className="featuredProductsImg-SerachIcon" key={item?._id}>
            <Link to={`/product/${item?._id}`} className="links">
              <div className="featuredProductsSearchIcon" onClick={RenderPages}>
                <SearchOutlinedIcon
                  style={{ fontSize: 40, marginLeft: "6px", marginTop: "6px" }}
                />
              </div>
            </Link>
            <img src={item?.img[0]} alt="" className="featuredProductsImg" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(FeaturedProducts);
