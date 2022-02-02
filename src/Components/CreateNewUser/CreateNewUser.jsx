import "./CreateNewUser.css";

import React from "react";

function CreateNewUser() {
  return (
    <>
      <form action="" className="createUserForm">
        <h1 className="ceateNewUserTitle">New User</h1>
        <div className="formInputs">
          <input
            type="text"
            className="formInputItems"
            placeholder="Username"
          />
          <input
            type="text"
            className="formInputItems"
            placeholder="Full Name"
          />
        </div>
        <div className="formInputs">
          <input type="email" className="formInputItems" placeholder="Email" />
          <input
            type="password"
            className="formInputItems"
            placeholder="Full Name"
          />
        </div>
        <div className="formInputs">
          <input type="text" className="formInputItems" placeholder="Phone" />
          <input type="text" className="formInputItems" placeholder="Address" />
        </div>
        <div className="formInputs">
          <select className="selectActiveStatus">
            <option value="active" className="selectStatusItem">
              Yes
            </option>
            <option value="passive" className="selectStatusItem">
              No
            </option>
          </select>
        </div>
        <button className="createNewUserButton">Create</button>
      </form>
    </>
  );
}

export default CreateNewUser;
