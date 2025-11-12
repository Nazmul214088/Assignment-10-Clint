import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Components/AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = use(AuthContext);
  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to={"/registration"}></Navigate>;
};

export default PrivateRoute;
