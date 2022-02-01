import "./AdminContent.css";

import React from "react";
import { useContext } from "react";
import { adminPagesContext } from "./../../Context-Api/AdminPages/Context";
import Dashboard from "./../AdminDashboard/Dashboard";

function AdminContent() {
  const { home, users, products, order } = useContext(adminPagesContext);

  if (home) {
    return (
      <>
        <Dashboard />
      </>
    );
  } else if (users) {
    return <>users</>;
  } else if (products) {
    return <>Products</>;
  } else if (order) {
    return <>Order</>;
  } else {
    return <><Dashboard /></>;
  }
}

export default AdminContent;
