import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DesktopTwo from "pages/DesktopTwo";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "desktoptwo",
      element: <DesktopTwo />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
