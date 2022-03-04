import React from "react";
import "./Navbar.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Badge from "@mui/material/Badge";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="NavbarWrapper">
        <div className="topLeft">
          <span className="logo">FRANEROSES</span>
        </div>
        <div className="topRight">
          <div className="NavbarIcons">
            <Badge badgeContent={4} color="primary" className="badge">
              <NotificationsActiveIcon />
            </Badge>
          </div>
          <div className="profile">
            <img src="/assets/avatar.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
