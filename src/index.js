import React from "react";
import { AppProvider } from "./context";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./scss/style.scss";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
