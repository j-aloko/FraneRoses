import "./ProductsPage.css";

function ProductsPage({ products }) {
  return (
    <div className="productsPageContainer">
      <div className="productsPageWrapper">
        <div className="productsPageTop">
          <div className="productsPageTopContents">
            <h1 className="productsPageCategoryTitle">Dark Chocolate</h1>
            <h3 className="productsPageCategoryType">
              Premium / Dark Chocolate
            </h3>
          </div>
        </div>
        <div className="productsPageDown">
          <div className="productsPageDownContents">
            {products?.map((p) => (
              <div className="productsInfo" key={p.id}>
                <img src={p?.image} alt="" className="productImg" />
                <h3 className="productName">{p?.title}</h3>
                <div className="productPriceWrapper">
                  <span className="productCurrentPrice">GHS{p?.newPrice}</span>
                  <span className="productOldPrice">
                    <del>GHS{p?.oldPrice}</del>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
