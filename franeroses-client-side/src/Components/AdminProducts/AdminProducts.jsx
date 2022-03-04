import "./AdminProducts.css";
import React, { useState, useEffect, useContext } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AdminEditProduct from "./../AdminEditProduct/AdminEditProduct";
import AdminCreateProduct from "./../AdminCreateProduct/AdminCreateProduct";
import { productsContext } from "./../../Context-Api/Products/Context";
import { getAllProducts } from "../../ApiCalls/Products";
import { deleteProduct } from "./../../ApiCalls/Products";

function AdminProducts() {
  const [editProduct, setEditProduct] = useState(false);
  const [createNewProduct, setCreateNewProduct] = useState(false);
  const { products, dispatch } = useContext(productsContext);

  //scroll window to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //fetch all products when this component mounts

  useEffect(() => {
    getAllProducts(dispatch);
  }, [dispatch]);

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
      width: 160,
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
      field: "status",
      headerName: "STATUS",
      headerClassName: "super-app-theme--header",
      width: 160,
      cellClassName: "super-app-theme--cell",
      renderCell: (params) => {
        return (
          <div className="productStatusWrapper">
            <span
              className={
                params.row?.status === "passive"
                  ? "productStatusCircle red"
                  : "productStatusCircle"
              }
            ></span>
            <span className="productStatus">{params.row?.status}</span>
          </div>
        );
      },
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
      headerName: "Edit",
      headerClassName: "super-app-theme--header",
      width: 160,
      headerAlign: "center",
      align: "center",
      cellClassName: "super-app-theme--cell",
      renderCell: (params) => {
        return (
          <div className="actionWrapper">
            <Link to={`/admin/${params.row?._id}`} className="links">
              <span className="Actionedit" onClick={() => setEditProduct(true)}>
                Edit
              </span>
            </Link>
          </div>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      headerClassName: "super-app-theme--header",
      width: 180,
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
      {!editProduct ? (
        <div style={{ height: 700, width: "100%" }}>
          <DataGrid
            rows={products}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
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
                <h1 className="editProductTitle">Update Product</h1>
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
