import "./ProductsPage.css";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import Footer from "./../Footer/Footer";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import { renderProductsPage } from "./../../Context-Api/Pages/Actions";
import { productsContext } from "./../../Context-Api/Products/Context";
import { getAllProducts, getProducts } from "./../../ApiCalls/Products";
import { useMediaQuery } from "react-responsive";

function ProductsPage() {
  const { dispatch } = useContext(PagesContext);
  const { products, dispatch: productDispatch } = useContext(productsContext);
  const [showMore, setShowMore] = useState(8);
  const [showMore500px, setShowMore500px] = useState(4);
  const location = useLocation();
  const name = location?.pathname.split("/")[2];
  const ismaxWidth500 = useMediaQuery({ query: "(max-width: 500px)" });
  const scrollRef = useRef();

  //autoScroll window to top when this component renders
  useEffect(() => {
    window.scrollTo({
      top: 100,
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
    if (ismaxWidth500) {
      getAllProducts(productDispatch);
    } else {
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
    }
  }, [productDispatch, cat, name, ismaxWidth500]);

  const handleShowMore = (e) => {
    e.preventDefault();
    if (ismaxWidth500) {
      setShowMore500px((prevValue) => prevValue + 4);
    } else {
      setShowMore((prevValue) => prevValue + 4);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [showMore, showMore500px]);

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
              {products
                ?.slice(0, ismaxWidth500 ? showMore500px : showMore)
                .map((p) => (
                  <div className="productsInfo" key={p._id} ref={scrollRef}>
                    <Link to={`/product/${p._id}`} className="links">
                      <img
                        src={p?.img && p?.img[0]}
                        alt=""
                        className="productImg"
                      />
                      <h3 className="productName">{p?.title}</h3>
                      <div className="productPriceWrapper">
                        <span className="productCurrentPrice">
                          GHS{p?.price}
                        </span>
                        <span className="productOldPrice">
                          <del>GHS{p?.oldPrice}</del>
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
            {ismaxWidth500 ? (
              <>
                {products?.length > 0 && showMore500px < products?.length && (
                  <div className="shoMoreButton">
                    <button className="showMore" onClick={handleShowMore}>
                      Show More
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                {products?.length > 0 && showMore < products?.length && (
                  <div className="shoMoreButton">
                    <button className="showMore" onClick={handleShowMore}>
                      Show More
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {(products?.length === showMore ||
        products?.length === showMore500px) && <Footer />}
    </>
  );
}

export default ProductsPage;
