import React from "react";
import { featuredProducts } from "../../Data";
import "./FeaturedProducts.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useCallback, useContext } from "react";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import { renderProductsPage } from "./../../Context-Api/Pages/Actions";

function FeaturedProducts() {
  const { dispatch } = useContext(PagesContext);
  const RenderPages = useCallback(() => {
    dispatch(renderProductsPage());
  }, [dispatch]);

  return (
    <div className="featuredProductsContainer">
      <h1 className="featuredProductsTitle">Featured Products</h1>
      <div className="featuredProductsWrapper">
        {featuredProducts?.map((f) => (
          <div className="featuredProductsImg-SerachIcon" key={f.id}>
            <Link to="/product/:name" className="links">
              <div className="featuredProductsSearchIcon" onClick={RenderPages}>
                <SearchOutlinedIcon
                  style={{ fontSize: 40, marginLeft: "6px", marginTop: "6px" }}
                />
              </div>
            </Link>
            <img src={f.image} alt="" className="featuredProductsImg" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(FeaturedProducts);
