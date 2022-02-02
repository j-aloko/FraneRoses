import "./Users.css";
import React, { useState } from "react";
import { users } from "./../../Data";
import { DataGrid } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link, useLocation } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CreateNewUser from "./../CreateNewUser/CreateNewUser";
import EditExistingUser from "../EditExistingUser/EditExistingUser";

function Users() {
  const [editUser, setEditUser] = useState(false);

  const [createUser, setCreateUser] = useState(false);

  const location = useLocation();
  console.log(location);

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
      field: "action",
      headerName: "ACTION",
      headerClassName: "super-app-theme--header",
      width: 300,
      headerAlign: "center",
      align: "center",
      cellClassName: "super-app-theme--cell",
      renderCell: (params) => {
        return (
          <div className="actionWrapper">
            <Link to={`/admin/${params.row.id}`} className="links">
              <span className="Actionedit" onClick={() => setEditUser(true)}>
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
    <div className="usersContainer">
      {!editUser ? (
        <div style={{ height: 700, width: "100%" }}>
          <DataGrid
            rows={users}
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
          {!createUser ? (
            <div className="editUserContainer">
              <div className="arrowBack" onClick={() => setEditUser(false)}>
                <ArrowRightAltIcon
                  style={{
                    fontSize: 40,
                    color: "black",
                    transform: "rotateY(180deg)",
                  }}
                />
              </div>
              <EditExistingUser setCreateUser={setCreateUser} />
            </div>
          ) : (
            <div className="CreateUserContainer">
              <div className="arrowBack" onClick={() => setCreateUser(false)}>
                <ArrowRightAltIcon
                  style={{
                    fontSize: 40,
                    color: "black",
                    transform: "rotateY(180deg)",
                  }}
                />
              </div>
              <CreateNewUser />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Users;
