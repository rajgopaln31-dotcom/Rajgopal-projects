import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App";
import "./index.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ff6500" },
    background: { default: "#050505", paper: "#111111" },
    text: { primary: "#ffffff", secondary: "#d0d0d0" },
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
    button: { textTransform: "none", fontWeight: 700 },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
