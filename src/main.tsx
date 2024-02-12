import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/routes/App.tsx";
import "@/styles/index.css";
import "leaflet/dist/leaflet.css";
import { Toaster } from "./components/ui/toaster";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
);
