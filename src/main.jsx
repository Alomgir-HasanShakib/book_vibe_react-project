import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Componants/Home/Home.jsx";
import BookDetails from "./Componants/BookDetails/BookDetails.jsx";
import BookList from "./Componants/BookList/BookList.jsx";
import ErrorPage from "./Componants/ErrorPage/ErrorPage.jsx";
import ReadPage from "./Componants/ReadPage/ReadPage.jsx";

import Contact from "./Componants/Contact/Contact.jsx";
import About from "./Componants/About/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/listedbook",
        element: <BookList></BookList>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/readpage",
        element: <ReadPage></ReadPage>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/about",
        element:<About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
