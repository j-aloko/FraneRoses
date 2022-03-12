import React, { useContext } from "react";
import "./Navbar.css";
import { authContext } from "./../../Context-Api/Authentication/Context";
import { logout } from "./../../ApiCalls/Auth";

function Navbar() {
  const { user, dispatch } = useContext(authContext);

  const handleLogout = () => {
    logout(dispatch);
  };

  return (
    <div className="Navbar">
      <div className="NavbarWrapper">
        <div className="topLeft">
          <span className="logo">FRANEROSES DASHBOARD</span>
        </div>
        {user?.isAdmin && (
          <div className="logout" onClick={handleLogout}>
            <span className="logoutUser">Logout</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
