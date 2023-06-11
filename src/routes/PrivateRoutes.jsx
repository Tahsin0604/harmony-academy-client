import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center">
        <progress className="progress w-56  mt-10 dark:bg-white"></progress>
      </div>
    );
  } else {
    if (user) {
      return children;
    } else {
      return (
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
      );
    }
  }
};

export default PrivateRoutes;
