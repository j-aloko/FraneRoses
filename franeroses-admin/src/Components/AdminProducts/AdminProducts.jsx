import "./AdminProducts.css";
import React, { useEffect, useContext } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { productsContext } from "./../../Context-Api/Products/Context";
import { deleteProduct } from "./../../ApiCalls/Products";
import CircularProgress from "@mui/material/CircularProgress";

function AdminProducts() {
  const { products, dispatch, isFetching } = useContext(productsContext);

  //scroll window to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const columns = [
    {
      field: "title",
      headerName: "PRODUCT",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="AdminProductInfo">
            <img src={params.row?.img[0]} alt="" className="AdminProductImg" />
            <span className="productName">{params.row?.title}</span>
          </div>
        );
      },
    },
    {
      field: "qty",
      headerName: "STOCK",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerAlign: "center",
      align: "center",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="productStatusWrapper">
            <span
              className={
                params.row?.qty === 0
                  ? "productStatusCircle red"
                  : "productStatusCircle"
              }
            ></span>
            <span className="productStatus">
              {params.row?.qty === 0 ? "out of Stock" : params.row?.qty}
            </span>
          </div>
        );
      },
    },
    {
      field: "cost",
      headerName: "COST (GHS)",
      headerClassName: "super-app-theme--header",
      width: 180,
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "price",
      headerName: "PRICE (GHS)",
      headerClassName: "super-app-theme--header",
      width: 160,
      headerAlign: "center",
      align: "center",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "edit",
      headerName: "EDIT",
      headerClassName: "super-app-theme--header",
      width: 160,
      headerAlign: "center",
      align: "center",
      cellClassName: "super-app-theme--cell",
      renderCell: (params) => {
        return (
          <div className="actionWrapper">
            <Link to={`/product/${params.row?._id}`} className="link">
              <span className="Actionedit">Edit</span>
            </Link>
          </div>
        );
      },
    },
    {
      field: "delete",
      headerName: "DELETE",
      headerClassName: "super-app-theme--header",
      width: 200,
      headerAlign: "center",
      align: "center",
      cellClassName: "super-app-theme--cell",
      renderCell: (params) => {
        return (
          <div className="actionWrapper">
            <div
              className="deleteIcon"
              onClick={() => {
                deleteProduct(dispatch, params.row._id);
              }}
            >
              <DeleteForeverIcon
                style={{
                  color: "red",
                  marginLeft: "30px",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="AdminProductsContainer">
      {isFetching ? (
        <div className="circularProgress">
          <CircularProgress
            size={80}
            color="secondary"
            style={{ backgroundColor: "transparent" }}
          />
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          <DataGrid
            autoHeight
            {...products}
            rows={products}
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
      )}
    </div>
  );
}

export default AdminProducts;
