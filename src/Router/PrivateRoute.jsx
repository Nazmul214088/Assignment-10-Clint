import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Components/AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = use(AuthContext); // Assuming 'use' is React's useContext/use

  // 1. Loading Check: Essential for preventing the redirect
  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  // 2. User Check: If loading is false, check if a user exists
  if (user) {
    return children;
  }

  // 3. Redirect: If loading is false and user is null, redirect
  return <Navigate state={location?.pathname} to={"/registration"}></Navigate>;
};
export default PrivateRoute;
