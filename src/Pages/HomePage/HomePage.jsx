import "./HomePage.css";
import Featured from "./../../Components/Featured/Featured";
import About from "./../../Components/About-Us/About";
import FeaturedProducts from "./../../Components/FeaturedProducts/FeaturedProducts";
import { useEffect } from "react";

function HomePage() {
  //autoScroll window to top when this component renders
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

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
