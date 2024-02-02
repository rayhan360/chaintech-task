/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <h1>loading</h1>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/"></Navigate>;
};

export default PrivateRoute;