import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
    ],
  },
]);
export default router;
