import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Correct relative path
import App from "./components/sections/App.jsx"; // Correct relative path

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
