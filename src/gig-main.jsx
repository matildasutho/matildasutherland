import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CowgirlManifesto from "./pages/gig/CowgirlManifesto.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CowgirlManifesto />
  </StrictMode>
);
