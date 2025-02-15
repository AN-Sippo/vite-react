import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { renderToString } from "react-dom/server";

export function render(_url) {
  const html = renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  return { html };
}
