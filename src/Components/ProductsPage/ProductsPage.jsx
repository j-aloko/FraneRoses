import "./ProductsPage.css";
import { Link } from "react-router-dom";
import { products } from "./../../Data";
import { useEffect } from "react";

function ProductsPage() {
  //autoScroll window to top when this component renders
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="productsPageContainer">
      <div className="productsPageWrapper">
        <div className="productsPageTop">
          <div className="productsPageTopContents">
            <h1 className="productsPageCategoryTitle">Products</h1>
            <h3 className="productsPageCategoryType">Home / Products</h3>
          </div>
        </div>
        <div className="productsPageDown">
          <div className="productsPageDownContents">
            {products?.map((p) => (
              <div className="productsInfo" key={p.id}>
                <Link to="/product" className="links">
                  <img src={p?.image} alt="" className="productImg" />
                  <h3 className="productName">{p?.title}</h3>
                  <div className="productPriceWrapper">
                    <span className="productCurrentPrice">
                      GHS{p?.newPrice}
                    </span>
                    <span className="productOldPrice">
                      <del>GHS{p?.oldPrice}</del>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
