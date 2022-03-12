import "./Users.css";
import React, { useEffect, useContext, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import { userContext } from "./../../Context-Api/Users/Context";
import { deleteUserNow } from "./../../ApiCalls/Users";
import CircularProgress from "@mui/material/CircularProgress";

function Users() {
  const { users, dispatch } = useContext(userContext);
  const [isData, setIsData] = useState(true);

  //scroll window to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (users?.length === 0 || users?.length > 0) {
        setIsData(false);
      }
    }, 1500);
  }, [users]);

  const columns = [
    {
      field: "fullname",
      headerName: "USERNAME",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="userInfo">
            <img
              src={`${params.row.avatar || "/assets/avatar.png"}`}
              alt=""
              className="userImg"
            />
            <span className="userName">{params.row.fullname}</span>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      width: 300,
    },

    {
      field: "edit",
      headerName: "EDIT",
      headerClassName: "super-app-theme--header",
      width: 250,
      headerAlign: "center",
      align: "center",
      cellClassName: "super-app-theme--cell",
      renderCell: (params) => {
        return (
          <div className="actionWrapper">
            <Link to={`/edit-user/${params.row._id}`} className="link">
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
      width: 250,
      headerAlign: "center",
      align: "center",
      cellClassName: "super-app-theme--cell",
      renderCell: (params) => {
        return (
          <div
            className="actionWrapper"
            onClick={() => {
              deleteUserNow(dispatch, params.row?._id);
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
    <div className="usersContainer">
      {isData ? (
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
            {...users}
            rows={users}
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

export default Users;
