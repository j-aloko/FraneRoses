import "./AdminContent.css";

import React from "react";
import { useContext } from "react";
import { adminPagesContext } from "./../../Context-Api/AdminPages/Context";
import Dashboard from "./../AdminDashboard/Dashboard";
import Users from "./../Users/Users";
import AdminProducts from "./../AdminProducts/AdminProducts";

function AdminContent() {
  const { home, users, products, order } = useContext(adminPagesContext);

  if (home) {
    return (
      <>
        <Dashboard />
      </>
    );
  } else if (users) {
    return (
      <>
        <Users />
      </>
    );
  } else if (products) {
    return (
      <>
        <AdminProducts />
      </>
    );
  } else if (order) {
    return <>Order</>;
  } else {
    return (
      <>
        <Dashboard />
      </>
    );
  }
}

export default AdminContent;
