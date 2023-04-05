import React from "react";
import ReactDOM from "react-dom/client";
import { PlayersManagement } from "./components/playersManagement/PlayersManagement";
import { Welcome } from "./components/welcome/Welcome";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Welcome name="Pep Guardiola" />
    <PlayersManagement />
  </React.StrictMode>
);
