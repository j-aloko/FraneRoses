import "./Dashboard.css";
import React, { useEffect, useState } from "react";
import ArrowDownwardTwoToneIcon from "@mui/icons-material/ArrowDownwardTwoTone";
import ArrowUpwardTwoToneIcon from "@mui/icons-material/ArrowUpwardTwoTone";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { userData } from "./../../Data";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";

function Dashboard({ sales, cost, transaction }) {
  const [monthlyCost, setMonthlyCost] = useState({});
  const [monthlySales, setMonthlySales] = useState({});
  const [prevMonthsCost, setPrevMonthsCost] = useState({});
  const [prevMonthsSales, setPrevMonthsSales] = useState({});

  //scroll window to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const todaysMonth = new Date().getMonth() + 1;

  const prevMonth = new Date().getMonth();

  //get current month cost
  useEffect(() => {
    setMonthlyCost(cost?.find((c) => c?._id === todaysMonth));
  }, [cost, todaysMonth]);

  //get current month sales
  useEffect(() => {
    setMonthlySales(sales?.find((s) => s?._id === todaysMonth));
  }, [sales, todaysMonth]);

  //current months revenue
  const monthlyRevenue = monthlySales?.total - monthlyCost?.total;

  //get prev Months cost

  useEffect(() => {
    setPrevMonthsCost(cost?.find((c) => c?._id === prevMonth));
  }, [cost, prevMonth]);

  //get prev Months sales

  useEffect(() => {
    setPrevMonthsSales(sales?.find((s) => s?._id === prevMonth));
  }, [sales, prevMonth]);

  //prev months revenue
  const prevMonthlyRevenue = prevMonthsSales?.total - prevMonthsCost?.total;

  //Data Grid
  const columns = [
    {
      field: "fullname",
      headerName: "CUSTOMER",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-customer--cell",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="customerInfo">
            <img
              src={params.row.img || "/assets/avatar.png"}
              alt=""
              className="customerImg"
            />
            <span className="customerName">{params.row.fullname}</span>
          </div>
        );
      },
    },
    {
      field: "createdAt",
      headerName: "DATE",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-date--cell",
      width: 250,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return <div>{moment(params.row.createdAt).fromNow()}</div>;
      },
    },
    {
      field: "total",
      headerName: "AMOUNT (GHS)",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-amount--cell",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: "SUMMARY",
      headerClassName: "super-app-theme--header",
      width: 200,
      headerAlign: "center",
      align: "center",
      cellClassName: "super-app-theme--cell",
    },
  ];

  return (
    <div className="dashboardContainer">
      <div className="dashboardWrapper">
        <div className="dashboardWidget">
          <div className="dashboardLineItems">
            <span className="lineItemTitle">Revenue</span>
            <div className="lineItems">
              <h2 className="dashboardAmt">GHS {monthlyRevenue || 0}</h2>
              <div className="percentageDifference">
                <span className="percentage">
                  {prevMonthlyRevenue
                    ? Math.round(
                        (((monthlyRevenue - prevMonthlyRevenue) /
                          prevMonthlyRevenue) *
                          (100 / 100) +
                          Number.EPSILON) *
                          100
                      ) / 100
                    : null}
                </span>
                {monthlyRevenue > prevMonthlyRevenue && (
                  <ArrowUpwardTwoToneIcon style={{ color: "green" }} />
                )}
                {monthlyRevenue < prevMonthlyRevenue && (
                  <ArrowDownwardTwoToneIcon style={{ color: "red" }} />
                )}
              </div>
            </div>
            <span className="comparedTo">Compared to last month</span>
          </div>
          <div className="dashboardLineItems">
            <span className="lineItemTitle">Sales</span>
            <div className="lineItems">
              <h2 className="dashboardAmt">GHS {monthlySales?.total || 0}</h2>
              <div className="percentageDifference">
                <span className="percentage">
                  {prevMonthsSales?.total
                    ? Math.round(
                        (((monthlySales?.total - prevMonthsSales?.total) /
                          prevMonthsSales?.total) *
                          (100 / 100) +
                          Number.EPSILON) *
                          100
                      ) / 100
                    : null}
                </span>
                {monthlySales?.total > prevMonthsSales?.total && (
                  <ArrowUpwardTwoToneIcon style={{ color: "green" }} />
                )}
                {monthlySales?.total < prevMonthsSales?.total && (
                  <ArrowDownwardTwoToneIcon style={{ color: "red" }} />
                )}
              </div>
            </div>
            <span className="comparedTo">Compared to last month</span>
          </div>
          <div className="dashboardLineItems">
            <span className="lineItemTitle">Cost</span>
            <div className="lineItems">
              <h2 className="dashboardAmt">GHS {monthlyCost?.total || 0}</h2>
              <div className="percentageDifference">
                <span className="percentage">
                  {prevMonthsCost?.total
                    ? Math.round(
                        (((monthlyCost?.total - prevMonthsCost?.total) /
                          prevMonthsCost?.total) *
                          (100 / 100) +
                          Number.EPSILON) *
                          100
                      ) / 100
                    : null}
                </span>
                {monthlyCost?.total > prevMonthsCost?.total && (
                  <ArrowUpwardTwoToneIcon style={{ color: "red" }} />
                )}
                {monthlyCost?.total < prevMonthsCost?.total && (
                  <ArrowDownwardTwoToneIcon style={{ color: "green" }} />
                )}
              </div>
            </div>
            <span className="comparedTo">Compared to last month</span>
          </div>
        </div>
        <div className="dashboardUserAnalytics">
          <h1 className="chartTitle">User Analytics</h1>
          <ResponsiveContainer width={"100%"} height={"auto"} aspect={4 / 0.5}>
            <LineChart data={userData}>
              <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#5550bd" />
              <Tooltip />
              <Line type="monotone" dataKey="Active Users" stroke="#5550bd" />
              <Line type="monotone" dataKey="Active Users" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="dashboardLatestTransactions">
          <h1 className="latestTransaction">Latest Transactions</h1>
          <div style={{ width: "100%" }}>
            <DataGrid
              autoHeight
              {...transaction}
              rows={transaction}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
              getRowId={(r) => r._id}
              sx={{
                "& .super-app-theme--cell": {
                  color: "green",
                  fontSize: "16px",
                  fontWeight: "500",
                  backgroundColor: "#dedee0",
                  "&:hover": {
                    backgroundColor: "#d0d4db",
                  },
                },
                "& .super-app-theme--header": {
                  backgroundColor: "#8585d6",
                  color: "white",
                  fontWeight: "bold",
                },
                "& .super-app-customer--cell": {
                  fontSize: "16px",
                  color: "#04061f",
                  fontWeight: "500",
                  backgroundColor: "#dedee0",
                  "&:hover": {
                    backgroundColor: "#d0d4db",
                  },
                },
                "& .super-app-amount--cell": {
                  fontSize: "16px",
                  color: "#04061f",
                  fontWeight: "500",
                  backgroundColor: "#dedee0",
                  "&:hover": {
                    backgroundColor: "#d0d4db",
                  },
                },
                "& .super-app-date--cell": {
                  fontSize: "16px",
                  color: "#04061f",
                  fontWeight: "500",
                  backgroundColor: "#dedee0",
                  "&:hover": {
                    backgroundColor: "#d0d4db",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
