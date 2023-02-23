import React from "react";
import About from "./Views/About";
import Home from "./Views/Home";
import Contact from "./Views/Contact";
import NotFound from "./Views/NotFound";
import GuestLayout from "./Components/GuestLayout";
import DefaultLayout from "./Components/DefaultLayout";
import { createBrowserRouter } from "react-router-dom";
import Hire from "./Views/Hire";
import Services from "./Views/Services";

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
