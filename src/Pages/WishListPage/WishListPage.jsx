import { useEffect } from "react";
import "./WishListPage.css";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./../../Data";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Footer from "./../../Components/Footer/Footer";

function WishListPage() {
  //autoScroll window to top when this component renders
  useEffect(() => {
    window.scrollTo({
      top: 50,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "product",
      headerName: "PRODUCT NAME",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="productRow">
            <img src={params.row.img} alt="" className="productRowImg" />
            <span className="productRowName">{params.row.product}</span>
          </div>
        );
      },
    },
    {
      field: "size",
      headerName: "SIZE",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "quantity",
      headerName: "QTY",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "PRICE (GHS)",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "date",
      headerName: "DATE ADDED",
      width: 150,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "status",
      headerName: "STATUS",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="productStatus">
            {params.row.status === "in stock" ? (
              <>
                <CheckIcon style={{ color: "green" }} />
                <span className="stockStatus">{params.row.status}</span>
              </>
            ) : (
              <>
                <CloseIcon style={{ color: "red" }} />
                <span className="stockStatus">{params.row.status}</span>
              </>
            )}
          </div>
        );
      },
    },
    {
      field: "add",
      headerName: "ADD TO CART",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="productAddToCart">
            <AddShoppingCartIcon
              style={{
                color: "#703f07",
                marginLeft: "50px",
                cursor: "pointer",
              }}
            />
          </div>
        );
      },
    },
    {
      field: "remove",
      headerName: "REMOVE",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="productAddToCart">
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
    <>
      <div className="wishListContainer">
        <div className="wishListWrapper">
          <div className="wishListTop">
            <div className="wishListTopDetails">
              <h1 className="wishListTopTitle">My Wishlist</h1>
              <h3 className="wishListTopSubtitle">Home / Wishlist</h3>
            </div>
          </div>
          <div className="wishListDown">
            <div style={{ height: 700, width: "100%" }}>
              <DataGrid
                rows={rows}
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
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "gray",
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WishListPage;
