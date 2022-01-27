import "./Categories.css";
import ProductsPage from "./../../Components/ProductsPage/ProductsPage";
import { products } from "./../../Data";

function Categories() {
  return (
    <div className="categoriesContainer">
      <div className="categoriesWrapper">
        <ProductsPage products={products} />
      </div>
    </div>
  );
}

export default Categories;
