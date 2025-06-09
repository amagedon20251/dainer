import React from "react";
import ReactDOM from "react-dom/client";
import { WagmiConfig } from "wagmi";
import App from "./App.jsx";
import "./index.css";
import { wagmiConfig } from "./config/web3.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <WagmiConfig config={wagmiConfig}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </WagmiConfig>
);