import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import InstructorsDetails from "../Pages/InstructorsDetails/InstructorsDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateClass from "../Pages/Dashboard/CreateClass/CreateClass";
import Dashboard from "../layouts/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import InstructorRoutes from "./InstructorRoutes";
import SelectedClasses from "../Pages/Dashboard/SelectedClasses/SelectedClasses";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses/EnrolledClasses";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import EditClass from "../Pages/Dashboard/EditClass/EditClass";
import AdminRoutes from "./AdminRoutes";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Profile from "../Pages/Dashboard/Profile/Profile";
import ErrorHandlingPage from "../Pages/Error/ErrorHandlingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorHandlingPage></ErrorHandlingPage>,
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
          fetch(
            `https://harmony-academy-server.vercel.app/instructors/${params.id}`
          ),
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
        path: "create-new-class",
        element: <CreateClass></CreateClass>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "",
        element: <Profile></Profile>,
      },
      {
        path: "selected-classes",
        element: <SelectedClasses></SelectedClasses>,
      },
      {
        path: "enrolled-classes",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
      },
      {
        path: "create-new-class",
        element: (
          <InstructorRoutes>
            <CreateClass></CreateClass>
          </InstructorRoutes>
        ),
      },
      {
        path: "my-classes",
        element: (
          <InstructorRoutes>
            <MyClasses></MyClasses>
          </InstructorRoutes>
        ),
      },
      {
        path: "editClass/:id",
        element: (
          <InstructorRoutes>
            <EditClass></EditClass>
          </InstructorRoutes>
        ),
      },
      {
        path: "manage-classes",
        element: (
          <AdminRoutes>
            <ManageClasses></ManageClasses>
          </AdminRoutes>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoutes>
            <ManageUsers></ManageUsers>
          </AdminRoutes>
        ),
      },
    ],
  },
]);
export default router;
