import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import 'font-awesome/css/font-awesome.min.css';
import "./scss/style.scss";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
