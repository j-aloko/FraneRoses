import "./AdminProducts.css";
import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import { products } from "../../Data";
import { DataGrid } from "@mui/x-data-grid";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AdminEditProduct from "./../AdminEditProduct/AdminEditProduct";
import AdminCreateProduct from "./../AdminCreateProduct/AdminCreateProduct";

function AdminProducts() {
  const [editProduct, setEditProduct] = useState(false);
  const [createNewProduct, setCreateNewProduct] = useState(false);
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
            <img src={params.row.image} alt="" className="AdminProductImg" />
            <span className="productName">{params.row.title}</span>
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "STOCK",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerAlign: "center",
      align: "center",
      width: 200,
    },
    {
      field: "status",
      headerName: "STATUS",
      headerClassName: "super-app-theme--header",
      width: 170,
      cellClassName: "super-app-theme--cell",
      renderCell: (params) => {
        return (
          <div className="productStatusWrapper">
            <span
              className={
                params.row.status === "passive"
                  ? "productStatusCircle red"
                  : "productStatusCircle"
              }
            ></span>
            <span className="productStatus">{params.row.status}</span>
          </div>
        );
      },
    },
    {
      field: "newPrice",
      headerName: "PRICE",
      headerClassName: "super-app-theme--header",
      width: 200,
      headerAlign: "center",
      align: "center",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "action",
      headerName: "ACTION",
      headerClassName: "super-app-theme--header",
      width: 250,
      headerAlign: "center",
      align: "center",
      cellClassName: "super-app-theme--cell",
      renderCell: (params) => {
        return (
          <div className="actionWrapper">
            <Link to={`/admin/${params.row.id}`} className="links">
              <span className="Actionedit" onClick={() => setEditProduct(true)}>
                Edit
              </span>
            </Link>
            <DeleteForeverIcon
              style={{
                color: "red",
                marginLeft: "30px",
                cursor: "pointer",
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="AdminProductsContainer">
      {!editProduct ? (
        <div style={{ height: 700, width: "100%" }}>
          <DataGrid
            rows={products}
            columns={columns}
            pageSize={10}
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
        <>
          {!createNewProduct ? (
            <div className="editProductContainer">
              <div className="arrowBack" onClick={() => setEditProduct(false)}>
                <ArrowRightAltIcon
                  style={{
                    fontSize: 40,
                    color: "black",
                    transform: "rotateY(180deg)",
                  }}
                />
              </div>
              <div className="editProductTitleCreate">
                <h1 className="editProductTitle">Product</h1>
                <button
                  className="createNewProduct"
                  onClick={() => setCreateNewProduct(true)}
                >
                  Create
                </button>
              </div>
              <AdminEditProduct />
            </div>
          ) : (
            <div className="createNewProductContainer">
              <div
                className="arrowBack"
                onClick={() => setCreateNewProduct(false)}
              >
                <ArrowRightAltIcon
                  style={{
                    fontSize: 40,
                    color: "black",
                    transform: "rotateY(180deg)",
                  }}
                />
              </div>
              <AdminCreateProduct />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AdminProducts;
