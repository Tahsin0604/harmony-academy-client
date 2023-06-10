import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import InstructorsDetails from "../Pages/InstructorsDetails/InstructorsDetails";

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
      {
        path: "instructors/:id",
        element: <InstructorsDetails></InstructorsDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/instructors/${params.id}`),
      },
    ],
  },
]);
export default router;
