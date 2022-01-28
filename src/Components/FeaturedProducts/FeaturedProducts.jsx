import { featuredProducts } from "../../Data";
import "./FeaturedProducts.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  return (
    <div className="featuredProductsContainer">
      <h1 className="featuredProductsTitle">Featured Products</h1>
      <div className="featuredProductsWrapper">
        {featuredProducts?.map((f) => (
          <div className="featuredProductsImg-SerachIcon" key={f.id}>
            <Link to="/product" className="links">
              <div className="featuredProductsSearchIcon">
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

export default FeaturedProducts;
