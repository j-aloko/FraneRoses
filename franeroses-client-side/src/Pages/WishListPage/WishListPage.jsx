import { useEffect, useContext } from "react";
import "./WishListPage.css";
import { DataGrid } from "@mui/x-data-grid";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Footer from "./../../Components/Footer/Footer";
import { wishlistContext } from "../../Context-Api/Wishlist/Context";
import { deleteWishList } from "../../ApiCalls/Wishlist";
import moment from "moment";
import { cartContext } from "../../Context-Api/Cart/Context";
import { createCart } from "../../ApiCalls/Cart";

function WishListPage() {
  const { wishlist, dispatch } = useContext(wishlistContext);

  const { dispatch: cartDispatch } = useContext(cartContext);

  //autoScroll window to top when this component renders
  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const columns = [
    {
      field: "productName",
      headerName: "PRODUCT NAME",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      width: 240,
      renderCell: (params) => {
        return (
          <div className="productRow">
            <img src={params.row?.img[0]} alt="" className="productRowImg" />
            <span className="productRowName">{params.row?.productName}</span>
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
      field: "amount",
      headerName: "TOTAL",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      width: 160,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "createdAt",
      headerName: "DATE ADDED",
      width: 200,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      renderCell: (params) => {
        return <div>{moment(params.row?.createdAt).fromNow()}</div>;
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
          <div
            className="productAddToCart"
            onClick={async () => {
              const values = {
                productId: params.row?._id,
                productName: params.row?.productName,
                quantity: params.row?.quantity,
                size: params.row?.size,
                img: params.row?.img,
                price: params.row?.price,
                amount:
                  Math.round(
                    (params.row?.price * params.row?.quantity +
                      Number.EPSILON) *
                      100
                  ) / 100,
              };

              await createCart(cartDispatch, values);

              await deleteWishList(dispatch, params.row?._id);
            }}
          >
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
          <div
            className="productAddToCart"
            onClick={async () => {
              await deleteWishList(dispatch, params.row?._id);
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
                rows={wishlist}
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
