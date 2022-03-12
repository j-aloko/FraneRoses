import React, { useState, useEffect, useMemo } from "react";
import Dashboard from "../../Components/AdminDashboard/Dashboard";
import "./Homepage.css";
import axiosInstance from "./../../axios";

function Homepage({ sales, cost }) {
  const Months = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getUserStats = async () => {
      try {
        const res = await axiosInstance.get("user/stats", {});
        const sortedData = res.data.sort(function (a, b) {
          return a._id - b._id;
        });

        sortedData.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: Months[item._id - 1], "New Users": item.total },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getUserStats();
  }, [Months]);

  return (
    <div className="homepageContainer">
      <Dashboard
        sales={sales}
        cost={cost}
        data={userStats}
        title="User Analytics"
        dataKey="New Users"
      />
    </div>
  );
}

export default Homepage;
