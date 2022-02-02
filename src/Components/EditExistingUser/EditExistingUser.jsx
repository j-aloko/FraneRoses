import "./EditExistingUser.css";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import GpsNotFixedIcon from "@mui/icons-material/GpsNotFixed";
import PublishIcon from "@mui/icons-material/Publish";

function EditExistingUser({ setCreateUser }) {
  return (
    <>
      <div className="editUserCreate">
        <h1 className="editUser">Edit User</h1>
        <button
          className="createNewUser"
          onClick={(e) => {
            e.preventDefault();
            setCreateUser(true);
          }}
        >
          Create
        </button>
      </div>
      <div className="editUserWrapper">
        <div className="editUserLeft">
          <div className="usersProfile">
            <img src="/assets/avatar.png" alt="" className="userProfileImg" />
            <span className="usersname">Joey tsino</span>
          </div>
          <span className="accountDetails">Account Details</span>
          <div className="accountDetailsWrapper">
            <PersonIcon />
            <span className="accountDetailsItem">JoeyTsino</span>
          </div>
          <div className="accountDetailsWrapper">
            <CalendarTodayIcon />
            <span className="accountDetailsItem">10.12.1999</span>
          </div>
          <span className="contact">Contact</span>
          <div className="accountDetailsWrapper">
            <PhoneAndroidIcon />
            <span className="accountDetailsItem">+233552383924</span>
          </div>
          <div className="accountDetailsWrapper">
            <EmailIcon />
            <span className="accountDetailsItem">aloko@gmail.com</span>
          </div>
          <div className="accountDetailsWrapper">
            <GpsNotFixedIcon />
            <span className="accountDetailsItem">Tema, Ghana</span>
          </div>
        </div>
        <div className="editUserRight">
          <h2 className="editUserRightTitle">Edit</h2>
          <form className="editUserForm">
            <div className="userName-Upload">
              <div className="formLineItem">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="inputItem"
                  placeholder="joey tsino"
                  name="username"
                />
              </div>
              <div className="uploadUserImg">
                <img
                  src="/assets/avatar.png"
                  alt=""
                  className="userImgUpdate"
                />
                <div className="uploadIcon">
                  <label htmlFor="file">
                    <PublishIcon style={{ cursor: "pointer" }} />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
              </div>
            </div>
            <div className="formLineItem">
              <label htmlFor="fullname">Full name</label>
              <input
                type="text"
                className="inputItem"
                placeholder="joey tsino"
                name="fullname"
              />
            </div>
            <div className="formLineItem">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="inputItem"
                placeholder="aloko@gmail.com"
                name="email"
              />
            </div>
            <div className="formLineItem">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="inputItem"
                placeholder="+233552383924"
                name="text"
              />
            </div>
            <div className="address-update">
              <div className="formLineItem">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="inputItem"
                  placeholder="Tema, Ghana"
                  name="address"
                />
              </div>
              <button className="updateUser">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditExistingUser;
