import React from "react";
import ReactDOM from "react-dom/client";
import Render from "./components";
import "./assets/bundle.css";
import "./assets/font.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<Render />);
