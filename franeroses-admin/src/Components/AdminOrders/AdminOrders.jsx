import "./AdminOrders.css";
import React, { useEffect, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import { ordersContext } from "./../../Context-Api/Order/Context";

function AdminOrders() {
  const { orders } = useContext(ordersContext);

  //scroll window to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const columns = [
    {
      field: "_id",
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
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <div>
            {params.row.userInfo?.firstName} {params.row.userInfo?.lastName}
          </div>
        );
      },
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
      field: "delivery",
      headerName: "DELIVERY STATUS",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerAlign: "center",
      align: "center",
      width: 220,
      renderCell: (params) => {
        return (
          <>
            {params.row.delivery === "Pending" ? (
              <span className="orderStatus">{params.row.delivery}....</span>
            ) : (
              <div className="orderFulfilled">
                <span className="orderFulFilled">{params.row.delivery}</span>
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
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order-detail/${params.row._id}`} className="link">
              <span className="viewDetails">View Details</span>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="adminOrdersContainer">
      <div style={{ width: "100%" }}>
        <DataGrid
          autoHeight
          {...orders}
          rows={orders}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          disableSelectionOnClick
          getRowId={(r) => r._id}
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
    </div>
  );
}

export default AdminOrders;
