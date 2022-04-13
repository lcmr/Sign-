import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
    let location = useLocation();
    let user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.token) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }

export default RequireAuth