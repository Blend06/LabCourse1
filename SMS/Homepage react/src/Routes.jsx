import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import FrameOne from "pages/FrameOne";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "frameone",
      element: <FrameOne />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
