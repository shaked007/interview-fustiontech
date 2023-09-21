import React from "react";
import ReactDOMClient from "react-dom/client";
import { CookpalHome } from "./screens/CookpalHome";


const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<CookpalHome />);
