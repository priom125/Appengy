import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayouts from "../Layouts/MainLayouts";
import Installation from "../Pages/Installation";
import ErrorPages from "../Pages/ErrorPages";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPages />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('./appData.json'),
      },
      {
        path: "/apps",
        element: <Apps />,
        loader: () => fetch('/appData.json'),
      },
      {
        path: "/apps/:id",
        element: <AppDetails />,
        loader: () => fetch('/appData.json'),
        
      },
      {
        path: "/installation",
        element: <Installation />,
        // loader: () => fetch('/appData.json')
      },
    ],
  },

  //     {
  //     path: "/*",
  //     element: <ErrorPages />,
  //   },
]);

export default router;
