import React from "react";
import Dashboard from "../../Components/AdminDashboard/Dashboard";
import "./Homepage.css";

function Homepage({ sales, cost, transaction }) {
  return (
    <div className="homepageContainer">
      <Dashboard sales={sales} cost={cost} transaction={transaction} />
    </div>
  );
}

export default Homepage;
