import "./AdminSidebar.css";
import React, { useContext } from "react";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import { adminPagesContext } from "./../../Context-Api/AdminPages/Context";
import {
  renderAdminHomePage,
  renderAdminUsersPage,
  renderAdminProductsPage,
  renderAdminOrderPage,
} from "./../../Context-Api/AdminPages/Action";

function AdminSidebar() {
  const { dispatch, home, users, products, order } =
    useContext(adminPagesContext);

  const handleActivate = (type) => {
    if (type === "home") {
      dispatch(renderAdminHomePage());
    } else if (type === "users") {
      dispatch(renderAdminUsersPage());
    } else if (type === "products") {
      dispatch(renderAdminProductsPage());
    } else if (type === "order") {
      dispatch(renderAdminOrderPage());
    } else {
      dispatch(renderAdminHomePage());
    }
  };

  return (
    <div className="sidebarContainer">
      <div className="sidebarWrapper">
        <ul className="sidebarMenu">
          <li
            className={home ? "sidebarMenuList activate" : "sidebarMenuList"}
            onClick={() => handleActivate("home")}
          >
            <GridViewTwoToneIcon style={{ fontSize: 25 }} />
            <span className="sidebarMenuListPath">Dashboard</span>
          </li>
          <li
            className={users ? "sidebarMenuList activate" : "sidebarMenuList"}
            onClick={() => handleActivate("users")}
          >
            <PersonOutlineTwoToneIcon style={{ fontSize: 25 }} />
            <span className="sidebarMenuListPath">Users</span>
          </li>
          <li
            className={
              products ? "sidebarMenuList activate" : "sidebarMenuList"
            }
            onClick={() => handleActivate("products")}
          >
            <StorefrontTwoToneIcon style={{ fontSize: 25 }} />
            <span className="sidebarMenuListPath">Products</span>
          </li>
          <li
            className={order ? "sidebarMenuList activate" : "sidebarMenuList"}
            onClick={() => handleActivate("order")}
          >
            <MonetizationOnTwoToneIcon style={{ fontSize: 25 }} />
            <span className="sidebarMenuListPath">Orders</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminSidebar;
