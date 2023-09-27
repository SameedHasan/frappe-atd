import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FrappeProvider } from "frappe-react-sdk";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./utils/context/UserProvider.jsx";
import { RoutesProvider } from "./utils/context/RoutesProvider.jsx";

// Access the VITE_SOCKET_PORT value here
console.log(import.meta.env.VITE_SOCKET_PORT);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FrappeProvider socketPort={9000}>
      <BrowserRouter>
        <UserProvider>
          <RoutesProvider>
            <App />
          </RoutesProvider>
        </UserProvider>
      </BrowserRouter>
    </FrappeProvider>
  </React.StrictMode>
);
