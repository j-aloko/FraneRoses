import { useContext } from "react";
import "./Body.css";
import HomePage from "./../HomePage/HomePage";
import Categories from "./../Categories/Categories";
import ChocolatePage from "./../ChocolatePage/ChocolatePage";
import BlogPage from "./../BlogPage/BlogPage";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import CircularProgress from "@mui/material/CircularProgress";
import Admin from "./../AdminPanel/Admin";

function Body() {
  const { homePage, categories, chocolate, blog, admin } =
    useContext(PagesContext);

  if (homePage) {
    return (
      <div>
        <HomePage />
      </div>
    );
  } else if (categories) {
    return (
      <div>
        <Categories />
      </div>
    );
  } else if (chocolate) {
    return (
      <div>
        <ChocolatePage />
      </div>
    );
  } else if (blog) {
    return (
      <div>
        <BlogPage />
      </div>
    );
  } else if (admin) {
    return (
      <div>
        <Admin />
      </div>
    );
  }
  return (
    <div className="bodyProgressBar">
      <CircularProgress color="success" style={{ marginTop: "100px" }} />
    </div>
  );
}

export default Body;
