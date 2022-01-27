import "./HomePage.css";
import Featured from "./../../Components/Featured/Featured";
import About from "./../../Components/About-Us/About";
import FeaturedProducts from "./../../Components/FeaturedProducts/FeaturedProducts";

function HomePage() {
  return (
    <div className="homePageContainer">
      <div className="homePageWrapper">
        <Featured />
        <About />
        <FeaturedProducts />
      </div>
    </div>
  );
}

export default HomePage;
