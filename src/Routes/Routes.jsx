import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayouts from "../Layouts/MainLayouts";
import Installation from "../Pages/Installation";
import ErrorPages from "../Pages/ErrorPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPages />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
    ],
  },

  //     {
  //     path: "/*",
  //     element: <ErrorPages />,
  //   },
]);

export default router;
