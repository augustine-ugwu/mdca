import React from "react";
import About from "./views/About";
import Home from "./views/Home";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import { createBrowserRouter } from "react-router-dom";
import Staff from "./views/Staff";
import Projects from "./views/Projects";

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
        path: "/staff",
        element: <Staff />,
      },
      {
        path: "/projects",
        element: <Projects />,
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
