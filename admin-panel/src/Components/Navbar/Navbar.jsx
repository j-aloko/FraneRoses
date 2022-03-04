import React from "react";
import "./Navbar.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Badge from "@mui/material/Badge";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="NavbarWrapper">
        <div className="topLeft">
          <span className="logo">JOEY ADMIN</span>
        </div>
        <div className="topRight">
          <div className="NavbarIcons">
            <Badge badgeContent={4} color="primary" className="badge">
              <NotificationsActiveIcon />
            </Badge>
            <Badge badgeContent={4} color="primary" className="badge">
              <LanguageIcon />
            </Badge>
            <SettingsIcon className="badge" />
          </div>
          <div className="profile">
            <img
              src="https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/239010802_2268619123272208_5192183763001864507_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeEllOw66HL25A-BfC-6qHSwztvF6W8c76LO28XpbxzvovStCok20-AlH_t4WlH68xuoW9FY3Wup_k5bRpllVwP5&_nc_ohc=Z1keEdNFGggAX9_-QN8&_nc_ht=scontent.facc5-1.fna&oh=318f4c4a1516a48986eec36f5fd0175b&oe=61A7976A"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
