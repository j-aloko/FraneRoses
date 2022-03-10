import "./AdminSidebar.css";
import React from "react";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="sidebarContainer">
      <div className="sidebarWrapper">
        <ul className="sidebarMenu">
          <Link className="link" to="/">
            <li className="sidebarMenuList">
              <GridViewTwoToneIcon style={{ fontSize: 25 }} />
              <span className="sidebarMenuListPath">Dashboard</span>
            </li>
          </Link>
          <Link className="link" to="/admin-users">
            <li className="sidebarMenuList">
              <PersonOutlineTwoToneIcon style={{ fontSize: 25 }} />
              <span className="sidebarMenuListPath">Users</span>
            </li>
          </Link>
          <Link className="link" to="/admin-products">
            <li className="sidebarMenuList">
              <StorefrontTwoToneIcon style={{ fontSize: 25 }} />
              <span className="sidebarMenuListPath">Products</span>
            </li>
          </Link>
          <Link className="link" to="/admin-orders">
            <li className="sidebarMenuList">
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
