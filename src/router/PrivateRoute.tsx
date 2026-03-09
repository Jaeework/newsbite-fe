import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../features/hooks";

const PrivateRoute = () => {
  const { user, isInitialized } = useAppSelector((state) => state.user);
  if (!isInitialized) return null;
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
