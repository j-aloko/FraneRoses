import React, { useState, useEffect, useMemo, useContext } from "react";
import Dashboard from "../../Components/AdminDashboard/Dashboard";
import "./Homepage.css";
import axiosInstance from "./../../axios";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import { renderDashboard } from "./../../Context-Api/Pages/Actions";

function Homepage() {
  const [sales, setSales] = useState([]);
  const [cost, setCost] = useState([]);
  const { dispatch } = useContext(PagesContext);

  useEffect(() => {
    dispatch(renderDashboard());
  }, [dispatch]);

  //get monthly sales
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await axiosInstance.get("order/income");
        setSales(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getIncome();
  }, []);

  //get monthly cost
  useEffect(() => {
    const getCost = async () => {
      try {
        const res = await axiosInstance.get("products/cost");
        setCost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCost();
  }, []);

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
