import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./componentes/Root";
import Home from "./componentes/Home";
import Login from "./componentes/Login";
import Register from "./componentes/Register";
import AuthProvider from "./provider/AuthProvider";
import Order from "./componentes/Order";
import PrivetRoutes from "./routes/PrivetRoutes";
import Profile from "./componentes/Profile";
import Dashboard from "./componentes/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/orders",
        element: (
          <PrivetRoutes>
            <Order></Order>
          </PrivetRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoutes>
            <Profile></Profile>
          </PrivetRoutes>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivetRoutes>
            <Dashboard></Dashboard>
          </PrivetRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
