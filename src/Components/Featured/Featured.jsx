import "./Featured.css";

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
          <button className="featuredShopNow">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
