import { useContext, useEffect } from "react";
import "./BlogPage.css";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import { renderBlogPage } from "../../Context-Api/Pages/Actions";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";

function BlogPage() {
  const { dispatch } = useContext(PagesContext);

  // Whenever this Component renders activate the AdminPage
  useEffect(() => {
    dispatch(renderBlogPage());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="blogContainer">BlogPage</div>
      <Footer />
    </>
  );
}

export default BlogPage;
