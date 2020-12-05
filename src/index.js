import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppStateProvider } from "./components/AppState";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
