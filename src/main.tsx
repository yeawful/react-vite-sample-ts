import "@a1rth/css-normalize";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./components/App/App.js";
import "./styles/index.scss";

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
