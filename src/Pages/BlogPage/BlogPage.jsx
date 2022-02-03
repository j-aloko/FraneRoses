import { useContext, useEffect } from "react";
import "./BlogPage.css";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import { renderBlogPage } from "../../Context-Api/Pages/Actions";

function BlogPage() {
  const { dispatch } = useContext(PagesContext);

  // Whenever this Component renders activate the AdminPage
  useEffect(() => {
    dispatch(renderBlogPage());
  }, [dispatch]);

  return <div className="blogContainer">BlogPage</div>;
}

export default BlogPage;
