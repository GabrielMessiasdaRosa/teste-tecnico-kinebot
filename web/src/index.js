import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HeroesProvider } from "./contexts/heroes-context";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeroesProvider>
      <App />
    </HeroesProvider>
  </React.StrictMode>
);
