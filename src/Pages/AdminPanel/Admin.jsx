import { useContext, useEffect } from "react";
import "./Admin.css";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import { renderAdminPage } from "../../Context-Api/Pages/Actions";
import Navbar from "../../Components/Navbar/Navbar";

function Admin() {
  const { dispatch } = useContext(PagesContext);

  // Whenever this Component renders activate the AdminPage
  useEffect(() => {
    dispatch(renderAdminPage());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="adminContainer"> Admin Panel</div>
    </>
  );
}

export default Admin;
