import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routes from "./routes/Routes";
import LoginContext from "./context/LoginContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginContext>
      <Routes />
    </LoginContext>
  </StrictMode>
);
