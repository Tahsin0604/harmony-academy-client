import React from "react";
import useRole from "../hooks/useRole";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, roleLoading] = useRole();
  if (loading || roleLoading) {
    return (
      <div className="flex justify-center">
        <progress className="progress w-56  mt-10 dark:bg-white"></progress>
      </div>
    );
  } else {
    if (user && role === "admin") {
      return children;
    } else
      return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
};

export default AdminRoutes;
