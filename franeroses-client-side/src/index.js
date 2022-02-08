import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PagesContextProvider } from "./Context-Api/Pages/Context";
import { AdminPagesContextProvider } from "./Context-Api/AdminPages/Context";
import { AuthContextProvider } from "./Context-Api/Authentication/Context";
import { UsersContextProvider } from "./Context-Api/Users/Context";

ReactDOM.render(
  <React.StrictMode>
    <PagesContextProvider>
      <AdminPagesContextProvider>
        <AuthContextProvider>
          <UsersContextProvider>
            <App />
          </UsersContextProvider>
        </AuthContextProvider>
      </AdminPagesContextProvider>
    </PagesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
