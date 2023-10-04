import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import axios from "axios";

export const AxiosContext = createContext();

const instance = axios.create({
  // TODO: CHANGE FOR REAL API
  baseURL: "https://pokeapi.co/api/v2",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AxiosContext.Provider value={instance}>
      <App />
    </AxiosContext.Provider>
  </React.StrictMode>
);
