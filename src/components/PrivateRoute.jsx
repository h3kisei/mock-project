import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, roles }) {
  const userStringify = localStorage.getItem("user");
  const user = userStringify ? JSON.parse(userStringify) : null;
  const isAuthenticated = !!user;
  const role = isAuthenticated ? user?.user?.role : null;

  if (isAuthenticated && !roles.includes(role)) {
    return <Navigate to="/404" replace={true} />;
  }

  if (isAuthenticated && roles.includes(role)) {
    return children;
  }

  return <Navigate to="/login" replace={true} />;
}
