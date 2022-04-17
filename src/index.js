import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/userContext";
import { NotesProvider } from "./context/NotesContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NotesProvider>
        <UserProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </UserProvider>
      </NotesProvider>
    </BrowserRouter>
  </React.StrictMode>
  , document.getElementById("root"));




