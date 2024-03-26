import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Books from "./Componants/Books/Books.jsx";
import Home from "./Componants/Home/Home.jsx";
import ReadPage from "./Componants/ReadPage/ReadPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/readpage",
        element: <ReadPage></ReadPage>,
      },
      {
        path: "/listedbook",
        element: <Books></Books>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);