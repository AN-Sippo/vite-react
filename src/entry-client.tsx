import { hydrateRoot } from "react-dom/client";
import App from "./App";
import React from "react";

hydrateRoot(
  document.getElementById("root")!,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
