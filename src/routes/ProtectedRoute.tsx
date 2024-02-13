import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../utils/contexts/auth";
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children?: ReactNode }) => {
  const { token, user } = useAuth();
  const { pathname } = useLocation();

  const authProtected = ["/login", "/register"];
  const protectedByToken = [
    "/dashboard",
    "/transaction-list",
    "/tour-list",
    "/city-list",
    "/verification-account",
    "/add-voucher",
    "/add-city",
    "/edit-city",
    "/admin-tour",
    "/payment",
    "/payresult",
    "/profile",
    "/booking-list",
    "/transaction-history",
    "/mytour",
    "/edit-tour",
    "/addpackage",
  ];
  const adminProtected = [
    "/dashboard",
    "/transaction-list",
    "/add-city",
    "/add-voucher",
    "/city-list",
    "/admin-tour",
    "/edit-city",
    "/tour-list",
    "/verification-account",
  ];
  const customerProtected = ["/etiket", "/profile", "/payment", "/payresult", "/bookinglist"];
  const pengelolaProtected = [
    "/transaction-history",
    "/mytour",
    "/addtour",
    "/edittour",
    "/addpackage",
  ];
  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to={"/"} />;
  }
  if (protectedByToken.includes(pathname)) {
    if (!token) return <Navigate to="/login" />;

    if (adminProtected.includes(pathname)) {
      if (user.role === "customer") return <Navigate to="/" />;
      if (user.role === "pengelola") return <Navigate to="/transaction-history" />;
    }
    if (customerProtected.includes(pathname)) {
      if (user.role === "admin") return <Navigate to="/dashbord" />;
      if (user.role === "pengelola") return <Navigate to="/transaction-history" />;
    }
    if (pengelolaProtected.includes(pathname)) {
      if (user.role === "admin") return <Navigate to="/dashbord" />;
      if (user.role === "customer") return <Navigate to="/" />;
    }
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
