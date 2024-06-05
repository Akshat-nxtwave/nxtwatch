import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
const AuthHandler = () => {
  const l = useLocation();
  return document?.cookie?.includes("jwtToken") ? (
    <Outlet />
  ) : (
    <Navigate to={`/login?from=${l.pathname}`} />
  );
};

export default AuthHandler;
