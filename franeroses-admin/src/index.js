import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductsContextProvider } from "./Context-Api/Products/Context";
import { OrdersContextProvider } from "./Context-Api/Order/Context";
import { UsersContextProvider } from "./Context-Api/Users/Context";
import { AuthContextProvider } from "./Context-Api/Authentication/Context";

ReactDOM.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <OrdersContextProvider>
        <UsersContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </UsersContextProvider>
      </OrdersContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
