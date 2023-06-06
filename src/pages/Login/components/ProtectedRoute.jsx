import { Navigate } from "react-router";
import { useAuthProvider } from "../../../hooks/useAuthProvider";

export const ProtectedRoute = () => {
  const { user, loading } = useAuthProvider();

  if (loading) return <div>loading ...</div>;
  if (!user) return <Navigate to="/login" />;

  return <div>ProtectedRoute</div>;
};
