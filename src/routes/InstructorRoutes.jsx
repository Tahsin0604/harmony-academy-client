import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import { Navigate } from "react-router-dom";

const InstructorRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, roleLoading] = useRole();
  console.log(role);
  if (loading || roleLoading) {
    return (
      <div className="flex justify-center">
        <progress className="progress w-56  mt-10 dark:bg-white"></progress>
      </div>
    );
  } else {
    if (user && role === "instructor") {
      return children;
    } else
      return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
};

export default InstructorRoutes;
