import { useContext, useEffect } from "react";
import "./Admin.css";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import { renderAdminPage } from "../../Context-Api/Pages/Actions";
import AdminSidebar from "./../../Components/AdminSidebar/AdminSidebar";
import AdminContent from "./../../Components/AdminContent/AdminContent";

function Admin() {
  const { dispatch } = useContext(PagesContext);

  // Whenever this Component renders activate the AdminPage
  useEffect(() => {
    dispatch(renderAdminPage());
  }, [dispatch]);

  return (
    <div className="adminContainer">
      <div className="adminWrapper">
        <div className="adminSidebar">
          <AdminSidebar />
        </div>
        <div className="adminContent">
          <AdminContent />
        </div>
      </div>
    </div>
  );
}

export default Admin;
