import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css"; // Import the global stylesheet

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
