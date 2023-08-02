import React from "react";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import { createBrowserRouter } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import Services from "./views/Services";
import Hire from "./views/Hire";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/hire",
        element: <Hire />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },

  {
    path: "/",
    element: <GuestLayout />,
    children: [],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Router;
