import { Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthProvider";

const ProtectedRoute = ({ element: Component }) => {
  const [auth] = useAuth();

  return auth?.user ? Component : <Navigate to="/signup" />;
};

export default ProtectedRoute;
