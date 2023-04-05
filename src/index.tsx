import React from "react";
import ReactDOM from "react-dom/client";
import { PlayersList } from "./components/playersList/PlayersList";
import { Welcome } from "./components/welcome/Welcome";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Welcome name="Pep Guardiola" />
    <PlayersList />
  </React.StrictMode>
);
