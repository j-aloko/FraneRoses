import "./HomePage.css";
import Featured from "./../../Components/Featured/Featured";
import About from "./../../Components/About-Us/About";
import FeaturedProducts from "./../../Components/FeaturedProducts/FeaturedProducts";
import { useContext, useEffect } from "react";
import Footer from "./../../Components/Footer/Footer";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import { renderHomePage } from "./../../Context-Api/Pages/Actions";

function HomePage() {
  const { dispatch } = useContext(PagesContext);

  //autoScroll window to top when this component renders
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // Whenever this Component renders activate the homepage
  useEffect(() => {
    dispatch(renderHomePage());
  }, [dispatch]);

  return (
    <>
      <main className="homePageContainer">
        <div className="homePageWrapper">
          <Featured />
          <About />
          <FeaturedProducts />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
