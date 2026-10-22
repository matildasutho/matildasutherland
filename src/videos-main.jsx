import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import VideosPage from "./pages/videos/VideosPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <VideosPage />
  </StrictMode>
);
