import "./Users.css";
import React, { useEffect } from "react";
import { users } from "./../../Data";
import { DataGrid } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";

function Users() {
  //scroll window to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const columns = [
    {
      field: "username",
      headerName: "USERNAME",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="userInfo">
            <img
              src={`${params.row.avatar || "/assets/avatar.png"}`}
              alt=""
              className="userImg"
            />
            <span className="userName">{params.row.username}</span>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      width: 200,
    },
    {
      field: "status",
      headerName: "STATUS",
      headerClassName: "super-app-theme--header",
      width: 170,
      headerAlign: "center",
      align: "center",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "transaction",
      headerName: "TRANSACTION",
      headerClassName: "super-app-theme--header",
      width: 200,
      headerAlign: "center",
      align: "center",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "edit",
      headerName: "EDIT",
      headerClassName: "super-app-theme--header",
      width: 180,
      headerAlign: "center",
      align: "center",
      cellClassName: "super-app-theme--cell",
      renderCell: (params) => {
        return (
          <div className="actionWrapper">
            <Link to={`/edit-user/${params.row.id}`} className="links">
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
      width: 180,
      headerAlign: "center",
      align: "center",
      cellClassName: "super-app-theme--cell",
      renderCell: () => {
        return (
          <div className="actionWrapper">
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
    <div className="usersContainer">
      <div style={{ width: "100%" }}>
        <DataGrid
          autoHeight
          {...users}
          rows={users}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
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
    </div>
  );
}

export default Users;
