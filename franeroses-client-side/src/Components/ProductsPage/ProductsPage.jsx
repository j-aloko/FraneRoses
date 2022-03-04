import "./ProductsPage.css";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import Footer from "./../Footer/Footer";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import { renderProductsPage } from "./../../Context-Api/Pages/Actions";
import { productsContext } from "./../../Context-Api/Products/Context";
import { getAllProducts, getProducts } from "./../../ApiCalls/Products";

function ProductsPage() {
  const { dispatch } = useContext(PagesContext);
  const { products, dispatch: productDispatch } = useContext(productsContext);
  const location = useLocation();
  const name = location?.pathname.split("/")[2];

  //autoScroll window to top when this component renders
  useEffect(() => {
    window.scrollTo({
      top: 50,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // Whenever this Component renders activate the ProductsPage
  useEffect(() => {
    dispatch(renderProductsPage());
  }, [dispatch]);

  //fetch all products when this component mounts
  const cat = "cat";
  const subCat = "subCat";

  useEffect(() => {
    if (name === "all") {
      getAllProducts(productDispatch);
    } else if (
      name === "Chocolate-Bars" ||
      name === "Chocolate-Dragee" ||
      name === "Drinking-Chocolate" ||
      name === "Choco-Spread-Butter"
    ) {
      getProducts(productDispatch, cat, name);
    } else {
      getProducts(productDispatch, subCat, name);
    }
  }, [productDispatch, cat, name]);

  return (
    <>
      <div className="productsPageContainer">
        <div className="productsPageWrapper">
          <div className="productsPageTop">
            <div className="productsPageTopContents">
              <h1 className="productsPageCategoryTitle">Products</h1>
              <h3 className="productsPageCategoryType">
                {name === "all" ? "Products / All" : `Products / ${name}`}
              </h3>
            </div>
          </div>
          <div className="productsPageDown">
            <div className="productsPageDownContents">
              {products?.map((p) => (
                <div className="productsInfo" key={p._id}>
                  <Link to={`/product/${p._id}`} className="links">
                    <img src={p?.img[0]} alt="" className="productImg" />
                    <h3 className="productName">{p?.title}</h3>
                    <div className="productPriceWrapper">
                      <span className="productCurrentPrice">GHS{p?.price}</span>
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
      <Footer />
    </>
  );
}

export default ProductsPage;
