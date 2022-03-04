import React from "react";
import "./Homepage.css";
import BodyHeader from "./../../Components/BodyHeader/BodyHeader";
import BodyChart from "./../../Components/BodyChart/BodyChart";
import BodyWidgets from "./../../Components/BodyWidget/BodyWidgets";

function Homepage() {
  return (
    <div className="homepageContainer">
      <BodyHeader />
      <BodyChart />
      <BodyWidgets />
    </div>
  );
}

export default Homepage;
