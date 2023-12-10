import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const AxiosContext = createContext();
export const UserContext = createContext();

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || "",
});

const user = localStorage.getItem("token")
  ? jwtDecode(localStorage.getItem("token"))
  : null;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AxiosContext.Provider value={instance}>
      <UserContext.Provider value={user}>
        <App />
      </UserContext.Provider>
    </AxiosContext.Provider>
  </React.StrictMode>
);
