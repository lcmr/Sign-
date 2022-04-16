import { Navigate, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch } from 'react-redux'
import { authActions } from "../actions";

const RequireAuth = ({ children }) => {
  let dispatch = useDispatch()

    let location = useLocation();
    let user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.token) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    var decoded = jwt_decode(user.token);
    
    if (decoded.exp * 1000 < Date.now()) {
      dispatch(authActions.logout(() => {}))
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }

export default RequireAuth