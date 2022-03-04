import React, { useState } from "react";
import "./ProductsPage.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { productRows } from "../../Components/DummyData/DummyData";
import { Link } from "react-router-dom";

function ProductsPage() {
  const [products, setProducts] = useState(productRows);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "products",
      headerName: "Products",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="userRowProfile">
            <img src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 180 },
    {
      field: "status",
      headerName: "Status",
      width: 140,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 140,
      renderCell: (params) => {
        return (
          <div className="actionRow">
            <Link to={"/product/" + params.row.id}>
              <button className="edit">Edit</button>
            </Link>
            <DeleteForeverOutlinedIcon
              className="icon"
              onClick={() => handleDeleteProduct(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="productsPage">
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={8}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}

export default ProductsPage;
