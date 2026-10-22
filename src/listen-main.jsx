import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ListenPage from "./pages/listen/ListenPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListenPage />
  </StrictMode>,
);
