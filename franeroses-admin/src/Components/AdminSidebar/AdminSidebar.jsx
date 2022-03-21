import "./AdminSidebar.css";
import React from "react";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import { Link } from "react-router-dom";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import { useContext } from "react";
import {
  renderDashboard,
  renderUsersPage,
  renderProductsPage,
  renderOrdersPage,
} from "./../../Context-Api/Pages/Actions";

function AdminSidebar() {
  const { dashboard, users, products, orders, dispatch } =
    useContext(PagesContext);

  const handlePages = (type) => {
    if (type === "dashboard") {
      dispatch(renderDashboard());
    } else if (type === "users") {
      dispatch(renderUsersPage());
    } else if (type === "products") {
      dispatch(renderProductsPage());
    } else {
      dispatch(renderOrdersPage());
    }
  };

  return (
    <div className="sidebarContainer">
      <div className="sidebarWrapper">
        <ul className="sidebarMenu">
          <Link className="link" to="/">
            <li
              className={
                dashboard ? "sidebarMenuList color" : "sidebarMenuList"
              }
              onClick={() => handlePages("dashboard")}
            >
              <GridViewTwoToneIcon style={{ fontSize: 25 }} />
              <span className="sidebarMenuListPath">Dashboard</span>
            </li>
          </Link>
          <Link className="link" to="/admin-users">
            <li
              className={users ? "sidebarMenuList color" : "sidebarMenuList"}
              onClick={() => handlePages("users")}
            >
              <PersonOutlineTwoToneIcon style={{ fontSize: 25 }} />
              <span className="sidebarMenuListPath">Users</span>
            </li>
          </Link>
          <Link className="link" to="/admin-products">
            <li
              className={products ? "sidebarMenuList color" : "sidebarMenuList"}
              onClick={() => handlePages("products")}
            >
              <StorefrontTwoToneIcon style={{ fontSize: 25 }} />
              <span className="sidebarMenuListPath">Products</span>
            </li>
          </Link>
          <Link className="link" to="/admin-orders">
            <li
              className={orders ? "sidebarMenuList color" : "sidebarMenuList"}
              onClick={() => handlePages("orders")}
            >
              <MonetizationOnTwoToneIcon style={{ fontSize: 25 }} />
              <span className="sidebarMenuListPath">Orders</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default AdminSidebar;
