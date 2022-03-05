import "./Featured.css";
import { Link } from "react-router-dom";

function Featured() {
  return (
    <div className="featuredContainer">
      <div className="featuredWrapper">
        <img
          className="featuredBackgroundImage"
          src="/assets/image1.png"
          alt=""
        />
        <div className="featuredCallToAction">
          <span className="featuredDescription">Happiness</span>
          <span className="featuredDescription">Full of Delight</span>
          <Link to="/products/all" className="links">
            <button className="featuredShopNow">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Featured;
