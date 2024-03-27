import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Books from "./Componants/Books/Books.jsx";
import Home from "./Componants/Home/Home.jsx";
import ReadPage from "./Componants/ReadPage/ReadPage.jsx";
import BookDetails from "./Componants/BookDetails/BookDetails.jsx";
import BookList from "./Componants/BookList/BookList.jsx";
import ErrorPage from "./Componants/ErrorPage/ErrorPage.jsx";

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
        path: "/readpage",
        element: <ReadPage></ReadPage>,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
