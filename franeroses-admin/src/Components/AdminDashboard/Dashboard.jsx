import "./Dashboard.css";
import React, { useEffect } from "react";
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
import { latestTransaction } from "./../../Data";

function Dashboard() {
  //scroll window to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Data Grid
  const columns = [
    {
      field: "customer",
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
            <span className="customerName">{params.row.customer}</span>
          </div>
        );
      },
    },
    {
      field: "date",
      headerName: "DATE",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-date--cell",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "amount",
      headerName: "AMOUNT (GHS)",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-amount--cell",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "summary",
      headerName: "SUMMARY",
      headerClassName: "super-app-theme--header",
      width: 330,
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
              <h1 className="dashboardAmt">$2,454</h1>
              <div className="percentageDifference">
                <span className="percentage">-12</span>
                <ArrowDownwardTwoToneIcon style={{ color: "red" }} />
              </div>
            </div>
            <span className="comparedTo">Compared to last month</span>
          </div>
          <div className="dashboardLineItems">
            <span className="lineItemTitle">Sales</span>
            <div className="lineItems">
              <h1 className="dashboardAmt">$5,354</h1>
              <div className="percentageDifference">
                <span className="percentage">-12</span>
                <ArrowDownwardTwoToneIcon style={{ color: "red" }} />
              </div>
            </div>
            <span className="comparedTo">Compared to last month</span>
          </div>
          <div className="dashboardLineItems">
            <span className="lineItemTitle">Cost</span>
            <div className="lineItems">
              <h1 className="dashboardAmt">$2,024</h1>
              <div className="percentageDifference">
                <span className="percentage">-12</span>
                <ArrowUpwardTwoToneIcon style={{ color: "green" }} />
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
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={latestTransaction}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
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
