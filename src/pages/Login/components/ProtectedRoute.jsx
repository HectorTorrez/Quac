import { Navigate } from "react-router";
import { useAuthProvider } from "../../../hooks/useAuthProvider";
import { Loading } from "../../../components/Loading";

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuthProvider();

  if (loading) return <Loading />;
  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
};
