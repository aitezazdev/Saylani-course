import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeToggle } from "./Context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeToggle>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeToggle>
);
