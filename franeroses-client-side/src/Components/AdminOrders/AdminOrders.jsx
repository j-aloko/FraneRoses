import "./AdminOrders.css";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { order } from "../../Data";
import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import OrderDetails from "./../AdminOrderDetails/OrderDetails";

function AdminOrders() {
  const [orderDetails, setOrderDetails] = useState(false);

  const columns = [
    {
      field: "id",
      headerName: "ORDER ID",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      width: 220,
    },
    {
      field: "fullName",
      headerName: "FULLNAME",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      width: 220,
    },
    {
      field: "total",
      headerName: "TOTAL AMOUNT",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerAlign: "center",
      align: "center",
      width: 220,
    },
    {
      field: "status",
      headerName: "STATUS",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerAlign: "center",
      align: "center",
      width: 220,
      renderCell: (params) => {
        return (
          <>
            {params.row.status === "Pending" ? (
              <span className="orderStatus">{params.row.status}....</span>
            ) : (
              <div className="orderFulfilled">
                <span className="orderFulFilled">{params.row.status}</span>
                <CheckIcon />
              </div>
            )}
          </>
        );
      },
    },
    {
      field: "details",
      headerName: "ORDER DETAILS",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      width: 220,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/${params.row.id}`} className="links">
              <span
                className="viewDetails"
                onClick={() => setOrderDetails(true)}
              >
                View Details
              </span>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="adminOrdersContainer">
      {!orderDetails ? (
        <div style={{ height: 700, width: "100%" }}>
          <DataGrid
            rows={order}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            disableSelectionOnClick
            sx={{
              "& .super-app-theme--header": {
                backgroundColor: "#8585d6",
                color: "white",
                fontWeight: "bold",
              },
              "& .super-app-theme--cell": {
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
      ) : (
        <div className="orderDetailsContainer">
          <div className="arrowBack" onClick={() => setOrderDetails(false)}>
            <ArrowRightAltIcon
              style={{
                fontSize: 40,
                color: "black",
                transform: "rotateY(180deg)",
              }}
            />
          </div>
          <OrderDetails />
        </div>
      )}
    </div>
  );
}

export default AdminOrders;
