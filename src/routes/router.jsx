import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import InstructorsDetails from "../Pages/InstructorsDetails/InstructorsDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateClass from "../Pages/Dashboard/CreateClass/CreateClass";

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
        path: "courses",
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
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "create-class",
        element: <CreateClass></CreateClass>,
      },
    ],
  },
]);
export default router;
