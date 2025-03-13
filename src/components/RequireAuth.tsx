
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface RequireAuthProps {
  children: React.ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && !user) {
      // Redirect to login if not authenticated
      navigate("/login", { state: { from: location.pathname } });
    }
  }, [user, loading, navigate, location]);

  if (loading) {
    // You might want to show a loading spinner here
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return user ? <>{children}</> : null;
};

export default RequireAuth;
