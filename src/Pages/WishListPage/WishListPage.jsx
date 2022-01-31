import { useEffect } from "react";
import "./WishListPage.css";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./../../Data";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Navbar from "../../Components/Navbar/Navbar";
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
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "product",
      headerName: "PRODUCT NAME",
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
    { field: "size", headerName: "SIZE", width: 100 },
    { field: "quantity", headerName: "QTY", width: 100 },
    { field: "price", headerName: "PRICE (GHS)", width: 150 },
    { field: "date", headerName: "DATE ADDED", width: 150 },
    {
      field: "status",
      headerName: "STATUS",
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
      width: 100,
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
      <Navbar />
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
                checkboxSelection
                disableSelectionOnClick
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
