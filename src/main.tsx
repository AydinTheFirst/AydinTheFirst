import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "@/providers";

import "@/styles/index.css";
import "@/styles/bs.css";

import { AppRoutes } from "./routers/Routes";

import "@preact/signals-react/auto";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <AppRoutes />
    </Provider>
  </React.StrictMode>,
);
